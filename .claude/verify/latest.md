# Verify — Pashto integration, languagethreshold.com — 2026-07-07

beauty_score: 8.0

| Spec item            | Observed                                                                 | Result |
|---|---|---|
| Layout / spacing     | 4 Pashto pages match Korean-page pattern: hero, stats, module grid, CTA; no overlap at any viewport | PASS |
| Colors / contrast    | Emerald #10B981 accent on near-black #0D0D0D; gold section accents preserved; text ≥4.5:1 | PASS |
| Typography           | Pashto renders in serif display via system Arabic fallback — headline «هغه پښتو زده کړئ چې ناروغان یې وايي.» crisp, RTL order correct | PASS |
| Mobile (390px)       | Missionary mobile hero verified: stacked CTAs full-width, RTL headline wraps cleanly | PASS |
| Animations / motion  | FadeIn sections + module card expand verified in module-open screenshots | PASS |
| Data integrity       | Injector asserted every en key: 370 vocab + 37 titles + 37 taglines + 37 phrases + 5 gear photos, zero mismatches; tsc clean | PASS |
| Live production      | https://languagethreshold.com/medical-pashto HTTP 200; rendered check: home "9 languages" true, ticker پښتو true; sitemap 4 Pashto URLs | PASS |

Evidence: /tmp/pashto-shots/ (16 local shots + LIVE-medical-pashto.png from production)
