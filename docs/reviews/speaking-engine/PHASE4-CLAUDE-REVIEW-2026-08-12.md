# Phase 4 independent Claude Opus CLI review — 2026-08-12

**Reviewed commit:** `132b29a4974b0884a5eb17f7afbf8a09646fd1e6`

**Mode:** Read-only

**Verdict at reviewed commit:** Approve with follow-ups after the two high findings; not production.

## Findings recorded by the reviewer

No critical finding was reported.

High findings:

1. Starting after a failed run could retain prior evidence/deduplication state and associate it with the new provider session.
2. The detached download anchor and same-tick Blob URL revocation were unsafe for the target Safari matrix; a copy fallback was requested.

Medium findings:

- percentile output needed sample and missing counts;
- a later turn without cumulative `sessionUsage` could be omitted from cost;
- cost needed dated model/rate/source provenance;
- next-turn setup errors used the previous turn sequence in the catch path;
- runtime usage needed explicit field projection rather than TypeScript-only trust;
- the runbook overpromised request-level reconciliation beyond STT.

Low findings:

- bound/sanitize the STT request ID;
- avoid `structuredClone` for older Safari;
- explain disabled export controls and announce evidence counts;
- improve lifecycle test coverage and avoid reliance on raw provider error text.

The reviewer also requested artifact key inspection and retention/deletion steps in the runbook.

## Remediation disposition

All findings were accepted. The remediation synthesis records the implementation and documentation changes. Production and real-provider execution remain separately blocked.
