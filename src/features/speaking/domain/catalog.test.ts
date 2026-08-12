import { describe, expect, it } from 'vitest'
import { LANGUAGE_UNIT_MANIFEST, resolveAvailableLanguageUnits, resolveLanguageUnit, tryResolveLanguageUnit, validateLanguageUnitManifest } from './catalog'
import { SPEAKING_SCENARIOS } from './scenarios'

describe('canonical speaking vocabulary manifest', () => {
  it('resolves every launch unit to exactly one existing curriculum occurrence', () => {
    expect(validateLanguageUnitManifest()).toEqual([])
    expect(LANGUAGE_UNIT_MANIFEST.map(unit => resolveLanguageUnit(unit.id))).toHaveLength(LANGUAGE_UNIT_MANIFEST.length)
  })

  it('uses only registered vocabulary ids in every scenario', () => {
    const registered = new Set<string>(LANGUAGE_UNIT_MANIFEST.map(unit => unit.id))
    const referenced = SPEAKING_SCENARIOS.flatMap(scenario => [
      ...scenario.vocabularyUnitIds,
      ...scenario.objectives.flatMap(objective => objective.languageUnitIds),
    ])

    expect(referenced.filter(id => !registered.has(id))).toEqual([])
  })

  it('ships six unique, versioned Spanish scenarios', () => {
    expect(SPEAKING_SCENARIOS).toHaveLength(6)
    expect(new Set(SPEAKING_SCENARIOS.map(scenario => scenario.id)).size).toBe(6)
    expect(new Set(SPEAKING_SCENARIOS.map(scenario => scenario.scenarioId)).size).toBe(6)
    expect(SPEAKING_SCENARIOS.every(scenario => scenario.language === 'es' && scenario.version === 1)).toBe(true)
  })

  it('offers a non-throwing resolver for graceful curriculum drift handling', () => {
    expect(tryResolveLanguageUnit('lu_missing')).toBeNull()
    expect(resolveAvailableLanguageUnits(['lu_es_0001', 'lu_missing']).map(result => Boolean(result.unit))).toEqual([true, false])
  })
})
