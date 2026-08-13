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

export function combineFluxTurns(turns: FluxTurnResult[]): FluxTurnResult | null {
  if (!turns.length) return null
  const ordered = [...turns].sort((left, right) => left.audioWindowStart - right.audioWindowStart)
  return {
    transcript: ordered.map(turn => turn.transcript).join(' ').trim(),
    confidence: Math.min(...ordered.map(turn => turn.confidence)),
    audioWindowStart: ordered[0].audioWindowStart,
    audioWindowEnd: Math.max(...ordered.map(turn => turn.audioWindowEnd)),
    providerRequestId: ordered.at(-1)!.providerRequestId,
  }
}

export class DeepgramSttUploadAdapter implements StreamingSttUploadAdapter {
  readonly capabilities: SpeakingProviderCapabilities
  readonly grant: SpeakingTokenGrant<'deepgram'>
  private socket: WebSocket | null = null
  private state: ConnectionState = 'idle'
  private finalTurns: FluxTurnResult[] = []
  private finalizing = false
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

  private completeFinalTurn() {
    const combined = combineFluxTurns(this.finalTurns)
    if (!combined) {
      this.fail(new Error('The speech provider closed without a finalized transcript.'))
      return
    }
    this.finalWaiters.forEach(waiter => waiter.resolve(combined))
    this.finalWaiters.clear()
  }

  connect(signal: AbortSignal): Promise<void> {
    if (this.state !== 'idle') return Promise.reject(new Error('The speech connection has already been used.'))
    if (signal.aborted) return Promise.reject(new DOMException('The speech connection was cancelled.', 'AbortError'))
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
            const duplicate = this.finalTurns.some(turn => turn.providerRequestId === parsed.providerRequestId
              && turn.audioWindowStart === parsed.audioWindowStart
              && turn.audioWindowEnd === parsed.audioWindowEnd
              && turn.transcript === parsed.transcript)
            if (!duplicate) this.finalTurns.push(parsed)
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
        if (!this.terminalError && !signal.aborted) {
          if (this.finalizing) this.completeFinalTurn()
          else this.fail(new Error('The speech connection closed before the learner ended the turn.'))
        }
        this.state = 'closed'
      }, { once: true })
    })
  }

  sendAudio(chunk: ArrayBuffer) {
    if (this.state !== 'open' || !this.socket) throw new Error('The speech connection is not open.')
    this.socket.send(chunk)
  }

  finishLearnerTurn(signal: AbortSignal, timeoutMs = 8_000) {
    if (this.terminalError) return Promise.reject(this.terminalError)
    if (this.state !== 'open') return Promise.reject(new Error('The speech connection is not open.'))
    if (this.finalizing) return Promise.reject(new Error('The learner turn is already being finalized.'))
    this.finalizing = true
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
      if (signal.aborted) return abort()
      signal.addEventListener('abort', abort, { once: true })
      timeout = window.setTimeout(() => {
        cleanup()
        reject(new Error('The speech provider did not finalize the turn in time.'))
      }, timeoutMs)
      this.socket?.send(JSON.stringify({ type: 'CloseStream' }))
    })
  }

  async cancel() {
    if (!this.socket || this.state === 'closed') return
    if (this.state === 'open') this.socket.send(JSON.stringify({ type: 'CloseStream' }))
    this.socket.close(1000, 'cancelled')
    this.state = 'closed'
    this.fail(new DOMException('The speech connection was cancelled.', 'AbortError'))
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
      let receivedAudio = false
      let settled = false
      const timeout = window.setTimeout(() => {
        if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify({ type: 'Clear' }))
        finishReject(new Error('Text-to-speech did not complete within 30 seconds.'))
        socket.close(1000, 'tts-timeout')
      }, 30_000)
      const cleanup = () => {
        clearTimeout(timeout)
        signal.removeEventListener('abort', abort)
        if (this.socket === socket) this.socket = null
      }
      const finishReject = (error: Error) => {
        if (settled) return
        settled = true
        cleanup()
        reject(error)
      }
      const abort = () => {
        if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify({ type: 'Clear' }))
        socket.close(1000, 'cancelled')
        finishReject(new DOMException('Text-to-speech was cancelled.', 'AbortError'))
      }
      signal.addEventListener('abort', abort, { once: true })
      if (signal.aborted) return abort()
      socket.addEventListener('open', () => {
        if (settled) return socket.close(1000, 'cancelled')
        socket.send(JSON.stringify({ type: 'Speak', text }))
        socket.send(JSON.stringify({ type: 'Flush' }))
      }, { once: true })
      socket.addEventListener('message', event => {
        if (event.data instanceof ArrayBuffer) {
          if (event.data.byteLength > 0) receivedAudio = true
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
            finishReject(new Error(message.description || 'The text-to-speech provider returned a warning.'))
            socket.close(1011, 'provider-warning')
          }
        } catch { /* ignore unknown provider metadata */ }
      })
      socket.addEventListener('error', () => {
        finishReject(new Error('The text-to-speech connection failed.'))
        socket.close(1011, 'provider-error')
      }, { once: true })
      socket.addEventListener('close', () => {
        cleanup()
        if (flushed && receivedAudio && !settled) {
          settled = true
          resolve()
        } else if (flushed && !receivedAudio && !settled) {
          finishReject(new Error('Text-to-speech completed without returning audio.'))
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
