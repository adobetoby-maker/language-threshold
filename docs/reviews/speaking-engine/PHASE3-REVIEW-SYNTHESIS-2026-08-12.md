# Speaking Engine Phase 3 review synthesis

## Inputs

- Claude Opus CLI read-only review of baseline commit `ecd8b1f5967951455c49e8efc80fb688ba156bac`
- Codex/Sol CLI read-only review of the same baseline commit
- Grok CLI attempt against the same prompt and commit; no review was produced because the local CLI was not authenticated
- Direct review of current Deepgram Flux/Aura, Anthropic Messages/tool-use, and Upstash transaction documentation
- Local lint, unit, API type-check, build, mocked mobile-browser, and accessibility evidence
- Targeted final Claude Opus and Codex/Sol CLI verification of code commit `bb7285fd612f0acb6c9e1cb8102c9c8a7d2d6e74`

## Baseline verdict

Claude and Sol independently returned **request changes / no-go for a controlled provider preview**. They agreed that the production boundary was appropriately conservative and that provisional model objective IDs could not reach mastery, but found that the preview itself could produce invalid data or hang.

The synthesis accepts that verdict. Draft PR #8 remains a draft and production remains hard-disabled.

## Accepted fix-now findings

| Finding | Disposition |
|---|---|
| Explicit Stop did not finalize Flux | Stop now halts local capture, sends Flux `CloseStream`, waits for the provider's terminal response, and has an eight-second bound. Deepgram documents `CloseStream` as forcing cached audio processing before connection termination. |
| Multiple pre-Stop `EndOfTurn` events could overwrite speech | The adapter accumulates de-duplicated finalized segments and joins them in audio-window order after terminal close. A two-segment test covers the regression. |
| Finalization latency could resolve from stale cached data | The explicit-stop promise resolves only after the close sequence, so `sttFinalizeMs` measures Stop through terminal provider completion rather than returning an old segment synchronously. |
| UI exposed Stop before the next transport was ready; double actions could overlap | A synchronous in-flight guard serializes Start/Stop. `listening` is entered only after the next STT socket and microphone capture are live. Missing ready-state references now surface an error. A mocked double-Stop browser run completes once without an alert. |
| TTS and token grant stages were unbounded | The Deepgram grant fetch has a 10-second timeout; Aura has a 30-second completion bound; playback has a 30-second wall-clock bound. TTS now requires at least one nonempty audio frame. |
| Microphone AudioContext gesture claim was not established | The context is created and its `resume()` call is initiated synchronously before the first await in Start. This is a code precondition, not physical-iPhone proof. |
| `grantBudgets` described session-start budgets | Capabilities now publish separate session-start budgets (6/principal/hour, 20/IP/hour) and token-issuance budgets (96/principal/hour, 320/IP/hour), plus the 48/session issuance cap. A contract-drift test binds the payload to the enforced constants. |
| Session/token accounting was non-atomic | Session `HSET`+`EXPIRE` and turn commits use Upstash transactions. Per-session token issuance uses one conditional Lua check/increment. |
| Dialogue history was flattened into one spoofable labelled message | History is sent as structured Anthropic user/assistant messages, and the system prompt treats all conversation content as untrusted. Client-supplied history remains an explicit preview limitation. |
| Anthropic response validation was incomplete | The server requires `stop_reason=tool_use`, the exact tool name, strict schema use, nonblank trimmed assistant text, authored objective IDs, bounded feedback, and finite nonnegative token usage. |
| TTS characters were recorded as actual usage before synthesis | The field is now named `requestedTtsCharacters`; confirmed provider usage/invoice reconciliation remains a later evidence task. |
| Preview data disclosure omitted TTS and server cache | The UI and implementation note disclose all provider legs, browser-supplied history, Upstash response/usage caching for at most 19 minutes, and that browser Reset does not delete the server cache early. |
| Provisional objectives were documented as visible but not rendered | The UI now shows their authored descriptions under “Provisional evidence (does not change mastery).” They still do not enter the reducer's completed objectives, outbox, rubric, or persistence. |
| Adaptive feedback implied more than the slice implements | The option is labelled “Adaptive coaching (preview rule)” and the server applies a deterministic Spanish-first rule with limited English clarification. |
| Preview cookies lacked `Secure` | The principal cookie is Secure in Vercel preview and production, while remaining usable on local development HTTP. |
| Missing numeric ledger fields could serialize as `NaN` | Usage reads default absent fields to zero. |
| Cost constants lacked provenance | The list-price module now carries date, currency, model identities, and source URLs. |
| Live STT or microphone loss could leave the UI listening | Both live resources now report unexpected termination to the hook, which generation-checks the event, fails the session, and tears down media immediately. Expected Stop/Cancel does not trigger the failure path. |
| Strict Anthropic schema could reject `maxItems` | The unsupported constraint was removed from the provider schema; the server parser and system instruction still independently cap deferred feedback at three items. |

