import type { FeedbackLanguage, ScenarioVersionId } from '../domain/types'
import type { AttemptId } from '../session/types'

export type SpeechStage = 'capture' | 'stt' | 'dialogue' | 'tts' | 'playback'
export type SpeechProviderKind = 'deepgram' | 'openai' | 'anthropic'

export interface StageTiming {
  stage: SpeechStage
  startedAtMs: number
  completedAtMs: number
  durationMs: number
}

export interface SpeechTurnRequest {
  attemptId: AttemptId
  scenarioVersionId: ScenarioVersionId
  turnSequence: number
  feedbackLanguage: FeedbackLanguage
  transcript: string
}

export interface SpeechTurnResult {
  assistantText: string
  completedObjectiveIds: string[]
  deferredFeedback: string[]
  timings: StageTiming[]
  providerRequestIds: Partial<Record<SpeechProviderKind, string>>
}

export interface SpeakingProviderCapabilities {
  enabled: boolean
  productionReady: false
  architecture: 'provider-neutral-streaming-cascade'
  mode: 'tap-to-speak'
  locale: 'es-419'
  providers: {
    stt: { provider: 'deepgram'; model: 'flux-general-multi'; transport: 'websocket' }
    dialogue: { provider: 'anthropic'; model: string; transport: 'server' }
    tts: { provider: 'deepgram'; model: string; transport: 'websocket' }
  }
  limits: {
    tokenTtlSeconds: 30
    hardCapMinutes: 18
    grantsPerPrincipalPerHour: number
  }
  privacy: {
    rawAudioRetainedByApplication: false
    browserAnalyticsSuppressed: true
    providerModelImprovementOptOutRequired: true
  }
  blockers: string[]
}

export interface SpeakingTokenGrant {
  provider: 'deepgram'
  accessToken: string
  expiresIn: number
  sttUrl: string
  ttsUrl: string
}

export interface SpeechSpikeMeasurement {
  attemptId: AttemptId
  scenarioVersionId: ScenarioVersionId
  startedAt: string
  completedAt: string
  timings: StageTiming[]
  usage: {
    sttAudioSeconds: number
    ttsCharacters: number
    dialogueInputTokens: number
    dialogueOutputTokens: number
    retries: number
  }
  estimatedProviderCostUsd: number
}

export interface StreamingSpeechAdapter {
  readonly capabilities: SpeakingProviderCapabilities
  connect(signal: AbortSignal): Promise<void>
  sendAudio(chunk: ArrayBuffer): void
  endLearnerTurn(): void
  cancel(): Promise<void>
}
