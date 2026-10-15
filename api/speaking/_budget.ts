import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

let principalLimiter: Ratelimit | null = null
let ipLimiter: Ratelimit | null = null

function limiters() {
  if (principalLimiter && ipLimiter) return { principalLimiter, ipLimiter }
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  const redis = new Redis({ url, token })
  principalLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(6, '1 h'),
    prefix: 'speaking:grant:principal',
    analytics: false,
  })
  ipLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(20, '1 h'),
    prefix: 'speaking:grant:ip',
    analytics: false,
  })
  return { principalLimiter, ipLimiter }
}

export type SpeakingBudgetResult =
  | { allowed: true }
  | { allowed: false; status: 429 | 503; error: 'budgetExceeded' | 'budgetUnavailable'; message: string }

export async function consumeSpeakingGrantBudget(principalId: string, ip: string): Promise<SpeakingBudgetResult> {
  const configured = limiters()
  if (!configured) {
    return { allowed: false, status: 503, error: 'budgetUnavailable', message: 'Speaking usage budgets are not configured.' }
  }

  try {
    const [principal, network] = await Promise.all([
      configured.principalLimiter.limit(principalId),
      configured.ipLimiter.limit(ip),
    ])
    if (!principal.success || !network.success) {
      return { allowed: false, status: 429, error: 'budgetExceeded', message: 'The speaking spike usage limit has been reached.' }
    }
    return { allowed: true }
  } catch (error) {
    console.error('Speaking budget check failed.', error)
    return { allowed: false, status: 503, error: 'budgetUnavailable', message: 'Speaking usage budgets could not be verified.' }
  }
}
