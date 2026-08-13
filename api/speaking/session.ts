import type { VercelRequest, VercelResponse } from '@vercel/node'
import { consumeSpeakingSessionBudget } from './_budget.js'
import {
  applySpeakingCors,
  LAUNCH_SCENARIO_VERSION_IDS,
  requestIp,
  requireAnonymousPrincipal,
  requireTrustedOrigin,
} from './_shared.js'
import { createSpeakingSession } from './_session.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  applySpeakingCors(req, res, 'POST')
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'methodNotAllowed' })
  if (!requireTrustedOrigin(req, res)) return
  if (process.env.VERCEL_ENV === 'production') {
    return res.status(503).json({ error: 'productionDisabled', message: 'The speaking turn-loop spike cannot run in production.' })
  }
  if (process.env.SPEAKING_SPIKE_ENABLED !== 'true' || process.env.SPEAKING_DATA_POLICY_APPROVED !== 'true') {
    return res.status(503).json({ error: 'spikeDisabled', message: 'The speaking turn-loop spike is disabled.' })
  }

  const { ageConfirmed, scenarioVersionId } = req.body ?? {}
  if (ageConfirmed !== true) return res.status(403).json({ error: 'ageGate', message: 'Speaking is currently restricted to ages 13 and older.' })
  if (typeof scenarioVersionId !== 'string' || !LAUNCH_SCENARIO_VERSION_IDS.has(scenarioVersionId)) {
    return res.status(400).json({ error: 'invalidScenario', message: 'Select an approved speaking scenario version.' })
  }

  const principalId = requireAnonymousPrincipal(req, res)
  if (!principalId) return
  const budget = await consumeSpeakingSessionBudget(principalId, requestIp(req))
  if (!budget.allowed) return res.status(budget.status).json({ error: budget.error, message: budget.message })

  try {
    const session = await createSpeakingSession(principalId, scenarioVersionId)
    if (!session) return res.status(503).json({ error: 'sessionUnavailable', message: 'Speaking session controls are not configured.' })
    return res.status(201).json(session)
  } catch (error) {
    console.error('Speaking session creation failed.', error)
    return res.status(503).json({ error: 'sessionUnavailable', message: 'A controlled speaking session could not be created.' })
  }
}
