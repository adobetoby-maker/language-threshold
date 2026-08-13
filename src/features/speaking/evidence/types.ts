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
  | 'microphone-ended'
  | 'stt-transport-ended'
  | 'provider-timeout'
  | 'provider-rejected'
  | 'invalid-provider-response'
  | 'session-expired'
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
    id: string
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
    }>
    estimatedListCostUsd: number
    costIsProviderReconciled: false
  }
  turns: SpeakingTurnEvidence[]
  events: SpeakingEvidenceEvent[]
  privacy: {
    includesTranscript: false
    includesRawAudio: false
    includesPartnerText: false
    includesCoachingText: false
    automaticallyUploaded: false
  }
}
