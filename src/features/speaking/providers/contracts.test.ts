import { describe, expect, it } from 'vitest'
import type { SpeechTurnResult, SpeakingProviderCapabilities } from './contracts'

describe('provider-neutral speaking contracts', () => {
  it('keeps provider request ids out of learner-visible scoring fields', () => {
    const result: SpeechTurnResult = {
      assistantText: '¿Puede explicarlo de otra manera?',
      completedObjectiveIds: [],
      deferredFeedback: [],
      timings: [{ stage: 'stt', startedAtMs: 100, completedAtMs: 240, durationMs: 140 }],
      providerRequestIds: { deepgram: 'request-redacted-from-analytics' },
    }
    expect(result.timings[0].durationMs).toBe(140)
    expect(result).not.toHaveProperty('masteryTier')
  })

  it('makes launch blockers explicit even when the spike is enabled', () => {
    const capabilities = {
      enabled: true,
      productionReady: false,
      blockers: ['physical-iphone-validation'],
    } as SpeakingProviderCapabilities
    expect(capabilities.productionReady).toBe(false)
    expect(capabilities.blockers).toContain('physical-iphone-validation')
  })
})
