import type { AttemptEvent } from './types'

const DATABASE_NAME = 'language-threshold-speaking'
const DATABASE_VERSION = 2
const STORE_NAME = 'attempt-events-v2'
const LEGACY_STORE_NAME = 'attempt-events'

type AttemptEventKey = [AttemptEvent['attemptId'], AttemptEvent['idempotencyKey']]

function isMigratableAttemptEvent(value: unknown): value is AttemptEvent {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<AttemptEvent>
  return typeof candidate.attemptId === 'string' && typeof candidate.idempotencyKey === 'string'
}

function eventKey(attemptId: AttemptEvent['attemptId'], idempotencyKey: AttemptEvent['idempotencyKey']): AttemptEventKey {
  return [attemptId, idempotencyKey]
}

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    let blocked = false
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION)
    request.onupgradeneeded = () => {
      const database = request.result
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const store = database.createObjectStore(STORE_NAME, { keyPath: ['attemptId', 'idempotencyKey'] })
        store.createIndex('attemptId', 'attemptId', { unique: false })

        if (database.objectStoreNames.contains(LEGACY_STORE_NAME) && request.transaction) {
          const legacy = request.transaction.objectStore(LEGACY_STORE_NAME)
          legacy.openCursor().onsuccess = cursorEvent => {
            const cursor = (cursorEvent.target as IDBRequest<IDBCursorWithValue | null>).result
            if (!cursor) {
              database.deleteObjectStore(LEGACY_STORE_NAME)
              return
            }
            if (isMigratableAttemptEvent(cursor.value)) store.put(cursor.value)
            cursor.continue()
          }
        }
      }
    }
    request.onsuccess = () => {
      if (blocked) request.result.close()
      else resolve(request.result)
    }
    request.onerror = () => reject(request.error ?? new Error('Could not open speaking outbox.'))
    request.onblocked = () => {
      blocked = true
      reject(new Error('Speaking outbox upgrade is blocked by another open tab. Close other tabs and retry.'))
    }
  })
}

function requestResult<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error ?? new Error('Speaking outbox request failed.'))
  })
}

function transactionCompletion(transaction: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve()
    transaction.onabort = () => reject(transaction.error ?? new Error('Speaking outbox transaction was aborted.'))
    transaction.onerror = () => reject(transaction.error ?? new Error('Speaking outbox transaction failed.'))
  })
}

export class SpeakingEventOutbox {
  async enqueue(event: AttemptEvent) {
    const database = await openDatabase()
    try {
      const transaction = database.transaction(STORE_NAME, 'readwrite')
      const completion = transactionCompletion(transaction)
      await requestResult(transaction.objectStore(STORE_NAME).put(event))
      await completion
    } finally {
      database.close()
    }
  }

  async list(attemptId?: AttemptEvent['attemptId']): Promise<AttemptEvent[]> {
    const database = await openDatabase()
    try {
      const transaction = database.transaction(STORE_NAME, 'readonly')
      const completion = transactionCompletion(transaction)
      const store = transaction.objectStore(STORE_NAME)
      const request = attemptId ? store.index('attemptId').getAll(attemptId) : store.getAll()
      const events = await requestResult(request) as AttemptEvent[]
      await completion
      return events.sort((left, right) => left.sequence - right.sequence || left.occurredAt.localeCompare(right.occurredAt))
    } finally {
      database.close()
    }
  }

  async acknowledge(attemptId: AttemptEvent['attemptId'], idempotencyKey: string) {
    const database = await openDatabase()
    try {
      const transaction = database.transaction(STORE_NAME, 'readwrite')
      const completion = transactionCompletion(transaction)
      await requestResult(transaction.objectStore(STORE_NAME).delete(eventKey(attemptId, idempotencyKey)))
      await completion
    } finally {
      database.close()
    }
  }

  async clear(attemptId?: AttemptEvent['attemptId']) {
    const database = await openDatabase()

    try {
      if (!attemptId) {
        const transaction = database.transaction(STORE_NAME, 'readwrite')
        const completion = transactionCompletion(transaction)
        await requestResult(transaction.objectStore(STORE_NAME).clear())
        await completion
        return
      }

      const transaction = database.transaction(STORE_NAME, 'readwrite')
      const completion = transactionCompletion(transaction)
      const range = IDBKeyRange.bound(eventKey(attemptId, ''), eventKey(attemptId, '\uffff'))
      await requestResult(transaction.objectStore(STORE_NAME).delete(range))
      await completion
    } finally {
      database.close()
    }
  }
}

export function deduplicateAttemptEvents(events: AttemptEvent[]) {
  return [...new Map(events.map(event => [`${event.attemptId}\u0000${event.idempotencyKey}`, event])).values()]
    .sort((left, right) => left.sequence - right.sequence || left.occurredAt.localeCompare(right.occurredAt))
}
