# Language Threshold — Visual Audit Fix Tasks

Generated from full visual review of all 13 pages + app UI.
Each task is self-contained and copy-paste ready for Claude Code.

---

## TASK 1 — Home: Stats Bar — Add visible labels under numbers

**File:** `src/pages/Home.tsx`
**Problem:** The stats bar (7 / 26+ / 660+ / MD) has labels that are small, low-contrast, and nearly unreadable at a glance. The "MD" stat has a long label "Built by an Orthopedic Surgeon" that doesn't fit the format.
**Fix:** Increase label font size and contrast. Shorten the MD label to "Built by an MD" or "Surgeon-Built". Make the number bolder and larger, label clearly subordinate but readable.

In `Home.tsx`, find the STATS section render (around line 459) and update the label styling from the current muted `text-white/30` or similar to at least `text-white/60`, and bump the label font size from `text-[10px]` to `text-xs` (12px). Also shorten the MD label in the STATS array (line 98) from `'Built by an Orthopedic Surgeon'` to `'Surgeon-Built'`.

---

## TASK 2 — Home: Demo section CTA — Upgrade "TRY ALL THREE MODES FREE" to a real button

**File:** `src/pages/Home.tsx`
**Problem:** The "TRY ALL THREE MODES FREE →" CTA at the bottom of the "See It In Action" demo section is rendered as a small plain link. It's the only CTA in a large prominent demo section and is very easy to miss.
**Fix:** Convert it to a gold pill button matching the style of the primary CTAs elsewhere on the page.

Find the link around the "SEE IT IN ACTION" section and change it from the current small link style to:
```tsx
<a
  href={APP_URL}
  className="inline-block rounded-full px-8 py-4 font-mono text-[12px] uppercase tracking-[0.22em] text-black font-semibold hover:opacity-90 transition-opacity"
  style={{ backgroundColor: GOLD }}
>
  Try All Three Modes Free →
</a>
```
Wrap it in a centered div with `className="mt-8 text-center"`.

---

## TASK 3 — Missionary module: Surface "Always Free" messaging in hero

**File:** `src/pages/ModuleStarter.tsx`
**Problem:** The Missionary module hero shows the standard "START 7-DAY FREE TRIAL →" gold button and "NO CREDIT CARD REQUIRED · CANCEL ANYTIME" microcopy — same as every other module. A missionary who lands on this page expecting free-forever content has to scroll past the entire module list to the pricing section to see the "FREE — ALWAYS / $0" card. The free-forever value prop is buried.
**Fix:** For the missionary slug only, add a small badge or note directly below the CTA buttons in the hero — before the trust text — that reads "✓ Missionary Spanish is always free — no trial, no card, no expiration."

In `ModuleStarter.tsx`, find the hero CTA block (around line 196). After the `<p>` with "No credit card required · Cancel anytime", add a conditional for the missionary slug:
```tsx
{slug === 'missionary' && (
  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: d.color }}>
    ✓ Missionary Spanish is always free — no trial, no card, no expiration
  </p>
)}
```

---

## TASK 4 — Kids module: Soften the dark aesthetic for the kids page

**File:** `src/pages/ModuleStarter.tsx`
**Problem:** The Junior Linguist page uses the same deep navy/black globe + gold professional aesthetic as Medical and Construction. This is a kids product (ages 4–12) and the design signals "serious B2B SaaS" rather than "fun and safe for children." Parents browsing this page lose the warmth and delight that builds trust for a kids product.
**Fix:** For the kids slug only, override the hero background to a lighter, warmer gradient and swap the globe opacity lower so it's more subtle.

In `ModuleStarter.tsx`, find the fixed globe background div (around line 136). For the kids slug, override the radial gradient tint to be stronger/warmer. Also add a warm background behind the hero text:

```tsx
// In the fixed globe background section, update the tint div:
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: slug === 'kids'
      ? `radial-gradient(ellipse 70% 50% at 50% 30%, rgba(244,114,182,0.18) 0%, transparent 70%)`
      : `radial-gradient(ellipse 70% 50% at 50% 30%, ${d.tint} 0%, transparent 70%)`
  }}
/>
```

And for the globe, add reduced opacity for kids:
```tsx
<div className={`absolute inset-0 flex items-center justify-center ${slug === 'kids' ? 'opacity-15' : 'opacity-40'}`}>
```

This gives the kids page a distinctly pinker, softer backdrop while reusing the same component.

---

## TASK 5 — App onboarding: Skip link contrast + progress label

**File:** `src/pages/AppHome.tsx` (or the onboarding component — search for "Skip setup")
**Problem (a):** The "Skip setup →" link is small gray text, top-right of the onboarding modal. Low contrast against the dark background, easy to miss especially on mobile.
**Problem (b):** The progress bar at top of onboarding has no "Step X of Y" label. Users can't tell how long the flow is.

**Fix (a):** Find the "Skip setup" link and bump its color from `text-white/30` or similar to at least `text-white/50`, and increase tracking slightly so it reads more clearly.

**Fix (b):** Find the progress bar render and add a step counter label. If the onboarding has 3 steps, add below or above the bar:
```tsx
<p className="text-center font-mono text-[9px] uppercase tracking-widest text-white/30 mb-2">
  Step {currentStep} of {totalSteps}
</p>
```

---

