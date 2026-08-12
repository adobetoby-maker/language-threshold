import 'fake-indexeddb/auto'
import { beforeEach, describe, expect, it } from 'vitest'
import { deduplicateAttemptEvents, SpeakingEventOutbox } from './outbox'
import type { AttemptEvent } from './types'

const DATABASE_NAME = 'language-threshold-speaking'
const LEGACY_STORE_NAME = 'attempt-events'

function deleteOutboxDatabase() {
  return new Promise<void>((resolve, reject) => {
    const request = indexedDB.deleteDatabase(DATABASE_NAME)
    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
    request.onblocked = () => reject(new Error('Test database deletion was blocked.'))
  })
}

function seedLegacyOutbox(records: unknown[]) {
  return new Promise<void>((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, 1)
    request.onupgradeneeded = () => {
      const store = request.result.createObjectStore(LEGACY_STORE_NAME, { keyPath: 'idempotencyKey' })
      records.forEach(record => store.put(record))
    }
    request.onsuccess = () => {
      request.result.close()
      resolve()
    }
    request.onerror = () => reject(request.error)
  })
}

function databaseStoreNames() {
  return new Promise<string[]>((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, 2)
    request.onsuccess = () => {
      const names = Array.from(request.result.objectStoreNames)
      request.result.close()
      resolve(names)
    }
    request.onerror = () => reject(request.error)
  })
}

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

  beforeEach(deleteOutboxDatabase)

  it('migrates valid v1 rows, skips malformed rows, and removes the legacy store', async () => {
    const valid = event('turn-1', '2026-08-12T10:00:01.000Z')
    await seedLegacyOutbox([valid, { idempotencyKey: 'malformed-without-attempt' }])

    expect((await outbox.list()).map(item => item.idempotencyKey)).toEqual(['turn-1'])
    expect(await databaseStoreNames()).not.toContain(LEGACY_STORE_NAME)
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

    await outbox.acknowledge('attempt_test', 'turn-1')
    expect((await outbox.list()).map(item => item.idempotencyKey)).toEqual(['turn-2'])
  })

  it('clears one attempt without deleting another attempt', async () => {
    await outbox.enqueue(event('turn-1', '2026-08-12T10:00:01.000Z'))
    await outbox.enqueue({ ...event('other-1', '2026-08-12T10:00:02.000Z'), attemptId: 'attempt_other', sequence: 1 })

    await outbox.clear('attempt_test')
    expect((await outbox.list()).map(item => item.attemptId)).toEqual(['attempt_other'])
  })

  it('scopes identical idempotency keys to their attempt', async () => {
    await outbox.enqueue(event('turn-1', '2026-08-12T10:00:01.000Z'))
    await outbox.enqueue({ ...event('turn-1', '2026-08-12T10:00:02.000Z'), attemptId: 'attempt_other' })

    expect(await outbox.list()).toHaveLength(2)
    await outbox.acknowledge('attempt_test', 'turn-1')
    expect((await outbox.list()).map(item => item.attemptId)).toEqual(['attempt_other'])
  })
})
