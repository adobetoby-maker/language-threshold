# Independent Claude Opus CLI review — Speaking Engine Phase 3

**Reviewed commit:** `ecd8b1f5967951455c49e8efc80fb688ba156bac`

**Diff base:** `13b31dc4dc0bcebb343ba61a9cbb5bc646e66126`

**Mode:** Read-only

## Verdict

**Request changes.** Three defects block a valid preview run: the Deepgram Flux explicit-stop path can fail or truncate turns, its latency measurement can be misleading, and the advertised grant budgets no longer describe what the server enforces. Deferred production work remains correctly blocked and is not counted against this draft.

## Critical findings

### C1 — Explicit Stop cuts capture without asking Flux to finalize

**Files:** `src/features/speaking/hooks/useSpeakingTurnLoop.ts`; `src/features/speaking/audio/microphone.ts`; `src/features/speaking/providers/deepgram.ts`

**Fact.** Stop disconnects the processor and microphone tracks before waiting for Flux `EndOfTurn`. It sends no control frame then. `CloseStream` is sent only later from `cancel()`, after the wait resolves or times out.

**Impact.** A learner who presses Stop promptly may wait eight seconds and lose the session because Flux was never explicitly finalized.

**Smallest safe fix.** Implement an explicit end-turn operation that sends `CloseStream` and waits for the final provider result. Record learner audio duration at the Stop tap rather than counting the provider-finalization wait. Confirm the exact behavior against the real provider.

### C2 — A cached Flux `EndOfTurn` can truncate a multi-segment learner turn and report false latency

**Files:** `src/features/speaking/providers/deepgram.ts`; `src/features/speaking/hooks/useSpeakingTurnLoop.ts`

**Fact.** Every `EndOfTurn` overwrites `finalTurn`, and `waitForEndOfTurn` immediately returns any cached value. `TurnResumed` is declared but not handled. With the configured 1.2-second EOT timeout, a natural pause can yield a provider turn before the learner presses Stop.

**Impact.** Earlier speech can be silently discarded. A cached result also makes `sttFinalizeMs` appear close to zero even though finalization happened earlier, contaminating the latency evidence this spike is intended to gather.

**Smallest safe fix.** Accumulate finalized segments until explicit Stop, define the `TurnResumed` rule, and measure finalization from Stop through the provider's terminal response. Add a multi-segment test and confirm provider semantics during the controlled run.

### C3 — Published grant budgets are actually session-start budgets

**Files:** `api/speaking/_budget.ts`; `api/speaking/session.ts`; `api/speaking/token.ts`; `api/speaking/capabilities.ts`; `src/features/speaking/providers/contracts.ts`

**Fact.** The 6/principal/hour and 20/IP/hour limit runs only when a session is created. Each session can then issue 48 provider tokens. Capabilities still call the 6/20 figures `grantBudgets`.

**Impact.** The machine-readable contract understates the effective token-issuance ceiling by up to 48× and misrepresents a cost safeguard.

**Smallest safe fix.** Rename the published values to session-start budgets and add a separate per-principal/IP token-issuance limiter in the token route.

## High-priority findings

### H1 — Dialogue history is client-supplied and flattened in-band

**File:** `api/speaking/dialogue.ts`

**Fact.** The client supplies all recent history. The server validates length and role labels but does not compare it with prior server output. History is concatenated into one user message with `Learner:` and `Partner:` prefixes.

**Impact.** A caller can forge prior partner turns or inject role-like text. Forced tool use, authored objective allowlisting, and output caps limit the blast radius, but generated safety/content can still drift.

**Smallest safe fix.** Send history as structured Anthropic user/assistant messages and explicitly treat transcripts as untrusted data. Persisting server-authoritative history is appropriate for a later phase; disclose the current limitation meanwhile.

### H2 — Deprecated main-thread capture can distort mobile evidence

**File:** `src/features/speaking/audio/microphone.ts`

**Fact.** Capture uses `ScriptProcessorNode`, which is deprecated and runs on the main thread.

