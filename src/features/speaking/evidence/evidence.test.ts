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
  })

  it('builds a transcript-free bundle with local list-price estimates', () => {
    const bundle = buildSpeakingEvidenceBundle({
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
        total: { p50: 2_000, p95: 4_000 },
        sttFinalize: { p50: 400, p95: 800 },
        ttsFirstAudio: { p50: 300, p95: 300 },
      },
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
    expect(keys).not.toContain('transcript')
    expect(keys).not.toContain('assistantText')
    expect(keys).not.toContain('deferredFeedback')
    expect(keys).not.toContain('rawAudio')
    expect(bundle.privacy).toEqual({ includesTranscript: false, includesRawAudio: false, includesPartnerText: false, includesCoachingText: false, automaticallyUploaded: false })
  })

  it('creates a bounded safe filename', () => {
    expect(evidenceFilename('scenario/version unsafe', session.sessionId)).toBe('speaking-evidence-scenario-version-unsafe-550e8400-e29b-41d4-a716-446655440000.json')
  })
})
