import type { SpeakingProviderCapabilities, SpeakingSessionLease } from '../providers/contracts'
import { estimateSpikeProviderCost } from '../providers/cost'
import type { SpeakingScenarioVersion } from '../domain/types'
import {
  SPEAKING_EVIDENCE_SCHEMA_VERSION,
  type SpeakingEvidenceBundle,
  type SpeakingEvidenceErrorCode,
  type SpeakingEvidenceEvent,
  type SpeakingEvidenceRunContext,
  type SpeakingEvidenceStage,
  type SpeakingTurnEvidence,
} from './types'

const MAX_CONTEXT_LENGTH = 120

function cleanContext(value: string) {
  return value.trim().replace(/[\r\n\t]+/g, ' ').slice(0, MAX_CONTEXT_LENGTH)
}

export function sanitizeEvidenceContext(context: SpeakingEvidenceRunContext): SpeakingEvidenceRunContext {
  return {
    testerAlias: cleanContext(context.testerAlias),
    deviceModel: cleanContext(context.deviceModel),
    osVersion: cleanContext(context.osVersion),
    browserVersion: cleanContext(context.browserVersion),
    network: context.network,
    audioRoute: context.audioRoute,
    matrixCase: cleanContext(context.matrixCase),
  }
}

export function nearestRankPercentile(values: number[], percentile: number) {
  if (!values.length) return null
  const ordered = [...values].sort((left, right) => left - right)
  const rank = Math.max(1, Math.ceil(Math.min(1, Math.max(0, percentile)) * ordered.length))
  return ordered[rank - 1]
}

function percentilePair(values: Array<number | null>) {
  const present = values.filter((value): value is number => value !== null)
  return { p50: nearestRankPercentile(present, 0.5), p95: nearestRankPercentile(present, 0.95) }
}

export function classifyEvidenceError(error: unknown): SpeakingEvidenceErrorCode {
  if (error instanceof DOMException && error.name === 'AbortError') return 'cancelled'
  const message = error instanceof Error ? error.message.toLowerCase() : ''
  if (message.includes('60-second')) return 'capture-timeout'
  if (message.includes('microphone capture ended')) return 'microphone-ended'
  if (message.includes('speech connection closed before the learner ended')) return 'stt-transport-ended'
  if (message.includes('timed out') || message.includes('within 30 seconds') || message.includes('did not finalize')) return 'provider-timeout'
  if (message.includes('invalid') || message.includes('without returning audio') || message.includes('without a finalized transcript')) return 'invalid-provider-response'
  if (message.includes('provider') || message.includes('dialogue')) return 'provider-rejected'
  if (message.includes('18-minute') || message.includes('expired')) return 'session-expired'
  return 'unknown-failure'
}

export function createEvidenceEvent(stage: SpeakingEvidenceStage, turnSequence: number | null, error: unknown, now = new Date()): SpeakingEvidenceEvent {
  return { occurredAt: now.toISOString(), turnSequence, stage, code: classifyEvidenceError(error) }
}

export function buildSpeakingEvidenceBundle(input: {
  session: SpeakingSessionLease
  sessionStartedAt: string
  scenario: SpeakingScenarioVersion
  capabilities: SpeakingProviderCapabilities
  context: SpeakingEvidenceRunContext
  turns: SpeakingTurnEvidence[]
  events: SpeakingEvidenceEvent[]
  viewport: { width: number; height: number; devicePixelRatio: number }
  exportedAt?: Date
}): SpeakingEvidenceBundle {
  const latestUsage = [...input.turns].reverse().find(turn => turn.sessionUsage)?.sessionUsage
  const aggregateUsage = latestUsage
    ? {
        sttAudioSeconds: latestUsage.reportedAudioSeconds,
        ttsCharacters: latestUsage.requestedTtsCharacters,
        dialogueInputTokens: latestUsage.dialogueInputTokens,
        dialogueOutputTokens: latestUsage.dialogueOutputTokens,
        retries: 0,
      }
    : input.turns.reduce((usage, turn) => ({
        sttAudioSeconds: usage.sttAudioSeconds + turn.usage.reportedAudioSeconds,
        ttsCharacters: usage.ttsCharacters + turn.usage.requestedTtsCharacters,
        dialogueInputTokens: usage.dialogueInputTokens + turn.usage.dialogueInputTokens,
        dialogueOutputTokens: usage.dialogueOutputTokens + turn.usage.dialogueOutputTokens,
        retries: 0,
      }), { sttAudioSeconds: 0, ttsCharacters: 0, dialogueInputTokens: 0, dialogueOutputTokens: 0, retries: 0 })

  return {
    schemaVersion: SPEAKING_EVIDENCE_SCHEMA_VERSION,
    exportedAt: (input.exportedAt ?? new Date()).toISOString(),
    session: {
      id: input.session.sessionId,
      startedAt: input.sessionStartedAt,
      scenarioVersionId: input.scenario.id,
      locale: input.scenario.locale,
    },
    providerConfiguration: {
      stt: `${input.capabilities.providers.stt.provider}/${input.capabilities.providers.stt.model}`,
      dialogue: `${input.capabilities.providers.dialogue.provider}/${input.capabilities.providers.dialogue.model}`,
      tts: `${input.capabilities.providers.tts.provider}/${input.capabilities.providers.tts.model}`,
    },
    client: {
      viewportWidth: Math.max(0, Math.round(input.viewport.width)),
      viewportHeight: Math.max(0, Math.round(input.viewport.height)),
      devicePixelRatio: Math.max(0, Number(input.viewport.devicePixelRatio.toFixed(2))),
    },
    runContext: sanitizeEvidenceContext(input.context),
    summary: {
      completedTurns: input.turns.length,
      failedEvents: input.events.filter(event => event.code !== 'cancelled').length,
      latencyMs: {
        capture: percentilePair(input.turns.map(turn => turn.timings.captureMs)),
        sttFinalize: percentilePair(input.turns.map(turn => turn.timings.sttFinalizeMs)),
        dialogue: percentilePair(input.turns.map(turn => turn.timings.dialogueMs)),
        ttsFirstAudio: percentilePair(input.turns.map(turn => turn.timings.ttsFirstAudioMs)),
        ttsCompletion: percentilePair(input.turns.map(turn => turn.timings.ttsCompletionMs)),
        playbackDrain: percentilePair(input.turns.map(turn => turn.timings.playbackMs)),
        total: percentilePair(input.turns.map(turn => turn.timings.totalMs)),
      },
      estimatedListCostUsd: estimateSpikeProviderCost(aggregateUsage),
      costIsProviderReconciled: false,
    },
    turns: input.turns.map(turn => structuredClone(turn)),
    events: input.events.map(event => ({ ...event })),
    privacy: {
      includesTranscript: false,
      includesRawAudio: false,
      includesPartnerText: false,
      includesCoachingText: false,
      automaticallyUploaded: false,
    },
  }
}

export function serializeSpeakingEvidence(bundle: SpeakingEvidenceBundle) {
  return `${JSON.stringify(bundle, null, 2)}\n`
}

export function evidenceFilename(scenarioVersionId: string, sessionId: string) {
  const scenario = scenarioVersionId.replace(/[^a-z0-9_-]+/gi, '-').slice(0, 80)
  const session = sessionId.replace(/[^a-z0-9-]+/gi, '').slice(0, 36)
  return `speaking-evidence-${scenario}-${session}.json`
}
