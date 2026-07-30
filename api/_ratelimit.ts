import type { VercelRequest, VercelResponse } from '@vercel/node'

let limiter: import('@upstash/ratelimit').Ratelimit | null = null
let bookletDemoLimiter: import('@upstash/ratelimit').Ratelimit | null = null

async function getLimiter() {
  if (limiter) return limiter
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  const { Ratelimit } = await import('@upstash/ratelimit')
  const { Redis } = await import('@upstash/redis')
  limiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(60, '1 h'),
    analytics: false,
  })
  return limiter
}

export async function checkRateLimit(req: VercelRequest, res: VercelResponse): Promise<boolean> {
  const rl = await getLimiter()
  if (!rl) return false

  const ip =
    (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ?? '127.0.0.1'

  const { success } = await rl.limit(ip)
  if (!success) {
    res.status(429).json({ error: 'rateLimit', message: 'Rate limit reached.' })
    return true
  }
  return false
}

export async function checkBookletDemoRateLimit(
  req: VercelRequest,
  res: VercelResponse,
): Promise<boolean> {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) {
    res.status(503).json({
      state: 'unavailable',
      error: 'rateLimitUnavailable',
      message: 'Word help is resting. The paired story remains available.',
    })
    return true
  }

  if (!bookletDemoLimiter) {
    const { Ratelimit } = await import('@upstash/ratelimit')
    const { Redis } = await import('@upstash/redis')
    bookletDemoLimiter = new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(20, '1 h'),
      analytics: false,
      prefix: 'ratelimit:booklet-demo',
    })
  }

  const ip =
    (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ?? 'unknown'
  try {
    const { success } = await bookletDemoLimiter.limit(ip)
    if (!success) {
      res.status(429).json({
        state: 'unavailable',
        error: 'rateLimit',
        message: 'That is enough word help for now. Keep reading the paired story.',
      })
      return true
    }
    return false
  } catch {
    res.status(503).json({
      state: 'unavailable',
      error: 'rateLimitUnavailable',
      message: 'Word help is resting. The paired story remains available.',
    })
    return true
  }
}
