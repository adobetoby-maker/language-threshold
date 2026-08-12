import { describe, expect, it } from 'vitest'
import { SPEAKING_SCENARIOS } from '../domain/scenarios'
import { createInitialSessionState, speakingSessionReducer } from './machine'

describe('speaking session state machine', () => {
  it('moves through a push-to-talk turn without skipping states', () => {
    let state = createInitialSessionState(SPEAKING_SCENARIOS[0])
    state = speakingSessionReducer(state, { type: 'START', attemptId: 'attempt_test' })
    expect(state.phase).toBe('arming')
    state = speakingSessionReducer(state, { type: 'MIC_READY' })
    expect(state.phase).toBe('listening')
    state = speakingSessionReducer(state, { type: 'END_LEARNER_TURN' })
    expect(state.phase).toBe('thinking')
    state = speakingSessionReducer(state, { type: 'RESPONSE_STARTED' })
    expect(state.phase).toBe('speaking')
    state = speakingSessionReducer(state, { type: 'RESPONSE_FINISHED' })
    expect(state.phase).toBe('listening')
    expect(state.turnCount).toBe(1)
  })

  it('pauses and resumes the prior active phase', () => {
    let state = createInitialSessionState(SPEAKING_SCENARIOS[0])
    state = speakingSessionReducer(state, { type: 'START', attemptId: 'attempt_test' })
    state = speakingSessionReducer(state, { type: 'PAUSE' })
    expect(state.phase).toBe('paused')
    state = speakingSessionReducer(state, { type: 'RESUME' })
    expect(state.phase).toBe('arming')
  })

  it('ignores an out-of-order response event', () => {
    const state = createInitialSessionState(SPEAKING_SCENARIOS[0])
    expect(speakingSessionReducer(state, { type: 'RESPONSE_STARTED' })).toBe(state)
  })

  it('does not pause an idle session or fail a completed attempt', () => {
    let state = createInitialSessionState(SPEAKING_SCENARIOS[0])
    expect(speakingSessionReducer(state, { type: 'PAUSE' })).toBe(state)
    state = speakingSessionReducer(state, { type: 'START', attemptId: 'attempt_test' })
    state = speakingSessionReducer(state, {
      type: 'COMPLETE',
      result: { rubricVersion: 'speaking-rubric-v1', tier: 'clay', understandabilityRatio: 0.4, blockedBy: 'Retry.' },
    })
    expect(speakingSessionReducer(state, { type: 'FAIL', message: 'late failure' })).toBe(state)
  })
})
