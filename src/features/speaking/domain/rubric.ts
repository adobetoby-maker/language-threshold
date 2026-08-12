import type {
  CircumlocutionEvaluationProposal,
  MasteryResult,
  ObjectiveId,
  RubricEvidence,
  SpeakingScenarioVersion,
} from './types'

export const SPEAKING_RUBRIC_VERSION = 'speaking-rubric-v1' as const

function ratio(numerator: number, denominator: number) {
  if (denominator <= 0) return 0
  return Math.min(1, Math.max(0, numerator / denominator))
}

function hasAll(required: ObjectiveId[], completed: Set<ObjectiveId>) {
  return required.every(id => completed.has(id))
}

export function scoreSpeakingAttempt(scenario: SpeakingScenarioVersion, evidence: RubricEvidence): MasteryResult {
  const understandabilityRatio = ratio(evidence.understandableLearnerTurns, evidence.totalLearnerTurns)
  const completed = new Set(evidence.completedObjectiveIds)
  const critical = scenario.objectives.filter(objective => objective.critical).map(objective => objective.id)
  const all = scenario.objectives.map(objective => objective.id)

  if (!evidence.validEndState || evidence.totalLearnerTurns === 0) {
    return { rubricVersion: SPEAKING_RUBRIC_VERSION, tier: 'incomplete', understandabilityRatio, blockedBy: 'Complete a valid speaking attempt.' }
  }

  const bronze = hasAll(critical, completed)
    && evidence.hintCount <= 3
    && evidence.englishFallbackCount <= 1
    && evidence.communicationBreakdownCount <= 3
    && understandabilityRatio >= 0.55

  const silver = hasAll(all, completed)
    && evidence.hintCount <= 1
    && evidence.englishFallbackCount === 0
    && evidence.communicationBreakdownCount <= 1
    && understandabilityRatio >= 0.7

  const gold = silver
    && evidence.hintCount === 0
    && evidence.recoveryEventCount >= 1
    && understandabilityRatio >= 0.85

  if (gold) return { rubricVersion: SPEAKING_RUBRIC_VERSION, tier: 'gold', understandabilityRatio, blockedBy: null }

  if (silver) {
    const blockedBy = evidence.hintCount > 0
      ? 'Complete the mission without hints.'
      : evidence.recoveryEventCount < 1
        ? 'Demonstrate one successful communication recovery.'
        : 'Keep at least 85% of learner turns understandable.'
    return { rubricVersion: SPEAKING_RUBRIC_VERSION, tier: 'silver', understandabilityRatio, blockedBy }
  }

  if (bronze) {
    const missing = scenario.objectives.find(objective => !completed.has(objective.id))
    const blockedBy = missing
      ? `Complete the remaining objective: ${missing.description}`
      : evidence.englishFallbackCount > 0
        ? 'Complete the mission without English fallback.'
        : evidence.hintCount > 1
          ? 'Use no more than one hint.'
          : evidence.communicationBreakdownCount > 1
            ? 'Resolve communication with no more than one breakdown.'
            : 'Keep at least 70% of learner turns understandable.'
    return { rubricVersion: SPEAKING_RUBRIC_VERSION, tier: 'bronze', understandabilityRatio, blockedBy }
  }

  const missingCritical = scenario.objectives.find(objective => objective.critical && !completed.has(objective.id))
  return {
    rubricVersion: SPEAKING_RUBRIC_VERSION,
    tier: 'clay',
    understandabilityRatio,
    blockedBy: missingCritical
      ? `Complete the critical objective: ${missingCritical.description}`
      : 'Reduce assistance and communication breakdowns.',
  }
}

export function acceptsCircumlocution(
  proposal: CircumlocutionEvaluationProposal,
  requiredFeatureCount: number,
) {
  return proposal.blindGuessConceptId === proposal.targetConceptId
    && proposal.usedTargetLanguage
    && !proposal.vague
    && proposal.distinguishingFeatureCount >= requiredFeatureCount
    && proposal.evidenceSpans.length > 0
    && proposal.confidence >= 0.8
}
