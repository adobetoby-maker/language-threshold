import { describe, expect, it, vi } from 'vitest'
import {
  assertAttemptEventId,
  assertAttemptId,
  createAttemptEventId,
  createAttemptId,
  isAttemptEventId,
  isAttemptId,
} from './ids'

describe('speaking identifiers', () => {
  it('creates database-compatible attempt and event ids', () => {
    vi.spyOn(crypto, 'randomUUID').mockReturnValue('123e4567-e89b-42d3-a456-426614174000')
    expect(createAttemptId()).toBe('attempt_123e4567-e89b-42d3-a456-426614174000')
    expect(createAttemptEventId()).toBe('event_123e4567-e89b-42d3-a456-426614174000')
    vi.restoreAllMocks()
  })

  it('rejects loose prefixes and malformed uuids at runtime', () => {
    expect(isAttemptId('attempt_test')).toBe(false)
    expect(isAttemptEventId('event_test')).toBe(false)
    expect(() => assertAttemptId('attempt_test')).toThrow('Invalid speaking attempt id.')
    expect(() => assertAttemptEventId('event_test')).toThrow('Invalid speaking attempt event id.')
  })
})
