import type { SpeakingProviderCapabilities, SpeakingTokenGrant, StreamingSttUploadAdapter } from './contracts'

type ConnectionState = 'idle' | 'connecting' | 'open' | 'closed'

export class DeepgramSttUploadAdapter implements StreamingSttUploadAdapter {
  readonly capabilities: SpeakingProviderCapabilities
  readonly grant: SpeakingTokenGrant<'deepgram'>
  private socket: WebSocket | null = null
  private state: ConnectionState = 'idle'

  constructor(capabilities: SpeakingProviderCapabilities, grant: SpeakingTokenGrant<'deepgram'>) {
    this.capabilities = capabilities
    this.grant = grant
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
      const abort = () => {
        socket.close(1000, 'cancelled')
        this.state = 'closed'
        reject(new DOMException('The speech connection was cancelled.', 'AbortError'))
      }
      signal.addEventListener('abort', abort, { once: true })
      socket.addEventListener('open', () => {
        if (signal.aborted) return abort()
        this.state = 'open'
        resolve()
      }, { once: true })
      socket.addEventListener('error', () => {
        signal.removeEventListener('abort', abort)
        this.state = 'closed'
        reject(new Error('The streaming speech connection failed.'))
      }, { once: true })
      socket.addEventListener('close', () => {
        signal.removeEventListener('abort', abort)
        this.state = 'closed'
      }, { once: true })
    })
  }

  sendAudio(chunk: ArrayBuffer) {
    if (this.state !== 'open' || !this.socket) throw new Error('The speech connection is not open.')
    this.socket.send(chunk)
  }

  endLearnerTurn() {
    if (this.state !== 'open' || !this.socket) return
    this.socket.send(JSON.stringify({ type: 'CloseStream' }))
  }

  async cancel() {
    if (!this.socket || this.state === 'closed') return
    this.socket.close(1000, 'cancelled')
    this.state = 'closed'
  }
}
