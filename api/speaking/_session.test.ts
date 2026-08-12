import { afterEach, describe, expect, it } from 'vitest'
import { encodeSessionLease, verifySessionLease, type SessionLeasePayload } from './_session.js'

const SECRET = 'test-session-secret-that-is-long-enough-1234'
const payload: SessionLeasePayload = {
  sessionId: '550e8400-e29b-41d4-a716-446655440000',
  principalId: 'principal-1',
  scenarioVersionId: 'scenario_version_construction_safety_briefing_es_v1',
  expiresAt: Date.now() + 60_000,
}

describe('signed speaking session lease', () => {
  afterEach(() => { delete process.env.SPEAKING_SESSION_SECRET })

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
})
