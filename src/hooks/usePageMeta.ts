import { useEffect } from 'react'

interface PageMeta {
  title: string
  lang?: string
  canonical?: string
}

const BASE_TITLE = 'Language Threshold — AI Language Training for Professionals in the Field'
const BASE_CANONICAL = 'https://languagethreshold.com'

export function usePageMeta({ title, lang = 'en', canonical }: PageMeta) {
  useEffect(() => {
    document.title = `${title} | Language Threshold`
    document.documentElement.lang = lang

    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonicalEl && canonical) canonicalEl.href = canonical

    return () => {
      document.title = BASE_TITLE
      document.documentElement.lang = 'en'
      if (canonicalEl) canonicalEl.href = BASE_CANONICAL
    }
  }, [title, lang, canonical])
}
