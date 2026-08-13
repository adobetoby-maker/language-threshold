import { describe, expect, it } from 'vitest'
import { downsampleToLinear16, linear16ToFloat32 } from './pcm'

describe('speaking PCM conversion', () => {
  it('downsamples microphone floats to 16 kHz signed PCM', () => {
    const source = new Float32Array(48).fill(0).map((_, index) => index < 24 ? 0.5 : -0.5)
    const output = downsampleToLinear16(source, 48_000)
    expect(output).toHaveLength(16)
    expect(output[0]).toBeGreaterThan(16_000)
    expect(output[15]).toBeLessThan(-16_000)
  })

  it('converts linear16 audio back to normalized floats', () => {
    const pcm = new Int16Array([0, 16_384, -16_384])
    expect(Array.from(linear16ToFloat32(pcm.buffer))).toEqual([0, expect.closeTo(0.5, 4), expect.closeTo(-0.5, 4)])
  })
})
