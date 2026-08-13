import { afterEach, describe, expect, it, vi } from 'vitest'
import { PcmMicrophoneCapture } from './microphone'

class MockTrack extends EventTarget {
  stop = vi.fn(() => this.dispatchEvent(new Event('ended')))
}

class MockAudioContext {
  resume = vi.fn(async () => undefined)
  close = vi.fn(async () => undefined)
}

afterEach(() => vi.unstubAllGlobals())

describe('PCM microphone lifecycle', () => {
  it('reports an unexpected media-track end', async () => {
    const track = new MockTrack()
    vi.stubGlobal('AudioContext', MockAudioContext)
    vi.stubGlobal('navigator', { mediaDevices: { getUserMedia: vi.fn(async () => ({ getTracks: () => [track] })) } })
    const microphone = new PcmMicrophoneCapture()
    const ended = vi.fn()
    microphone.onUnexpectedEnd(ended)
    await microphone.prepare(new AbortController().signal)
    track.dispatchEvent(new Event('ended'))
    expect(ended).toHaveBeenCalledOnce()
    expect(ended.mock.calls[0][0]).toMatchObject({ message: 'Microphone capture ended unexpectedly.' })
  })

  it('does not report the deliberate track stop at the end of a turn', async () => {
    const track = new MockTrack()
    vi.stubGlobal('AudioContext', MockAudioContext)
    vi.stubGlobal('navigator', { mediaDevices: { getUserMedia: vi.fn(async () => ({ getTracks: () => [track] })) } })
    const microphone = new PcmMicrophoneCapture()
    const ended = vi.fn()
    microphone.onUnexpectedEnd(ended)
    await microphone.prepare(new AbortController().signal)
    await microphone.finishTurn()
    expect(track.stop).toHaveBeenCalledOnce()
    expect(ended).not.toHaveBeenCalled()
  })
})
