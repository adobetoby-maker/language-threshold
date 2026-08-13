import type { VercelRequest, VercelResponse } from '@vercel/node'
import { SPEAKING_BUDGET_LIMITS } from './_budget.js'
import { applySpeakingCors } from './_shared.js'
import { SPEAKING_SESSION_LIMITS } from './_session.js'

const BLOCKERS = [
  'physical-iphone-validation',
  'measured-latency-and-cost',
  'provider-retention-approval',
  'calibrated-evaluation-fixtures',
  'human-content-review',
  'verified-age-and-authenticated-principal',
  'server-enforced-session-metering',
  'physical-turn-loop-validation',
]

export function createSpeakingCapabilities() {
  const enabled = process.env.VERCEL_ENV !== 'production'
    && process.env.SPEAKING_SPIKE_ENABLED === 'true'
    && process.env.SPEAKING_DATA_POLICY_APPROVED === 'true'
    && Boolean(process.env.DEEPGRAM_API_KEY)
    && Boolean(process.env.ANTHROPIC_API_KEY)
    && Boolean(process.env.UPSTASH_REDIS_REST_URL)
    && Boolean(process.env.UPSTASH_REDIS_REST_TOKEN)
    && (process.env.SPEAKING_PRINCIPAL_SECRET?.length ?? 0) >= 32
    && (process.env.SPEAKING_SESSION_SECRET?.length ?? 0) >= 32

  return {
    enabled,
    productionReady: false,
    architecture: 'provider-neutral-streaming-cascade',
    mode: 'tap-to-speak',
    locale: 'es-419',
    providers: {
      stt: { provider: 'deepgram', model: 'flux-general-multi', transport: 'websocket', integrationStatus: 'turn-loop' },
      dialogue: { provider: 'anthropic', model: process.env.SPEAKING_DIALOGUE_MODEL ?? 'claude-haiku-4-5', transport: 'server', integrationStatus: 'turn-loop' },
      tts: { provider: 'deepgram', model: process.env.SPEAKING_TTS_MODEL ?? 'aura-2-celeste-es', transport: 'websocket', integrationStatus: 'turn-loop' },
    },
    limits: {
      tokenTtlSeconds: 30,
      sessionStartBudgets: {
        perAnonymousPrincipalPerHour: SPEAKING_BUDGET_LIMITS.sessionStartsPerPrincipalPerHour,
        perNetworkAddressPerHour: SPEAKING_BUDGET_LIMITS.sessionStartsPerIpPerHour,
      },
      tokenIssuanceBudgets: {
        perAnonymousPrincipalPerHour: SPEAKING_BUDGET_LIMITS.tokenIssuancesPerPrincipalPerHour,
        perNetworkAddressPerHour: SPEAKING_BUDGET_LIMITS.tokenIssuancesPerIpPerHour,
      },
      sessionLeaseMinutes: SPEAKING_SESSION_LIMITS.ttlSeconds / 60,
      maxTurnsPerSession: SPEAKING_SESSION_LIMITS.maxTurns,
      maxProviderTokenIssuancesPerSession: SPEAKING_SESSION_LIMITS.maxProviderTokenIssuances,
      browserAudioSecondsAuthoritative: false,
    },
    ageGate: { mode: 'self-attestation', productionApproved: false },
    privacy: {
      rawAudioRetainedByApplication: false,
      browserAnalyticsSuppressed: true,
      sttModelImprovementOptOutRequested: true,
      providerRetentionApprovedForProduction: false,
    },
    blockers: BLOCKERS,
  }
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  applySpeakingCors(req, res, 'GET')
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'GET') return res.status(405).json({ error: 'methodNotAllowed' })
  return res.status(200).json(createSpeakingCapabilities())
}
