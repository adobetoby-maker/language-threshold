import type {
  FluxTurnResult,
  SpeakingProviderCapabilities,
  SpeakingTokenGrant,
  StreamingSttUploadAdapter,
} from './contracts'

type ConnectionState = 'idle' | 'connecting' | 'open' | 'closed'
type TurnWaiter = { resolve: (turn: FluxTurnResult) => void; reject: (error: Error) => void }

interface FluxTurnInfo {
  type: 'TurnInfo'
  request_id: string
  event: 'Update' | 'StartOfTurn' | 'EagerEndOfTurn' | 'TurnResumed' | 'EndOfTurn'
  transcript: string
  audio_window_start: number
  audio_window_end: number
  end_of_turn_confidence: number
}

export function parseFluxEndOfTurn(value: unknown): FluxTurnResult | null {
  if (!value || typeof value !== 'object') return null
  const message = value as Partial<FluxTurnInfo>
  if (message.type !== 'TurnInfo' || message.event !== 'EndOfTurn' || typeof message.transcript !== 'string' || !message.transcript.trim()) return null
  if (typeof message.request_id !== 'string' || typeof message.audio_window_start !== 'number' || typeof message.audio_window_end !== 'number' || typeof message.end_of_turn_confidence !== 'number') return null
  return {
    transcript: message.transcript.trim(),
    confidence: message.end_of_turn_confidence,
    audioWindowStart: message.audio_window_start,
    audioWindowEnd: message.audio_window_end,
    providerRequestId: message.request_id,
  }
}

export class DeepgramSttUploadAdapter implements StreamingSttUploadAdapter {
  readonly capabilities: SpeakingProviderCapabilities
  readonly grant: SpeakingTokenGrant<'deepgram'>
  private socket: WebSocket | null = null
  private state: ConnectionState = 'idle'
  private finalTurn: FluxTurnResult | null = null
  private terminalError: Error | null = null
  private finalWaiters = new Set<TurnWaiter>()

  constructor(capabilities: SpeakingProviderCapabilities, grant: SpeakingTokenGrant<'deepgram'>) {
    this.capabilities = capabilities
    this.grant = grant
  }

  private fail(error: Error) {
    this.terminalError = error
    this.finalWaiters.forEach(waiter => waiter.reject(error))
    this.finalWaiters.clear()
  }

  connect(signal: AbortSignal): Promise<void> {
    if (this.state !== 'idle') return Promise.reject(new Error('The speech connection has already been used.'))
    this.state = 'connecting'

    return new Promise((resolve, reject) => {
      const sttUrl = this.grant.endpoints.stt
      if (!sttUrl) {
        this.state = 'closed'
        reject(new Error('The provider grant does not include an STT endpoint.'))
        return
      }
      const socket = new WebSocket(sttUrl, ['bearer', this.grant.accessToken])
      this.socket = socket
      const connectTimeout = window.setTimeout(() => {
        const error = new Error('The speech provider connection timed out.')
        this.state = 'closed'
        this.fail(error)
        socket.close(1000, 'connect-timeout')
        reject(error)
      }, 10_000)
      const abort = () => {
        clearTimeout(connectTimeout)
        socket.close(1000, 'cancelled')
        this.state = 'closed'
        reject(new DOMException('The speech connection was cancelled.', 'AbortError'))
      }
      signal.addEventListener('abort', abort, { once: true })
      socket.addEventListener('open', () => {
        clearTimeout(connectTimeout)
        if (signal.aborted) return abort()
        this.state = 'open'
        resolve()
      }, { once: true })
      socket.addEventListener('message', event => {
        if (typeof event.data !== 'string') return
        try {
          const message = JSON.parse(event.data) as { type?: string; description?: string }
          const parsed = parseFluxEndOfTurn(message)
          if (parsed) {
            this.finalTurn = parsed
            this.finalWaiters.forEach(waiter => waiter.resolve(parsed))
            this.finalWaiters.clear()
          } else if (message.type === 'FatalError' || message.type === 'Error') {
            this.fail(new Error(message.description || 'The speech provider returned an error.'))
            socket.close(1011, 'provider-error')
          }
        } catch { /* provider sent an unknown non-JSON message */ }
      })
      socket.addEventListener('error', () => {
        clearTimeout(connectTimeout)
        signal.removeEventListener('abort', abort)
        this.state = 'closed'
        const error = new Error('The streaming speech connection failed.')
        this.fail(error)
        reject(error)
      }, { once: true })
      socket.addEventListener('close', () => {
        clearTimeout(connectTimeout)
        signal.removeEventListener('abort', abort)
        if (!this.finalTurn && !this.terminalError && !signal.aborted) {
          this.fail(new Error('The speech connection closed before the turn was finalized.'))
        }
        this.state = 'closed'
      }, { once: true })
    })
  }

