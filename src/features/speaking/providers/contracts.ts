import type { FeedbackLanguage, ObjectiveId, ScenarioVersionId } from '../domain/types'
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
  completedObjectiveIds: ObjectiveId[]
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
    stt: ProviderCapability
    dialogue: ProviderCapability
    tts: ProviderCapability
  }
  limits: {
    tokenTtlSeconds: number
    sessionStartBudgets: {
      perAnonymousPrincipalPerHour: number
      perNetworkAddressPerHour: number
    }
    tokenIssuanceBudgets: {
      perAnonymousPrincipalPerHour: number
      perNetworkAddressPerHour: number
    }
    sessionLeaseMinutes: number
    maxTurnsPerSession: number
    maxProviderTokenIssuancesPerSession: number
    browserAudioSecondsAuthoritative: false
  }
  ageGate: { mode: 'self-attestation'; productionApproved: false }
  privacy: {
    rawAudioRetainedByApplication: false
    browserAnalyticsSuppressed: true
    sttModelImprovementOptOutRequested: true
    providerRetentionApprovedForProduction: false
  }
  blockers: string[]
}

export interface ProviderCapability {
  provider: SpeechProviderKind
  model: string
  transport: 'websocket' | 'server'
  integrationStatus: 'connectivity-prototype' | 'grant-only' | 'planned' | 'turn-loop'
}

export interface SpeakingTokenGrant<TProvider extends SpeechProviderKind = SpeechProviderKind> {
  provider: TProvider
  accessToken: string
  expiresIn: number
  endpoints: Partial<Record<'stt' | 'tts', string>>
}

export interface SpeakingSessionLease {
  sessionId: string
  lease: string
  expiresAt: string
  hardCapSeconds: number
  maxTurns: number
}

export interface DialogueHistoryEntry {
  role: 'learner' | 'assistant'
  text: string
}

export interface DialogueTurnResult {
  assistantText: string
  provisionalObjectiveIds: ObjectiveId[]
  deferredFeedback: string[]
  turnSequence: number
  usage: {
    reportedAudioSeconds: number
    requestedTtsCharacters: number
    dialogueInputTokens: number
    dialogueOutputTokens: number
  }
  sessionUsage?: {
    providerTokenIssuances: number
    completedTurns: number
    reportedAudioSeconds: number
    requestedTtsCharacters: number
    dialogueInputTokens: number
    dialogueOutputTokens: number
  }
}

export interface FluxTurnResult {
  transcript: string
  confidence: number
  audioWindowStart: number
  audioWindowEnd: number
  providerRequestId: string
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

export interface StreamingSttUploadAdapter {
  readonly capabilities: SpeakingProviderCapabilities
  connect(signal: AbortSignal): Promise<void>
  sendAudio(chunk: ArrayBuffer): void
  onUnexpectedTermination(handler: (error: Error) => void): () => void
  finishLearnerTurn(signal: AbortSignal, timeoutMs?: number): Promise<FluxTurnResult>
  cancel(): Promise<void>
}
