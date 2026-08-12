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
    const transaction = database.transaction(STORE_NAME, 'readwrite')
    const completion = transactionCompletion(transaction)
    await requestResult(transaction.objectStore(STORE_NAME).put(event))
    await completion
    database.close()
  }

  async list(attemptId?: AttemptEvent['attemptId']): Promise<AttemptEvent[]> {
    const database = await openDatabase()
    const transaction = database.transaction(STORE_NAME, 'readonly')
    const completion = transactionCompletion(transaction)
    const store = transaction.objectStore(STORE_NAME)
    const request = attemptId ? store.index('attemptId').getAll(attemptId) : store.getAll()
    const events = await requestResult(request) as AttemptEvent[]
    await completion
    database.close()
    return events.sort((left, right) => left.sequence - right.sequence || left.occurredAt.localeCompare(right.occurredAt))
  }

  async acknowledge(idempotencyKey: string) {
    const database = await openDatabase()
    const transaction = database.transaction(STORE_NAME, 'readwrite')
    const completion = transactionCompletion(transaction)
    await requestResult(transaction.objectStore(STORE_NAME).delete(idempotencyKey))
    await completion
    database.close()
  }

  async clear(attemptId?: AttemptEvent['attemptId']) {
    const database = await openDatabase()

    if (!attemptId) {
      const transaction = database.transaction(STORE_NAME, 'readwrite')
      const completion = transactionCompletion(transaction)
      await requestResult(transaction.objectStore(STORE_NAME).clear())
      await completion
      database.close()
      return
    }

    const readTransaction = database.transaction(STORE_NAME, 'readonly')
    const readCompletion = transactionCompletion(readTransaction)
    const keys = await requestResult(readTransaction.objectStore(STORE_NAME).index('attemptId').getAllKeys(attemptId))
    await readCompletion

    if (keys.length > 0) {
      const writeTransaction = database.transaction(STORE_NAME, 'readwrite')
      const writeCompletion = transactionCompletion(writeTransaction)
      const store = writeTransaction.objectStore(STORE_NAME)
      await Promise.all(keys.map(key => requestResult(store.delete(key))))
      await writeCompletion
    }

    database.close()
  }
}

export function deduplicateAttemptEvents(events: AttemptEvent[]) {
  return [...new Map(events.map(event => [event.idempotencyKey, event])).values()]
    .sort((left, right) => left.sequence - right.sequence || left.occurredAt.localeCompare(right.occurredAt))
}
