import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto'
import { Redis } from '@upstash/redis'

const SESSION_TTL_SECONDS = 18 * 60
const SESSION_GRACE_SECONDS = 60
const MAX_PROVIDER_GRANTS = 48
const MAX_TURNS = 24
const MAX_AUDIO_SECONDS = 18 * 60

export interface SessionLeasePayload {
  sessionId: string
  principalId: string
  scenarioVersionId: string
  expiresAt: number
}

export interface SpeakingSessionLease {
  sessionId: string
  lease: string
  expiresAt: string
  hardCapSeconds: number
  maxTurns: number
}

export interface SpeakingSessionUsage {
  providerGrants: number
  completedTurns: number
  reportedAudioSeconds: number
  ttsCharacters: number
  dialogueInputTokens: number
  dialogueOutputTokens: number
}

type SessionRecord = {
  principalId: string
  scenarioVersionId: string
  startedAt: string
  expiresAt: string
  providerGrants: string | number
  completedTurns: string | number
  reportedAudioSeconds: string | number
  ttsCharacters: string | number
  dialogueInputTokens: string | number
  dialogueOutputTokens: string | number
}

function redisClient() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  return new Redis({ url, token })
}

function sessionSecret() {
  const secret = process.env.SPEAKING_SESSION_SECRET
  return secret && secret.length >= 32 ? secret : null
}

function sessionKey(sessionId: string) {
  return `speaking:session:${sessionId}`
}

function resultKey(sessionId: string, turnSequence: number) {
  return `speaking:session:${sessionId}:turn:${turnSequence}:result`
}

function lockKey(sessionId: string) {
  return `speaking:session:${sessionId}:dialogue-lock`
}

function sign(payload: string, secret: string) {
  return createHmac('sha256', secret).update(payload).digest('base64url')
}

export function encodeSessionLease(payload: SessionLeasePayload, secret: string) {
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url')
  return `${encoded}.${sign(encoded, secret)}`
}

export function verifySessionLease(lease: string, principalId: string, scenarioVersionId: string, now = Date.now()) {
  const secret = sessionSecret()
  if (!secret) return null
  const separator = lease.lastIndexOf('.')
  if (separator < 0) return null
  const encoded = lease.slice(0, separator)
  const supplied = Buffer.from(lease.slice(separator + 1))
  const expected = Buffer.from(sign(encoded, secret))
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return null

  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8')) as SessionLeasePayload
    if (!/^[0-9a-f-]{36}$/i.test(payload.sessionId)) return null
    if (payload.principalId !== principalId || payload.scenarioVersionId !== scenarioVersionId || payload.expiresAt <= now) return null
    return payload
  } catch {
    return null
  }
}

export async function createSpeakingSession(principalId: string, scenarioVersionId: string): Promise<SpeakingSessionLease | null> {
  const redis = redisClient()
  const secret = sessionSecret()
  if (!redis || !secret) return null

  const sessionId = randomUUID()
  const startedAtMs = Date.now()
  const expiresAtMs = startedAtMs + SESSION_TTL_SECONDS * 1000
  const payload: SessionLeasePayload = { sessionId, principalId, scenarioVersionId, expiresAt: expiresAtMs }
  await redis.hset(sessionKey(sessionId), {
    principalId,
    scenarioVersionId,
    startedAt: new Date(startedAtMs).toISOString(),
    expiresAt: new Date(expiresAtMs).toISOString(),
    providerGrants: 0,
    completedTurns: 0,
    reportedAudioSeconds: 0,
    ttsCharacters: 0,
    dialogueInputTokens: 0,
    dialogueOutputTokens: 0,
  })
  await redis.expire(sessionKey(sessionId), SESSION_TTL_SECONDS + SESSION_GRACE_SECONDS)
  return {
    sessionId,
    lease: encodeSessionLease(payload, secret),
    expiresAt: new Date(expiresAtMs).toISOString(),
    hardCapSeconds: SESSION_TTL_SECONDS,
    maxTurns: MAX_TURNS,
  }
}

function recordMatches(record: SessionRecord | null, principalId: string, scenarioVersionId: string) {
  return Boolean(record
    && record.principalId === principalId
    && record.scenarioVersionId === scenarioVersionId
    && Date.parse(record.expiresAt) > Date.now())
}

