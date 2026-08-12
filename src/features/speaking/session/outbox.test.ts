import 'fake-indexeddb/auto'
import { beforeEach, describe, expect, it } from 'vitest'
import { deduplicateAttemptEvents, SpeakingEventOutbox } from './outbox'
import type { AttemptEvent } from './types'

function event(idempotencyKey: string, occurredAt: string): AttemptEvent {
  return {
    id: `event_${idempotencyKey}`,
    idempotencyKey,
    attemptId: 'attempt_test',
    scenarioVersionId: 'scenario_version_construction_safety_briefing_es_v1',
    type: 'learner.turn.completed',
    sequence: Number(idempotencyKey.replace(/\D/g, '')) || 0,
    occurredAt,
    payload: {},
  }
}

describe('speaking event outbox', () => {
  const outbox = new SpeakingEventOutbox()

  beforeEach(async () => {
    await outbox.clear()
  })

  it('deduplicates retries by idempotency key and orders events chronologically', () => {
    const events = deduplicateAttemptEvents([
      event('turn-2', '2026-08-12T10:00:02.000Z'),
      event('turn-1', '2026-08-12T10:00:01.000Z'),
      event('turn-1', '2026-08-12T10:00:01.000Z'),
    ])

    expect(events.map(item => item.idempotencyKey)).toEqual(['turn-1', 'turn-2'])
  })

  it('commits, replaces idempotent retries, orders by sequence, and acknowledges events', async () => {
    await outbox.enqueue(event('turn-2', '2026-08-12T10:00:01.000Z'))
    await outbox.enqueue(event('turn-1', '2026-08-12T10:00:01.000Z'))
    await outbox.enqueue({ ...event('turn-1', '2026-08-12T10:00:03.000Z'), payload: { retried: true } })

    expect((await outbox.list('attempt_test')).map(item => item.idempotencyKey)).toEqual(['turn-1', 'turn-2'])
    expect((await outbox.list('attempt_test'))[0].payload).toEqual({ retried: true })

    await outbox.acknowledge('turn-1')
    expect((await outbox.list()).map(item => item.idempotencyKey)).toEqual(['turn-2'])
  })

  it('clears one attempt without deleting another attempt', async () => {
    await outbox.enqueue(event('turn-1', '2026-08-12T10:00:01.000Z'))
    await outbox.enqueue({ ...event('other-1', '2026-08-12T10:00:02.000Z'), attemptId: 'attempt_other', sequence: 1 })

    await outbox.clear('attempt_test')
    expect((await outbox.list()).map(item => item.attemptId)).toEqual(['attempt_other'])
  })
})
