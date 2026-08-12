import type { SpeakingProviderCapabilities } from './contracts'

export async function loadSpeakingCapabilities(signal?: AbortSignal): Promise<SpeakingProviderCapabilities> {
  const response = await fetch('/api/speaking/capabilities', {
    method: 'GET',
    credentials: 'same-origin',
    headers: { Accept: 'application/json' },
    signal,
  })

  if (!response.ok) throw new Error('The provider spike status is unavailable.')
  return response.json() as Promise<SpeakingProviderCapabilities>
}