export async function reserveProviderGrant(payload: SessionLeasePayload) {
  const redis = redisClient()
  if (!redis) return { allowed: false as const, reason: 'unavailable' as const }
  const record = await redis.hgetall<SessionRecord>(sessionKey(payload.sessionId))
  if (!recordMatches(record, payload.principalId, payload.scenarioVersionId)) return { allowed: false as const, reason: 'expired' as const }
  const grants = await redis.hincrby(sessionKey(payload.sessionId), 'providerGrants', 1)
  if (grants > MAX_PROVIDER_GRANTS) return { allowed: false as const, reason: 'limit' as const }
  return { allowed: true as const, grants }
}

export async function getCachedTurnResult<T>(sessionId: string, turnSequence: number) {
  const redis = redisClient()
  return redis ? redis.get<T>(resultKey(sessionId, turnSequence)) : null
}

export async function acquireDialogueLock(sessionId: string) {
  const redis = redisClient()
  if (!redis) return null
  const token = randomUUID()
  const acquired = await redis.set(lockKey(sessionId), token, { nx: true, ex: 30 })
  return acquired === 'OK' ? token : null
}

export async function releaseDialogueLock(sessionId: string, token: string) {
  const redis = redisClient()
  if (!redis) return
  await redis.eval(
    "if redis.call('GET', KEYS[1]) == ARGV[1] then return redis.call('DEL', KEYS[1]) else return 0 end",
    [lockKey(sessionId)],
    [token],
  )
}

export async function validateDialogueTurn(payload: SessionLeasePayload, turnSequence: number, reportedAudioSeconds: number) {
  const redis = redisClient()
  if (!redis) return { allowed: false as const, reason: 'unavailable' as const }
  const record = await redis.hgetall<SessionRecord>(sessionKey(payload.sessionId))
  if (!recordMatches(record, payload.principalId, payload.scenarioVersionId)) return { allowed: false as const, reason: 'expired' as const }
  const completedTurns = Number(record?.completedTurns ?? 0)
  const totalAudio = Number(record?.reportedAudioSeconds ?? 0)
  if (turnSequence !== completedTurns + 1 || turnSequence > MAX_TURNS) return { allowed: false as const, reason: 'sequence' as const }
  if (!Number.isFinite(reportedAudioSeconds) || reportedAudioSeconds <= 0 || reportedAudioSeconds > 60 || totalAudio + reportedAudioSeconds > MAX_AUDIO_SECONDS) {
    return { allowed: false as const, reason: 'audioLimit' as const }
  }
  return { allowed: true as const }
}

export async function commitDialogueTurn<T extends object>(
  payload: SessionLeasePayload,
  turnSequence: number,
  reportedAudioSeconds: number,
  ttsCharacters: number,
  dialogueInputTokens: number,
  dialogueOutputTokens: number,
  result: T,
) {
  const redis = redisClient()
  if (!redis) throw new Error('Speaking session storage is unavailable.')
  const ttl = Math.max(60, Math.ceil((payload.expiresAt - Date.now()) / 1000) + SESSION_GRACE_SECONDS)
  const pipeline = redis.pipeline()
  pipeline.hset(sessionKey(payload.sessionId), { completedTurns: turnSequence })
  pipeline.hincrbyfloat(sessionKey(payload.sessionId), 'reportedAudioSeconds', reportedAudioSeconds)
  pipeline.hincrby(sessionKey(payload.sessionId), 'ttsCharacters', ttsCharacters)
  pipeline.hincrby(sessionKey(payload.sessionId), 'dialogueInputTokens', dialogueInputTokens)
  pipeline.hincrby(sessionKey(payload.sessionId), 'dialogueOutputTokens', dialogueOutputTokens)
  pipeline.set(resultKey(payload.sessionId, turnSequence), result, { ex: ttl })
  await pipeline.exec()
}

export async function readSessionUsage(sessionId: string): Promise<SpeakingSessionUsage | null> {
  const redis = redisClient()
  const record = redis ? await redis.hgetall<SessionRecord>(sessionKey(sessionId)) : null
  if (!record) return null
  return {
    providerGrants: Number(record.providerGrants),
    completedTurns: Number(record.completedTurns),
    reportedAudioSeconds: Number(record.reportedAudioSeconds),
    ttsCharacters: Number(record.ttsCharacters),
    dialogueInputTokens: Number(record.dialogueInputTokens),
    dialogueOutputTokens: Number(record.dialogueOutputTokens),
  }
}

export const SPEAKING_SESSION_LIMITS = {
  ttlSeconds: SESSION_TTL_SECONDS,
  maxProviderGrants: MAX_PROVIDER_GRANTS,
  maxTurns: MAX_TURNS,
  maxReportedAudioSeconds: MAX_AUDIO_SECONDS,
} as const
