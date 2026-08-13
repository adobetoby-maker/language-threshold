# Speaking Engine Phase 3 — Measurable Turn-Loop Spike

**Status:** Draft implementation for preview validation; not approved for production

**Date:** 2026-08-12

**Tracking:** GitHub Issue #7

**Stacked on:** Phase 2 provider spike / PR #6

## Outcome

This increment connects one guarded, tap-to-speak browser loop:

`microphone → Deepgram Flux STT → constrained Anthropic dialogue → Deepgram Aura TTS → playback`

It exists to produce testable latency, usage, cancellation, and mobile-lifecycle evidence. It does not establish production readiness, verified age, mastery, durable learner progress, or provider privacy approval.

## Implemented boundary

- A server-created, signed 18-minute session lease binds an anonymous principal to one immutable scenario version.
- Upstash stores the session ledger and fails closed when unavailable. The preview limits are 24 completed turns, 48 provider-token issuances, 1,080 browser-reported learner-audio seconds, and 60 seconds per reported turn. Separate hourly limits apply to session starts and token issuances.
- The application requests a fresh 30-second Deepgram token for each intended STT or TTS connection. The browser receives no durable provider key. Deepgram tokens are general `usage::write` credentials and can be reused until expiry, so an issuance count is not proof of one connection or a concurrency cap.
- Flux accepts raw `linear16` audio at 16 kHz. The explicit Stop path sends `CloseStream`, waits for the terminal provider response, and joins all finalized Flux segments collected since Start rather than silently overwriting speech separated by a natural pause.
- Dialogue runs server-side through the Anthropic Messages API and must return one constrained tool result. Scenario role, objectives, and safety rules are held in an explicit server catalog with a drift test against the client catalog.
- Objective IDs returned by the model are displayed only as provisional evidence. They do not update mastery or durable progress.
- Aura TTS streams `linear16` audio at 24 kHz. The client implements `Speak`, `Flush`, `Clear`, and `Close` lifecycle messages.
- The microphone context is created and its resume is initiated synchronously in the learner's Start gesture; the playback context is armed in the learner's Stop gesture. Microphone tracks are stopped while the response is generated and played. Physical Safari verification is still required.
- Hiding the document, cancelling, unchecking the age attestation, hitting the per-turn timeout, or reaching the lease limit stops active media work.

## Metering semantics

The server ledger records provider-token issuance count, completed turns, browser-reported learner-audio seconds, requested TTS characters, and Anthropic input/output tokens. This is useful preview telemetry and abuse resistance, but it is not authoritative billing metering:

- audio duration is reported by the browser and can be falsified;
- the issuance count does not prove how many sockets reused a token or how long an already-open provider socket remained active;
- the ledger does not yet reserve concurrent connection slots;
- it does not reconcile against provider invoices or request logs; and
- an anonymous principal cookie is not a durable authenticated learner identity.

Those limits remain production blockers.

## Privacy and safety posture

- All three endpoints remain hard-disabled when `VERCEL_ENV=production`.
- Preview/development still requires both `SPEAKING_SPIKE_ENABLED=true` and `SPEAKING_DATA_POLICY_APPROVED=true`.
- The session start uses the existing 13+ checkbox as a client self-attestation. It is not authoritative age verification and must not be treated as a production control.
- Raw learner audio goes directly from the browser to Deepgram and is not stored by this application.
- The finalized transcript and short recent dialogue history go to Anthropic. The UI states this before the learner starts.
- Recent history is browser-supplied in this spike. It is sent as structured user/assistant messages and treated as untrusted conversation data, but it is not yet reconciled against server-authoritative history.
- Generated partner text goes to Deepgram for TTS and is cached with the idempotent turn result in Upstash for no more than the remaining lease plus a 60-second grace period. Browser Reset does not delete that cache early.
- Speaking routes continue to suppress application analytics. Transcripts and raw audio are not emitted to analytics.
- `mip_opt_out=true` remains on the Deepgram STT request. This flag does not replace contract, DPA, retention, subprocessor, or regional-processing review.
- The server prompt constrains the role-play and carries authored scenario safety rules. Provider output is schema-checked and length-limited, but model output still requires adversarial and human review.

## Failure and cancellation behavior

- Provider connection, finalization, dialogue, and lease timers are bounded.
- A cancelled session aborts fetches, stops microphone tracks, closes STT/TTS sockets, clears queued playback, and closes audio contexts.
- Unexpected loss of the active STT socket or microphone track immediately fails the browser session and tears down the remaining live media resources.
- A dialogue lock serializes turns per session, and the turn sequence plus cached result make a retry idempotent after a successful commit.
- A failed provider grant, provider response, schema parse, or ledger operation fails the turn closed. This spike does not silently fall back to fake dialogue.
- Automatic reconnect is not implemented. An unexpected transport close fails the browser session and requires an explicit reset; measuring “reconnect” in this increment means validating that fail-closed recovery path, not transparent replay.

## Verification completed in code

- Unit tests cover PCM conversion, Flux final-event parsing, token/session client contracts, signed-lease binding and expiry, constrained dialogue output, scenario-catalog drift, state-machine behavior, cost math, IDs, and attempt-scoped persistence.
- ESLint, browser TypeScript build, API TypeScript check, and the Vitest suite are required before publishing the draft.
- A mocked browser walk-through may exercise the orchestration and responsive UI, but it is not provider interoperability or physical-device evidence.
- Capture currently uses deprecated main-thread `ScriptProcessorNode`. Its drop/glitch rate must be measured and disclosed during the controlled run; migrate to `AudioWorkletNode` before treating performance data as launch evidence.

## Required preview and device evidence

No result below may be inferred from desktop emulation. With approved preview-only secrets and flags, record:

1. Deepgram grant, Flux final-turn, Anthropic tool-result, Aura streaming, cancel, and reconnect behavior against real services.
2. p50/p95 capture-to-final, dialogue, first-audio, and end-to-end latency.
3. Provider-reported usage and billed cost reconciled with the session ledger.
4. Current iPhone Safari on Wi-Fi and LTE/5G, plus an older supported iPhone and Android reference.
5. Permission denial, quiet/accented Spanish, code-switching, domain terms, noise, Bluetooth/wired audio, incoming interruption, backgrounding, screen lock, and explicit cancel.
6. Human content and safety review for every approved Construction and Missionary scenario.

## Production blockers retained

- authenticated principal and verified age path;
- authoritative concurrent-session, audio-duration, and 18-minute enforcement;
- durable attempt persistence, deletion, and export;
- calibrated deterministic evaluator and human-reviewed fixtures;
- provider retention/no-training/DPA/subprocessor/regional-processing approval;
- real-device latency, stability, accessibility, and cost evidence; and
- separate production deployment authorization.

## Protocol references

- Deepgram Flux WebSocket: https://developers.deepgram.com/reference/speech-to-text/listen-flux
- Deepgram Flux event model: https://developers.deepgram.com/docs/flux/understanding-flux
- Deepgram streaming TTS WebSocket: https://developers.deepgram.com/reference/text-to-speech/speak-streaming
- Deepgram token-based authentication: https://developers.deepgram.com/guides/fundamentals/token-based-authentication
- Anthropic Messages API: https://platform.claude.com/docs/en/api/messages
- Anthropic tool use: https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview
