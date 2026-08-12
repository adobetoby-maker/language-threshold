# Phase 2 review synthesis and accepted disposition

## Inputs

- Grok independent review of exact commit `95b5999f348d675c7fdfaee20ab4b317142b5102`
- Claude Opus CLI read-only review of the same commit
- Sol CLI read-only adjudication of disputed findings
- Direct code, test, Vercel preview, and CI inspection

## Decision

The three reviews agree that the branch is a useful, dark-by-default foundation and is not production-ready. Their verdict wording differs because they use different meanings for “advance”:

- Grok approves continued non-production development with follow-ups.
- Claude requests changes before the draft PR advances.
- Sol rejects calling Issue #5 or the provider/mobile spike complete, while allowing guarded scaffolding work to continue.

The accepted synthesis is therefore:

> Continue the draft PR after correcting inaccurate guarantees and regression gaps. Do not mark Issue #5 complete, do not mark the PR ready, and do not enable provider-backed speaking in production. The next development increment must build the measurable non-production turn loop and durable metering required by the issue.

## Accepted fix-now items

| Finding | Disposition |
|---|---|
| API TypeScript is absent from CI | Add `npm run typecheck:api` and run it in CI. |
| Production spike could be enabled by flags | Refuse production in the token route and force capabilities `enabled=false` in production. |
| Capability claims imply enforced duration/complete cascade | Publish grant counts separately, mark the 18-minute cap server-unenforced, and publish per-leg integration status. |
| Age control sounds stronger than it is | Publish `self-attestation` and `productionApproved=false`; document verified age as a later gate. |
| Privacy status is too broad | Publish STT opt-out as requested and provider retention as unapproved; do not imply TTS/dialogue approval. |
| Provider types contain vendor literals | Use provider-neutral descriptors and a generic token-grant envelope; keep Deepgram details in its adapter. |
| Adapter name implies the whole speech cascade | Rename it as an STT-upload adapter and explicitly label dialogue/TTS as planned or grant-only. |
| IndexedDB migration is untested and legacy data can abort it | Validate migrated records, remove the legacy store, and add a seeded v1 migration test. |
| Attempt clear spans transactions | Delete the compound-key range inside one read-write transaction. |
| Cookie principal conflicts with UUID persistence | Sign a raw UUID and shorten the spike cookie lifetime to 24 hours. |
| Meta can remain initialized after SPA entry | Force a clean document reload when a loaded pixel crosses into the speaking privacy boundary. |
| Preview origin cannot call its own token API under the strict list | Allow only the exact current `VERCEL_URL` in preview, while retaining the production allowlist. |
| Malformed percent-encoded cookies can throw | Ignore malformed cookie pairs and issue a new signed principal safely. |

## Tracked next-increment requirements

These are real requirements, but implementing them inside a “review fix” would hide a material new architecture phase:

1. durable authenticated principal and verified age state;
2. server-side session lease with concurrency, audio-second, TTS-character, token, and dollar-budget accounting;
3. actual STT result handling, server dialogue adapter, TTS transport/playback, cancellation, reconnect, and timeout behavior;
4. provider retention/no-training/DPA approval per transport leg;
5. physical iPhone Safari measurements and actual billed cost;
6. calibrated evaluator fixtures, human content review, deletion/export, and separate production authorization;
7. one canonical server/client source or drift test for launch scenario-version IDs;
8. price-table `asOf` metadata and measured-vs-estimated UI safeguards.

## Scope decisions

- No fake conversation will be added merely to make the UI look complete.
- No provider is selected permanently from list prices or desktop emulation.
- No production deployment or flag change is authorized.
- No full-duplex/barge-in work enters the tap-to-speak launch scope.

## Advancement gate

The corrective commit may advance the draft PR when API typecheck, unit tests, app build, lint, preview API smoke tests, and the speaking-route browser privacy/state checks pass. Issue #5 remains open until the measurable transport loop and physical-device evidence exist.
