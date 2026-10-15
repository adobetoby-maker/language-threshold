import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined
const GADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined
const STATIC_GA_ID = 'G-RP0TZ1MP7E'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function GoogleAnalytics() {
  const location = useLocation()
  const suppressAnalytics = location.pathname.startsWith('/app/speak')

  useEffect(() => {
    const analyticsWindow = window as unknown as Record<string, unknown>
    analyticsWindow[`ga-disable-${STATIC_GA_ID}`] = suppressAnalytics
    if (GA_ID) analyticsWindow[`ga-disable-${GA_ID}`] = suppressAnalytics
  }, [suppressAnalytics])

  // Load GA script once on mount
  useEffect(() => {
    if (!GA_ID || suppressAnalytics) return
    if (window.gtag) return

    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: unknown[]) { window.dataLayer.push(args) }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID, { anonymize_ip: true })
    if (GADS_ID) window.gtag('config', GADS_ID)
  }, [suppressAnalytics])

  // Track page views on route change
  useEffect(() => {
    if (!GA_ID || suppressAnalytics || !window.gtag) return
    window.gtag('event', 'page_view', { page_path: location.pathname + location.search })
  }, [location, suppressAnalytics])

  return null
}

// eslint-disable-next-line react-refresh/only-export-components
export function trackGAdsConversion(label: string, value?: number, currency = 'USD') {
  if (window.location.pathname.startsWith('/app/speak') || !window.gtag || !GADS_ID) return
  window.gtag('event', 'conversion', {
    send_to: `${GADS_ID}/${label}`,
    value,
    currency,
  })
}
