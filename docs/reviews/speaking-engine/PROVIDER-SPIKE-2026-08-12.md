# Speaking Engine Phase 2 — Provider and Mobile Speech Spike

**Status:** Implementation spike; not approved for production  
**Date:** 2026-08-12  
**Tracking:** GitHub Issue #5  
**Foundation:** PR #4 / merge `49f0888fce90ea4248b8e3c496ab573064ca2171`

## Decision

Use a provider-neutral streaming cascade and make **Deepgram Flux Multilingual + Aura-2 Spanish** the first measured speech transport. Keep dialogue and evaluation behind server-owned interfaces; the spike uses Claude Haiku 4.5 as the first dialogue adapter because the repository already operates Anthropic safely on the server.

This is a testable reference configuration, not a permanent vendor lock. OpenAI transcription/realtime remains the comparison candidate. No provider-backed speaking path may be enabled in production until the PRD launch gates are met.

## Why this is the first spike

- Flux Multilingual is a streaming, turn-aware STT model with Spanish language hints. It directly tests the mobile turn-boundary risk that motivated Phase 2.
- Deepgram's token grant endpoint issues short-lived JWTs (30 seconds by default; up to one hour), and an already-open WebSocket can outlive the token. Browser audio can therefore go directly to the speech provider without exposing a durable key or proxying a long-running stream through Vercel.
- Aura-2 offers WebSocket TTS and Spanish voices, including Latin American options. Using one provider for the first STT/TTS measurement removes an avoidable network variable.
- Claude Haiku 4.5 is text-only in this architecture. The app can replace it without changing microphone capture, STT, TTS, session state, or mastery contracts.

## Official-source matrix

| Area | First spike | Comparison / implication |
|---|---|---|
| Streaming STT | Deepgram `flux-general-multi`, $0.0078/min PAYG. Built-in turn detection and interruption handling. | Deepgram Nova-3 multilingual is $0.0058/min when turn-aware Flux behavior is not needed. OpenAI GPT-Live-Transcribe is $0.017/min. |
| Browser authentication | Deepgram `/v1/auth/grant`, 30-second JWT by default. Supported by `/listen` and `/speak`; browser WebSockets use `Sec-WebSocket-Protocol`. | Durable provider keys remain server-only. A token grant is budgeted and same-origin guarded. |
| TTS | Deepgram Aura-2, $0.030/1,000 input characters. `aura-2-celeste-es` is a supported Colombian Spanish voice; Latin-American voices are also available. | Benchmark at least one additional Spanish voice for intelligibility and learner preference. OpenAI audio remains a comparison, not the Phase 2 default. |
| Dialogue | Claude Haiku 4.5, $1/MTok input and $5/MTok output. | Keep the adapter and evaluator model/version separate. The deterministic rubric, not the model, assigns mastery. |
| OpenAI data controls | API data is not used for training by default. Realtime has default abuse-monitoring retention up to 30 days and is Zero Data Retention eligible; audio transcription lists no abuse-monitoring or application-state retention. | OpenAI remains viable if its measured Spanish/latency result is better. ZDR is approval-based and must be confirmed on the actual project. |
| Anthropic data controls | API inputs and outputs are deleted within 30 days by default; zero-data-retention agreements are available to approved enterprise API customers. | Dialogue transcripts are provider data. Default 30-day retention is not silently represented as zero retention. |
| Deepgram controls | `mip_opt_out=true` opts a request out of the Model Improvement Program, with no listed-rate penalty for PAYG/Growth as of March 2026. EU/AU regional endpoints exist. | Public docs do not establish every content/log-retention term needed for launch. Contract/DPA review remains a hard gate. |

Official sources:

- Deepgram pricing: https://deepgram.com/pricing
- Deepgram token-based authentication: https://developers.deepgram.com/guides/fundamentals/token-based-authentication
- Deepgram Flux reference: https://developers.deepgram.com/reference/speech-to-text/listen-flux
- Deepgram streaming TTS reference: https://developers.deepgram.com/reference/text-to-speech/speak-streaming
- Deepgram Spanish Aura voices: https://developers.deepgram.com/docs/tts-models
- Deepgram Model Improvement Program pricing update: https://developers.deepgram.com/changelog/2026/3/5
- Deepgram privacy and regional processing: https://developers.deepgram.com/trust-security/data-privacy-compliance
- Anthropic pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Anthropic API retention: https://privacy.anthropic.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data
- OpenAI pricing: https://openai.com/api/pricing/
- OpenAI API data controls: https://platform.openai.com/docs/models/default-usage-policies-by-endpoint

