// Single source of truth for the app URL — update here when the domain is wired
export const APP_URL = 'https://app.languagethreshold.com'
export const MISSIONARY_APP_URL = `${APP_URL}?module=lds-missionary`

// Beta free period — all modules unlocked until this date
export const BETA_FREE_UNTIL = new Date('2026-08-01T00:00:00Z')
export const isBetaFree = (): boolean => new Date() < BETA_FREE_UNTIL
export const BETA_FREE_LABEL = 'Free beta · all modules unlocked through Aug 1'

export const displayFont = { fontFamily: '"Playfair Display", serif' }
export const serifFont = { fontFamily: '"Libre Baskerville", serif' }
export const sansFont = { fontFamily: '"Source Sans 3", sans-serif' }
