import type { SpeakingScenarioVersion } from './types'

export const SPEAKING_SCENARIOS: SpeakingScenarioVersion[] = [
  {
    id: 'scenario_version_construction_safety_briefing_es_v1',
    scenarioId: 'scenario_construction_safety_briefing',
    version: 1,
    rubricVersion: 'speaking-rubric-v1',
    language: 'es', locale: 'es-419', specialty: 'construction', sourceModuleIds: ['safety', 'foreman'],
    title: 'Pre-shift safety briefing',
    summary: 'Give a short PPE briefing, confirm fall protection, and check understanding before work starts.',
    learnerRole: 'Crew lead', partnerRole: 'Spanish-speaking crew member', level: 'A2', quickMinutes: 7, targetMinutes: 12, hardCapMinutes: 18,
    vocabularyUnitIds: ['lu_es_0001', 'lu_es_0002', 'lu_es_0003', 'lu_es_0008'],
    objectives: [
      { id: 'objective_safety_name_ppe', description: 'Name the required protective equipment.', critical: true, evidence: 'meaning', languageUnitIds: ['lu_es_0001', 'lu_es_0008'] },
      { id: 'objective_safety_explain_fall_protection', description: 'Explain when the harness or fall protection is required.', critical: true, evidence: 'meaning', languageUnitIds: ['lu_es_0002', 'lu_es_0003'] },
      { id: 'objective_safety_confirm_understanding', description: 'Ask the crew member to confirm the instruction.', critical: false, evidence: 'clarification', languageUnitIds: [] },
    ],
    recovery: { requiredForGold: true, targetConceptId: 'concept_harness', acceptedStrategies: ['describe-feature', 'give-purpose', 'ask-clarification', 'self-repair'], minimumDistinguishingFeatures: 1 },
    safetyRules: ['Practice workplace language only.', 'Do not claim regulatory compliance or replace a site safety plan.'],
  },
  {
    id: 'scenario_version_construction_materials_measurement_es_v1', scenarioId: 'scenario_construction_materials_measurement', version: 1,
    rubricVersion: 'speaking-rubric-v1', language: 'es', locale: 'es-419', specialty: 'construction', sourceModuleIds: ['framer'],
    title: 'Materials and measurement check', summary: 'Request framing materials, reference the plan, and repair a misunderstood measurement.',
    learnerRole: 'Framing lead', partnerRole: 'Crew member staging materials', level: 'A2', quickMinutes: 7, targetMinutes: 11, hardCapMinutes: 18,
    vocabularyUnitIds: ['lu_es_0011', 'lu_es_0012', 'lu_es_0013'],
    objectives: [
      { id: 'objective_materials_request_studs', description: 'Request the correct framing material.', critical: true, evidence: 'meaning', languageUnitIds: ['lu_es_0011'] },
      { id: 'objective_materials_reference_plan', description: 'Use the plan or layout to clarify placement.', critical: true, evidence: 'clarification', languageUnitIds: ['lu_es_0012', 'lu_es_0013'] },
      { id: 'objective_materials_repair_measurement', description: 'Detect and repair a misunderstood measurement.', critical: false, evidence: 'recovery', languageUnitIds: [] },
    ],
    recovery: { requiredForGold: true, targetConceptId: 'concept_blueprint', acceptedStrategies: ['describe-feature', 'give-purpose', 'ask-clarification', 'self-repair'], minimumDistinguishingFeatures: 1 },
    safetyRules: ['Practice language only.', 'Do not infer engineering or structural requirements.'],
  },
  {
    id: 'scenario_version_construction_hazard_report_es_v1', scenarioId: 'scenario_construction_hazard_report', version: 1,
    rubricVersion: 'speaking-rubric-v1', language: 'es', locale: 'es-419', specialty: 'construction', sourceModuleIds: ['safety'],
    title: 'Report a job-site hazard', summary: 'Describe a hazard, state the immediate action, and provide the facts needed for an incident report.',
    learnerRole: 'Worker reporting a hazard', partnerRole: 'Site supervisor', level: 'A2', quickMinutes: 8, targetMinutes: 12, hardCapMinutes: 18,
    vocabularyUnitIds: ['lu_es_0004', 'lu_es_0005', 'lu_es_0006', 'lu_es_0007'],
    objectives: [
      { id: 'objective_hazard_describe', description: 'Describe the hazard and its location.', critical: true, evidence: 'meaning', languageUnitIds: ['lu_es_0004'] },
      { id: 'objective_hazard_immediate_action', description: 'State the immediate safety or emergency action.', critical: true, evidence: 'meaning', languageUnitIds: ['lu_es_0006', 'lu_es_0007'] },
      { id: 'objective_hazard_report_facts', description: 'Supply the facts needed for the incident report.', critical: false, evidence: 'clarification', languageUnitIds: ['lu_es_0005'] },
    ],
    recovery: { requiredForGold: true, targetConceptId: 'concept_hazard', acceptedStrategies: ['describe-feature', 'give-purpose', 'ask-clarification', 'self-repair'], minimumDistinguishingFeatures: 2 },
    safetyRules: ['Practice reporting language only.', 'For a real emergency, stop practice and contact local emergency services or the site lead.'],
  },
  {
    id: 'scenario_version_missionary_return_appointment_es_v1', scenarioId: 'scenario_missionary_return_appointment', version: 1,
    rubricVersion: 'speaking-rubric-v1', language: 'es', locale: 'es-419', specialty: 'missionary', sourceModuleIds: ['restoration'],
    title: 'Door approach and return appointment', summary: 'Introduce the visit respectfully, respond to uncertainty, and arrange a definite return time.',
    learnerRole: 'Missionary', partnerRole: 'Interested resident', level: 'A1', quickMinutes: 7, targetMinutes: 10, hardCapMinutes: 18,
    vocabularyUnitIds: ['lu_es_0017', 'lu_es_0018'],
    objectives: [
      { id: 'objective_door_introduce_purpose', description: 'Introduce the purpose of the visit without pressure.', critical: true, evidence: 'meaning', languageUnitIds: ['lu_es_0017'] },
      { id: 'objective_door_handle_uncertainty', description: 'Ask or answer a clarification question respectfully.', critical: false, evidence: 'clarification', languageUnitIds: ['lu_es_0018'] },
      { id: 'objective_door_set_return', description: 'Confirm a specific day or time to return.', critical: true, evidence: 'social-close', languageUnitIds: [] },
    ],
    recovery: { requiredForGold: true, targetConceptId: 'concept_church', acceptedStrategies: ['describe-feature', 'give-purpose', 'ask-clarification', 'self-repair'], minimumDistinguishingFeatures: 1 },
    safetyRules: ['Respect refusal immediately.', 'Do not pressure, threaten, or present doctrine as the model’s personal authority.'],
  },
  {
    id: 'scenario_version_missionary_restoration_question_es_v1', scenarioId: 'scenario_missionary_restoration_question', version: 1,
    rubricVersion: 'speaking-rubric-v1', language: 'es', locale: 'es-419', specialty: 'missionary', sourceModuleIds: ['restoration'],
    title: 'Explain the Restoration', summary: 'Give a concise explanation and respond to a sincere follow-up question in plain Spanish.',
    learnerRole: 'Missionary', partnerRole: 'Investigator asking sincere questions', level: 'A2', quickMinutes: 9, targetMinutes: 15, hardCapMinutes: 18,
    vocabularyUnitIds: ['lu_es_0014', 'lu_es_0015', 'lu_es_0016', 'lu_es_0017', 'lu_es_0018'],
    objectives: [
      { id: 'objective_restoration_explain', description: 'Explain restoration using clear, connected meaning.', critical: true, evidence: 'meaning', languageUnitIds: ['lu_es_0014', 'lu_es_0015', 'lu_es_0016'] },
      { id: 'objective_restoration_answer', description: 'Respond directly to a sincere follow-up question.', critical: true, evidence: 'meaning', languageUnitIds: ['lu_es_0017', 'lu_es_0018'] },
      { id: 'objective_restoration_check_understanding', description: 'Check what the listener understood.', critical: false, evidence: 'clarification', languageUnitIds: [] },
    ],
    recovery: { requiredForGold: true, targetConceptId: 'concept_revelation', acceptedStrategies: ['describe-feature', 'give-purpose', 'ask-clarification', 'self-repair'], minimumDistinguishingFeatures: 2 },
    safetyRules: ['The AI plays an investigator, not a doctrinal authority.', 'Disengage from hostile religious argument and respect the learner’s stated beliefs.'],
  },
  {
    id: 'scenario_version_missionary_church_ride_es_v1', scenarioId: 'scenario_missionary_church_ride', version: 1,
    rubricVersion: 'speaking-rubric-v1', language: 'es', locale: 'es-419', specialty: 'missionary', sourceModuleIds: ['church-service'],
    title: 'Invite and coordinate a ride', summary: 'Invite someone to church, explain the meeting, and coordinate practical transportation details.',
    learnerRole: 'Missionary or branch member', partnerRole: 'Guest considering an invitation', level: 'A1', quickMinutes: 7, targetMinutes: 10, hardCapMinutes: 18,
    vocabularyUnitIds: ['lu_es_0019', 'lu_es_0020'],
    objectives: [
      { id: 'objective_invite_make', description: 'Make a clear, respectful invitation.', critical: true, evidence: 'social-close', languageUnitIds: ['lu_es_0019'] },
      { id: 'objective_invite_explain_meeting', description: 'Explain the meeting in simple language.', critical: false, evidence: 'meaning', languageUnitIds: ['lu_es_0019'] },
      { id: 'objective_invite_coordinate_ride', description: 'Confirm pickup time and place or another transportation plan.', critical: true, evidence: 'clarification', languageUnitIds: ['lu_es_0020'] },
    ],
    recovery: { requiredForGold: true, targetConceptId: 'concept_ride_to_church', acceptedStrategies: ['describe-feature', 'give-purpose', 'ask-clarification', 'self-repair'], minimumDistinguishingFeatures: 1 },
    safetyRules: ['Respect refusal immediately.', 'Do not collect or expose real addresses in generated examples or telemetry.'],
  },
]

export function findScenario(scenarioId: string) {
  return SPEAKING_SCENARIOS.find(scenario => scenario.scenarioId === scenarioId)
}
