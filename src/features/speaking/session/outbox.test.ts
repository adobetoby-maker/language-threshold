import { describe, expect, it } from 'vitest'
import { deduplicateAttemptEvents } from './outbox'
import type { AttemptEvent } from './types'

function event(idempotencyKey: string, occurredAt: string): AttemptEvent {
  return {
    id: `event_${idempotencyKey}`,
    idempotencyKey,
    attemptId: 'attempt_test',
    scenarioVersionId: 'scenario_version_construction_safety_briefing_es_v1',
    type: 'learner.turn.completed',
    occurredAt,
    payload: {},
  }
}

describe('speaking event outbox', () => {
  it('deduplicates retries by idempotency key and orders events chronologically', () => {
    const events = deduplicateAttemptEvents([
      event('turn-2', '2026-08-12T10:00:02.000Z'),
      event('turn-1', '2026-08-12T10:00:01.000Z'),
      event('turn-1', '2026-08-12T10:00:01.000Z'),
    ])

    expect(events.map(item => item.idempotencyKey)).toEqual(['turn-1', 'turn-2'])
  })
})
