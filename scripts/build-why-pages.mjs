import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import ts from 'typescript'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const source = await readFile(path.join(root, 'src/components/why/WhyLearnContent.tsx'), 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
// Keep the temporary module beside this script so React resolves from this repository.
const temp = path.join(root, 'node_modules/.cache/why-learn-content.mjs')
await mkdir(path.dirname(temp), { recursive: true })
await writeFile(temp, compiled)
const { WhyLearnContent, WhyLearnTeaser } = await import(pathToFileURL(temp).href + `?t=${Date.now()}`)
const targets = [
  { audience: 'construction', root: '/Users/drive/constructionspanish-app', domain: 'https://constructionspanish.app', brand: 'Construction Spanish' },
  { audience: 'medical', root: '/Users/drive/medicalspanish-app', domain: 'https://medicalspanish.app', brand: 'Medical Spanish' },
]
for (const target of targets) {
  const dest = path.join(target.root, 'why-learn-with-us')
  await mkdir(dest, { recursive: true })
  await mkdir(path.join(target.root, 'assets/why'), { recursive: true })
  for (const name of ['why-learn.css', 'roofing.png', 'medical.jpg']) await copyFile(path.join(root, 'public/assets/why', name), path.join(target.root, 'assets/why', name))
  const content = renderToStaticMarkup(React.createElement(WhyLearnContent, { audience: target.audience }))
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Why Learn With Us | ${target.brand} · Language Threshold</title><meta name="description" content="See, hear, say, type, and handwrite the words you need. Then use them in conversation with AI feedback, around the topics that matter to you."><link rel="canonical" href="${target.domain}/why-learn-with-us/"><meta property="og:title" content="Why Learn With Us | ${target.brand}"><meta property="og:description" content="More ways to meet a word. More reasons to use it. Learn around the topics you need."><meta property="og:url" content="${target.domain}/why-learn-with-us/"><meta property="og:type" content="website"><link rel="icon" href="/favicon.svg"><link rel="stylesheet" href="/assets/why/why-learn.css"><style>body{margin:0;background:#081525} .skip{position:absolute;left:20px;top:-100px;color:#081525;background:#d7a63a;padding:12px}.skip:focus{top:10px;z-index:10}</style></head><body><a class="skip" href="#main-content">Skip to content</a><nav class="why-site-nav" aria-label="Main navigation"><a href="/">← ${target.brand}</a><a href="https://app.languagethreshold.com/">Open the app ↗</a></nav><main id="main-content">${content}</main><footer class="why-site-footer"><a href="/">${target.brand}</a><a href="https://languagethreshold.com/why-learn-with-us/">Language Threshold</a><a href="https://app.languagethreshold.com/support">Have a question?</a><p>© 2026 Language Threshold · Step into conversation.</p></footer></body></html>`
  await writeFile(path.join(dest, 'index.html'), html)
  const homepage = path.join(target.root, 'index.html')
  let home = await readFile(homepage, 'utf8')
  if (!home.includes('/assets/why/why-learn.css')) home = home.replace('</head>', '<link rel="stylesheet" href="/assets/why/why-learn.css"></head>')
  const teaser = renderToStaticMarkup(React.createElement(WhyLearnTeaser, { audience: target.audience }))
  // Replace only this feature's own block on regeneration.
  const block = `<!-- why-learn:start -->${teaser}<!-- why-learn:end -->`
  if (home.includes('<!-- why-learn:start -->')) home = home.replace(/<!-- why-learn:start -->[\s\S]*?<!-- why-learn:end -->/, block)
  else if (target.audience === 'medical') home = home.replace('<section class="section"><div class="wrap feature"><div><p class="eyebrow">A practical learning rhythm', block + '<section class="section"><div class="wrap feature"><div><p class="eyebrow">A practical learning rhythm')
  else home = home.replace('<!-- ── Interactive lesson preview', block + '\n<!-- ── Interactive lesson preview')
  if (!home.includes('href="/why-learn-with-us/">Why learn with us')) {
    home = target.audience === 'medical'
      ? home.replace('<a href="/articles/">Guides</a>', '<a href="/articles/">Guides</a><a href="/why-learn-with-us/">Why learn with us</a>')
      : home.replace('<a href="/dictionary/" class="hide-m">Dictionary</a>', '<a href="/why-learn-with-us/" class="hide-m">Why learn with us</a>')
  }
  await writeFile(homepage, home)
  const sitemapPath = path.join(target.root, 'sitemap.xml')
  let sitemap = await readFile(sitemapPath, 'utf8')
  if (!sitemap.includes('/why-learn-with-us/')) sitemap = sitemap.replace('</urlset>', `<url><loc>${target.domain}/why-learn-with-us/</loc></url></urlset>`)
  await writeFile(sitemapPath, sitemap)
  console.log(`Updated ${target.brand}: page, homepage introduction, navigation, sitemap, assets.`)
}
const sitemapPath = path.join(root, 'public/sitemap.xml')
let sitemap = await readFile(sitemapPath, 'utf8')
if (!sitemap.includes('/why-learn-with-us/')) sitemap = sitemap.replace('</urlset>', '<url><loc>https://languagethreshold.com/why-learn-with-us/</loc></url></urlset>')
await writeFile(sitemapPath, sitemap)
