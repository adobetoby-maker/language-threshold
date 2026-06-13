import { useEffect } from 'react'

interface PageMeta {
  title: string
  lang?: string
  canonical?: string
  description?: string
}

const BASE_TITLE = 'Language Threshold — AI Language Training for Professionals in the Field'
const BASE_CANONICAL = 'https://languagethreshold.com'
const BASE_DESC = 'Professional language learning for medical workers, tradespeople, missionaries, and coaches. 660+ AI-powered lessons in Spanish, French, German, Italian, Japanese, Korean, Portuguese, and Swahili.'

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector<HTMLMetaElement>(selector)
  if (el) el.setAttribute(attr, value)
}

export function usePageMeta({ title, lang = 'en', canonical, description }: PageMeta) {
  useEffect(() => {
    const fullTitle = `${title} | Language Threshold`
    document.title = fullTitle
    document.documentElement.lang = lang

    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonicalEl && canonical) canonicalEl.href = canonical

    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
      setMeta('meta[name="twitter:description"]', 'content', description)
    }
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    if (canonical) {
      setMeta('meta[property="og:url"]', 'content', canonical)
    }

    return () => {
      document.title = BASE_TITLE
      document.documentElement.lang = 'en'
      if (canonicalEl) canonicalEl.href = BASE_CANONICAL
      setMeta('meta[name="description"]', 'content', BASE_DESC)
      setMeta('meta[property="og:description"]', 'content', BASE_DESC)
      setMeta('meta[name="twitter:description"]', 'content', BASE_DESC)
      setMeta('meta[property="og:title"]', 'content', BASE_TITLE)
      setMeta('meta[name="twitter:title"]', 'content', BASE_TITLE)
      setMeta('meta[property="og:url"]', 'content', BASE_CANONICAL)
    }
  }, [title, lang, canonical, description])
}
