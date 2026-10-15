import type { AttemptEventId, AttemptId } from './types'

const UUID_PATTERN = '[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}'
const ATTEMPT_ID_PATTERN = new RegExp(`^attempt_${UUID_PATTERN}$`, 'i')
const ATTEMPT_EVENT_ID_PATTERN = new RegExp(`^event_${UUID_PATTERN}$`, 'i')

export function createAttemptId(): AttemptId {
  return `attempt_${crypto.randomUUID()}`
}

export function createAttemptEventId(): AttemptEventId {
  return `event_${crypto.randomUUID()}`
}

export function isAttemptId(value: unknown): value is AttemptId {
  return typeof value === 'string' && ATTEMPT_ID_PATTERN.test(value)
}

export function isAttemptEventId(value: unknown): value is AttemptEventId {
  return typeof value === 'string' && ATTEMPT_EVENT_ID_PATTERN.test(value)
}

export function assertAttemptId(value: unknown): asserts value is AttemptId {
  if (!isAttemptId(value)) throw new Error('Invalid speaking attempt id.')
}

export function assertAttemptEventId(value: unknown): asserts value is AttemptEventId {
  if (!isAttemptEventId(value)) throw new Error('Invalid speaking attempt event id.')
}
