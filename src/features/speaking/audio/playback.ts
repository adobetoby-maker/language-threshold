import { linear16ToFloat32 } from './pcm'

export class Linear16StreamPlayer {
  private context: AudioContext | null = null
  private sources = new Set<AudioBufferSourceNode>()
  private nextStartTime = 0

  async arm(sampleRate = 24_000) {
    if (!this.context) this.context = new AudioContext({ sampleRate })
    await this.context.resume()
    this.nextStartTime = Math.max(this.nextStartTime, this.context.currentTime)
  }

  async append(chunk: ArrayBuffer, sampleRate = 24_000) {
    if (!this.context) await this.arm(sampleRate)
    const context = this.context
    if (!context) throw new Error('Audio playback was cancelled before it started.')
    const samples = linear16ToFloat32(chunk)
    const buffer = context.createBuffer(1, samples.length, sampleRate)
    buffer.copyToChannel(samples, 0)
    const source = context.createBufferSource()
    source.buffer = buffer
    source.connect(context.destination)
    source.onended = () => this.sources.delete(source)
    const startAt = Math.max(context.currentTime, this.nextStartTime)
    source.start(startAt)
    this.nextStartTime = startAt + buffer.duration
    this.sources.add(source)
  }

  async waitUntilFinished(signal: AbortSignal, timeoutMs = 30_000) {
    const deadline = performance.now() + timeoutMs
    while (this.context && this.nextStartTime > this.context.currentTime) {
      if (signal.aborted) throw new DOMException('Audio playback was cancelled.', 'AbortError')
      if (performance.now() >= deadline) throw new Error('Audio playback did not finish within 30 seconds.')
      await new Promise(resolve => setTimeout(resolve, 25))
    }
  }

  async cancel() {
    this.sources.forEach(source => { try { source.stop() } catch { /* already stopped */ } })
    this.sources.clear()
    await this.context?.close().catch(() => undefined)
    this.context = null
    this.nextStartTime = 0
  }
}
