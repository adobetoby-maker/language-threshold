import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

export const SPEAKING_BUDGET_LIMITS = {
  sessionStartsPerPrincipalPerHour: 6,
  sessionStartsPerIpPerHour: 20,
  tokenIssuancesPerPrincipalPerHour: 96,
  tokenIssuancesPerIpPerHour: 320,
} as const

let sessionPrincipalLimiter: Ratelimit | null = null
let sessionIpLimiter: Ratelimit | null = null
let tokenPrincipalLimiter: Ratelimit | null = null
let tokenIpLimiter: Ratelimit | null = null

function limiters() {
  if (sessionPrincipalLimiter && sessionIpLimiter && tokenPrincipalLimiter && tokenIpLimiter) {
    return { sessionPrincipalLimiter, sessionIpLimiter, tokenPrincipalLimiter, tokenIpLimiter }
  }
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  const redis = new Redis({ url, token })
  sessionPrincipalLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(SPEAKING_BUDGET_LIMITS.sessionStartsPerPrincipalPerHour, '1 h'),
    prefix: 'speaking:session-start:principal',
    analytics: false,
  })
  sessionIpLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(SPEAKING_BUDGET_LIMITS.sessionStartsPerIpPerHour, '1 h'),
    prefix: 'speaking:session-start:ip',
    analytics: false,
  })
  tokenPrincipalLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(SPEAKING_BUDGET_LIMITS.tokenIssuancesPerPrincipalPerHour, '1 h'),
    prefix: 'speaking:token-issuance:principal',
    analytics: false,
  })
  tokenIpLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(SPEAKING_BUDGET_LIMITS.tokenIssuancesPerIpPerHour, '1 h'),
    prefix: 'speaking:token-issuance:ip',
    analytics: false,
  })
  return { sessionPrincipalLimiter, sessionIpLimiter, tokenPrincipalLimiter, tokenIpLimiter }
}

export type SpeakingBudgetResult =
  | { allowed: true }
  | { allowed: false; status: 429 | 503; error: 'budgetExceeded' | 'budgetUnavailable'; message: string }

export async function consumeSpeakingSessionBudget(principalId: string, ip: string): Promise<SpeakingBudgetResult> {
  const configured = limiters()
  if (!configured) {
    return { allowed: false, status: 503, error: 'budgetUnavailable', message: 'Speaking usage budgets are not configured.' }
  }

  try {
    const [principal, network] = await Promise.all([
      configured.sessionPrincipalLimiter.limit(principalId),
      configured.sessionIpLimiter.limit(ip),
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

export async function consumeSpeakingTokenIssuanceBudget(principalId: string, ip: string): Promise<SpeakingBudgetResult> {
  const configured = limiters()
  if (!configured) {
    return { allowed: false, status: 503, error: 'budgetUnavailable', message: 'Speaking usage budgets are not configured.' }
  }

  try {
    const [principal, network] = await Promise.all([
      configured.tokenPrincipalLimiter.limit(principalId),
      configured.tokenIpLimiter.limit(ip),
    ])
    if (!principal.success || !network.success) {
      return { allowed: false, status: 429, error: 'budgetExceeded', message: 'The speaking token issuance limit has been reached.' }
    }
    return { allowed: true }
  } catch (error) {
    console.error('Speaking token issuance budget check failed.', error)
    return { allowed: false, status: 503, error: 'budgetUnavailable', message: 'Speaking token issuance budgets could not be verified.' }
  }
}
