import { downsampleToLinear16 } from './pcm'

export class PcmMicrophoneCapture {
  private context: AudioContext | null = null
  private stream: MediaStream | null = null
  private source: MediaStreamAudioSourceNode | null = null
  private processor: ScriptProcessorNode | null = null
  private startedAt = 0
  private unexpectedEndHandler: ((error: Error) => void) | null = null
  private trackEndHandlers: Array<{ track: MediaStreamTrack; handler: () => void }> = []

  onUnexpectedEnd(handler: (error: Error) => void) {
    this.unexpectedEndHandler = handler
    return () => {
      if (this.unexpectedEndHandler === handler) this.unexpectedEndHandler = null
    }
  }

  async arm() {
    if (typeof AudioContext === 'undefined') throw new Error('Live PCM capture is unavailable in this browser.')
    const context = this.context ?? new AudioContext()
    this.context = context
    await context.resume()
  }

  async prepare(signal: AbortSignal) {
    if (this.stream) throw new Error('Microphone capture is already active.')
    if (!navigator.mediaDevices?.getUserMedia || typeof AudioContext === 'undefined') throw new Error('Live PCM capture is unavailable in this browser.')
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } })
    if (signal.aborted) {
      stream.getTracks().forEach(track => track.stop())
      throw new DOMException('Microphone capture was cancelled.', 'AbortError')
    }
    try {
      await this.arm()
      this.stream = stream
      this.trackEndHandlers = stream.getTracks().map(track => {
        const handler = () => this.unexpectedEndHandler?.(new Error('Microphone capture ended unexpectedly.'))
        track.addEventListener('ended', handler, { once: true })
        return { track, handler }
      })
      signal.addEventListener('abort', () => { void this.stop() }, { once: true })
    } catch (error) {
      stream.getTracks().forEach(track => track.stop())
      throw error
    }
  }

  async start(onChunk: (chunk: ArrayBuffer) => void, signal: AbortSignal) {
    if (!this.context || !this.stream) await this.prepare(signal)
    const context = this.context!
    const stream = this.stream!
    try {
      const source = context.createMediaStreamSource(stream)
      const processor = context.createScriptProcessor(4096, 1, 1)
      processor.onaudioprocess = event => {
        if (signal.aborted) return
        const pcm = downsampleToLinear16(event.inputBuffer.getChannelData(0), context.sampleRate)
        onChunk(pcm.buffer)
      }
      source.connect(processor)
      processor.connect(context.destination)
      this.source = source
      this.processor = processor
      this.startedAt = performance.now()
    } catch (error) {
      await this.stop()
      throw error
    }
  }

  async stop() {
    const durationSeconds = await this.finishTurn()
    await this.context?.close().catch(() => undefined)
    this.context = null
    return durationSeconds
  }

  async finishTurn() {
    const durationSeconds = this.startedAt ? Math.max(0.01, (performance.now() - this.startedAt) / 1000) : 0
    this.processor?.disconnect()
    if (this.processor) this.processor.onaudioprocess = null
    this.source?.disconnect()
    this.trackEndHandlers.forEach(({ track, handler }) => track.removeEventListener('ended', handler))
    this.trackEndHandlers = []
    this.stream?.getTracks().forEach(track => track.stop())
    this.stream = null
    this.source = null
    this.processor = null
    this.startedAt = 0
    return durationSeconds
  }
}
