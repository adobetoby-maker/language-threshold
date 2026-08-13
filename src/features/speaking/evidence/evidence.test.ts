import { describe, expect, it } from 'vitest'
import { SPEAKING_SCENARIOS } from '../domain/scenarios'
import type { SpeakingProviderCapabilities, SpeakingSessionLease } from '../providers/contracts'
import {
  buildSpeakingEvidenceBundle,
  classifyEvidenceError,
  evidenceFilename,
  nearestRankPercentile,
  serializeSpeakingEvidence,
} from './evidence'
import type { SpeakingEvidenceRunContext, SpeakingTurnEvidence } from './types'

const capabilities = {
  providers: {
    stt: { provider: 'deepgram', model: 'flux-general-multi' },
    dialogue: { provider: 'anthropic', model: 'claude-haiku-4-5' },
    tts: { provider: 'deepgram', model: 'aura-2-celeste-es' },
  },
} as SpeakingProviderCapabilities

const session = {
  sessionId: '550e8400-e29b-41d4-a716-446655440000',
  lease: 'must-never-be-exported',
  expiresAt: '2026-08-13T01:00:00.000Z',
  hardCapSeconds: 1080,
  maxTurns: 24,
} satisfies SpeakingSessionLease

const context: SpeakingEvidenceRunContext = {
  testerAlias: ' tester-01\n ', deviceModel: 'iPhone 17 Pro', osVersion: 'iOS 20.0', browserVersion: 'Safari 20',
  network: 'wifi', audioRoute: 'speaker', matrixCase: 'normal turn',
}

function turn(turnSequence: number, totalMs: number, sttFinalizeMs: number): SpeakingTurnEvidence {
  return {
    turnSequence,
    startedAt: '2026-08-13T00:00:00.000Z',
    completedAt: '2026-08-13T00:00:03.000Z',
    timings: { captureMs: 1_000, sttFinalizeMs, dialogueMs: 500, ttsFirstAudioMs: 300, ttsCompletionMs: 500, playbackMs: 700, totalMs },
    sttProviderRequestId: `request-${turnSequence}`,
    usage: { reportedAudioSeconds: 1, requestedTtsCharacters: 100, dialogueInputTokens: 200, dialogueOutputTokens: 50 },
    sessionUsage: null,
  }
}

