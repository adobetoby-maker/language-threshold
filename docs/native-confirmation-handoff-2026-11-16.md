# Future download confirmation handoff — 2026-11-16

Source-only candidate based on exact independently read primary deployment commit `bf5fad2113aeb934b44a03ce3e2b25a3bc6f6926` for `languagethreshold.com`, existing Vercel project `prj_1FxzISAkp3f0T5D1ePo1dc6hQJEC`. No site environment, provider, consumer policy or production deployment is changed by this commit. Do not deploy a stale free-download branch or the dirty original repository.

Ports the reviewed Medical source protocol `429383059b24b668da636be2964c3fe34f6f6e4a` with fixed host/project replacements only. Existing `server/free-resources.ts`, catalog JSON, actual PDF assets, HTML, source attribution, resource delivery wording, account links and current placement/tour changes remain unchanged. This app's actual served form script is `public/assets/free-downloads/downloads.js`.

## Behavior

With no activation epoch, Leader remains the single invitation owner. After a deliberately coordinated `NATIVE_CONFIRMATION_FROM`, the source skips Leader public signup for that new request, persists the strict owner download report, sends a separately signed marketing callback marked native, and keeps the immediate requested resource/link and resource email. The native event ID uses the existing site-bound `native-download:v1` HMAC format and shared proof vectors; pre-cutover Leader events cannot be reinterpreted as native. A marketing callback outage gets one identical retry and then existing owner-report recovery; it does not discard a successfully saved resource request.

No resource request grants follow-up or weekly consent. No prior contact is invited by installing this code. Consumer ownership, fresh request age/capture authorization, contact/campaign match, suppression/CRM checks and one invitation per current enrollment remain mandatory. A separate explicit confirmation POST grants scoped three-email permission; scanner GETs do not. Different resource/product reenrollment is not silently substituted into another campaign.

The source explicitly pins the existing email-capture function to60seconds, matching Medical. Hosted inspection exposed only the blog30second setting, not a concrete capture duration; every other Vercel configuration key is preserved.

## Required runtime configuration and source proof

- Existing per-site `DOWNLOAD_LEAD_KEY` must match the existing owner's signed-report and marketing consumer key. Never rotate it or copy another brand's key as part of this rollout. The exact existing consumer key continuity check remains required.
- `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET` may use the owner's already verified widget; server `TURNSTILE_HOSTNAMES` must be `languagethreshold.com,www.languagethreshold.com`. The widget allows root hostnames and descendants; the server still accepts only these exact hosts and exact action `resource_download`.
- Native protocol does not use cdata; weekly intake independently requires `weekly_signup` plus requestId cdata. Those purposes and consent receipts are not interchangeable.
- The managed widget must produce a fresh token on an owned production hostname. Server Siteverify is mandatory before durable capture quota and recipient actions. Source/consumer budgets remain 25 per site/hour,100 per site/day,3 per recipient/day; durable challenge hash prevents replay. No preview/localhost production bypass is added.
- Set an explicit future `NATIVE_CONFIRMATION_FROM` at least five minutes and at most one day ahead. Stage under the existing project without aliases; prove read-only confirmation/protection health includes exact new deployment, policy, epoch and readiness. Review before primary promotion. Read canonical form JS hash after promotion.
- Only then owner-authenticated POST to marketing `/api/campaigns` can install `action:confirmation-policy`, `site:languagethreshold.com`, `owner:native`, exact sourceCommit/sourceDeployment/activatedAt. Keep invitations paused. The consumer validates canonical source health, exact source ID/epoch and separate-confirmation mode. Worker Bearer credentials cannot invoke this owner action.
- Resume invitation dispatch only after the coordinator's canonical/readiness and real fresh-token checks. This is separate from enabling the existing three-email engine. Retain the original activation epoch on later deployments; no historical bulk invitations, owner-permission receipts or CRM verification may be fabricated.

## Verification

28 producer contract tests pass with all transports synthetic, including original CRM/resource behavior, strict owner report schema, native HMAC proof, one invitation owner, preserved immediate email, bot failure/hostname/action denial, durable quota, and identical transport retries. Exact Node-only API configuration type check (unknown JSON responses narrowed before use) and full production build pass. The existing marketing form verifier was reused against actual 390px HTML/served JS with an entirely intercepted widget/API: new tokens are required after failure/success, unavailable/malformed config keeps submission disabled, zero page errors and zero external/recipient actions. Catalog/PDF/HTML preservation is checked against the exact base. No real CAPTCHA, opt-in or Resend delivery is claimed by these synthetic checks.

## Rollback

Pause consumer invitations first. Preserve delivered confirmation/preference links, current stops, source epoch, message receipts and managed queue/repair protocol. Do not downgrade the consumer to a gate-attestation or scanner-only sender. A rollback must never turn a prior Leader request into native consent or resend an ambiguous message. Keep reviewed bot/duplicate safeguards while deciding explicit source invitation ownership.