  sendAudio(chunk: ArrayBuffer) {
    if (this.state !== 'open' || !this.socket) throw new Error('The speech connection is not open.')
    this.socket.send(chunk)
  }

  waitForEndOfTurn(signal: AbortSignal, timeoutMs = 8_000) {
    if (this.finalTurn) return Promise.resolve(this.finalTurn)
    if (this.terminalError) return Promise.reject(this.terminalError)
    if (this.state !== 'open') return Promise.reject(new Error('The speech connection is not open.'))
    return new Promise<FluxTurnResult>((resolve, reject) => {
      let timeout = 0
      const cleanup = () => {
        clearTimeout(timeout)
        this.finalWaiters.delete(waiter)
        signal.removeEventListener('abort', abort)
      }
      const waiter: TurnWaiter = {
        resolve: turn => { cleanup(); resolve(turn) },
        reject: error => { cleanup(); reject(error) },
      }
      const abort = () => {
        cleanup()
        reject(new DOMException('Waiting for the transcript was cancelled.', 'AbortError'))
      }
      this.finalWaiters.add(waiter)
      signal.addEventListener('abort', abort, { once: true })
      timeout = window.setTimeout(() => {
        cleanup()
        reject(new Error('The speech provider did not finalize the turn in time.'))
      }, timeoutMs)
    })
  }

  async cancel() {
    if (!this.socket || this.state === 'closed') return
    if (this.state === 'open') this.socket.send(JSON.stringify({ type: 'CloseStream' }))
    this.socket.close(1000, 'cancelled')
    this.state = 'closed'
    this.finalWaiters.clear()
  }
}

export class DeepgramTtsAdapter {
  private socket: WebSocket | null = null

  async speak(grant: SpeakingTokenGrant<'deepgram'>, text: string, onAudio: (chunk: ArrayBuffer) => void, signal: AbortSignal) {
    const ttsUrl = grant.endpoints.tts
    if (!ttsUrl) throw new Error('The provider grant does not include a TTS endpoint.')
    if (this.socket) throw new Error('Text-to-speech is already active.')

    await new Promise<void>((resolve, reject) => {
      const socket = new WebSocket(ttsUrl, ['bearer', grant.accessToken])
      socket.binaryType = 'arraybuffer'
      this.socket = socket
      let flushed = false
      let settled = false
      const finishReject = (error: Error) => {
        if (settled) return
        settled = true
        reject(error)
      }
      const abort = () => {
        if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify({ type: 'Clear' }))
        socket.close(1000, 'cancelled')
        finishReject(new DOMException('Text-to-speech was cancelled.', 'AbortError'))
      }
      signal.addEventListener('abort', abort, { once: true })
      socket.addEventListener('open', () => {
        socket.send(JSON.stringify({ type: 'Speak', text }))
        socket.send(JSON.stringify({ type: 'Flush' }))
      }, { once: true })
      socket.addEventListener('message', event => {
        if (event.data instanceof ArrayBuffer) {
          onAudio(event.data)
          return
        }
        if (typeof event.data !== 'string') return
        try {
          const message = JSON.parse(event.data) as { type?: string; description?: string }
          if (message.type === 'Flushed') {
            flushed = true
            socket.send(JSON.stringify({ type: 'Close' }))
          } else if (message.type === 'Warning') {
            socket.close(1011, 'provider-warning')
            finishReject(new Error(message.description || 'The text-to-speech provider returned a warning.'))
          }
        } catch { /* ignore unknown provider metadata */ }
      })
      socket.addEventListener('error', () => finishReject(new Error('The text-to-speech connection failed.')), { once: true })
      socket.addEventListener('close', () => {
        signal.removeEventListener('abort', abort)
        this.socket = null
        if (flushed && !settled) {
          settled = true
          resolve()
        } else if (!signal.aborted) {
          finishReject(new Error('The text-to-speech connection closed before audio completed.'))
        }
      }, { once: true })
    })
  }

  cancel() {
    if (!this.socket) return
    if (this.socket.readyState === WebSocket.OPEN) this.socket.send(JSON.stringify({ type: 'Clear' }))
    this.socket.close(1000, 'cancelled')
    this.socket = null
  }
}