describe('speaking provider evidence', () => {
  it('uses nearest-rank percentiles', () => {
    expect(nearestRankPercentile([4, 1, 3, 2], 0.5)).toBe(2)
    expect(nearestRankPercentile([4, 1, 3, 2], 0.95)).toBe(4)
    expect(nearestRankPercentile([], 0.5)).toBeNull()
  })

  it('classifies errors without exporting provider messages', () => {
    expect(classifyEvidenceError(new Error('Microphone capture ended unexpectedly.'))).toBe('microphone-ended')
    expect(classifyEvidenceError(new Error('The speech provider did not finalize the turn in time.'))).toBe('provider-timeout')
    expect(classifyEvidenceError(new DOMException('cancelled', 'AbortError'))).toBe('cancelled')
    expect(classifyEvidenceError(new DOMException('denied', 'NotAllowedError'))).toBe('permission-denied')
    expect(classifyEvidenceError(new Error('The controlled speaking session was backgrounded and stopped.'))).toBe('backgrounded')
  })

  it('builds a transcript-free bundle with local list-price estimates', () => {
    const bundle = buildSpeakingEvidenceBundle({
      runId: 'attempt_550e8400-e29b-41d4-a716-446655440000',
      session,
      sessionStartedAt: '2026-08-13T00:00:00.000Z',
      scenario: SPEAKING_SCENARIOS[0],
      capabilities,
      context,
      turns: [turn(1, 2_000, 400), turn(2, 4_000, 800)],
      events: [{ occurredAt: '2026-08-13T00:00:05.000Z', turnSequence: 3, stage: 'stt', code: 'stt-transport-ended' }],
      viewport: { width: 390.4, height: 843.6, devicePixelRatio: 3 },
      exportedAt: new Date('2026-08-13T00:05:00.000Z'),
    })
    expect(bundle.summary).toMatchObject({
      completedTurns: 2,
      failedEvents: 1,
      latencyMs: {
        total: { p50: 2_000, p95: 4_000, sampleCount: 2, missingCount: 0 },
        sttFinalize: { p50: 400, p95: 800, sampleCount: 2, missingCount: 0 },
        ttsFirstAudio: { p50: 300, p95: 300, sampleCount: 2, missingCount: 0 },
      },
      estimatedListCostMetadata: { asOf: '2026-08-12', currency: 'USD' },
      costEstimateStatus: 'list-price-estimate',
      usageSource: 'client-sum',
      sessionUsageThroughTurn: null,
      costIsProviderReconciled: false,
    })
    expect(bundle.runContext.testerAlias).toBe('tester-01')
    const serialized = serializeSpeakingEvidence(bundle)
    const keys = new Set<string>()
    const collectKeys = (value: unknown) => {
      if (!value || typeof value !== 'object') return
      for (const [key, child] of Object.entries(value)) {
        keys.add(key)
        collectKeys(child)
      }
    }
    collectKeys(JSON.parse(serialized))
    expect(serialized).not.toContain('must-never-be-exported')
    expect(keys).not.toContain('lease')
    expect(bundle.turns.every(exportedTurn => !('transcript' in exportedTurn))).toBe(true)
    expect(keys).not.toContain('assistantText')
    expect(keys).not.toContain('deferredFeedback')
    expect(bundle.turns.every(exportedTurn => !('rawAudio' in exportedTurn))).toBe(true)
    expect(bundle.privacy).toEqual({
      structuredContentFields: { transcript: false, rawAudio: false, partnerText: false, coachingText: false },
      testerEnteredContextIsUnverified: true,
      automaticallyUploaded: false,
    })
  })

  it('discloses missing latency samples and combines cumulative usage with a later client tail', () => {
    const cumulativeTurn = turn(1, 2_000, 400)
    cumulativeTurn.timings.ttsFirstAudioMs = null
    cumulativeTurn.sessionUsage = {
      providerTokenIssuances: 3,
      completedTurns: 1,
      reportedAudioSeconds: 10,
      requestedTtsCharacters: 1_000,
      dialogueInputTokens: 2_000,
      dialogueOutputTokens: 500,
    }
    const bundle = buildSpeakingEvidenceBundle({
      runId: 'attempt_550e8400-e29b-41d4-a716-446655440000',
      session,
      sessionStartedAt: '2026-08-13T00:00:00.000Z',
      scenario: SPEAKING_SCENARIOS[0],
      capabilities,
      context,
      turns: [cumulativeTurn, turn(2, 4_000, 800)],
      events: [],
      viewport: { width: 390, height: 844, devicePixelRatio: 3 },
    })

    expect(bundle.summary.latencyMs.ttsFirstAudio).toEqual({ p50: 300, p95: 300, sampleCount: 1, missingCount: 1 })
    expect(bundle.summary).toMatchObject({ usageSource: 'session-cumulative-plus-client-tail', sessionUsageThroughTurn: 1 })
    expect(bundle.summary.estimatedListCostUsd).toBeGreaterThan(0.03)
  })

  it('serializes an explicit allow-list and bounds provider request identifiers', () => {
    const contaminated = {
      ...turn(1, 2_000, 400),
      transcript: 'PRIVATE TRANSCRIPT',
      sttProviderRequestId: `safe-id/${'x'.repeat(300)}`,
      usage: { ...turn(1, 2_000, 400).usage, providerPayload: 'PRIVATE PAYLOAD' },
    } as unknown as SpeakingTurnEvidence
    const bundle = buildSpeakingEvidenceBundle({
      runId: 'attempt_550e8400-e29b-41d4-a716-446655440000',
      session,
      sessionStartedAt: '2026-08-13T00:00:00.000Z',
      scenario: SPEAKING_SCENARIOS[0], capabilities, context,
      turns: [contaminated], events: [],
      viewport: { width: 390, height: 844, devicePixelRatio: 3 },
    })
    const serialized = serializeSpeakingEvidence(bundle)
    expect(serialized).not.toContain('PRIVATE')
    expect(bundle.turns[0].sttProviderRequestId).toMatch(/^safe-id/)
    expect(bundle.turns[0].sttProviderRequestId.length).toBeLessThanOrEqual(160)
  })

  it('can export a classified failure before a provider session exists', () => {
    const bundle = buildSpeakingEvidenceBundle({
      runId: 'attempt_550e8400-e29b-41d4-a716-446655440000',
      session: null,
      sessionStartedAt: '2026-08-13T00:00:00.000Z',
      scenario: SPEAKING_SCENARIOS[0], capabilities, context,
      turns: [],
      events: [{ occurredAt: '2026-08-13T00:00:01.000Z', turnSequence: 1, stage: 'capture', code: 'provider-rejected' }],
      viewport: { width: 390, height: 844, devicePixelRatio: 3 },
    })
    expect(bundle.session.providerSessionId).toBeNull()
    expect(bundle.summary).toMatchObject({ completedTurns: 0, failedEvents: 1 })
  })

  it('does not apply fixed list prices to an unpriced provider configuration', () => {
    const alternateCapabilities = {
      ...capabilities,
      providers: { ...capabilities.providers, dialogue: { provider: 'anthropic', model: 'different-model' } },
    } as SpeakingProviderCapabilities
    const bundle = buildSpeakingEvidenceBundle({
      runId: 'attempt_550e8400-e29b-41d4-a716-446655440000', session,
      sessionStartedAt: '2026-08-13T00:00:00.000Z', scenario: SPEAKING_SCENARIOS[0],
      capabilities: alternateCapabilities, context, turns: [turn(1, 2_000, 400)], events: [],
      viewport: { width: 390, height: 844, devicePixelRatio: 3 },
    })
    expect(bundle.summary).toMatchObject({ estimatedListCostUsd: null, costEstimateStatus: 'unsupported-provider-configuration' })
  })

  it('creates a bounded safe filename', () => {
    expect(evidenceFilename('scenario/version unsafe', session.sessionId)).toBe('speaking-evidence-scenario-version-unsafe-550e8400-e29b-41d4-a716-446655440000.json')
  })
})
