import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { parse } from 'node-html-parser'

const fixture = {
  id: '1', slug: 'workplace-spanish', title: 'Spanish at work',
  meta_description: 'Description only for metadata', published: '2026-10-31',
  updated: '2026-10-31', read_time: 6, language: 'en',
  content_html: '<h2>Key takeaways</h2><ul><li>Practice daily</li></ul><h2 id="practice">Practice</h2><p>Start here.</p><h2 id="faq">FAQ</h2><h3>How often?</h3><p>Daily.</p>',
  jsonLd: { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Spanish at work' },
}
const reply = (data: unknown, status = 200, headers = {}) => new Response(JSON.stringify(data), { status, headers })

beforeEach(() => { vi.resetModules(); vi.stubEnv('HEYCATCH_API_KEY', 'test-key') })
afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs(); vi.useRealTimers() })

describe('HeyCatch integration', () => {
  it('fetches all pages, uses only query authentication, caches for one minute', async () => {
    const fetcher = vi.fn(async (url: URL) => {
      expect(url.searchParams.get('key')).toBe('test-key')
      const offset = Number(url.searchParams.get('offset'))
      return reply({ total: 101, articles: Array.from({ length: Math.min(50, 101 - offset) }, (_, i) => ({ ...fixture, slug: `article-${offset + i}` })) })
    })
    vi.stubGlobal('fetch', fetcher)
    const { listArticles } = await import('./heycatch')
    expect((await listArticles())?.articles).toHaveLength(101)
    expect((await listArticles())?.articles).toHaveLength(101)
    expect(fetcher).toHaveBeenCalledTimes(3)
    expect(fetcher.mock.calls.map(([url]) => url.searchParams.get('offset'))).toEqual(['0', '50', '100'])
    expect(fetcher.mock.calls[0]).toHaveLength(2)
    expect(fetcher.mock.calls[0][1]).not.toHaveProperty('headers')
  })
  it('keeps the last complete list after a timeout but clears it on revoked credentials', async () => {
    vi.useFakeTimers()
    const fetcher = vi.fn().mockResolvedValueOnce(reply({ total: 1, articles: [fixture] })).mockRejectedValueOnce(new Error('timeout')).mockResolvedValueOnce(reply({}, 403))
    vi.stubGlobal('fetch', fetcher)
    const { listArticles } = await import('./heycatch')
    await listArticles()
    vi.advanceTimersByTime(61000)
    expect((await listArticles())?.articles).toHaveLength(1)
    expect(await listArticles()).toBeNull()
  })
  it('retries a rate limit once, after Retry-After', async () => {
    vi.useFakeTimers()
    const fetcher = vi.fn().mockResolvedValueOnce(reply({}, 429, { 'Retry-After': '2' })).mockResolvedValueOnce(reply({ total: 0, articles: [] }))
    vi.stubGlobal('fetch', fetcher)
    const { listArticles } = await import('./heycatch')
    const pending = listArticles()
    await vi.advanceTimersByTimeAsync(1000)
    expect(fetcher).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1000)
    expect(await pending).toEqual({ total: 0, articles: [] })
    expect(fetcher).toHaveBeenCalledTimes(2)
  })
  it('sanitizes malicious HTML and places the TOC between takeaways and the body', async () => {
    const { articleBody } = await import('./heycatch')
    const html = articleBody(fixture.content_html + '<script>alert(1)</script><style>body{display:none}</style><iframe src="https://bad.test"></iframe><a href="javascript:alert(1)" onclick="alert(1)">bad</a>')
    expect(html).not.toMatch(/<script|<style|<iframe|javascript:|onclick/)
    const root = parse(html)
    expect(root.querySelector('nav')?.previousElementSibling?.tagName).toBe('UL')
    expect(root.querySelector('nav')?.nextElementSibling?.id).toBe('practice')
    expect(root.querySelectorAll('nav a').map(a => a.getAttribute('href'))).toEqual(['#practice'])
    expect(root.querySelector('h2#faq')).not.toBeNull()
    expect(parse(articleBody('<h2 id="intro">Intro</h2><p>Hi</p>')).firstChild?.toString()).toContain('blog-toc')
  })
  it('escapes JSON-LD and supplies the production canonical URL', async () => {
    const { jsonLd } = await import('./heycatch')
    const result = jsonLd({ ...fixture, jsonLd: { headline: '</script><script>bad</script>' } }, 'https://languagethreshold.com/blog/test')
    expect(result.match(/<script/g)).toHaveLength(1)
    expect(result).toContain('\\u003c/script>')
    expect(result).toContain('"mainEntityOfPage":"https://languagethreshold.com/blog/test"')
  })
})

function response() {
  return {
    statusCode: 0, body: '', headers: {} as Record<string, unknown>,
    setHeader(key: string, value: unknown) { this.headers[key] = value; return this },
    status(code: number) { this.statusCode = code; return this },
    send(body: string) { this.body = body; return this },
    json(body: unknown) { this.body = JSON.stringify(body); return this },
  }
}
async function render(query: Record<string, string>) {
  const { default: handler } = await import('../api/blog')
  const res = response()
  await handler({ query } as Parameters<typeof handler>[0], res as unknown as Parameters<typeof handler>[1])
  return res
}

describe('server pages and sitemap', () => {
  it('renders the complete article in initial HTML with SEO, language and no visible description', async () => {
    vi.stubGlobal('fetch', vi.fn(async (url: URL) => reply(url.pathname.endsWith('/articles') ? { total: 1, articles: [fixture] } : { article: { ...fixture, language: 'ar' } })))
    const res = await render({ slug: fixture.slug })
    const root = parse(res.body)
    expect(res.statusCode).toBe(200)
    expect(root.querySelectorAll('h1')).toHaveLength(1)
    expect(root.querySelector('article')?.getAttribute('dir')).toBe('rtl')
    expect(root.querySelector('article')?.textContent).not.toContain(fixture.meta_description)
    expect(root.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(fixture.meta_description)
    expect(root.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe('https://languagethreshold.com/blog/workplace-spanish')
    expect(root.querySelector('article')?.textContent).toContain('Start here.')
    expect(root.querySelector('head script[type="application/ld+json"]')).not.toBeNull()
    expect(res.body).not.toContain('test-key')
  })
  it('returns a real 404 for unknown articles', async () => {
    vi.stubGlobal('fetch', vi.fn(async (url: URL) => reply(url.pathname.endsWith('/articles') ? { total: 0, articles: [] } : {}, url.pathname.endsWith('/articles') ? 200 : 404)))
    const res = await render({ slug: 'missing' })
    expect(res.statusCode).toBe(404)
    expect(res.body).toContain('Page not found')
  })
  it('keeps the empty index reachable and hides Blog navigation', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(reply({ total: 0, articles: [] })))
    const res = await render({})
    expect(res.statusCode).toBe(200)
    expect(res.body).toContain('No articles yet.')
    expect(res.body).not.toContain('href="/blog"')
  })
  it('extends the existing sitemap and preserves every old URL', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(reply({ total: 1, articles: [fixture] })))
    const res = await render({ mode: 'sitemap' })
    expect(res.body).toContain('<loc>https://languagethreshold.com/module/medical</loc>')
    expect(res.body).toContain('<loc>https://languagethreshold.com/blog/workplace-spanish</loc><lastmod>2026-10-31</lastmod>')
    expect(res.headers['Content-Type']).toContain('application/xml')
  })
})
