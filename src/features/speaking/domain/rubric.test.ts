import { describe, expect, it } from 'vitest'
import { acceptsCircumlocution, scoreSpeakingAttempt } from './rubric'
import { SPEAKING_SCENARIOS } from './scenarios'

const scenario = SPEAKING_SCENARIOS[0]
const allObjectives = scenario.objectives.map(objective => objective.id)

describe('speaking mastery rubric v1', () => {
  it('keeps incomplete separate from Clay', () => {
    expect(scoreSpeakingAttempt(scenario, {
      validEndState: false, completedObjectiveIds: [], hintCount: 0, englishFallbackCount: 0,
      communicationBreakdownCount: 0, recoveryEventCount: 0, understandableLearnerTurns: 0, totalLearnerTurns: 0,
    }).tier).toBe('incomplete')
  })

  it('awards Clay for a valid attempt that misses a critical objective', () => {
    expect(scoreSpeakingAttempt(scenario, {
      validEndState: true, completedObjectiveIds: [], hintCount: 4, englishFallbackCount: 2,
      communicationBreakdownCount: 4, recoveryEventCount: 0, understandableLearnerTurns: 2, totalLearnerTurns: 5,
    }).tier).toBe('clay')
  })

  it.each([
    ['bronze', { completedObjectiveIds: scenario.objectives.filter(objective => objective.critical).map(objective => objective.id), hintCount: 2, englishFallbackCount: 1, communicationBreakdownCount: 2, recoveryEventCount: 0, understandableLearnerTurns: 3, totalLearnerTurns: 5 }],
    ['silver', { completedObjectiveIds: allObjectives, hintCount: 1, englishFallbackCount: 0, communicationBreakdownCount: 1, recoveryEventCount: 0, understandableLearnerTurns: 4, totalLearnerTurns: 5 }],
    ['gold', { completedObjectiveIds: allObjectives, hintCount: 0, englishFallbackCount: 0, communicationBreakdownCount: 1, recoveryEventCount: 1, understandableLearnerTurns: 9, totalLearnerTurns: 10 }],
  ] as const)('awards %s from deterministic counters', (tier, evidence) => {
    expect(scoreSpeakingAttempt(scenario, { validEndState: true, ...evidence }).tier).toBe(tier)
  })

  it('does not use pronunciation diagnostics as a tier gate', () => {
    const result = scoreSpeakingAttempt(scenario, {
      validEndState: true, completedObjectiveIds: allObjectives, hintCount: 0, englishFallbackCount: 0,
      communicationBreakdownCount: 0, recoveryEventCount: 1, understandableLearnerTurns: 10, totalLearnerTurns: 10,
      pronunciationDiagnostic: 0,
    })
    expect(result.tier).toBe('gold')
  })

  it('reports the first missing objective that blocks Silver', () => {
    const result = scoreSpeakingAttempt(scenario, {
      validEndState: true,
      completedObjectiveIds: scenario.objectives.filter(objective => objective.critical).map(objective => objective.id),
      hintCount: 0, englishFallbackCount: 0, communicationBreakdownCount: 0,
      recoveryEventCount: 1, understandableLearnerTurns: 10, totalLearnerTurns: 10,
    })

    expect(result.tier).toBe('bronze')
    expect(result.blockedBy).toContain('Ask the crew member to confirm the instruction.')
  })

  it('treats zero learner turns as incomplete even when the caller marks the end state valid', () => {
    expect(scoreSpeakingAttempt(scenario, {
      validEndState: true, completedObjectiveIds: allObjectives, hintCount: 0, englishFallbackCount: 0,
      communicationBreakdownCount: 0, recoveryEventCount: 1, understandableLearnerTurns: 0, totalLearnerTurns: 0,
    }).tier).toBe('incomplete')
  })
})

describe('circumlocution acceptance', () => {
  it('requires a blind referent match, evidence, target-language use, and confidence', () => {
    expect(acceptsCircumlocution({
      targetConceptId: 'concept_harness', blindGuessConceptId: 'concept_harness',
      evidenceSpans: ['lo que te protege cuando trabajas arriba'], distinguishingFeatureCount: 2,
      usedTargetLanguage: true, vague: false, confidence: 0.92,
    }, scenario.recovery)).toBe(true)
  })

  it('rejects vague descriptions even when the guessed referent happens to match', () => {
    expect(acceptsCircumlocution({
      targetConceptId: 'concept_harness', blindGuessConceptId: 'concept_harness',
      evidenceSpans: ['una cosa'], distinguishingFeatureCount: 0,
      usedTargetLanguage: true, vague: true, confidence: 0.95,
    }, scenario.recovery)).toBe(false)
  })
})
