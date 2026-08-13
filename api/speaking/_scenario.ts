interface ServerScenario {
  title: string
  specialty: 'construction' | 'missionary'
  learnerRole: string
  partnerRole: string
  summary: string
  objectives: Array<{ id: string; description: string }>
  safetyRules: string[]
}

export const SERVER_SCENARIOS: Record<string, ServerScenario> = {
  scenario_version_construction_safety_briefing_es_v1: {
    title: 'Pre-shift safety briefing', specialty: 'construction', learnerRole: 'Crew lead', partnerRole: 'Spanish-speaking crew member',
    summary: 'Give a short PPE briefing, confirm fall protection, and check understanding before work starts.',
    objectives: [
      { id: 'objective_safety_name_ppe', description: 'Name the required protective equipment.' },
      { id: 'objective_safety_explain_fall_protection', description: 'Explain when fall protection is required.' },
      { id: 'objective_safety_confirm_understanding', description: 'Ask the crew member to confirm the instruction.' },
    ],
    safetyRules: ['Practice workplace language only.', 'Do not claim regulatory compliance or replace a site safety plan.'],
  },
  scenario_version_construction_materials_measurement_es_v1: {
    title: 'Materials and measurement check', specialty: 'construction', learnerRole: 'Framing lead', partnerRole: 'Crew member staging materials',
    summary: 'Request framing materials, reference the plan, and repair a misunderstood measurement.',
    objectives: [
      { id: 'objective_materials_request_studs', description: 'Request the correct framing material.' },
      { id: 'objective_materials_reference_plan', description: 'Use the plan or layout to clarify placement.' },
      { id: 'objective_materials_repair_measurement', description: 'Detect and repair a misunderstood measurement.' },
    ], safetyRules: ['Practice language only.', 'Do not infer engineering or structural requirements.'],
  },
  scenario_version_construction_hazard_report_es_v1: {
    title: 'Report a job-site hazard', specialty: 'construction', learnerRole: 'Worker reporting a hazard', partnerRole: 'Site supervisor',
    summary: 'Describe a hazard, state the immediate action, and provide the facts needed for an incident report.',
    objectives: [
      { id: 'objective_hazard_describe', description: 'Describe the hazard and its location.' },
      { id: 'objective_hazard_immediate_action', description: 'State the immediate safety or emergency action.' },
      { id: 'objective_hazard_report_facts', description: 'Supply the facts needed for the incident report.' },
    ], safetyRules: ['Practice reporting language only.', 'For a real emergency, stop practice and contact local emergency services or the site lead.'],
  },
  scenario_version_missionary_return_appointment_es_v1: {
    title: 'Door approach and return appointment', specialty: 'missionary', learnerRole: 'Missionary', partnerRole: 'Interested resident',
    summary: 'Introduce the visit respectfully, respond to uncertainty, and arrange a definite return time.',
    objectives: [
      { id: 'objective_door_introduce_purpose', description: 'Introduce the purpose of the visit without pressure.' },
      { id: 'objective_door_handle_uncertainty', description: 'Ask or answer a clarification question respectfully.' },
      { id: 'objective_door_set_return', description: 'Confirm a specific day or time to return.' },
    ], safetyRules: ['Respect refusal immediately.', 'Do not pressure, threaten, or present doctrine as the model’s personal authority.'],
  },
  scenario_version_missionary_restoration_question_es_v1: {
    title: 'Explain the Restoration', specialty: 'missionary', learnerRole: 'Missionary', partnerRole: 'Investigator asking sincere questions',
    summary: 'Give a concise explanation and respond to a sincere follow-up question in plain Spanish.',
    objectives: [
      { id: 'objective_restoration_explain', description: 'Explain restoration using clear, connected meaning.' },
      { id: 'objective_restoration_answer', description: 'Respond directly to a sincere follow-up question.' },
      { id: 'objective_restoration_check_understanding', description: 'Check what the listener understood.' },
    ], safetyRules: ['The AI plays an investigator, not a doctrinal authority.', 'Disengage from hostile religious argument and respect the learner’s stated beliefs.'],
  },
  scenario_version_missionary_church_ride_es_v1: {
    title: 'Invite and coordinate a ride', specialty: 'missionary', learnerRole: 'Missionary or branch member', partnerRole: 'Guest considering an invitation',
    summary: 'Invite someone to church, explain the meeting, and coordinate practical transportation details.',
    objectives: [
      { id: 'objective_invite_make', description: 'Make a clear, respectful invitation.' },
      { id: 'objective_invite_explain_meeting', description: 'Explain the meeting in simple language.' },
      { id: 'objective_invite_coordinate_ride', description: 'Confirm pickup time and place or another transportation plan.' },
    ], safetyRules: ['Respect refusal immediately.', 'Do not collect or expose real addresses in generated examples or telemetry.'],
  },
}
