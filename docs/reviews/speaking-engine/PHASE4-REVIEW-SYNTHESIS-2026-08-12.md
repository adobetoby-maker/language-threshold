# Phase 4 review synthesis and remediation — 2026-08-12

**Baseline reviewed:** `132b29a4974b0884a5eb17f7afbf8a09646fd1e6`

**Independent inputs:** Sol/Codex CLI (request changes), Claude Opus CLI (approve with follow-ups), Grok CLI (authentication failure; no report)

## Synthesis

The reviewers agreed that the privacy-minimized evidence direction was sound and production remained dark. They also agreed that the baseline was not ready for a real-provider device run because its lifecycle boundaries could erase, misattribute, or undercount evidence and because Safari download was not sufficiently robust.

## Accepted remediation

- Stop now calls microphone `finishTurn()` before the first awaited operation, while player arming runs concurrently.
- Every start creates and clears a distinct local evidence run. A provider session ID is optional, so permission denial and other pre-session failures are exportable without inventing a provider session.
- A separate **Cancel and preserve test evidence** action and background-stop path tear resources down while retaining classified evidence; Reset remains an explicit discard action.
- Capture/session/STT/TTS stage transitions and next-turn attribution use the active evidence turn.
- Turn, usage, session-usage, event, and provider-ID serialization is an explicit allow-list; `structuredClone` was removed and STT IDs are bounded/sanitized.
- Privacy metadata now describes absent structured content fields and explicitly labels tester-entered context as unverified. Alias/context character and length constraints were tightened.
- Percentiles carry sample/missing counts. Cost uses the last cumulative usage plus any later per-turn tail and discloses its source turn.
- The dated model/rate/source schedule is exported. An unsupported provider/model configuration yields no numeric estimate.
- Download uses a DOM-attached anchor with delayed URL revocation and has a copyable JSON fallback.
- The runbook now narrows request-level reconciliation to STT and adds tester protocol, provider settings, artifact access/retention/deletion, parsed-key inspection, temporary-token handling, and fail-closed emergency-stop verification.

## Remaining blockers

No remediation authorizes provider traffic. Before a real-provider preview run, a human must complete every runbook checkbox: protected named-tester access, approved data policy/provider settings, scoped isolated credentials, isolated Upstash, hard spend/concurrency controls, distinct signing secrets, and tested revocation. Physical iPhone results and all production launch gates remain open.
