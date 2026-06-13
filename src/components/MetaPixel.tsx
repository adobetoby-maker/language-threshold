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
  // Standard Facebook stub — fbevents.js expects callMethod + queue shape
  if (!window.fbq) {
    type FbqFn = ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void
      queue: unknown[][]
      push: FbqFn
      loaded: boolean
      version: string
    }
    const fbq = function (...args: unknown[]) {
      if ((fbq as FbqFn).callMethod) (fbq as FbqFn).callMethod!(...args)
      else (fbq as FbqFn).queue.push(args)
    } as FbqFn
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
    window.fbq = fbq as unknown as (...args: unknown[]) => void
    window._fbq = fbq
  }

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

// eslint-disable-next-line react-refresh/only-export-components
export function trackMetaEvent(event: string, params?: Record<string, unknown>) {
  if (!window.fbq) return
  window.fbq('track', event, params)
}
