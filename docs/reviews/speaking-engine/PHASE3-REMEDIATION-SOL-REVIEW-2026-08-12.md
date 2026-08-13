# Phase 3 remediation verification — Codex/Sol CLI

**Mode:** Independent, read-only review

**Reviewed commit:** `0f3d6f449c68889464b9094273d6fe6a4a7e1714`

**Verdict:** Request changes

## Blocking findings

1. A post-open STT failure only recorded `terminalError`. With no finalization waiter, the hook was not notified, so the UI could remain in `listening` with an active microphone and a dead transport until Stop or the 60-second timer. The smallest fix was an unexpected-terminal notification from the adapter to a generation-checked hook failure path, with equivalent handling for microphone-track termination.
2. Deterministic failure-path coverage remained incomplete. Provider tests covered explicit close, two finalized segments, TTS success, and a silent TTS response, but not timeout, abort, late-event races, unexpected post-open loss, deliberate-vs-unexpected termination, or Redis transaction/issuance boundaries.

## Checklist result

The reviewer marked the explicit Flux Stop sequence, multiple-segment preservation, finalization latency, readiness ordering, bounds, user-gesture preconditions, separated budgets, Redis transaction choices, Anthropic history/output validation, metering labels, privacy disclosure, provisional evidence isolation, adaptive label, secure preview cookie, missing-field handling, cost provenance, and production-disable boundary closed in code or honestly scoped.

The listening-state invariant was only partially closed and the deterministic lifecycle/ledger test requirement remained open.

## Non-blocking follow-ups

- Validate nonempty, even-byte `linear16` TTS frames.
- Recheck session expiry in the atomic issuance Lua operation.
- Validate browser-supplied history alternation and shape until history is server-authoritative.
- Retain the documented preview limitations for reusable tokens, browser-reported usage, ScriptProcessor capture, no transparent reconnect, client-supplied history, legal approval, provider interoperability, and physical-device evidence.

## Advancement decision

Commit `0f3d6f4` was not approved for a protected named-tester preview. It remained hard-disabled in production. The accepted blockers and follow-ups were addressed in the subsequent remediation commit before another verification round.

The review did not use real providers or physical devices. Its Vitest attempt could not write Vite temporary files in the read-only sandbox; the orchestrator's writable verification passed independently.
