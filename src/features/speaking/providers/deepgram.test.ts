import { afterEach, describe, expect, it, vi } from 'vitest'
import type { SpeakingProviderCapabilities, SpeakingTokenGrant } from './contracts'
import { DeepgramSttUploadAdapter, parseFluxEndOfTurn } from './deepgram'

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

  it('ignores partial and malformed messages', () => {
    expect(parseFluxEndOfTurn({ type: 'TurnInfo', event: 'Update', transcript: 'Hola' })).toBeNull()
    expect(parseFluxEndOfTurn({ type: 'TurnInfo', event: 'EndOfTurn', transcript: '' })).toBeNull()
  })

  it('fails a pending turn immediately when Flux closes before EndOfTurn', async () => {
    vi.stubGlobal('WebSocket', MockWebSocket)
    vi.stubGlobal('window', { setTimeout, clearTimeout })
    const adapter = new DeepgramSttUploadAdapter(capabilities, grant)
    const controller = new AbortController()
    await adapter.connect(controller.signal)
    const turn = adapter.waitForEndOfTurn(controller.signal)
    MockWebSocket.latest?.close()
    await expect(turn).rejects.toThrow('closed before the turn was finalized')
  })

  it('surfaces a Flux FatalError and closes the connection', async () => {
    vi.stubGlobal('WebSocket', MockWebSocket)
    vi.stubGlobal('window', { setTimeout, clearTimeout })
    const adapter = new DeepgramSttUploadAdapter(capabilities, grant)
    const controller = new AbortController()
    await adapter.connect(controller.signal)
    const turn = adapter.waitForEndOfTurn(controller.signal)
    MockWebSocket.latest?.dispatchEvent(new MessageEvent('message', {
      data: JSON.stringify({ type: 'FatalError', description: 'bad audio' }),
    }))
    await expect(turn).rejects.toThrow('bad audio')
  })
})
