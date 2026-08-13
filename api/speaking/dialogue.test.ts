import { describe, expect, it } from 'vitest'
import { parseDialogueToolResult, validDialogueHistory } from './dialogue.js'

const objectiveIds = new Set(['objective_one', 'objective_two'])

describe('constrained dialogue result', () => {
  it('accepts only authored provisional objective ids', () => {
    expect(parseDialogueToolResult({
      assistantText: 'Muy bien. ¿Cuándo necesita el material?',
      provisionalObjectiveIds: ['objective_one', 'objective_one'],
      deferredFeedback: ['Use the article “el”.'],
    }, objectiveIds)).toEqual({
      assistantText: 'Muy bien. ¿Cuándo necesita el material?',
      provisionalObjectiveIds: ['objective_one'],
      deferredFeedback: ['Use the article “el”.'],
    })
  })

  it('rejects unknown objective ids and oversized feedback', () => {
    expect(parseDialogueToolResult({ assistantText: 'Hola', provisionalObjectiveIds: ['unknown'], deferredFeedback: [] }, objectiveIds)).toBeNull()
    expect(parseDialogueToolResult({ assistantText: 'Hola', provisionalObjectiveIds: [], deferredFeedback: ['a', 'b', 'c', 'd'] }, objectiveIds)).toBeNull()
    expect(parseDialogueToolResult({ assistantText: '   ', provisionalObjectiveIds: [], deferredFeedback: [] }, objectiveIds)).toBeNull()
  })
})

describe('speaking dialogue history', () => {
  it('accepts complete learner/assistant pairs only', () => {
    expect(validDialogueHistory([])).toBe(true)
    expect(validDialogueHistory([{ role: 'learner', text: 'Hola' }, { role: 'assistant', text: 'Buenos días' }])).toBe(true)
    expect(validDialogueHistory([{ role: 'assistant', text: 'Hola' }, { role: 'learner', text: 'Buenos días' }])).toBe(false)
    expect(validDialogueHistory([{ role: 'learner', text: 'Hola' }])).toBe(false)
    expect(validDialogueHistory([{ role: 'learner', text: ' ' }, { role: 'assistant', text: 'Bien' }])).toBe(false)
  })
})
