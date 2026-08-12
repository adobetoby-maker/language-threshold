export type LanguageCode = 'es'
export type LanguageUnitId = `lu_${string}`
export type ConceptId = `concept_${string}`
export type ContentOccurrenceId = `occ_${string}`
export type SpeakingScenarioId = `scenario_${string}`
export type ScenarioVersionId = `scenario_version_${string}`
export type ObjectiveId = `objective_${string}`

export type Specialty = 'construction' | 'missionary'
export type LearnerLevel = 'A1' | 'A2' | 'B1'
export type FeedbackLanguage = 'english' | 'target' | 'adaptive'
export type MasteryTier = 'incomplete' | 'clay' | 'bronze' | 'silver' | 'gold'

export interface ContentSource {
  specialty: Specialty
  kind: 'module-vocabulary'
  moduleId: string
  sourceTerm: string
}

export interface CanonicalLanguageUnitManifestEntry {
  id: LanguageUnitId
  conceptId: ConceptId
  language: LanguageCode
  locale: 'es-419'
  kind: 'word' | 'phrase'
  lemma: string
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'phrase' | 'proper-noun'
  senseKey: string
  source: ContentSource
}

export interface ContentOccurrence {
  id: ContentOccurrenceId
  languageUnitId: LanguageUnitId
  source: ContentSource
  surfaceForm: string
  contentVersion: 1
}

export interface ResolvedLanguageUnit extends CanonicalLanguageUnitManifestEntry {
  displayForm: string
  occurrence: ContentOccurrence
}

export interface SpeakingObjective {
  id: ObjectiveId
  description: string
  critical: boolean
  evidence: 'meaning' | 'clarification' | 'recovery' | 'social-close'
  languageUnitIds: LanguageUnitId[]
}

export interface RecoveryObjective {
  requiredForGold: true
  targetConceptId: ConceptId
  acceptedStrategies: Array<'describe-feature' | 'give-purpose' | 'ask-clarification' | 'self-repair'>
  minimumDistinguishingFeatures: number
}

export interface SpeakingScenarioVersion {
  id: ScenarioVersionId
  scenarioId: SpeakingScenarioId
  version: 1
  rubricVersion: 'speaking-rubric-v1'
  language: LanguageCode
  locale: 'es-419'
  specialty: Specialty
  sourceModuleIds: string[]
  title: string
  summary: string
  learnerRole: string
  partnerRole: string
  level: LearnerLevel
  quickMinutes: 7 | 8 | 9
  targetMinutes: 10 | 11 | 12 | 13 | 14 | 15
  hardCapMinutes: 18
  vocabularyUnitIds: LanguageUnitId[]
  objectives: SpeakingObjective[]
  recovery: RecoveryObjective
  safetyRules: string[]
}

export interface RubricEvidence {
  validEndState: boolean
  completedObjectiveIds: ObjectiveId[]
  hintCount: number
  englishFallbackCount: number
  communicationBreakdownCount: number
  recoveryEventCount: number
  understandableLearnerTurns: number
  totalLearnerTurns: number
  pronunciationDiagnostic?: number
}

export interface MasteryResult {
  rubricVersion: 'speaking-rubric-v1'
  tier: MasteryTier
  understandabilityRatio: number
  blockedBy: string | null
}

export interface CircumlocutionEvaluationProposal {
  targetConceptId: ConceptId
  blindGuessConceptId: ConceptId | null
  evidenceSpans: string[]
  distinguishingFeatureCount: number
  usedTargetLanguage: boolean
  vague: boolean
  confidence: number
}
