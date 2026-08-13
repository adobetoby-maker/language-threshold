import { describe, expect, it } from 'vitest'
import { parseDialogueToolResult } from './dialogue.js'

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
