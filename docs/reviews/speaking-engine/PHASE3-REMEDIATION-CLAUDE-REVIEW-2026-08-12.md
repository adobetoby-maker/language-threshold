# Phase 3 remediation verification — Claude Opus CLI

**Mode:** Independent, read-only review

**Reviewed commit:** `0f3d6f449c68889464b9094273d6fe6a4a7e1714`

**Verdict:** Request changes

## Blocking finding

The remediation added Anthropic structured-output `strict: true` while retaining `maxItems: 3` in the tool schema. The reviewer found that unsupported constraints can cause a provider-side 400 under strict structured outputs, which would fail every dialogue turn. The smallest fix was to remove `maxItems` from the provider schema while preserving the system instruction and server parser's independent three-item cap.

## Baseline result

Claude found the baseline preview blockers substantively closed: explicit Flux finalization, multi-segment preservation, non-stale latency, action serialization, honest readiness state, stage bounds, user-gesture AudioContext preconditions, separated and atomic accounting, structured untrusted history, response validation, honest TTS metering, privacy disclosure, visible-but-isolated provisional evidence, adaptive-preview wording, secure preview cookie, missing ledger defaults, cost provenance, and production hard-disable.

## Non-blocking follow-ups

- Preserve useful provider error diagnostics without logging learner content.
- Reject malformed PCM frames before playback.
- Validate resumed-turn behavior with the real Flux protocol.
- Add more automated hook lifecycle coverage.
- Preserve the accepted ScriptProcessor, reusable-token, browser-reported usage, client-supplied history, and physical-device limitations.

## Advancement decision

Commit `0f3d6f4` was suitable only after removing the strict-schema incompatibility. It was not approved for production and no provider or physical-device claim was made.

The reviewer ran the 49-test committed suite and static checks. It explicitly distinguished later uncommitted transport-loss work from the reviewed SHA.
