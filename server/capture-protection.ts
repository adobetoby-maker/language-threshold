import { createHash, createHmac, randomUUID } from 'node:crypto'
const site = 'languagethreshold.com'
const action = 'resource_download'
const record = (value: unknown): Record<string, unknown> | null => value !== null && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : null
export function captureProtection() {
  const sitekey = process.env.TURNSTILE_SITE_KEY?.trim()
  const secret = process.env.TURNSTILE_SECRET?.trim()
  // Exact production hosts only. Never authorize a client-supplied Host header.
  const hosts = (process.env.TURNSTILE_HOSTNAMES || '').split(',').map(x=>x.trim()).filter(Boolean)
  const ready = !!sitekey && !!secret && hosts.length > 0 && hosts.every(h => [site, 'www.'+site].includes(h)) && (process.env.DOWNLOAD_LEAD_KEY?.trim().length || 0) >= 32
  return {version:1, ready, sitekey: sitekey || null, action}
}
export async function authorizeCapture(token: unknown, origin: unknown, email: string, eventId: string) {
  const config = captureProtection()
  if (!config.ready) return {allowed:false, status:503}
  if (typeof origin !== 'string' || !['https://'+site, 'https://www.'+site].includes(origin)) return {allowed:false, status:403}
  if (typeof token !== 'string' || !token || token.length > 2048) return {allowed:false, status:403}
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method:'POST', redirect:'error', signal:AbortSignal.timeout(8000),
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:new URLSearchParams({secret:process.env.TURNSTILE_SECRET!.trim(), response:token}),
    })
    const result = response.ok ? record(await response.json()) : null
    const hosts = new Set(process.env.TURNSTILE_HOSTNAMES!.split(',').map(x=>x.trim()))
    if (result?.success !== true || result.action !== action || typeof result.hostname !== 'string' || !hosts.has(result.hostname)) return {allowed:false,status:403}
  } catch { return {allowed:false,status:503} }
  const key = process.env.DOWNLOAD_LEAD_KEY!.trim()
  const raw = JSON.stringify({site, eventId,
    recipientId:createHmac('sha256',key).update(`capture-recipient:v1:${site}:${email}`).digest('hex'),
    challengeHash:createHash('sha256').update(token).digest('hex'), requestId:randomUUID()})
  const stamp = String(Date.now())
  const signature = createHmac('sha256',key).update(`capture-guard:v1:${stamp}.${raw}`).digest('hex')
  // Same bytes and request ID across transport retries. A different invocation
  // cannot reuse a challenge even during Siteverify's replay-detection delay.
  for (let attempt=0; attempt<2; attempt++) try {
    const budget = await fetch('https://myaimarketing.worker-bee.app/api/capture-guard', {
      method:'POST', redirect:'error', signal:AbortSignal.timeout(5000),
      headers:{'Content-Type':'application/json','X-Lead-Site':site,'X-Lead-Time':stamp,'X-Lead-Signature':signature},body:raw,
    })
    if (budget.status === 429 || budget.status === 403) {await budget.body?.cancel(); return {allowed:false,status:budget.status}}
    const result = budget.ok ? record(await budget.json()) : null
    if (result?.allowed === true) return {allowed:true,status:200}
  } catch { /* Retry with the original challenge claim, then fail closed. */ }
  return {allowed:false,status:503}
}