## Provisional cost boundary

The spike records exact provider usage and stage timings; list-price arithmetic below is only a test budget.

For a planning example with a 15-minute session, six minutes of learner audio, 3,000–6,000 TTS characters, 8,000 uncached dialogue input tokens, and 2,000 dialogue output tokens:

- Flux multilingual STT: `6 × $0.0078 = $0.0468`
- Aura-2 TTS: `3–6 × $0.030 = $0.09–$0.18`
- Claude Haiku 4.5: `(8,000 × $1 + 2,000 × $5) / 1,000,000 = $0.018`
- Provider subtotal: approximately **$0.155–$0.245 per example session**, before infrastructure, retries, taxes, or discounts.

This estimate must not become a launch promise. Physical-device runs must capture actual billed audio seconds, characters, tokens, retries, cancellation waste, p50/p95 stage latency, and total session cost.

## Security and privacy behavior implemented in this spike

- `GET /api/speaking/capabilities` publishes non-secret configuration status and always returns `productionReady: false`.
- `POST /api/speaking/token` is disabled unless both `SPEAKING_SPIKE_ENABLED=true` and `SPEAKING_DATA_POLICY_APPROVED=true` are set.
- The token route requires an approved same-origin request, explicit 13+ confirmation, an allowlisted immutable scenario version, a signed HttpOnly anonymous-principal cookie, configured Upstash budgets, and a server-only Deepgram key.
- Budget checks fail closed if Upstash is missing or errors. Token grants are limited per signed principal and per network address.
- The returned Deepgram credential expires in 30 seconds and is intended only to establish provider WebSockets.
- The application does not retain raw audio. Speaking routes suppress third-party analytics, including client-side `pushState` and `replaceState` navigation.
- Provider request IDs and timing data are operational metadata; transcripts and raw audio must not enter analytics.

## Required physical-device matrix

Run on actual hardware; desktop emulation does not satisfy this gate.

| Device / browser | Network | Capture mode | Required observations |
|---|---|---|---|
| Current iPhone / Safari | Wi-Fi | tap-to-speak | permission flow, first audio, turn completion, cancellation, playback, screen lock/interruption |
| Current iPhone / Safari | LTE/5G | tap-to-speak | reconnect behavior, p50/p95 STT finalization and end-to-end latency, token expiry race |
| One older supported iPhone / Safari | Wi-Fi | tap-to-speak | memory pressure, long-session stability, AudioContext resume behavior |
| Android / Chrome reference | Wi-Fi | tap-to-speak | cross-browser baseline and MediaRecorder format differences |

Test quiet speech, accented Spanish, code-switching, construction/missionary keyterms, background noise, Bluetooth/wired audio, incoming-call interruption, tab background/foreground, explicit stop, and permission denial.

## Exit criteria

Phase 2 can recommend a production provider only when:

1. p50 and p95 stage latency are measured on the physical-device matrix;
2. actual cost is captured for representative 7–9 and 10–15 minute sessions;
3. provider retention, training opt-out, deletion, regional processing, and subprocessor terms are approved;
4. disconnect/cancel/retry behavior does not double bill or duplicate attempt events;
5. the evaluator fixtures are calibrated and remain separate from pronunciation diagnostics;
6. Construction and Missionary launch content completes human review;
7. authenticated principal, durable attempt persistence, concurrency accounting, and deletion/export paths exist; and
8. a separate production deployment authorization is given.

## Known non-goals of this PR

- No full-duplex speech-to-speech or barge-in.
- No production launch or production environment enablement.
- No claim that anonymous signed principals are the final account/auth design.
- No raw-audio retention, transcript analytics, pronunciation mastery gate, or fake AI conversation.
- No claim that desktop browser verification satisfies the physical-iPhone launch gate.
