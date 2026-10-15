import type { SpeakingScenarioVersion } from '../domain/types'
import type { SpeakingSessionAction, SpeakingSessionState } from './types'

export { createAttemptId } from './ids'

export function createInitialSessionState(scenario: SpeakingScenarioVersion): SpeakingSessionState {
  return {
    phase: 'idle',
    previousActivePhase: null,
    attemptId: null,
    scenarioId: scenario.scenarioId,
    scenarioVersionId: scenario.id,
    feedbackLanguage: 'adaptive',
    completedObjectiveIds: [],
    turnCount: 0,
    errorMessage: null,
    result: null,
  }
}

function uniqueObjectives(current: SpeakingSessionState['completedObjectiveIds'], added: SpeakingSessionState['completedObjectiveIds'] = []) {
  return [...new Set([...current, ...added])]
}

export function speakingSessionReducer(state: SpeakingSessionState, action: SpeakingSessionAction): SpeakingSessionState {
  switch (action.type) {
    case 'START':
      if (state.phase !== 'idle') return state
      return { ...state, phase: 'arming', attemptId: action.attemptId, errorMessage: null }
    case 'MIC_READY':
      if (state.phase !== 'arming') return state
      return { ...state, phase: 'listening' }
    case 'END_LEARNER_TURN':
      if (state.phase !== 'listening') return state
      return { ...state, phase: 'thinking', turnCount: state.turnCount + 1 }
    case 'RESPONSE_STARTED':
      if (state.phase !== 'thinking') return state
      return { ...state, phase: 'speaking', completedObjectiveIds: uniqueObjectives(state.completedObjectiveIds, action.completedObjectiveIds) }
    case 'RESPONSE_FINISHED':
      if (state.phase !== 'speaking') return state
      return { ...state, phase: 'listening' }
    case 'PAUSE':
      if (state.phase === 'idle' || state.phase === 'paused' || state.phase === 'completed' || state.phase === 'error') return state
      return { ...state, phase: 'paused', previousActivePhase: state.phase }
    case 'RESUME':
      if (state.phase !== 'paused') return state
      return { ...state, phase: state.previousActivePhase ?? 'listening', previousActivePhase: null }
    case 'COMPLETE':
      if (state.phase === 'idle' || state.phase === 'completed') return state
      return { ...state, phase: 'completed', result: action.result, previousActivePhase: null }
    case 'FAIL':
      if (state.phase === 'completed') return state
      return { ...state, phase: 'error', errorMessage: action.message, previousActivePhase: null }
    case 'RESET':
      return { ...state, phase: 'idle', attemptId: null, completedObjectiveIds: [], turnCount: 0, errorMessage: null, result: null, previousActivePhase: null }
  }
}
