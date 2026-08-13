import { afterEach, describe, expect, it, vi } from 'vitest'
import type { SpeakingProviderCapabilities, SpeakingTokenGrant } from './contracts'
import { combineFluxTurns, DeepgramSttUploadAdapter, DeepgramTtsAdapter, parseFluxEndOfTurn } from './deepgram'

const capabilities = { enabled: true } as SpeakingProviderCapabilities
const grant = {
  provider: 'deepgram', accessToken: 'temporary-token', expiresIn: 30,
  endpoints: { stt: 'wss://example.test/v2/listen' },
} satisfies SpeakingTokenGrant<'deepgram'>

class MockWebSocket extends EventTarget {
  static latest: MockWebSocket | null = null
  static readonly OPEN = 1
  readyState = MockWebSocket.OPEN
  sent: unknown[] = []
  readonly url: string
  readonly protocols: string[]

  constructor(url: string, protocols: string[]) {
    super()
    this.url = url
    this.protocols = protocols
    MockWebSocket.latest = this
    queueMicrotask(() => this.dispatchEvent(new Event('open')))
  }

  send(value: unknown) { this.sent.push(value) }
  close() { this.dispatchEvent(new Event('close')) }
}

afterEach(() => vi.unstubAllGlobals())

describe('Deepgram Flux messages', () => {
  it('accepts a complete EndOfTurn transcript', () => {
    expect(parseFluxEndOfTurn({
      type: 'TurnInfo', event: 'EndOfTurn', request_id: 'request-1', transcript: '  Buenos días. ',
      audio_window_start: 0, audio_window_end: 1.4, end_of_turn_confidence: 0.91,
    })).toEqual({ transcript: 'Buenos días.', confidence: 0.91, audioWindowStart: 0, audioWindowEnd: 1.4, providerRequestId: 'request-1' })
  })

  it('combines all finalized Flux segments in audio order', () => {
    expect(combineFluxTurns([
      { transcript: 'Buenos días.', confidence: 0.94, audioWindowStart: 0, audioWindowEnd: 1, providerRequestId: 'one' },
      { transcript: 'Necesitamos casco.', confidence: 0.88, audioWindowStart: 1.4, audioWindowEnd: 2.5, providerRequestId: 'two' },
    ])).toEqual({
      transcript: 'Buenos días. Necesitamos casco.', confidence: 0.88,
      audioWindowStart: 0, audioWindowEnd: 2.5, providerRequestId: 'two',
    })
  })

  it('ignores partial and malformed messages', () => {
    expect(parseFluxEndOfTurn({ type: 'TurnInfo', event: 'Update', transcript: 'Hola' })).toBeNull()
    expect(parseFluxEndOfTurn({ type: 'TurnInfo', event: 'EndOfTurn', transcript: '' })).toBeNull()
  })

  it('fails when Flux closes before the learner explicitly ends the turn', async () => {
    vi.stubGlobal('WebSocket', MockWebSocket)
    vi.stubGlobal('window', { setTimeout, clearTimeout })
    const adapter = new DeepgramSttUploadAdapter(capabilities, grant)
    const controller = new AbortController()
    await adapter.connect(controller.signal)
    expect(MockWebSocket.latest?.protocols).toEqual(['bearer', 'temporary-token'])
    const turn = adapter.finishLearnerTurn(controller.signal)
    MockWebSocket.latest?.close()
    await expect(turn).rejects.toThrow('without a finalized transcript')
  })

  it('surfaces a Flux FatalError and closes the connection', async () => {
    vi.stubGlobal('WebSocket', MockWebSocket)
    vi.stubGlobal('window', { setTimeout, clearTimeout })
    const adapter = new DeepgramSttUploadAdapter(capabilities, grant)
    const controller = new AbortController()
    await adapter.connect(controller.signal)
    const turn = adapter.finishLearnerTurn(controller.signal)
    MockWebSocket.latest?.dispatchEvent(new MessageEvent('message', {
      data: JSON.stringify({ type: 'FatalError', description: 'bad audio' }),
    }))
    await expect(turn).rejects.toThrow('bad audio')
  })

  it('sends CloseStream and returns every EndOfTurn segment', async () => {
    vi.stubGlobal('WebSocket', MockWebSocket)
    vi.stubGlobal('window', { setTimeout, clearTimeout })
    const adapter = new DeepgramSttUploadAdapter(capabilities, grant)
    const controller = new AbortController()
    await adapter.connect(controller.signal)
    const turn = adapter.finishLearnerTurn(controller.signal)
    expect(MockWebSocket.latest?.sent).toContain(JSON.stringify({ type: 'CloseStream' }))
    for (const [transcript, start, end] of [['Use casco.', 0, 1], ['También arnés.', 1.2, 2.2]] as const) {
      MockWebSocket.latest?.dispatchEvent(new MessageEvent('message', { data: JSON.stringify({
        type: 'TurnInfo', event: 'EndOfTurn', request_id: `request-${end}`, transcript,
        audio_window_start: start, audio_window_end: end, end_of_turn_confidence: 0.9,
      }) }))
    }
    MockWebSocket.latest?.close()
    await expect(turn).resolves.toMatchObject({ transcript: 'Use casco. También arnés.', audioWindowEnd: 2.2 })
  })
})

class MockTtsWebSocket extends MockWebSocket {
  send(value: unknown) {
    super.send(value)
    if (typeof value !== 'string') return
    const message = JSON.parse(value) as { type?: string }
    if (message.type === 'Flush') {
      this.dispatchEvent(new MessageEvent('message', { data: new ArrayBuffer(8) }))
      this.dispatchEvent(new MessageEvent('message', { data: JSON.stringify({ type: 'Flushed' }) }))
    } else if (message.type === 'Close') {
      this.close()
    }
  }
}

class SilentTtsWebSocket extends MockWebSocket {
  send(value: unknown) {
    super.send(value)
    if (typeof value !== 'string') return
    const message = JSON.parse(value) as { type?: string }
    if (message.type === 'Flush') this.dispatchEvent(new MessageEvent('message', { data: JSON.stringify({ type: 'Flushed' }) }))
    else if (message.type === 'Close') this.close()
  }
}

describe('Deepgram Aura messages', () => {
  it('streams audio and closes only after Flushed', async () => {
    vi.stubGlobal('WebSocket', MockTtsWebSocket)
    vi.stubGlobal('window', { setTimeout, clearTimeout })
    const adapter = new DeepgramTtsAdapter()
    const chunks: ArrayBuffer[] = []
    await adapter.speak({ ...grant, endpoints: { tts: 'wss://example.test/v1/speak' } }, 'Hola', chunk => chunks.push(chunk), new AbortController().signal)
    expect(chunks).toHaveLength(1)
    expect(MockWebSocket.latest?.protocols).toEqual(['bearer', 'temporary-token'])
  })

  it('rejects a flushed response that contains no audio', async () => {
    vi.stubGlobal('WebSocket', SilentTtsWebSocket)
    vi.stubGlobal('window', { setTimeout, clearTimeout })
    const adapter = new DeepgramTtsAdapter()
    await expect(adapter.speak(
      { ...grant, endpoints: { tts: 'wss://example.test/v1/speak' } },
      'Hola', () => undefined, new AbortController().signal,
    )).rejects.toThrow('without returning audio')
  })
})
