# Phase 4 independent Sol/Codex CLI review — 2026-08-12

**Reviewed commit:** `132b29a4974b0884a5eb17f7afbf8a09646fd1e6`

**Mode:** Read-only; concurrent remediation was excluded

**Verdict at reviewed commit:** Request changes; no-go for the named-tester provider branch at that exact commit. Production remained disabled, and missing Preview configuration was a separate external blocker.

## Findings recorded by the reviewer

No critical finding was reported.

High findings:

1. Stop measured capture end before `player.arm()` but did not call `microphone.finishTurn()` until after that await, so microphone transmission could continue beyond the measured Stop point.
2. Reset erased cancellation/background evidence, and the provider-session requirement prevented permission/pre-session failure exports.
3. Startup/TTS stage attribution and the next-turn catch attribution were incorrect.
4. Free-text context plus whole-object turn serialization made the privacy assertions stronger than the enforcement.

Medium findings:

- cumulative session usage could omit a later client-only tail;
- the artifact lacked the price schedule and could price unsupported model overrides;
- percentile output omitted sample/missing counts;
- only STT had request-level reconciliation;
- detached-anchor/immediate-revocation download was fragile on Safari.

Low findings:

- the provider session UUID was exposed in the filename;
- STT IDs were unbounded;
- the implementation note overstated the completed boundary;
- the documented test count was not independently verified.

The reviewer also required adult/minor test protocol clarity, artifact storage/retention/deletion controls, provider-setting confirmation, temporary-token incident handling, a tested emergency stop, and reconciliation language matching the available IDs.

## Remediation disposition

All code findings were accepted. The remediation synthesis records the implemented mapping. External approvals, scoped credentials, spend controls, and physical-device execution remain intentionally open and block real-provider use.
