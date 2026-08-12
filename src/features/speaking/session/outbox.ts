import type { AttemptEvent } from './types'

const DATABASE_NAME = 'language-threshold-speaking'
const DATABASE_VERSION = 1
const STORE_NAME = 'attempt-events'

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION)
    request.onupgradeneeded = () => {
      const database = request.result
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const store = database.createObjectStore(STORE_NAME, { keyPath: 'idempotencyKey' })
        store.createIndex('attemptId', 'attemptId', { unique: false })
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error ?? new Error('Could not open speaking outbox.'))
  })
}

function requestResult<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error ?? new Error('Speaking outbox request failed.'))
  })
}

export class SpeakingEventOutbox {
  async enqueue(event: AttemptEvent) {
    const database = await openDatabase()
    const transaction = database.transaction(STORE_NAME, 'readwrite')
    await requestResult(transaction.objectStore(STORE_NAME).put(event))
    database.close()
  }

  async list(attemptId?: AttemptEvent['attemptId']): Promise<AttemptEvent[]> {
    const database = await openDatabase()
    const transaction = database.transaction(STORE_NAME, 'readonly')
    const store = transaction.objectStore(STORE_NAME)
    const request = attemptId ? store.index('attemptId').getAll(attemptId) : store.getAll()
    const events = await requestResult(request) as AttemptEvent[]
    database.close()
    return events.sort((left, right) => left.occurredAt.localeCompare(right.occurredAt))
  }

  async acknowledge(idempotencyKey: string) {
    const database = await openDatabase()
    const transaction = database.transaction(STORE_NAME, 'readwrite')
    await requestResult(transaction.objectStore(STORE_NAME).delete(idempotencyKey))
    database.close()
  }
}

export function deduplicateAttemptEvents(events: AttemptEvent[]) {
  return [...new Map(events.map(event => [event.idempotencyKey, event])).values()]
    .sort((left, right) => left.occurredAt.localeCompare(right.occurredAt))
}
