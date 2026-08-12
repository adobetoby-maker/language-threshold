import type { VercelRequest, VercelResponse } from '@vercel/node'
import { consumeSpeakingGrantBudget } from './_budget.js'
import {
  applySpeakingCors,
  LAUNCH_SCENARIO_VERSION_IDS,
  requestIp,
  requireAnonymousPrincipal,
  requireTrustedOrigin,
} from './_shared.js'

interface DeepgramGrant {
  access_token?: string
  expires_in?: number
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  applySpeakingCors(req, res, 'POST')
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'methodNotAllowed' })
  if (!requireTrustedOrigin(req, res)) return

  if (process.env.VERCEL_ENV === 'production') {
    return res.status(503).json({ error: 'productionDisabled', message: 'The provider-backed speaking spike cannot run in production.' })
  }

  if (process.env.SPEAKING_SPIKE_ENABLED !== 'true' || process.env.SPEAKING_DATA_POLICY_APPROVED !== 'true') {
    return res.status(503).json({ error: 'spikeDisabled', message: 'The provider-backed speaking spike is disabled.' })
  }

  const { ageConfirmed, scenarioVersionId } = req.body ?? {}
  if (ageConfirmed !== true) return res.status(403).json({ error: 'ageGate', message: 'Speaking is currently restricted to ages 13 and older.' })
  if (typeof scenarioVersionId !== 'string' || !LAUNCH_SCENARIO_VERSION_IDS.has(scenarioVersionId)) {
    return res.status(400).json({ error: 'invalidScenario', message: 'Select an approved speaking scenario version.' })
  }

  const principalId = requireAnonymousPrincipal(req, res)
  if (!principalId) return
  const budget = await consumeSpeakingGrantBudget(principalId, requestIp(req))
  if (!budget.allowed) return res.status(budget.status).json({ error: budget.error, message: budget.message })

  const key = process.env.DEEPGRAM_API_KEY
  if (!key) return res.status(503).json({ error: 'providerUnavailable', message: 'The speech provider is not configured.' })

  try {
    const providerResponse = await fetch('https://api.deepgram.com/v1/auth/grant', {
      method: 'POST',
      headers: { Authorization: `Token ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ttl_seconds: 30 }),
    })
    if (!providerResponse.ok) {
      console.error('Deepgram token grant failed.', providerResponse.status)
      return res.status(502).json({ error: 'providerUnavailable', message: 'The speech provider did not issue a temporary token.' })
    }

    const grant = await providerResponse.json() as DeepgramGrant
    if (!grant.access_token || grant.expires_in !== 30) {
      return res.status(502).json({ error: 'invalidProviderGrant', message: 'The speech provider returned an invalid token grant.' })
    }

    return res.status(200).json({
      provider: 'deepgram',
      accessToken: grant.access_token,
      expiresIn: grant.expires_in,
      endpoints: {
        stt: 'wss://api.deepgram.com/v2/listen?model=flux-general-multi&language_hint=es&mip_opt_out=true',
        tts: `wss://api.deepgram.com/v1/speak?model=${encodeURIComponent(process.env.SPEAKING_TTS_MODEL ?? 'aura-2-celeste-es')}&encoding=linear16&sample_rate=24000`,
      },
    })
  } catch (error) {
    console.error('Deepgram token grant request failed.', error)
    return res.status(502).json({ error: 'providerUnavailable', message: 'The speech provider could not be reached.' })
  }
}
