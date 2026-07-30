import type { VercelRequest, VercelResponse } from '@vercel/node'
import { checkBookletDemoRateLimit } from './_ratelimit'
import {
  buildModelPayload,
  parseBookletDemoRequest,
  parseBoundedHelp,
} from './booklet-demo-contract'

const ALLOWED_ORIGINS = new Set([
  'https://languagethreshold.com',
  'https://www.languagethreshold.com',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
])
const UNAVAILABLE = {
  state: 'unavailable',
  message: 'Word help is resting. You can keep reading the English and Spanish story together.',
}

interface Dependencies {
  apiKey?: string
  fetchImpl: typeof fetch
  rateLimit: typeof checkBookletDemoRateLimit
}

export function createBookletDemoHandler(dependencies: Dependencies) {
  return async function handler(req: VercelRequest, res: VercelResponse) {
    const origin = typeof req.headers.origin === 'string' ? req.headers.origin : ''
    if (!ALLOWED_ORIGINS.has(origin)) {
      return res.status(403).json({ error: 'Origin not allowed.' })
    }
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Vary', 'Origin')
    res.setHeader('Cache-Control', 'no-store')
    if (req.method === 'OPTIONS') return res.status(204).end()
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
    const contentType = String(req.headers['content-type'] ?? '')
    if (!contentType.toLowerCase().startsWith('application/json')) {
      return res.status(415).json({ error: 'JSON required.' })
    }
    const contentLength = Number(req.headers['content-length'] ?? 0)
    if (Number.isFinite(contentLength) && contentLength > 4096) {
      return res.status(413).json({ error: 'Request too large.' })
    }
    if (await dependencies.rateLimit(req, res)) return

    let context
    try {
      context = parseBookletDemoRequest(req.body)
    } catch {
      return res.status(400).json({ error: 'Invalid canonical booklet request.' })
    }
    if (!dependencies.apiKey) return res.status(503).json(UNAVAILABLE)

    try {
      const response = await dependencies.fetchImpl('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': dependencies.apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify(buildModelPayload(context)),
      })
      if (!response.ok) return res.status(503).json(UNAVAILABLE)
      const explanation = parseBoundedHelp(await response.json())
      return res.status(200).json({
        state: 'answer',
        context: {
          bookId: context.bookId,
          editionId: context.editionId,
          pageId: context.pageId,
          sentenceId: context.sentenceId,
          occurrenceIndex: context.occurrenceIndex,
        },
        explanation,
      })
    } catch {
      return res.status(503).json(UNAVAILABLE)
    }
  }
}

export default createBookletDemoHandler({
  apiKey: process.env.ANTHROPIC_API_KEY,
  fetchImpl: fetch,
  rateLimit: checkBookletDemoRateLimit,
})
