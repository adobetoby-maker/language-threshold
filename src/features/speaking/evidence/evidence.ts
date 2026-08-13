import type { SpeakingProviderCapabilities, SpeakingSessionLease } from '../providers/contracts'
import { estimateSpikeProviderCost, SPIKE_LIST_PRICE_METADATA } from '../providers/cost'
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
  return value.trim().replace(/[\r\n\t]+/g, ' ').replace(/[^a-zA-Z0-9 ._:/()+-]/g, '').slice(0, MAX_CONTEXT_LENGTH)
}

export function sanitizeEvidenceContext(context: SpeakingEvidenceRunContext): SpeakingEvidenceRunContext {
  return {
    testerAlias: cleanContext(context.testerAlias).replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 32),
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
  return {
    p50: nearestRankPercentile(present, 0.5),
    p95: nearestRankPercentile(present, 0.95),
    sampleCount: present.length,
    missingCount: values.length - present.length,
  }
}

function safeCount(value: number) {
  return Number.isFinite(value) && value >= 0 ? value : 0
}

function safeProviderRequestId(value: string) {
  return value.replace(/[^a-zA-Z0-9._:-]/g, '').slice(0, 160)
}

function copySessionUsage(usage: SpeakingTurnEvidence['sessionUsage']) {
  return usage ? {
    providerTokenIssuances: safeCount(usage.providerTokenIssuances),
    completedTurns: safeCount(usage.completedTurns),
    reportedAudioSeconds: safeCount(usage.reportedAudioSeconds),
    requestedTtsCharacters: safeCount(usage.requestedTtsCharacters),
    dialogueInputTokens: safeCount(usage.dialogueInputTokens),
    dialogueOutputTokens: safeCount(usage.dialogueOutputTokens),
  } : null
}

export function classifyEvidenceError(error: unknown): SpeakingEvidenceErrorCode {
  if (error instanceof DOMException && error.name === 'AbortError') return 'cancelled'
  if (error instanceof DOMException && (error.name === 'NotAllowedError' || error.name === 'SecurityError')) return 'permission-denied'
  if (error instanceof DOMException && (error.name === 'NotFoundError' || error.name === 'NotReadableError')) return 'audio-unavailable'
  const message = error instanceof Error ? error.message.toLowerCase() : ''
  if (message.includes('60-second')) return 'capture-timeout'
  if (message.includes('microphone capture ended')) return 'microphone-ended'
  if (message.includes('speech connection closed before the learner ended')) return 'stt-transport-ended'
  if (message.includes('timed out') || message.includes('within 30 seconds') || message.includes('did not finalize')) return 'provider-timeout'
  if (message.includes('invalid') || message.includes('without returning audio') || message.includes('without a finalized transcript')) return 'invalid-provider-response'
  if (message.includes('provider') || message.includes('dialogue')) return 'provider-rejected'
  if (message.includes('18-minute') || message.includes('expired')) return 'session-expired'
  if (message.includes('backgrounded')) return 'backgrounded'
  return 'unknown-failure'
}

export function createEvidenceEvent(stage: SpeakingEvidenceStage, turnSequence: number | null, error: unknown, now = new Date()): SpeakingEvidenceEvent {
  return { occurredAt: now.toISOString(), turnSequence, stage, code: classifyEvidenceError(error) }
}

