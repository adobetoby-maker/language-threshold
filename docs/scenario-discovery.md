# Scenario discovery and program level

Adds a homepage comparison (Language Threshold, Duolingo, ClinicaLingo, CanopyLearn), actual Spanish scenario examples, program-level explanation and navigation/footer links to the app's public `/scenarios` and `/compare` pages.

The source snapshot in `src/data/practice-discovery.json` comes from app PR245's generated Spanish/English curriculum and speaking catalogs, checked November 7, 2026. Medical: 12 courses/690 lessons; Trades: 12/720; Sports: 11/660. Competitor counts and scope are documented with primary sources on the app comparison page. Lesson counts and speaking-task counts describe different formats.

Program wording: A1–B1 structured speaking, with advanced role-specific Master practice. This describes actual task labels and advanced work practice, not an independently assessed overall exit level.

Release dependency: merge/deploy app PR245 before this homepage update, because the main website links to production app `/scenarios` and `/compare`.

Validation: production build passed (TypeScript, Vite, sitemap and PWA generation). Existing chunk-size and Browserslist-age warnings remain.
