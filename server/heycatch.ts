import sanitizeHtml from './sanitize.cjs'
import { parse } from 'node-html-parser'

export const ORIGIN = 'https://languagethreshold.com'
export interface Article {
  id: string; slug: string; title: string; meta_description: string
  published: string; updated: string; read_time: number; language: string
  content_html?: string; jsonLd?: Record<string, unknown>
}
type Listing = { articles: Article[]; total: number }
class ApiError extends Error {
  constructor(public status: number) { super(`HeyCatch status ${status}`) }
}
const cache = new Map<string, { value: unknown; expires: number }>()
export const escape = (value: unknown) => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

async function request<T>(path: string, params: Record<string, string> = {}, deadline = Date.now() + 20000): Promise<T> {
  if (!process.env.HEYCATCH_API_KEY) throw new Error('HEYCATCH_API_KEY is not configured')
  const url = new URL(`https://api.heycatch.ai/v1/${path}`)
  url.search = new URLSearchParams({ key: process.env.HEYCATCH_API_KEY, ...params }).toString()
  for (let attempt = 0; attempt < 2; attempt++) {
    const remaining = deadline - Date.now()
    if (remaining <= 0) throw new Error('HeyCatch request budget exceeded')
    const response = await fetch(url, { signal: AbortSignal.timeout(Math.min(8000, remaining)) })
    if (response.status === 429 && attempt === 0) {
      const header = response.headers.get('Retry-After') ?? '1'
      const delay = /^\d+$/.test(header) ? Number(header) * 1000 : Date.parse(header) - Date.now()
      // A long server-directed delay exceeds this function's request budget; do not retry early.
      if (!Number.isFinite(delay) || delay > 5000 || delay >= deadline - Date.now()) throw new ApiError(429)
      await new Promise(resolve => setTimeout(resolve, Math.max(0, delay)))
      continue
    }
    if (!response.ok) throw new ApiError(response.status)
    return await response.json() as T
  }
  throw new ApiError(429)
}

async function cached<T>(key: string, load: () => Promise<T>): Promise<T | null> {
  const previous = cache.get(key)
  if (previous && previous.expires > Date.now()) return previous.value as T
  try {
    const value = await load()
    if (cache.size >= 100) cache.delete(cache.keys().next().value!)
    cache.set(key, { value, expires: Date.now() + 60000 })
    return value
  } catch (error) {
    if (error instanceof ApiError && [401, 403, 404].includes(error.status)) {
      cache.delete(key)
      if (error.status === 404) throw error
      return null
    }
    // Network errors may use the last successful result in this warm instance.
    return previous ? previous.value as T : null
  }
}

export async function listArticles(): Promise<Listing | null> {
  return cached('list', async () => {
    const articles: Article[] = []
    const deadline = Date.now() + 20000
    for (let offset = 0; ; offset += 50) {
      const page = await request<Listing>('articles', { limit: '50', offset: String(offset) }, deadline)
      if (!Array.isArray(page.articles) || !Number.isInteger(page.total) || page.total < 0) throw new Error('Invalid article list')
      articles.push(...page.articles)
      if (offset + 50 >= page.total) return { articles: [...new Map(articles.map(article => [article.slug, article])).values()], total: page.total }
      if (!page.articles.length) throw new Error('Incomplete article list')
    }
  })
}

export async function hasPublishedArticles() {
  const result = await cached('nav', () => request<Listing>('articles', { limit: '1', offset: '0' }))
  return (result?.total ?? 0) > 0
}

export async function getArticle(slug: string) {
  try {
    const result = await cached(`article:${slug}`, () => request<{ article: Article }>(`articles/${encodeURIComponent(slug)}`))
    return { article: result?.article ?? null, notFound: false }
  } catch (error) {
    return { article: null, notFound: error instanceof ApiError && error.status === 404 }
  }
}

export function articleBody(raw: string) {
  const safe = sanitizeHtml(raw, {
    allowedTags: ['h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'a', 'blockquote', 'strong', 'em', 'b', 'i', 'code', 'pre', 'br', 'hr', 'sup', 'sub'],
    allowedAttributes: { h2: ['id'], a: ['href', 'title'], th: ['scope', 'colspan', 'rowspan'], td: ['colspan', 'rowspan'], ol: ['start'] },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowProtocolRelative: false,
  })
  const root = parse(safe)
  const headings = root.querySelectorAll('h2[id]').filter(h => h.id !== 'faq')
  if (headings.length) {
    const toc = `<nav class="blog-toc" aria-label="Table of contents"><h2>Table of contents</h2><ol>${headings.map(h => `<li><a href="#${escape(h.id)}">${escape(h.textContent)}</a></li>`).join('')}</ol></nav>`
    const takeaways = root.querySelectorAll('h2').find(h => h.textContent.trim().toLowerCase() === 'key takeaways')
    const list = takeaways?.nextElementSibling
    if (list && ['UL', 'OL'].includes(list.tagName)) list.insertAdjacentHTML('afterend', toc)
    else root.insertAdjacentHTML('afterbegin', toc)
  }
  return root.toString()
}

export function jsonLd(article: Article, canonical: string) {
  if (!article.jsonLd || typeof article.jsonLd !== 'object' || Array.isArray(article.jsonLd) || !Object.keys(article.jsonLd).length) return ''
  const data = { ...article.jsonLd }
  if (!data.url) Object.assign(data, { url: canonical, mainEntityOfPage: canonical })
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`
}
