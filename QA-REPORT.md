# Language Threshold QA Report — 2026-06-07

## Executive Summary

Full analysis of https://languagethreshold.com across all 21 routes, JS chunks, PWA manifest, sitemap, and word-cache. The site is largely functional for Spanish content but has significant gaps introduced by the Portuguese expansion. **3 P0 bugs, 6 P1 bugs, 5 P2 issues.** Portuguese content quality is high — 26 PT translations are authentic Brazilian Portuguese with zero English placeholders.

---

## P0 — Broken (blocks users)

### P0-1: Word-cache has zero Portuguese entries — all PT vocab lookups hit the live API (0% cache)

Every vocab word click on any Portuguese page calls WordCard, which checks `word-cache.json` first. The cache has 5,821 entries — all Spanish. Portuguese words are absent. All PT vocab clicks fall through to a live `/api/word-lookup` POST. If the API is unavailable (rate limit, cold start, network error), WordCard renders:

> "Couldn't look that up."

Spanish pages have near-100% cache hit rate. Portuguese has 0%. Every Portuguese user is dependent on a live API call with no offline fallback.

**Fix:** Batch-run all PT vocab through the word-lookup API and append ~2,000–3,000 entries to `word-cache.json`. Restores parity with Spanish and removes API dependency.

---

### P0-2: Two "7 languages" strings remain on the live Home page — Portuguese is the 8th

Hardcoded strings not updated after Portuguese was added:

1. Hero/description copy: *"7 languages"*
2. Footer ticker: *"Professional language learning · 26 modules · 7 languages"*

The STATS array correctly shows `8` and the globe correctly has 8 languages. But any user reading the hero text or footer sees the contradiction. Credibility issue on the most-visited page.

**Fix:** Update both strings to "8 languages" in source. 2-minute find-replace + redeploy.

---

### P0-3: No 404 page — all unknown routes silently redirect to home

Router config: `{path:'*', element: <Navigate to='/' replace />}`. Mistyped URLs, stale bookmarks, and broken external links all 200-redirect to home. Googlebot sees HTTP 200 for invalid paths, creating duplicate content risk and preventing detection of broken links.

**Fix:** Replace catch-all Navigate with a purposeful `NotFound` component returning a 404 status with a link back to home.

---

## P1 — Degraded (bad UX)

### P1-1: Portuguese missing from all Spanish and Swahili cross-link sections

Portuguese pages correctly link to Spanish counterparts — but no reverse links exist. Users on any Spanish or Swahili page have no discovery path to Portuguese content.

| Page | Has PT Link? |
|---|---|
| /medical-spanish | No |
| /contractor-spanish | No |
| /climbing-spanish | No cross-link section at all |
| /medical-swahili | No |
| /contractor-swahili | No |
| /climbing-swahili | No |
| /missionary-swahili | No |

**Fix:** Add Portuguese cross-links to all 7 pages. Add missing "Also on Language Threshold" section to `/climbing-spanish`.

---

### P1-2: /climbing-portuguese cross-links incomplete — missing 2 of 4 expected links

Present: `/climbing-spanish`, `/medical-portuguese`
Missing: `/climbing-swahili`, `/contractor-portuguese`

Medical and Contractor Portuguese pages have 3 cross-links each. Climbing Portuguese has 2.

**Fix:** Add the 2 missing cross-links to `ClimbingPortuguese.tsx`.

---

### P1-3: No entry point from home page to any Portuguese page

Home page category cards link to `/module/medical`, `/module/construction` etc. — not to language-specific pages. Language names on module pages are plain text, not links. A user wanting Portuguese content must type the URL directly.

**Fix (minimum):** Make language names on ModuleStarter pages into `<Link>` components pointing to language routes.

---

### P1-4: PWA manifest branding is outdated

```json
{ "name": "Medical Spanish + Construction Spanish", "short_name": "MedSpanish" }
```

Any user who installs the PWA gets an app named "MedSpanish." The product is now "Language Threshold" with 8 languages.

**Fix:** Update `name` → "Language Threshold", `short_name` → "LangThreshold", update description.

---

### P1-5: Sitemap contains only 2 URLs — 19 pages are unindexed

`/sitemap.xml` lists only `/` and `/about`. All 19 language pages, module pages, and secondary routes are missing. Google cannot crawl or rank them for queries like "medical Portuguese vocabulary" or "construction Swahili phrases."

**Fix:** Generate a complete sitemap with all 21+ public routes. Submit to Google Search Console.

---

### P1-6: `lang` attribute never changes — Portuguese pages served with `lang="en"`

`<html lang="en">` is static in index.html and never updated by React Router. Portuguese pages are served with English language metadata — wrong for screen readers (TTS uses wrong pronunciation) and Google (no language signal).

