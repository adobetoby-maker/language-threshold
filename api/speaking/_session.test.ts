import { afterEach, describe, expect, it, vi } from 'vitest'

const redisMock = vi.hoisted(() => ({
  instances: [] as Array<{ eval: ReturnType<typeof vi.fn>; transaction: Record<string, ReturnType<typeof vi.fn>> }>,
  evalResult: 1,
}))

vi.mock('@upstash/redis', () => ({
  Redis: class {
    eval = vi.fn(async () => redisMock.evalResult)
    transaction = {
      hset: vi.fn(), expire: vi.fn(), hincrbyfloat: vi.fn(), hincrby: vi.fn(), set: vi.fn(), exec: vi.fn(async () => []),
    }
    constructor() { redisMock.instances.push(this) }
    multi() { return this.transaction }
  },
}))

import {
  createSpeakingSession,
  encodeSessionLease,
  reserveProviderTokenIssuance,
  verifySessionLease,
  type SessionLeasePayload,
} from './_session.js'

const SECRET = 'test-session-secret-that-is-long-enough-1234'
const payload: SessionLeasePayload = {
  sessionId: '550e8400-e29b-41d4-a716-446655440000',
  principalId: 'principal-1',
  scenarioVersionId: 'scenario_version_construction_safety_briefing_es_v1',
  expiresAt: Date.now() + 60_000,
}

describe('signed speaking session lease', () => {
  afterEach(() => {
    delete process.env.SPEAKING_SESSION_SECRET
    delete process.env.UPSTASH_REDIS_REST_URL
    delete process.env.UPSTASH_REDIS_REST_TOKEN
    redisMock.instances.length = 0
    redisMock.evalResult = 1
  })

  it('binds the lease to principal, scenario, and expiry', () => {
    process.env.SPEAKING_SESSION_SECRET = SECRET
    const lease = encodeSessionLease(payload, SECRET)
    expect(verifySessionLease(lease, payload.principalId, payload.scenarioVersionId)).toMatchObject({ sessionId: payload.sessionId })
    expect(verifySessionLease(lease, 'principal-2', payload.scenarioVersionId)).toBeNull()
    expect(verifySessionLease(lease, payload.principalId, 'scenario_version_other')).toBeNull()
    expect(verifySessionLease(lease, payload.principalId, payload.scenarioVersionId, payload.expiresAt)).toBeNull()
  })

  it('rejects tampering and missing configuration', () => {
    process.env.SPEAKING_SESSION_SECRET = SECRET
    const lease = encodeSessionLease(payload, SECRET)
    expect(verifySessionLease(`${lease}x`, payload.principalId, payload.scenarioVersionId)).toBeNull()
    delete process.env.SPEAKING_SESSION_SECRET
    expect(verifySessionLease(lease, payload.principalId, payload.scenarioVersionId)).toBeNull()
  })

  it('creates the session record and expiry in one Redis transaction', async () => {
    process.env.SPEAKING_SESSION_SECRET = SECRET
    process.env.UPSTASH_REDIS_REST_URL = 'https://redis.example.test'
    process.env.UPSTASH_REDIS_REST_TOKEN = 'test-token'
    await expect(createSpeakingSession(payload.principalId, payload.scenarioVersionId)).resolves.toMatchObject({ hardCapSeconds: 1080, maxTurns: 24 })
    const transaction = redisMock.instances[0].transaction
    expect(transaction.hset).toHaveBeenCalledOnce()
    expect(transaction.hset.mock.calls[0][1]).toMatchObject({ providerTokenIssuances: 0, expiresAtMs: expect.any(Number) })
    expect(transaction.expire).toHaveBeenCalledOnce()
    expect(transaction.exec).toHaveBeenCalledOnce()
  })

  it.each([
    [-1, { allowed: false, reason: 'expired' }],
    [-2, { allowed: false, reason: 'limit' }],
    [48, { allowed: true, tokenIssuances: 48 }],
  ] as const)('maps atomic token issuance result %s', async (evalResult, expected) => {
    process.env.UPSTASH_REDIS_REST_URL = 'https://redis.example.test'
    process.env.UPSTASH_REDIS_REST_TOKEN = 'test-token'
    redisMock.evalResult = evalResult
    await expect(reserveProviderTokenIssuance(payload)).resolves.toEqual(expected)
    const call = redisMock.instances[0].eval.mock.calls[0]
    expect(call[0]).toContain("expiresAtMs")
    expect(call[0]).toContain("HINCRBY")
    expect(call[2]).toEqual([payload.principalId, payload.scenarioVersionId, '48', expect.any(String)])
  })
})
