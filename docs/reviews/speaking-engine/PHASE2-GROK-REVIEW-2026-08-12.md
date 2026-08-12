# Phase 2 independent Grok review

## Review target

- Repository: `adobetoby-maker/language-threshold`
- Draft PR: #6
- Exact commit: `95b5999f348d675c7fdfaee20ab4b317142b5102`
- Mode: read-only
- Review supplied by the user after running the independent Grok prompt

## Verdict

**Approve with follow-ups.** The review found no critical issue blocking the guarded, non-production spike. It found the implementation honest about physical-iPhone and production readiness, while requiring concrete follow-ups before the spike becomes the baseline for later development.

## High-priority findings

1. **Age is client-asserted only** (`api/speaking/token.ts`). `ageConfirmed === true` is a self-attestation, not account-level or cryptographic proof. Document it as temporary and retain verified age as a production gate.
2. **Grant counts do not bound post-grant spend or concurrency** (`api/speaking/_budget.ts`, `api/speaking/token.ts`). A WebSocket may outlive its 30-second grant. Track server-side audio-second, concurrent-session, and hard-cap enforcement before production.
3. **The adapter is asymmetric** (`src/features/speaking/providers/deepgram.ts`). It handles an STT connection while the token response also declares a TTS URL. Either implement TTS transport or narrow the advertised scope.
4. **The 18-minute cap is not server-enforced.** It is acceptable as a spike limitation only if the capability contract and follow-up work say so explicitly.

## Medium-priority findings

5. The anonymous-principal cookie's 30-day lifetime increases tracking surface; shorten or explicitly accept it for the spike.
6. The origin allowlist intentionally excludes the construction and medical product domains. Keep it tight for this spike and document the restriction.
7. GA suppression is strong, while Meta suppression depends on the application's path-guarded helpers. Add a speaking-route third-party analytics invariant.
8. Curriculum drift renders gracefully, but the server allowlist does not validate that client vocabulary units resolve. Consider fail-closed validation later.
9. Price calculations are properly qualified; do not surface list-price estimates as measured cost.

## Low-priority observations

- The IndexedDB composite key, upgrade handling, blocked state, and database cleanup are directionally good.
- NodeNext plus explicit `.js` API import specifiers is appropriate for the Vercel ESM runtime.
- The domain/session interfaces are sufficiently separated from scoring for this spike.
- Real-device WebSocket, cancel/reconnect, AudioContext, latency, and cost evidence remain intentionally open launch gates.

## What the review approved

- dual non-default environment gates;
- `productionReady: false`;
- temporary provider credentials with the durable key kept server-side;
- STT model-improvement opt-out request;
- trusted-origin checks and a signed HttpOnly cookie;
- fail-closed Upstash grant limiting;
- immutable launch-scenario allowlist;
- SPA-aware analytics helper suppression;
- attempt-scoped IndexedDB compound keys;
- explicit remaining launch gates and qualified list-price calculations.

## Required follow-ups

1. Make the temporary age attestation explicit.
2. Implement TTS transport or narrow the public capability claim.
3. Track server-enforced concurrency, audio seconds, and the planned session cap.
4. Confirm or shorten the anonymous cookie lifetime.
5. Keep real-iPhone evidence, retention/DPA approval, measured cost/latency, and separate production authorization as hard gates.

## Go/no-go

**Go with tracked follow-ups** for continued non-production development; no production flag flip.
