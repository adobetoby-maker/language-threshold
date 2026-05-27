import type { WordCardData } from '../components/WordCard'

// Fetched once per session — all WordCard instances share this Promise
let _cachePromise: Promise<Record<string, WordCardData>> | null = null

export function getWordCache(): Promise<Record<string, WordCardData>> {
  if (!_cachePromise) {
    _cachePromise = fetch('/word-cache.json').then(r => r.json()).catch(() => ({}))
  }
  return _cachePromise
}

export function warmWordCache(): void {
  getWordCache()
}