export function buildSpeakingEvidenceBundle(input: {
  runId: string
  session: SpeakingSessionLease | null
  sessionStartedAt: string
  scenario: SpeakingScenarioVersion
  capabilities: SpeakingProviderCapabilities
  context: SpeakingEvidenceRunContext
  turns: SpeakingTurnEvidence[]
  events: SpeakingEvidenceEvent[]
  viewport: { width: number; height: number; devicePixelRatio: number }
  exportedAt?: Date
}): SpeakingEvidenceBundle {
  const providerConfiguration = {
    stt: `${input.capabilities.providers.stt.provider}/${input.capabilities.providers.stt.model}`,
    dialogue: `${input.capabilities.providers.dialogue.provider}/${input.capabilities.providers.dialogue.model}`,
    tts: `${input.capabilities.providers.tts.provider}/${input.capabilities.providers.tts.model}`,
  }
  const hasSupportedPriceSchedule = providerConfiguration.stt === SPIKE_LIST_PRICE_METADATA.sttModel
    && providerConfiguration.dialogue === SPIKE_LIST_PRICE_METADATA.dialogueModel
    && providerConfiguration.tts.startsWith(`${SPIKE_LIST_PRICE_METADATA.ttsModel}-`)
  let latestUsageIndex = -1
  for (let index = input.turns.length - 1; index >= 0; index -= 1) {
    if (input.turns[index].sessionUsage) {
      latestUsageIndex = index
      break
    }
  }
  const latestUsage = latestUsageIndex >= 0 ? input.turns[latestUsageIndex].sessionUsage : null
  const clientTail = latestUsageIndex >= 0 ? input.turns.slice(latestUsageIndex + 1) : input.turns
  const aggregateUsage = latestUsage
    ? {
        sttAudioSeconds: latestUsage.reportedAudioSeconds + clientTail.reduce((total, turn) => total + turn.usage.reportedAudioSeconds, 0),
        ttsCharacters: latestUsage.requestedTtsCharacters + clientTail.reduce((total, turn) => total + turn.usage.requestedTtsCharacters, 0),
        dialogueInputTokens: latestUsage.dialogueInputTokens + clientTail.reduce((total, turn) => total + turn.usage.dialogueInputTokens, 0),
        dialogueOutputTokens: latestUsage.dialogueOutputTokens + clientTail.reduce((total, turn) => total + turn.usage.dialogueOutputTokens, 0),
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
      runId: input.runId,
      providerSessionId: input.session?.sessionId ?? null,
      startedAt: input.sessionStartedAt,
      scenarioVersionId: input.scenario.id,
      locale: input.scenario.locale,
    },
    providerConfiguration,
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
      estimatedListCostUsd: hasSupportedPriceSchedule ? estimateSpikeProviderCost(aggregateUsage) : null,
      estimatedListCostMetadata: { ...SPIKE_LIST_PRICE_METADATA, sources: [...SPIKE_LIST_PRICE_METADATA.sources] },
      costEstimateStatus: hasSupportedPriceSchedule ? 'list-price-estimate' : 'unsupported-provider-configuration',
      usageSource: latestUsage ? 'session-cumulative-plus-client-tail' : 'client-sum',
      sessionUsageThroughTurn: latestUsageIndex >= 0 ? input.turns[latestUsageIndex].turnSequence : null,
      costIsProviderReconciled: false,
    },
    turns: input.turns.map(turn => ({
      turnSequence: safeCount(turn.turnSequence),
      startedAt: turn.startedAt,
      completedAt: turn.completedAt,
      timings: {
        captureMs: safeCount(turn.timings.captureMs),
        sttFinalizeMs: safeCount(turn.timings.sttFinalizeMs),
        dialogueMs: safeCount(turn.timings.dialogueMs),
        ttsFirstAudioMs: turn.timings.ttsFirstAudioMs === null ? null : safeCount(turn.timings.ttsFirstAudioMs),
        ttsCompletionMs: safeCount(turn.timings.ttsCompletionMs),
        playbackMs: safeCount(turn.timings.playbackMs),
        totalMs: safeCount(turn.timings.totalMs),
      },
      sttProviderRequestId: safeProviderRequestId(turn.sttProviderRequestId),
      usage: {
        reportedAudioSeconds: safeCount(turn.usage.reportedAudioSeconds),
        requestedTtsCharacters: safeCount(turn.usage.requestedTtsCharacters),
        dialogueInputTokens: safeCount(turn.usage.dialogueInputTokens),
        dialogueOutputTokens: safeCount(turn.usage.dialogueOutputTokens),
      },
      sessionUsage: copySessionUsage(turn.sessionUsage),
    })),
    events: input.events.map(event => ({
      occurredAt: event.occurredAt,
      turnSequence: event.turnSequence === null ? null : safeCount(event.turnSequence),
      stage: event.stage,
      code: event.code,
    })),
    privacy: {
      structuredContentFields: { transcript: false, rawAudio: false, partnerText: false, coachingText: false },
      testerEnteredContextIsUnverified: true,
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
