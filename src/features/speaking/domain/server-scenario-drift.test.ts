import { describe, expect, it } from 'vitest'
import { SERVER_SCENARIOS } from '../../../../api/speaking/_scenario'
import { SPEAKING_SCENARIOS } from './scenarios'

describe('server speaking scenario contract', () => {
  it('matches the client scenario ids, objective ids, titles, and safety rules', () => {
    expect(Object.keys(SERVER_SCENARIOS).sort()).toEqual(SPEAKING_SCENARIOS.map(scenario => scenario.id).sort())
    for (const scenario of SPEAKING_SCENARIOS) {
      const server = SERVER_SCENARIOS[scenario.id]
      expect(server.title).toBe(scenario.title)
      expect(server.objectives.map(item => item.id)).toEqual(scenario.objectives.map(item => item.id))
      expect(server.safetyRules).toEqual(scenario.safetyRules)
    }
  })
})
