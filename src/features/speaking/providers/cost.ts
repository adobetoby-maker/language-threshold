import type { SpeechSpikeMeasurement } from './contracts'

export const SPIKE_LIST_PRICES = {
  fluxMultilingualPerMinute: 0.0078,
  aura2PerThousandCharacters: 0.03,
  claudeHaiku45InputPerMillionTokens: 1,
  claudeHaiku45OutputPerMillionTokens: 5,
} as const

export const SPIKE_LIST_PRICE_METADATA = {
  asOf: '2026-08-12',
  currency: 'USD',
  sttModel: 'deepgram/flux-general-multi',
  ttsModel: 'deepgram/aura-2',
  dialogueModel: 'anthropic/claude-haiku-4-5',
  sources: ['https://deepgram.com/pricing', 'https://platform.claude.com/docs/en/about-claude/pricing'],
} as const

export function estimateSpikeProviderCost(usage: SpeechSpikeMeasurement['usage']) {
  const stt = (usage.sttAudioSeconds / 60) * SPIKE_LIST_PRICES.fluxMultilingualPerMinute
  const tts = (usage.ttsCharacters / 1_000) * SPIKE_LIST_PRICES.aura2PerThousandCharacters
  const dialogueInput = (usage.dialogueInputTokens / 1_000_000) * SPIKE_LIST_PRICES.claudeHaiku45InputPerMillionTokens
  const dialogueOutput = (usage.dialogueOutputTokens / 1_000_000) * SPIKE_LIST_PRICES.claudeHaiku45OutputPerMillionTokens
  return Number((stt + tts + dialogueInput + dialogueOutput).toFixed(6))
}