## TASK 6 — App: Sidebar tooltip — fix narrow-column text wrap

**File:** `src/pages/AppHome.tsx` (search for "Save your progress" or the sidebar popover/tooltip component)
**Problem:** On first app load, a "Save your progress" tooltip/popup appears in the left sidebar. The text wraps into an extremely narrow column and becomes nearly unreadable — the button label also truncates to "SA... PR...".
**Fix:** Give the tooltip a minimum width so text doesn't wrap to single characters. Find the tooltip container and add `min-w-[180px]` or `min-w-[200px]` to the wrapping div. Also ensure the button inside has `whitespace-nowrap`.

---

## TASK 7 — App pricing page: Style "Continue with free access" and "Try Junior Linguist free" as buttons

**File:** The pricing page component at `app.languagethreshold.com/pricing` (likely in a separate app repo or `src/pages/AppHome.tsx` — search for "Continue with free access")
**Problem:** The paid tier has a large prominent gold "Start free trial" button. The free tier and junior linguist CTAs are plain text links — `text-link` style. This inconsistency makes them feel like footnotes rather than real options.
**Fix:** Convert them to outlined pill buttons that match the ghost/outline button style used elsewhere:
```tsx
// Replace plain <a> links with:
<a
  href="..."
  className="inline-block rounded-full border border-white/20 px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 hover:border-white/40 hover:text-white transition-all duration-300"
>
  Continue with free access →
</a>
```

---

## TASK 8 — Language-lens: Gold vs teal CTA color consistency

**File:** `src/pages/LanguageLens.tsx`
**Problem:** The language-lens page uses teal/cyan (`#00D4B8`) as its primary CTA button color — "Start Learning — It's Free →" is a teal button. All other pages on languagethreshold.com use gold (`#C9A84C`) as the primary CTA. A visitor coming from the home page to language-lens sees a color shift that may feel like a different product/site.
**Fix (option A — preferred):** Change the language-lens primary CTA button to gold to match the site:
```tsx
style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
```
**Fix (option B — if teal is intentional for sub-brand):** Add a brief visual note near the hero that explicitly calls out "Language Lens" as a sub-product of Language Threshold, so the color shift feels intentional rather than broken.

---

## TASK 9 — About page: Wire "Legal & Immigration" and "English for Work" to correct module slugs

**File:** `src/pages/About.tsx`
**Problem:** In the `AreasWeServeSection`, two items — "Legal & Immigration" (⚖️) and "English for Work" (🗣️) — link to `APP_URL` (app root) instead of a specific module page. There is no `/module/legal` or `/module/english-for-work` slug. These dump visitors at the app homepage with no context.
**Fix:** Either:
- Route Legal & Immigration to `/module/education` (Legal Immigration is in the Education module)
- Remove "English for Work" from the areas list entirely until that module exists

In `About.tsx` around line 124–126:
```tsx
// Change:
{ emoji: '⚖️', title: 'Legal & Immigration', link: APP_URL, linkLabel: 'Start Learning' },
{ emoji: '🗣️', title: 'English for Work',    link: APP_URL, linkLabel: 'Start Learning' },

// To:
{ emoji: '⚖️', title: 'Legal & Immigration', link: '/module/education', linkLabel: 'Education Module →' },
// Remove or comment out the English for Work entry until that module exists
```

Note: `link` for internal routes should use `to=` with `<Link>` not `href=` with `<a target="_blank">`. The AreasWeServeSection currently uses `<a href={area.link} target="_blank">` for all items — internal links should not open in a new tab. Refactor so internal `/module/...` paths use `<Link to={...}>` from react-router-dom and external URLs keep `<a target="_blank">`.

---

## TASK 10 — Nav: Add "Founder" link alongside "About"

**File:** `src/components/Nav.tsx`
**Problem:** The desktop nav now has "ABOUT" (fix already landed). The Founder page is the most personal and compelling page on the site — the story of why the product exists — but it's only reachable via the footer or from the About page. Adding it to the nav increases discoverability.
**Fix:** Add a FOUNDER link to the nav MODULES array in `Nav.tsx`:

In `Nav.tsx`, after the 8 module links, add two static links alongside Sign In / Start Free:
```tsx
{/* Add to the right-side links, before Sign In */}
<Link
  to="/founder"
  className="hidden lg:block font-mono text-[10px] uppercase tracking-[0.18em] text-white/35 hover:text-white/70 transition-colors"
>
  Founder
</Link>
```

Or alternatively, add it to the mobile hamburger dropdown alongside the existing module grid.

---

## SUMMARY OF FILES TO TOUCH

| Task | File(s) |
|------|---------|
| 1 — Stats bar labels | src/pages/Home.tsx |
| 2 — Demo CTA button | src/pages/Home.tsx |
| 3 — Missionary free badge | src/pages/ModuleStarter.tsx |
| 4 — Kids softer aesthetic | src/pages/ModuleStarter.tsx |
| 5 — Onboarding skip + progress | src/pages/AppHome.tsx |
| 6 — Sidebar tooltip min-width | src/pages/AppHome.tsx |
| 7 — Pricing free CTAs as buttons | Pricing page component |
| 8 — Language-lens CTA color | src/pages/LanguageLens.tsx |
| 9 — About page internal links | src/pages/About.tsx |
| 10 — Nav Founder link | src/components/Nav.tsx |
