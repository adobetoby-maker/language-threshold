# Verdict: request changes

The branch is a credible preview-only foundation, and its production blocks are mostly honest. However, several lifecycle and protocol defects can invalidate a provider run or make the stated safeguards inaccurate. I found no production-secret exposure or path by which provisional model objective IDs currently update mastery.

## Critical findings

None.

## High-priority findings

1. **Explicit Stop does not invoke Flux finalization, and multiple provider turns can overwrite one another.**

   - **Fact:** Stop disconnects local capture and immediately waits for `EndOfTurn` ([useSpeakingTurnLoop.ts:98-102](../../../src/features/speaking/hooks/useSpeakingTurnLoop.ts:98)). `CloseStream` is sent only later by `cancel()` ([deepgram.ts:155-160](../../../src/features/speaking/providers/deepgram.ts:155)). The adapter overwrites `finalTurn` on every `EndOfTurn` ([deepgram.ts:88-96](../../../src/features/speaking/providers/deepgram.ts:88)), while the endpoint uses an aggressive 1.2-second EOT timeout ([token.ts:71-73](../../../api/speaking/token.ts:71)).
   - **Inference:** A natural pause can generate one or more EOTs before the learner presses Stop; earlier speech can be discarded because only the latest turn remains. Merely ceasing frames may also delay finalization until the eight-second client timeout. Deepgram documents `CloseStream` as the command that forces remaining audio to be processed and final transcription returned. [Deepgram CloseStream documentation](https://developers.deepgram.com/docs/flux/close-stream)
   - **Impact:** The core preview loop can transcribe only part of a learner turn or fail on explicit Stop.
   - **Smallest safe fix:** Add an explicit finish method that sends `CloseStream` after local capture stops and waits for the resulting final event. Define and test what happens if Flux emits EOT before the button press: either stop automatically on the first EOT or accumulate all provider segments without silently overwriting them. Then validate the ordering against the real provider.

2. **The React orchestration exposes “listening” before the next microphone/STT connection is ready and does not serialize user actions.**

   - **Fact:** `RESPONSE_FINISHED` changes the reducer to `listening` ([machine.ts:39-41](../../../src/features/speaking/session/machine.ts:39)) before the next token, WebSocket, and microphone are prepared ([useSpeakingTurnLoop.ts:144-164](../../../src/features/speaking/hooks/useSpeakingTurnLoop.ts:144)). The UI consequently renders Stop ([SpeakingTurnLoopPanel.tsx:44-47](../../../src/features/speaking/components/SpeakingTurnLoopPanel.tsx:44)), but `stopAndRespond` silently returns when the STT reference is still null ([useSpeakingTurnLoop.ts:82-89](../../../src/features/speaking/hooks/useSpeakingTurnLoop.ts:82)). Start and Stop also lack an operation lock or generation identifier ([useSpeakingTurnLoop.ts:48-80](../../../src/features/speaking/hooks/useSpeakingTurnLoop.ts:48)).
   - **Inference:** A fast Stop can appear accepted while capture starts afterward and continues for up to 60 seconds. Double taps can also create overlapping sessions or turns, with one failure cancelling the other.
   - **Impact:** Incorrect state, wasted grants, and a privacy-significant “microphone still recording after Stop” condition.
   - **Smallest safe fix:** Add a synchronous in-flight/generation guard for start, stop, reset, and cancellation. Keep the phase in `arming`/`thinking` until the next socket and microphone are actually live; enter `listening` only afterward. Never silently return from a visible Stop action.

3. **Provider and grant failure timers are not fully bounded despite the implementation note’s claim.**

   - **Fact:** Aura’s connect/generation promise has no timeout ([deepgram.ts:167-221](../../../src/features/speaking/providers/deepgram.ts:167)); the server-side Deepgram grant request also has no timeout signal ([token.ts:51-56](../../../api/speaking/token.ts:51)). The only outer bound can be the remaining 18-minute lease ([useSpeakingTurnLoop.ts:193-201](../../../src/features/speaking/hooks/useSpeakingTurnLoop.ts:193)), while the note states provider connection timers are bounded ([TURN-LOOP-SPIKE-2026-08-12.md:54-59](../../../docs/reviews/speaking-engine/TURN-LOOP-SPIKE-2026-08-12.md:54)).
   - **Impact:** A failed handshake or missing `Flushed`/close message can leave the UI stuck for minutes and corrupt latency evidence.
   - **Smallest safe fix:** Add stage-local connect and completion timers for TTS, a timeout to the token-grant fetch, and deterministic socket closure/rejection. Test open timeout, no-`Flushed`, close-before-flush, abort, and late-message races.

4. **A “provider grant” does not enforce one STT/TTS connection, so the documented concurrency safeguard is overstated.**

   - **Fact:** The route increments one Redis grant counter and returns a general Deepgram JWT ([token.ts:38-73](../../../api/speaking/token.ts:38)). `purpose` only controls which URL is returned; it does not scope the token. The note says every connection requires a fresh grant ([TURN-LOOP-SPIKE-2026-08-12.md:21-24](../../../docs/reviews/speaking-engine/TURN-LOOP-SPIKE-2026-08-12.md:21)).
   - **Inference:** A browser can reuse the 30-second JWT for multiple `/listen` or `/speak` connections. Deepgram documents these tokens as general `usage::write` credentials across STT and TTS; expiry is checked only when connecting. [Deepgram token documentation](https://developers.deepgram.com/guides/fundamentals/token-based-authentication)
   - **Impact:** The 48-grant ledger is not a 48-connection or concurrency cap. An exposed preview can incur disproportionate cost or exhaust provider concurrency.
   - **Smallest safe fix:** Correct the documentation/capability language to “token issuances,” explicitly disclose token reuse, and run the preview behind deployment protection with named testers, isolated provider projects, concurrency limits, and spend alerts. Enforceable one-connection semantics require a server-controlled proxy/gateway or another provider mechanism.

5. **The microphone AudioContext is not actually resumed within the initial Start gesture.**

   - **Fact:** `prepare()` first awaits `getUserMedia`, then creates and resumes the AudioContext ([microphone.ts:10-23](../../../src/features/speaking/audio/microphone.ts:10)). Start itself also awaits cancellation before calling `prepare()` ([useSpeakingTurnLoop.ts:48-59](../../../src/features/speaking/hooks/useSpeakingTurnLoop.ts:48)). This does not substantiate the implementation note’s gesture claim ([TURN-LOOP-SPIKE-2026-08-12.md:27-29](../../../docs/reviews/speaking-engine/TURN-LOOP-SPIKE-2026-08-12.md:27)). Playback arming is better placed directly in the Stop action ([useSpeakingTurnLoop.ts:94-98](../../../src/features/speaking/hooks/useSpeakingTurnLoop.ts:94)).
   - **Inference:** Current iPhone Safari may leave the microphone context suspended after the permission prompt.
   - **Impact:** The principal target device may produce no PCM despite successful permission.
   - **Smallest safe fix:** Create/resume or explicitly “arm” the microphone context synchronously at the beginning of the Start handler, before permission/network awaits. This still requires physical iPhone verification; desktop automation cannot prove it.

## Medium-priority findings

1. **Redis session and turn state changes are not atomic.**

   - **Fact:** Session creation performs `HSET` and `EXPIRE` separately ([\_session.ts:100-128](../../../api/speaking/_session.ts:100)). Turn commit uses `redis.pipeline()` for the sequence, usage counters, and cached result ([\_session.ts:185-205](../../../api/speaking/_session.ts:185)). Grant validation is likewise a read followed by a separate increment ([\_session.ts:138-145](../../../api/speaking/_session.ts:138)).
   - **Fact:** Upstash specifies that pipelines are not atomic; transactions use `redis.multi()`. [Upstash pipeline/transaction documentation](https://upstash.com/docs/redis/sdks/ts/pipelining/pipeline-transaction)
   - **Impact:** A failed session expiry call can leave immortal ledger metadata, and a partial/corrupted turn commit can advance sequence without a reliable cached result. Denied concurrent grant attempts can also leave the recorded count above 48.
   - **Smallest safe fix:** Use `multi()` for creation and turn commit, and Lua for check-and-increment operations that need conditional atomicity. Test TTL, command failure, concurrent grants, and retry after a lost response.

2. **Anthropic response and prompt validation are structurally constrained but incomplete.**

   - **Fact:** The request correctly forces one named tool ([dialogue.ts:94-120](../../../api/speaking/dialogue.ts:94)), but the response type omits `stop_reason` and tool name ([dialogue.ts:20-23](../../../api/speaking/dialogue.ts:20)); parsing accepts the first generic `tool_use` ([dialogue.ts:126-129](../../../api/speaking/dialogue.ts:126)). Whitespace-only `assistantText` passes the pre-trim length test ([dialogue.ts:32-42](../../../api/speaking/dialogue.ts:32)). User-controlled history/transcript is flattened into role-labelled prompt text without explicit untrusted-data delimiters ([dialogue.ts:116-119](../../../api/speaking/dialogue.ts:116)).
   - **Inference:** Prompt injection can steer spoken content despite authored rules, and malformed/truncated tool responses are not distinguished from valid `tool_use`. Anthropic recommends inspecting `stop_reason`. [Anthropic stop-reason documentation](https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons)
   - **Impact:** Unsafe or incoherent text could be spoken in construction/religious scenarios, though it cannot trigger external tools or durable mastery.
   - **Smallest safe fix:** Require `stop_reason === "tool_use"`, the exact tool name, post-trim nonempty text, finite usage fields, and `strict: true`. Delimit transcripts/history as untrusted content and add prompt-injection/safety fixtures. Human/provider adversarial validation remains necessary.

3. **TTS usage is committed before TTS occurs, so it is not actual usage.**

   - **Fact:** Dialogue commits `ttsCharacters` to Redis before returning ([dialogue.ts:131-150](../../../api/speaking/dialogue.ts:131)); only afterward does the browser request a TTS grant and attempt synthesis ([useSpeakingTurnLoop.ts:122-133](../../../src/features/speaking/hooks/useSpeakingTurnLoop.ts:122)).
   - **Impact:** Failed grants, synthesis, or playback are counted as TTS usage, undermining provider-cost reconciliation.
   - **Smallest safe fix:** Rename this field to `requestedTtsCharacters`, or record a separate successful synthesis outcome using provider metadata/request IDs. Preserve both intended and confirmed usage.

4. **The privacy notice omits application-side response caching and the TTS text flow.**

   - **Fact:** The UI discloses learner audio to Deepgram and transcript/history to Anthropic ([SpeakingTurnLoopPanel.tsx:31-36](../../../src/features/speaking/components/SpeakingTurnLoopPanel.tsx:31)). It does not say that generated response text is sent to Deepgram or cached in Upstash until the lease/grace TTL ([\_session.ts:196-204](../../../api/speaking/_session.ts:196)).
   - **Inference:** Generated text could echo learner-supplied personal information, making the cache privacy-relevant even though the raw transcript itself is not stored there.
   - **Impact:** The data-flow/retention representation is incomplete for informed preview participation.
   - **Smallest safe fix:** Add a concise data matrix to the UI/note covering each provider, payload, application cache, maximum TTL, browser-memory behavior, and the fact that Reset does not immediately delete server cache.

5. **Reconnect is not implemented, although the preview checklist asks to measure it.**

   - **Fact:** The STT adapter is one-shot and rejects reuse ([deepgram.ts:55-57](../../../src/features/speaking/providers/deepgram.ts:55)); unexpected closure fails the turn ([deepgram.ts:111-118](../../../src/features/speaking/providers/deepgram.ts:111)). The hook converts transport failures into terminal session errors ([useSpeakingTurnLoop.ts:165-170](../../../src/features/speaking/hooks/useSpeakingTurnLoop.ts:165)), while the note asks to record reconnect behavior ([TURN-LOOP-SPIKE-2026-08-12.md:67-75](../../../docs/reviews/speaking-engine/TURN-LOOP-SPIKE-2026-08-12.md:67)).
   - **Impact:** “Reconnect behavior” currently means fail closed and start a new session, not transparent recovery.
   - **Smallest safe fix:** Document that assumption explicitly and test it. Automatic reconnect can remain later-phase because safely replaying partially submitted audio and preserving idempotency is nontrivial.

6. **Tests do not cover the paths most likely to break the preview.**

   - **Fact:** Deepgram tests cover parsing, premature close, and FatalError, but not explicit finalization, authentication protocol assertions, multiple EOTs, or any Aura lifecycle ([deepgram.test.ts:33-68](../../../src/features/speaking/providers/deepgram.test.ts:33)). Session tests cover only lease crypto ([\_session.test.ts:12-30](../../../api/speaking/_session.test.ts:12)). State-machine tests exercise the reducer, not the asynchronous hook ([machine.test.ts:5-44](../../../src/features/speaking/session/machine.test.ts:5)).
   - **Impact:** The Stop, double-action, next-turn, 24/48 boundary, expiry, cancellation, unmount, Redis, and TTS defects can pass the current suite.
   - **Smallest safe fix:** Add mocked orchestration tests and Redis endpoint tests for those paths before using paid providers. Keep WebSocket interoperability, real billing, Bluetooth/background interruptions, and AudioContext behavior as explicit real-provider/physical-device tests.

## Low-priority findings

1. **Aura warnings are treated as fatal, and success does not require any audio.**

   - **Fact:** Any `Warning` closes the socket as an error ([deepgram.ts:199-207](../../../src/features/speaking/providers/deepgram.ts:199)), while `Flushed` plus close resolves even if no binary frame arrived ([deepgram.ts:211-219](../../../src/features/speaking/providers/deepgram.ts:211)).
   - **Impact:** Benign provider warnings can fail turns, while a silent synthesis can be reported as successful.
   - **Fix:** Classify warning codes and require at least one valid audio frame for success. Confirm behavior against Aura.

2. **“Adaptive” feedback currently means Spanish feedback.**

   - **Fact:** Every non-English mode receives the same Spanish instruction ([dialogue.ts:89-92](../../../api/speaking/dialogue.ts:89)), while the UI offers Adaptive as a distinct option ([SpeakingScenario.tsx:11-15](../../../src/pages/SpeakingScenario.tsx:11)).
   - **Impact:** Preview users may infer adaptive behavior that does not exist.
   - **Fix:** Label it provisional/Spanish in this slice or implement a deterministic preview rule.

3. **The note says provisional objectives are displayed, but they are neither displayed nor applied.**

   - **Fact:** The result is stored in component state, but `RESPONSE_STARTED` is dispatched without objective IDs ([useSpeakingTurnLoop.ts:115-120](../../../src/features/speaking/hooks/useSpeakingTurnLoop.ts:115)); the panel renders history, feedback, and timing only ([SpeakingTurnLoopPanel.tsx:62-80](../../../src/features/speaking/components/SpeakingTurnLoopPanel.tsx:62)).
   - **Impact:** Documentation is inaccurate, though the safety outcome is favorable.
   - **Fix:** Either display them clearly as provisional or change the note to say they are returned only for inspection.

4. **Preview cookies are not marked Secure, and list prices lack provenance.**

   - **Fact:** `Secure` is added only in production even though preview is HTTPS ([\_shared.ts:91-95](../../../api/speaking/_shared.ts:91)). The cost table has no `asOf` or model/config binding ([cost.ts:3-8](../../../src/features/speaking/providers/cost.ts:3)).
   - **Impact:** These weaken defense-in-depth and cost-evidence reproducibility.
   - **Fix:** Set Secure for every non-local deployment; add price date, source, currency, and model identity.

## What is implemented well

- Production is independently hard-disabled in session, token, and dialogue routes, with dual preview flags and capabilities forced false when prerequisites are absent ([session.ts:17-21](../../../api/speaking/session.ts:17), [token.ts:21-27](../../../api/speaking/token.ts:21), [dialogue.ts:49-53](../../../api/speaking/dialogue.ts:49)).
- Exact-origin CORS and origin enforcement are narrow, including exact current-preview matching ([\_shared.ts:21-50](../../../api/speaking/_shared.ts:21)).
- The anonymous principal and session lease use separate HMAC secrets, constant-time comparisons, scenario/principal binding, expiry, HttpOnly, and SameSite protections ([\_shared.ts:66-95](../../../api/speaking/_shared.ts:66), [\_session.ts:71-98](../../../api/speaking/_session.ts:71)).
- Durable API keys remain server-side; only the intentionally temporary provider credential reaches the browser.
- Raw audio parameters match Flux’s documented raw `linear16`/16 kHz requirements, and Aura output is treated as raw `linear16`/24 kHz.
- Raw audio and learner transcripts are not persisted by this application. Analytics are suppressed on speaking routes, with a clean reload when an already-loaded Meta pixel crosses the boundary ([MetaPixel.tsx:49-63](../../../src/components/MetaPixel.tsx:49)).
- Server/client scenario drift is tested, and model objective IDs are allowlisted against authored IDs ([server-scenario-drift.test.ts:5-14](../../../src/features/speaking/domain/server-scenario-drift.test.ts:5), [dialogue.ts:32-42](../../../api/speaking/dialogue.ts:32)).
- Model-produced provisional objectives cannot affect mastery or durable learner state at this commit: they are not passed to the reducer, outbox, rubric, or a persistence API.
- Vercel Node ESM conventions are correct: API imports use `.js`, API TypeScript uses `NodeNext`, and `node:` built-ins are used.
- Read-only verification passed ESLint, API TypeScript, and browser/node TypeScript. Vitest could not execute because Vite/Vitest attempted to create temporary files under the enforced read-only filesystem; this is an environment limitation, not a test failure. CI correctly requires lint, API typecheck, tests, and build ([ci.yml:22-26](../../../.github/workflows/ci.yml:22)).

## Required changes before this draft advances

1. Implement deterministic Flux explicit-stop finalization and correct multiple/early-EOT handling.
2. Serialize all browser actions and expose `listening` only when the microphone and socket are ready.
3. Add bounded token/TTS timers and deterministic cancellation tests.
4. Arm the microphone AudioContext synchronously, then perform real iPhone validation.
5. Make Redis commit/TTL operations atomic and test concurrent limits and retry behavior.
6. Correct the one-grant/one-connection claim; protect the preview and impose provider-side cost/concurrency controls.
7. Tighten Anthropic stop/tool/output validation and add minimal adversarial fixtures.
8. Correct TTS metering and the preview privacy/retention disclosure.
9. Add mocked lifecycle tests covering double actions, explicit Stop, cancellation, backgrounding, expiry, unmount, and the 24-turn/48-grant boundary.
10. Confirm the full CI suite passes in a writable environment.

## Recommended later-phase work

The existing production blockers are appropriate and should remain: authenticated principals, verified age, authoritative audio/concurrency/dollar limits, durable attempt deletion/export, calibrated mastery, provider legal/privacy approval, human-reviewed scenario content, and production authorization.

Also defer automatic reconnect until audio replay/idempotency semantics are designed; add provider request correlation, invoice reconciliation, accessibility work, AudioWorklet migration from deprecated ScriptProcessor, and physical-device coverage across current/older iPhones, Android, Bluetooth, backgrounding, lock-screen, and interruptions.

## Go/no-go for a controlled preview run

**No-go at the reviewed commit.**

After the required protocol, orchestration, timeout, and ledger fixes—and passing mocked lifecycle/CI tests—the branch is suitable for a tightly controlled provider preview behind deployment protection with named 13+ testers, isolated provider credentials, hard spend/concurrency alerts, and no production claims.

Real-provider Flux/Aura interoperability and physical iPhone behavior must then be validated during that controlled run; they cannot be established by code review or desktop mocks alone.