**Impact.** Older iPhones or busy UI work can drop buffers and make STT quality/latency look like provider behavior.

**Smallest safe fix.** Prefer `AudioWorkletNode` before collecting evidence intended to be authoritative. If retained for the first controlled run, document it as an instrumentation limitation.

### H3 — Redis ledger writes are not atomic

**File:** `api/speaking/_session.ts`

**Fact.** Session creation performs `HSET` and `EXPIRE` separately. Turn commit uses `pipeline()`, which batches but is not atomic.

**Impact.** A failed expiry can leak an inert hash; a partial turn commit can advance sequence while leaving usage or the idempotent result inconsistent.

**Smallest safe fix.** Use `multi()` for session creation and turn commit. Use one conditional atomic operation where validation and increment must be coupled.

## Medium-priority findings

1. **Stop is not locally serialized.** A double tap can run the async body twice before React removes the button. Add an in-flight guard and disable state.
2. **Stop can silently do nothing.** Missing controller/session/microphone/STT refs cause an early return. Surface an error and never expose Stop before the next turn is ready.
3. **Failed provider grants consume the session counter.** This is fail-safe but a flaky provider can exhaust a session. Keep or compensate deliberately and document the choice.
4. **Usage parsing can emit `NaN`.** Default missing Redis fields to zero before numeric conversion.
5. **Playback can poll indefinitely while an AudioContext is suspended.** Add a wall-clock ceiling; visibility abort is a useful secondary control.
6. **The 24-turn cap is duplicated as a literal.** Export and reuse the server constant.
7. **The scenario drift test imports API code into the Vitest graph.** It is valuable and does not enter the browser build; keep the browser/API boundary explicit.

## Low-priority findings

1. Preview cookies are not marked `Secure`; set it for non-local HTTPS deployments.
2. Cached retry responses omit the optional `sessionUsage` block.
3. PCM conversion errors thrown inside `onaudioprocess` do not reach the orchestration error path.
4. Redis key prefixes still say `grant` even though the limiter moved to session creation.

## What is implemented well

- Provisional objective IDs cannot reach mastery or durable learner state: the server tool schema allowlists them, the parser validates them again, and the client never dispatches them as completed objectives.
- The signed lease is bound to principal, scenario, and expiry, and it is rechecked against Redis rather than trusted alone.
- Dialogue idempotency and locking are ordered sensibly, with token-safe lock release.
- Purpose-specific endpoint responses are a meaningful least-privilege improvement.
- The server/client scenario drift test catches safety and objective divergence.
- The metering documentation is unusually candid about browser-reported audio and the absence of billing authority.
- Production hard-disable, dual preview flags, server-only durable secrets, analytics suppression, and fail-closed dependencies remain intact.
- Playback AudioContext arming is correctly initiated from the Stop interaction. Physical-device verification remains necessary.
- No transcript, key, or provider response body is logged.
- Vercel Node ESM conventions are consistent.

## Required changes before this draft advances

1. Correct explicit Stop and multi-segment Flux handling.
2. Correct the capabilities budget contract and add an hourly token-issuance budget.
3. Structure Anthropic history by message role and document client-authority limits.
4. Make Redis session creation and turn commit atomic.
5. Serialize browser actions and add bounds to remaining unbounded stages.

## Recommended later-phase work

- Move capture to AudioWorklet before treating performance data as launch evidence.
- Persist server-authoritative dialogue history.
- Add authoritative concurrent-session and audio-duration accounting.
- Reconcile provider request records with invoices.
- Keep authenticated identity, verified age, deletion/export, calibrated evaluator fixtures, provider legal/privacy approval, human content review, and separate production authorization as launch gates.

## Go/no-go for a controlled preview run

**No-go at the reviewed commit. Go after C1, C2, and C3 are corrected and the lifecycle/atomicity fixes are verified.** Real-provider Flux/Aura behavior and physical-iPhone performance remain evidence to collect during the controlled preview, not claims established by this review.
