# Speaking Engine Phase 4 — Evidence harness implementation note

**Tracking:** GitHub Issue #9

**Stacked on:** Phase 3 turn loop / draft PR #8

**Status:** Harness implemented; real-provider/device run blocked on preview configuration

## Implemented

- A versioned `speaking-provider-evidence-v1` JSON bundle records scenario/session correlation, provider model identities, manually entered non-sensitive tester/device context, viewport size, completed-turn timings, Deepgram STT request IDs, application usage, stable lifecycle failure codes, latency percentiles, and a list-price estimate.
- Evidence is generated and downloaded entirely in the browser. It is never uploaded automatically.
- The export deliberately omits transcripts, partner responses, coaching, objective evidence, raw audio, the signed session lease, provider access tokens, and durable keys.
- The UI requires an alias, device, OS, browser, and matrix-case description before download and warns testers not to enter names, addresses, or sensitive information.
- Timing definitions distinguish capture, Flux finalization, dialogue, first TTS audio, TTS socket completion, post-provider playback drain, and total active-turn duration.
- p50/p95 calculations use nearest-rank percentiles and remain `null` when no completed turn exists.
- Provider cost remains a versioned list-price estimate with `costIsProviderReconciled=false`; an authorized human must compare the export with provider records/invoices.
- Live microphone failure handlers now attach before `getUserMedia` completion, and a failed next-turn STT setup is associated with the upcoming turn rather than the completed turn.

## Local verification

- ESLint: pass
- Vitest: 67 tests across 16 files, pass
- API TypeScript: pass
- browser TypeScript and production Vite build: pass
- mocked 390×844 two-segment turn and evidence download: pass
- downloaded success evidence privacy scan: pass
- mocked post-open STT loss and failure-evidence download: pass (`stage=stt`, `code=stt-transport-ended`, no transcript/content)
- browser content/error-overlay checks: pass
- browser console: Vite/React development messages only; no application error

These results are orchestration and serialization evidence only. They are not real-provider or physical-device evidence.

## Infrastructure audit

On 2026-08-12, `vercel env ls preview` showed only `NEXT_PUBLIC_GA_ID`. The speaking provider keys, isolated Upstash connection, signing secrets, and speaking flags are absent. A current Vercel preview returned a Vercel SSO redirect, confirming deployment protection for that preview; the Phase 4 branch preview must be checked again after publishing.

No Preview or Production environment variable, deployment flag, provider credential, alias, or production setting was changed.

## Next gate

Before any real request, complete the readiness checklist in `PROVIDER-DEVICE-EVIDENCE-RUNBOOK.md`. Until then Phase 4 remains blocked at the external-configuration boundary, not the application harness boundary.
