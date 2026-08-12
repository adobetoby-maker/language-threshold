import type { VercelRequest, VercelResponse } from '@vercel/node'
import { applySpeakingCors } from './_shared.js'

const BLOCKERS = [
  'physical-iphone-validation',
  'measured-latency-and-cost',
  'provider-retention-approval',
  'calibrated-evaluation-fixtures',
  'human-content-review',
  'verified-age-and-authenticated-principal',
  'server-enforced-session-metering',
  'complete-dialogue-and-tts-transport',
]

export default function handler(req: VercelRequest, res: VercelResponse) {
  applySpeakingCors(req, res, 'GET')
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'GET') return res.status(405).json({ error: 'methodNotAllowed' })

  const enabled = process.env.VERCEL_ENV !== 'production'
    && process.env.SPEAKING_SPIKE_ENABLED === 'true'
    && process.env.SPEAKING_DATA_POLICY_APPROVED === 'true'
    && Boolean(process.env.DEEPGRAM_API_KEY)
    && Boolean(process.env.UPSTASH_REDIS_REST_URL)
    && Boolean(process.env.UPSTASH_REDIS_REST_TOKEN)
    && (process.env.SPEAKING_PRINCIPAL_SECRET?.length ?? 0) >= 32

  return res.status(200).json({
    enabled,
    productionReady: false,
    architecture: 'provider-neutral-streaming-cascade',
    mode: 'tap-to-speak',
    locale: 'es-419',
    providers: {
      stt: { provider: 'deepgram', model: 'flux-general-multi', transport: 'websocket', integrationStatus: 'connectivity-prototype' },
      dialogue: { provider: 'anthropic', model: process.env.SPEAKING_DIALOGUE_MODEL ?? 'claude-haiku-4-5', transport: 'server', integrationStatus: 'planned' },
      tts: { provider: 'deepgram', model: process.env.SPEAKING_TTS_MODEL ?? 'aura-2-celeste-es', transport: 'websocket', integrationStatus: 'grant-only' },
    },
    limits: {
      tokenTtlSeconds: 30,
      grantBudgets: { perAnonymousPrincipalPerHour: 6, perNetworkAddressPerHour: 20 },
      plannedSessionHardCapMinutes: 18,
      sessionHardCapEnforcedByServer: false,
    },
    ageGate: { mode: 'self-attestation', productionApproved: false },
    privacy: {
      rawAudioRetainedByApplication: false,
      browserAnalyticsSuppressed: true,
      sttModelImprovementOptOutRequested: true,
      providerRetentionApprovedForProduction: false,
    },
    blockers: BLOCKERS,
  })
}
