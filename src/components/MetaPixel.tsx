import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { captureUTMs } from '../lib/utm'

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: unknown
    _fbPixelReady?: boolean
  }
}

function loadPixel(pixelId: string) {
  if (window._fbPixelReady) return
  const fbq = function (...args: unknown[]) {
    (fbq as unknown as { q: unknown[][] }).q = (fbq as unknown as { q: unknown[][] }).q || []
    ;(fbq as unknown as { q: unknown[][] }).q.push(args)
  }
  ;(fbq as unknown as { loaded: boolean; version: string; q: unknown[][] }).loaded = true
  ;(fbq as unknown as { loaded: boolean; version: string; q: unknown[][] }).version = '2.0'
  ;(fbq as unknown as { loaded: boolean; version: string; q: unknown[][] }).q = []
  window.fbq = fbq as (...args: unknown[]) => void
  window._fbq = fbq

  const script = document.createElement('script')
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  script.async = true
  script.onload = () => {
    window._fbPixelReady = true
    window.fbq!('init', pixelId)
    window.fbq!('track', 'PageView')
  }
  document.head.appendChild(script)
}

export function MetaPixel() {
  const location = useLocation()

  useEffect(() => {
    if (!PIXEL_ID) return
    captureUTMs()
    loadPixel(PIXEL_ID)
  }, [])

  useEffect(() => {
    if (!PIXEL_ID || !window.fbq || !window._fbPixelReady) return
    window.fbq('track', 'PageView')
  }, [location])

  return null
}

export function trackMetaEvent(event: string, params?: Record<string, unknown>) {
  if (!window.fbq) return
  window.fbq('track', event, params)
}
