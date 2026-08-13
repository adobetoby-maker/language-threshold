import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export const SPEAKING_ALLOWED_ORIGINS = new Set([
  'https://languagethreshold.com',
  'https://www.languagethreshold.com',
])

export const LAUNCH_SCENARIO_VERSION_IDS = new Set([
  'scenario_version_construction_safety_briefing_es_v1',
  'scenario_version_construction_materials_measurement_es_v1',
  'scenario_version_construction_hazard_report_es_v1',
  'scenario_version_missionary_return_appointment_es_v1',
  'scenario_version_missionary_restoration_question_es_v1',
  'scenario_version_missionary_church_ride_es_v1',
])

const PRINCIPAL_COOKIE = 'lt_speaking_principal'
const PRINCIPAL_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function isDevelopmentOrigin(origin: string) {
  return process.env.VERCEL_ENV !== 'production' && /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
}

function isCurrentPreviewOrigin(origin: string) {
  return process.env.VERCEL_ENV === 'preview'
    && Boolean(process.env.VERCEL_URL)
    && origin === `https://${process.env.VERCEL_URL}`
}

function isTrustedOrigin(origin: string) {
  return SPEAKING_ALLOWED_ORIGINS.has(origin) || isDevelopmentOrigin(origin) || isCurrentPreviewOrigin(origin)
}

export function applySpeakingCors(req: VercelRequest, res: VercelResponse, methods: string) {
  const origin = typeof req.headers.origin === 'string' ? req.headers.origin : ''
  if (isTrustedOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', `${methods}, OPTIONS`)
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Vary', 'Origin')
  }
  res.setHeader('Cache-Control', 'no-store')
}

export function requireTrustedOrigin(req: VercelRequest, res: VercelResponse) {
  const origin = typeof req.headers.origin === 'string' ? req.headers.origin : ''
  if (isTrustedOrigin(origin)) return true
  res.status(403).json({ error: 'originNotAllowed', message: 'Speaking requests must come from an approved application origin.' })
  return false
}

function parseCookies(header: string | undefined) {
  return Object.fromEntries((header ?? '').split(';').flatMap(item => {
    const separator = item.indexOf('=')
    if (separator < 0) return []
    try {
      return [[item.slice(0, separator).trim(), decodeURIComponent(item.slice(separator + 1).trim())]]
    } catch {
      return []
    }
  }))
}

function signature(value: string, secret: string) {
  return createHmac('sha256', secret).update(value).digest('base64url')
}

function verifySignedPrincipal(value: string, secret: string) {
  const separator = value.lastIndexOf('.')
  if (separator < 0) return null
  const principalId = value.slice(0, separator)
  const supplied = Buffer.from(value.slice(separator + 1))
  const expected = Buffer.from(signature(principalId, secret))
  if (!PRINCIPAL_PATTERN.test(principalId) || supplied.length !== expected.length) return null
  return timingSafeEqual(supplied, expected) ? principalId : null
}

export function requireAnonymousPrincipal(req: VercelRequest, res: VercelResponse) {
  const secret = process.env.SPEAKING_PRINCIPAL_SECRET
  if (!secret || secret.length < 32) {
    res.status(503).json({ error: 'principalAuthUnavailable', message: 'Speaking principal authentication is not configured.' })
    return null
  }

  const existing = parseCookies(req.headers.cookie)[PRINCIPAL_COOKIE]
  const verified = existing ? verifySignedPrincipal(existing, secret) : null
  if (verified) return verified

  const principalId = randomUUID()
  const signed = `${principalId}.${signature(principalId, secret)}`
  const secure = process.env.VERCEL_ENV === 'preview' || process.env.VERCEL_ENV === 'production' ? '; Secure' : ''
  res.setHeader('Set-Cookie', `${PRINCIPAL_COOKIE}=${encodeURIComponent(signed)}; Path=/api/speaking; HttpOnly; SameSite=Strict; Max-Age=86400${secure}`)
  return principalId
}

export function requestIp(req: VercelRequest) {
  const realIp = req.headers['x-real-ip']
  if (typeof realIp === 'string' && realIp.trim()) return realIp.trim()
  const forwarded = req.headers['x-forwarded-for']
  return (typeof forwarded === 'string' ? forwarded.split(',')[0]?.trim() : undefined) || 'unknown'
}
