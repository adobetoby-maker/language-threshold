import type { VercelRequest, VercelResponse } from '@vercel/node'

const ALLOWED_ORIGINS = new Set([
  'https://constructionspanish.app',
  'https://medicalspanish.app',
  'https://languagethreshold.com',
  'http://localhost:3000',
])

const DISCOUNT_CODE = 'WELCOME10'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin ?? ''
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Vary', 'Origin')
  }
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email, source } = req.body ?? {}
  if (!email || typeof email !== 'string') return res.status(400).json({ error: 'Email required' })
  const normalized = email.trim().toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  const src = (source === 'construction') ? 'construction' : 'medical'

  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (url && token) {
    try {
      const { Redis } = await import('@upstash/redis')
      const redis = new Redis({ url, token })
      const key = `subscribers:${src}`
      const exists = await redis.sismember(key, normalized)
      if (!exists) {
        await redis.sadd(key, normalized)
        await redis.rpush('subscribers:log', JSON.stringify({ email: normalized, source: src, ts: new Date().toISOString() }))
      }
    } catch (e) {
      console.error('Redis error:', e)
    }
  }

  return res.status(200).json({ code: DISCOUNT_CODE, message: 'Success' })
}
