import type { SpeakingSessionUsage } from '../providers/contracts'

export const SPEAKING_EVIDENCE_SCHEMA_VERSION = 'speaking-provider-evidence-v1' as const

export type SpeakingEvidenceStage = 'session' | 'capture' | 'stt' | 'dialogue' | 'tts' | 'playback'

export interface SpeakingTurnTimingEvidence {
  captureMs: number
  sttFinalizeMs: number
  dialogueMs: number
  ttsFirstAudioMs: number | null
  ttsCompletionMs: number
  playbackMs: number
  totalMs: number
}

export interface SpeakingTurnEvidence {
  turnSequence: number
  startedAt: string
  completedAt: string
  timings: SpeakingTurnTimingEvidence
  sttProviderRequestId: string
  usage: {
    reportedAudioSeconds: number
    requestedTtsCharacters: number
    dialogueInputTokens: number
    dialogueOutputTokens: number
  }
  sessionUsage: SpeakingSessionUsage | null
}

export interface SpeakingEvidenceEvent {
  occurredAt: string
  turnSequence: number | null
  stage: SpeakingEvidenceStage
  code: SpeakingEvidenceErrorCode
}

export type SpeakingEvidenceErrorCode =
  | 'cancelled'
  | 'capture-timeout'
  | 'permission-denied'
  | 'audio-unavailable'
  | 'microphone-ended'
  | 'stt-transport-ended'
  | 'provider-timeout'
  | 'provider-rejected'
  | 'invalid-provider-response'
  | 'session-expired'
  | 'backgrounded'
  | 'unknown-failure'

export interface SpeakingEvidenceRunContext {
  testerAlias: string
  deviceModel: string
  osVersion: string
  browserVersion: string
  network: 'unknown' | 'wifi' | 'cellular' | 'wired'
  audioRoute: 'unknown' | 'speaker' | 'wired-headset' | 'bluetooth'
  matrixCase: string
}

export interface SpeakingEvidenceBundle {
  schemaVersion: typeof SPEAKING_EVIDENCE_SCHEMA_VERSION
  exportedAt: string
  session: {
    runId: string
    providerSessionId: string | null
    startedAt: string
    scenarioVersionId: string
    locale: string
  }
  providerConfiguration: {
    stt: string
    dialogue: string
    tts: string
  }
  client: {
    viewportWidth: number
    viewportHeight: number
    devicePixelRatio: number
  }
  runContext: SpeakingEvidenceRunContext
  summary: {
    completedTurns: number
    failedEvents: number
    latencyMs: Record<'capture' | 'sttFinalize' | 'dialogue' | 'ttsFirstAudio' | 'ttsCompletion' | 'playbackDrain' | 'total', {
      p50: number | null
      p95: number | null
      sampleCount: number
      missingCount: number
    }>
    estimatedListCostUsd: number | null
    estimatedListCostMetadata: {
      asOf: string
      currency: string
      sttModel: string
      ttsModel: string
      dialogueModel: string
      sources: readonly string[]
      rates: {
        sttPerMinute: number
        ttsPerThousandCharacters: number
        dialogueInputPerMillionTokens: number
        dialogueOutputPerMillionTokens: number
      }
    }
    costEstimateStatus: 'list-price-estimate' | 'unsupported-provider-configuration'
    usageSource: 'session-cumulative-plus-client-tail' | 'client-sum'
    sessionUsageThroughTurn: number | null
    costIsProviderReconciled: false
  }
  turns: SpeakingTurnEvidence[]
  events: SpeakingEvidenceEvent[]
  privacy: {
    structuredContentFields: {
      transcript: false
      rawAudio: false
      partnerText: false
      coachingText: false
    }
    testerEnteredContextIsUnverified: true
    automaticallyUploaded: false
  }
}
