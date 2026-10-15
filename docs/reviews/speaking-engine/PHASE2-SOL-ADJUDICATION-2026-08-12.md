# Phase 2 Sol CLI adjudication

## Review target

- Exact commit: `95b5999f348d675c7fdfaee20ab4b317142b5102`
- Mode: isolated read-only Codex/Sol CLI
- Purpose: adjudicate disagreements between the Grok and Claude reports against executable code paths

## Verdict

**No-go for declaring the provider/mobile spike complete; useful guarded scaffolding may continue.** The code is correctly dark in its default state, but the reviewed commit does not contain a measurable STT → dialogue → TTS loop or the controls/evidence required to finish Issue #5.

## Adjudicated facts

1. **CI omission is verified.** Root build references only app and Vite TypeScript projects; `api/tsconfig.json` is not automated.
2. **The 18-minute cap is descriptive.** No timer, lease, provider revocation, usage counter, or concurrency control enforces it. Grant counts do not bound audio minutes, TTS characters, dialogue tokens, or sockets.
3. **The anonymous-principal limiter is cookie-rotatable.** The network-address limiter remains useful defense in depth, but this is not authenticated usage control.
4. **Meta's explicit calls are suppressed, but a previously loaded pixel remains initialized.** A clean document/privacy boundary or verified consent revocation is needed for the broad “pixel suppressed” claim.
5. **The machine-readable privacy object is incomplete.** A requirement boolean is not verified status, STT is the only implemented provider leg with an opt-out query parameter, and planned Anthropic retention approval is not represented.
6. **The public types contain vendor coupling.** Capabilities and token grants hard-code Deepgram/Flux/Anthropic details even though session/scoring contracts are mostly provider-independent.
7. **IndexedDB migration is plausible but untested; attempt clear is non-atomic.** Seed a v1 database in tests and delete an attempt's compound-key range in one read-write transaction.
8. **UI wording is honest, but the technical report was too broad.** The implementation opens an STT upload socket; it does not receive transcripts, invoke a dialogue adapter, or manage TTS/playback.

## Additional finding

The signed cookie used `anon_<uuid>` while the planned `principals.id` database column is UUID. A durable implementation could not persist that identifier directly.

## Required distinction

- Safe to continue: token-grant and STT-connectivity scaffolding in preview/development, with production hard-disabled and claims narrowed.
- Not complete: provider/mobile measurement phase, authenticated metering, end-to-end transport, physical-device evidence, retention approval, and production readiness.

The CLI made no edits and changed no external state.
