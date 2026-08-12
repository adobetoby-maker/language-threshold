import { describe, expect, it } from 'vitest'
import { estimateSpikeProviderCost } from './cost'

describe('speaking spike cost estimate', () => {
  it('calculates the documented representative session from versioned list prices', () => {
    expect(estimateSpikeProviderCost({
      sttAudioSeconds: 360,
      ttsCharacters: 6_000,
      dialogueInputTokens: 8_000,
      dialogueOutputTokens: 2_000,
      retries: 0,
    })).toBe(0.2448)
  })

  it('does not treat retry count itself as a billable unit', () => {
    const usage = { sttAudioSeconds: 60, ttsCharacters: 1_000, dialogueInputTokens: 1_000, dialogueOutputTokens: 500, retries: 0 }
    expect(estimateSpikeProviderCost({ ...usage, retries: 2 })).toBe(estimateSpikeProviderCost(usage))
  })
})
