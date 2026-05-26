const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'] as const
type UTMKey = typeof UTM_KEYS[number]
type UTMParams = Partial<Record<UTMKey, string>>

const STORAGE_KEY = 'lt_utms'

export function captureUTMs(): void {
  const params = new URLSearchParams(window.location.search)
  const found: UTMParams = {}
  for (const key of UTM_KEYS) {
    const val = params.get(key)
    if (val) found[key] = val
  }
  if (Object.keys(found).length > 0) {
    // Only overwrite if this visit has UTM params (preserve first-touch)
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...found, captured_at: new Date().toISOString() }))
  }
}

export function getStoredUTMs(): UTMParams & { captured_at?: string } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function clearUTMs(): void {
  localStorage.removeItem(STORAGE_KEY)
}
