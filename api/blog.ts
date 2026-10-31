import type { VercelRequest, VercelResponse } from '@vercel/node'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { articleBody, escape as e, getArticle, hasPublishedArticles, jsonLd, listArticles, ORIGIN } from '../server/heycatch.js'

function shell(title: string, description: string, path: string, body: string, hasArticles: boolean, extra = '', article = false) {
  const canonical = ORIGIN + path
  const categories = ['Medical', 'Construction', 'Missionary', 'Sports', 'Agriculture', 'Education', 'Hospitality', 'Kids', 'Fishing', 'Climbing', 'Hunting', 'Business']
  const links = categories.map(label => `<a href="/module/${label.toLowerCase()}">${label}</a>`)
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.svg"><title>${e(title)} | Language Threshold</title><meta name="description" content="${e(description)}"><link rel="canonical" href="${e(canonical)}"><meta property="og:title" content="${e(title)}"><meta property="og:description" content="${e(description)}"><meta property="og:type" content="${article ? 'article' : 'website'}"><meta property="og:url" content="${e(canonical)}"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${e(title)}"><meta name="twitter:description" content="${e(description)}"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="/blog.css">${extra}</head><body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <header class="site-nav"><a class="brand" href="/"><span>✦</span> Language Threshold</a><nav class="desktop-links" aria-label="Main navigation">${links.slice(0, 3).join('')}<details><summary>More</summary><div>${links.slice(3).join('')}</div></details>${hasArticles ? '<a href="/blog" aria-current="page">Blog</a>' : ''}<a href="/about">About</a><a href="/founder">Founder</a></nav><a class="button" href="https://app.languagethreshold.com">Start Free</a><details class="mobile-links"><summary>Menu</summary><nav aria-label="Mobile navigation">${links.join('')}${hasArticles ? '<a href="/blog">Blog</a>' : ''}<a href="/about">About</a><a href="/founder">Founder</a><a href="/missionary-portal">Missionary Log In</a></nav></details></header>
  <main id="main-content" class="blog-main">${body}</main>
  <footer class="site-footer"><div><a class="brand" href="/">Language Threshold</a><p><em>“Cross the threshold. Speak the language.”</em></p></div><nav aria-label="Footer"><a href="/language-lens">Language Lens</a><a href="https://medicalspanish.app">Medical Spanish</a><a href="https://constructionspanish.app">Construction Spanish</a><a href="/why-learn-with-us/">Why learn with us</a><a href="/about">About</a><a href="/founder">Founder</a><a href="https://app.languagethreshold.com">Start Learning →</a></nav><small>© ${new Date().getFullYear()} Language Threshold. All rights reserved.</small></footer></body></html>`
}

function date(value: string) {
  const parsed = new Date(value)
  return Number.isNaN(parsed.valueOf()) ? '' : parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}
function metadata(article: { published: string; read_time: number }) {
  return `<p class="article-meta"><time datetime="${e(article.published)}">${e(date(article.published))}</time> · ${e(article.read_time)} min read</p>`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  if (req.query.mode === 'nav') return res.status(200).json({ hasArticles: await hasPublishedArticles() })
  const slug = typeof req.query.slug === 'string' ? req.query.slug : ''
  const [listing, published, detail] = await Promise.all([
    !slug || req.query.mode === 'sitemap' ? listArticles() : Promise.resolve(null),
    slug ? hasPublishedArticles() : Promise.resolve(false),
    slug ? getArticle(slug) : Promise.resolve(null),
  ])
  const hasArticles = published || (listing?.total ?? 0) > 0
  if (req.query.mode === 'sitemap') {
    const base = readFileSync(join(process.cwd(), 'server/sitemap-base.xml'), 'utf8')
    const entries = [`<url><loc>${ORIGIN}/blog</loc></url>`, ...(listing?.articles ?? []).map(a => `<url><loc>${ORIGIN}/blog/${e(encodeURIComponent(a.slug))}</loc>${/^\d{4}-\d{2}-\d{2}/.test(a.updated ?? '') ? `<lastmod>${e(a.updated)}</lastmod>` : ''}</url>`)]
    return res.status(200).setHeader('Content-Type', 'application/xml; charset=utf-8').send(base.replace('</urlset>', entries.join('') + '</urlset>'))
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (!slug) {
    const entries = (listing?.articles ?? []).map(a => `<li><h2><a href="/blog/${e(encodeURIComponent(a.slug))}">${e(a.title)}</a></h2>${metadata(a)}</li>`).join('')
    return res.status(200).send(shell('Blog', 'Language learning articles from Language Threshold.', '/blog', `<p class="eyebrow">Language Threshold</p><h1>Blog</h1>${entries ? `<ul class="article-list">${entries}</ul>` : '<p>No articles yet.</p>'}`, hasArticles))
  }
  const { article, notFound } = detail!
  if (notFound) return res.status(404).send(shell('Page not found', '', '/blog/' + encodeURIComponent(slug), '<div class="not-found"><p class="error-code">404</p><h1>Page not found</h1><p>That URL doesn’t exist. Check the address or head back to explore available language modules.</p><a class="button" href="/">Back to Language Threshold</a></div>', hasArticles, '<meta name="robots" content="noindex">'))
  if (!article) return res.status(200).send(shell('Blog', '', '/blog/' + encodeURIComponent(slug), '<h1>Blog</h1><p>Articles are temporarily unavailable. Please try again shortly.</p><a href="/blog">Back to blog</a>', hasArticles))
  const path = '/blog/' + encodeURIComponent(article.slug)
  const language = article.language || 'en'
  const rtl = ['ar', 'he', 'fa', 'ur'].includes(language.split('-')[0])
  const body = `<a class="back-link" href="/blog">← All articles</a><article lang="${e(language)}"${rtl ? ' dir="rtl"' : ''}><h1>${e(article.title)}</h1>${metadata(article)}<div class="article-body">${articleBody(article.content_html ?? '')}</div></article>`
  return res.status(200).send(shell(article.title, article.meta_description, path, body, hasArticles, jsonLd(article, ORIGIN + path), true))
}
