import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createHash } from 'node:crypto'
import { resources, site } from '../server/free-resources.js'

const recent = new Map<string, { count: number; until: number }>()
const tidy = (value: unknown, max = 80) => typeof value === 'string' ? value.trim().slice(0, max) : ''
const escape = (value: string) => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Use the download form to request your resource.' })
  const origin = req.headers.origin
  const host = req.headers.host
  if (origin && origin !== `https://${host}` && origin !== `http://${host}`) return res.status(403).json({ ok: false, error: 'Please use the form on this website.' })
  const body = req.body
  if (!body || typeof body !== 'object' || Array.isArray(body) || JSON.stringify(body).length > 4096) return res.status(400).json({ ok: false, error: 'Please check the form and try again.' })
  if (tidy(body.website)) return res.status(400).json({ ok: false, error: 'Please check the form and try again.' })
  const email = tidy(body.email, 255).toLowerCase()
  const name = tidy(body.name, 120)
  const resource = resources.find(item => item.id === (body.resourceId || site.defaultResource))
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ ok: false, error: 'Enter a valid email address.' })
  if (!resource) return res.status(400).json({ ok: false, error: 'Choose an available free resource.' })
  if (body.consent !== true) return res.status(400).json({ ok: false, error: 'Please confirm the email request.' })
  const key = process.env.LEADERCRM_FORM_KEY?.trim()
  if (!key) return res.status(503).json({ ok: false, error: 'Free downloads are temporarily unavailable. Please try again shortly.' })
  // Local backstop; CRM rate-limit responses are also honored below.
  const now = Date.now()
  for (const [k, value] of recent) if (value.until < now) recent.delete(k)
  if (recent.size >= 10000) return res.status(429).json({ ok: false, error: 'Please try again shortly.' })
  const rateKey = createHash('sha256').update(email).digest('hex')
  const previous = recent.get(rateKey)
  if (previous && previous.count >= 3) return res.status(429).json({ ok: false, error: 'Please wait before requesting another email. Check your inbox first.' })
  recent.set(rateKey, { count: (previous?.count ?? 0) + 1, until: previous?.until ?? now + 600_000 })
  const attribution = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    .map(k => [k.replace('utm_', ''), tidy(body[k], 36).replace(/[^a-zA-Z0-9_./-]/g, '')])
    .filter(([,v]) => v).map(([k,v]) => `${k}=${v}`).join('|')
  const source = `${site.id}:free:${resource.id}${attribution ? '|' + attribution : ''}`.slice(0, 255)
  // Do not unlock on a lost CRM request: an email send alone is not lead capture.
  try {
    const crm = await fetch('https://toby.leaderhq.io/api/public/signup', {
      method: 'POST', redirect: 'error', signal: AbortSignal.timeout(8000),
      headers: { 'Content-Type': 'application/json', 'X-Form-Key': key },
      body: JSON.stringify({ email, name, type: 'Learner', source, website: '' }),
    })
    const accepted = crm.ok, limited = crm.status === 429
    await crm.body?.cancel()
    if (!accepted) return res.status(limited ? 429 : 503).json({ ok: false, error: limited ? 'Please wait before requesting another email. Check your inbox first.' : 'We could not save your request. Please try again shortly.' })
  } catch {
    return res.status(503).json({ ok: false, error: 'We could not confirm your request. Please check your inbox before retrying.' })
  }
  let emailStatus = 'unavailable'
  if (process.env.RESEND_API_KEY) {
    try {
      const idempotencyKey = createHash('sha256').update(`${site.id}:${email}:${resource.id}:${Math.floor(now / 600_000)}`).digest('hex')
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST', signal: AbortSignal.timeout(8000),
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': idempotencyKey },
        body: JSON.stringify({ from: site.sender, to: [email], subject: `Your free ${resource.title}`,
          text: `Hi ${name || 'there'},\n\nHere is the free resource you requested:\n${resource.title}\n${resource.url}\n\n${resource.instructions}\n\nYou may receive a separate confirmation for optional Language Threshold practice emails. Only confirm if you want those emails. Your download does not require a subscription.\n\nLanguage Threshold\nhttps://languagethreshold.com`,
          html: `<div style="max-width:580px;margin:auto;padding:28px;font:16px/1.7 Arial,sans-serif;color:#102638;background:#fffdfa"><p>LANGUAGE THRESHOLD</p><h1 style="font-size:26px">Your free resource is ready.</h1><p>Hi ${escape(name || 'there')},</p><p>${escape(resource.title)}</p><p><a href="${escape(resource.url)}" style="display:inline-block;padding:14px 22px;background:#146e73;color:white;border-radius:8px">Open your free resource →</a></p><p>${escape(resource.instructions)}</p><p style="font-size:13px">You may receive a separate confirmation for optional practice emails. Only confirm if you want those emails. Your download does not require a subscription.</p><p><a href="https://languagethreshold.com">Language Threshold</a></p></div>`,
        }),
      })
      const result = await response.json().catch(() => null)
      emailStatus = response.ok && result?.id ? 'accepted' : 'unavailable'
    } catch { /* Lead is already saved. Keep the immediate resource available. */ }
  }
  return res.status(200).json({ ok: true, resourceId: resource.id, downloadUrl: resource.url, title: resource.title, format: resource.format, instructions: resource.instructions, emailStatus,
    notice: emailStatus === 'accepted' ? 'Your download is ready. An email copy was accepted for sending; check your inbox or spam folder.' : 'Your download is ready below. We could not email a copy right now—save this link for later.' })
}