## Accepted limitations and later work

- `ScriptProcessorNode` remains a deprecated main-thread capture path. It is adequate only for an instrumented spike and its glitch/drop rate must be disclosed. Move to AudioWorklet before treating performance numbers as launch evidence.
- Deepgram temporary tokens are general `usage::write` credentials that can be reused until expiry. Token issuance limits are not connection or concurrency limits. Use a protected preview, isolated provider project, named testers, provider-side concurrency/spend controls, and later a server-controlled gateway or enforceable provider mechanism.
- Server-authoritative conversation history is deferred. The current server validates structure, separates roles, constrains output, and documents that history is client-supplied.
- Unexpected transport loss intentionally fails the browser session. Automatic reconnect is deferred until partial-audio replay and billing/idempotency semantics are designed.
- Browser-reported audio seconds, requested TTS characters, and token issuances remain non-authoritative. Provider reconciliation is mandatory.
- AudioWorklet, real-provider interoperability, physical iPhone lifecycle, Bluetooth/interruption behavior, provider retention/legal approval, verified age/authentication, durable attempts, deletion/export, calibrated evaluation, and human scenario review remain launch gates.

## Qualified dispositions

- The implementation stops microphone tracks before sending `CloseStream`; it does not keep capturing during finalization. This matches tap-to-stop privacy expectations, while Flux's documented close control forces remaining cached audio to be processed. Real-provider confirmation remains required.
- Provider grant failures continue to consume issuance counters. This can shorten a flaky preview session but fails in the cost-safe direction and avoids ambiguous rollback races.
- Aura warnings remain fail-closed until warning codes are observed and classified during a controlled provider run.
- Cached idempotent responses may omit the optional live `sessionUsage` snapshot. The turn result remains stable; this is not used as billing truth.

## Verification after remediation

- ESLint: pass
- Vitest: 63 tests across 15 files, pass
- API TypeScript (`NodeNext`): pass
- browser TypeScript and production Vite build: pass
- mocked 390×844 full turn with two Flux segments: pass
- mocked rapid double-Stop: one turn, no alert, pass
- mocked post-open STT loss: immediate error state and media teardown, pass
- mocked microphone-track loss: immediate error state and transport teardown, pass
- visible transcript, partner reply, coaching, and provisional evidence: pass
- WCAG A/AA automated scan on the remediated mobile state: zero violations

Mocked and static results do not establish provider interoperability or physical-device behavior.

## Advancement decision

The reviewed baseline and first remediation were no-go. The accepted code changes close the defects that made preview evidence structurally invalid. Claude Opus and Codex/Sol independently returned **Approve with follow-ups** on final code commit `bb7285fd612f0acb6c9e1cb8102c9c8a7d2d6e74`, with no remaining blocker.

The Phase 3 decision is therefore **go only for a protected, named-tester, non-production provider run** with isolated credentials and spend/concurrency alerts. It does not mean merge-ready, production-ready, Issue #7 complete, or permission to change deployment flags. The provider/device evidence checklist and all production launch gates remain open.
