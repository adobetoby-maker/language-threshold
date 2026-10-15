import { useEffect, useState } from 'react'
import { loadSpeakingCapabilities } from '../providers/capabilities'
import type { SpeakingProviderCapabilities } from '../providers/contracts'

type CapabilityState =
  | { status: 'loading'; data: null; error: null }
  | { status: 'ready'; data: SpeakingProviderCapabilities; error: null }
  | { status: 'error'; data: null; error: string }

export function useSpeakingCapabilities(): CapabilityState {
  const [state, setState] = useState<CapabilityState>({ status: 'loading', data: null, error: null })

  useEffect(() => {
    const controller = new AbortController()
    loadSpeakingCapabilities(controller.signal)
      .then(data => setState({ status: 'ready', data, error: null }))
      .catch(error => {
        if (!controller.signal.aborted) {
          setState({ status: 'error', data: null, error: error instanceof Error ? error.message : 'The provider spike status is unavailable.' })
        }
      })
    return () => controller.abort()
  }, [])

  return state
}