**Fix:** Add `useEffect` in each page component (or a centralized route-change hook) to set `document.documentElement.lang = 'pt-BR'` on Portuguese pages, `'sw'` on Swahili pages.

---

## P2 — Polish

### P2-1: Page `<title>` never changes per route

All 21 routes share: *"Language Threshold — AI Spanish Training for Professionals in the Field"*

A user on `/medical-portuguese` sees "AI Spanish Training" in their browser tab. Bad for SEO (duplicate titles) and user experience.

**Fix:** Add per-route `document.title` updates. Each page should have a unique title.

---

### P2-2: ContractorPortuguese CTA links to `module=framer` — possible wrong slug

CTA URL: `${appUrl}?module=framer&lang=pt`. Other pages use `emergency`, `gear`, `restoration`. "framer" may be a copy-paste error. If the app doesn't have a `framer` module, CTA lands on an error state.

**Fix:** Verify `module=framer` is valid in the app. If not, update to the correct construction module slug.

---

### P2-3: /climbing-spanish has no cross-link section

Every other language page has a cross-link section. `/climbing-spanish` has none — possibly built before the pattern was established.

**Fix:** Add "Also on Language Threshold" section with links to `/climbing-portuguese`, `/climbing-swahili`, `/medical-spanish`.

---

### P2-4: Canonical tag is site-wide — duplicate content risk

`<link rel="canonical" href="https://languagethreshold.com">` on every page. Google may treat `/medical-portuguese` as a duplicate of the home page.

**Fix:** Set per-route canonical tags alongside the title updates.

---

### P2-5: ModuleStarter language list is plain text — not clickable links

Languages render as `"Spanish · Portuguese · Swahili"` (non-interactive). Users on `/module/medical` seeing "Portuguese" cannot click it to navigate to `/medical-portuguese`.

**Fix:** Map language names to `<Link>` components with correct route targets.

---

## ✅ Working Correctly

- STATS on home shows `8` languages — correct
- Globe language list has 8 items including 🇧🇷 Português — correct
- All 4 Portuguese pages render authentic Brazilian Portuguese — zero English placeholders
- ModuleCard expand/collapse: "Expandir ↓" / "Fechar ↑" work correctly
- Portuguese vocab correctly reads `.pt` field; sample phrases read `samplePhrase.pt`
- WordCard error handling: shows "Couldn't look that up." without crashing
- Google Analytics G-RP0TZ1MP7E present across all pages
- PWA service worker is present and functional
- Beta expiry set to `2026-08-01T00:00:00Z` — correctly August 2026
- App URL `https://app.languagethreshold.com` consistent across all CTAs
- All 4 Portuguese pages HTTP 200 — routes are live
- Vercel deployment active (x-vercel-cache headers confirmed)
- No JavaScript syntax errors in any analyzed chunk

---

## 📋 Improvement Plan

### Quick Wins (< 1 hour each)

| # | Task | P-level fixed |
|---|---|---|
| 1 | Change "7 languages" → "8 languages" in 2 home page strings | P0-2 |
| 2 | Update PWA manifest name/short_name/description | P1-4 |
| 3 | Add 2 missing cross-links to ClimbingPortuguese | P1-2 |
| 4 | Verify/fix ContractorPortuguese CTA `module=framer` slug | P2-2 |
| 5 | Replace catch-all `<Navigate>` with `<NotFound>` component | P0-3 |

### Medium Effort (1–4 hours each)

| # | Task | P-level fixed |
|---|---|---|
| 6 | Populate word-cache.json with ~2,000 Portuguese entries | P0-1 |
| 7 | Add PT cross-links to all 7 Spanish/Swahili pages + add section to `/climbing-spanish` | P1-1 |
| 8 | Per-route `<title>`, meta description, and canonical tag updates | P2-1 / P2-4 |
| 9 | Set `document.documentElement.lang` per route via useEffect | P1-6 |
| 10 | Make language badges on ModuleStarter pages into `<Link>` components | P1-3 / P2-5 |

### Strategic (4+ hours, roadmap)

| # | Task | Impact |
|---|---|---|
| 11 | Generate complete sitemap (21+ routes), submit to Search Console | Organic discovery for all language pages |
| 12 | Add OG metadata per route (og:title, og:description, og:image) | Social sharing + Google rich results |
| 13 | Extend /app (AppHome) to support Portuguese and Swahili | Full practice experience in all 8 languages |
| 14 | Add Climbing category card to home page | Complete content catalog on most-visited page |
| 15 | Add `hreflang` alternate tags across language variants | International SEO — Portuguese healthcare market |
