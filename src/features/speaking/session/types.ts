import type {
  FeedbackLanguage,
  MasteryResult,
  ObjectiveId,
  ScenarioVersionId,
  SpeakingScenarioId,
} from '../domain/types'

export type SpeakingSessionPhase =
  | 'idle'
  | 'arming'
  | 'listening'
  | 'thinking'
  | 'speaking'
  | 'paused'
  | 'completed'
  | 'error'

export type AttemptId = `attempt_${string}`
export type AttemptEventId = `event_${string}`

export interface SpeakingSessionState {
  phase: SpeakingSessionPhase
  previousActivePhase: Exclude<SpeakingSessionPhase, 'paused' | 'completed' | 'error'> | null
  attemptId: AttemptId | null
  scenarioId: SpeakingScenarioId
  scenarioVersionId: ScenarioVersionId
  feedbackLanguage: FeedbackLanguage
  completedObjectiveIds: ObjectiveId[]
  turnCount: number
  errorMessage: string | null
  result: MasteryResult | null
}

export type SpeakingSessionAction =
  | { type: 'START'; attemptId: AttemptId }
  | { type: 'MIC_READY' }
  | { type: 'END_LEARNER_TURN' }
  | { type: 'RESPONSE_STARTED'; completedObjectiveIds?: ObjectiveId[] }
  | { type: 'RESPONSE_FINISHED' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'COMPLETE'; result: MasteryResult }
  | { type: 'FAIL'; message: string }
  | { type: 'RESET' }

export type AttemptEventType =
  | 'attempt.started'
  | 'microphone.ready'
  | 'learner.turn.completed'
  | 'assistant.response.started'
  | 'assistant.response.completed'
  | 'session.paused'
  | 'session.resumed'
  | 'attempt.completed'
  | 'attempt.failed'

export interface AttemptEvent {
  id: AttemptEventId
  idempotencyKey: string
  attemptId: AttemptId
  scenarioVersionId: ScenarioVersionId
  type: AttemptEventType
  occurredAt: string
  payload: Record<string, unknown>
}
