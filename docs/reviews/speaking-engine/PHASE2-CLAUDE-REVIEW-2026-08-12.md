# Phase 2 independent Claude CLI review

## Review target

- Draft PR: #6
- Exact commit: `95b5999f348d675c7fdfaee20ab4b317142b5102`
- Model/mode: Claude Opus CLI, high effort, read-only tools

## Verdict

**Request changes.** The exact ESM-fix commit is correct, but several branch-level guarantees were not automated or were broader than their enforcement.

## High-priority findings

1. **`api/**` is outside CI typechecking.** `.github/workflows/ci.yml` runs lint, tests, and `npm run build`; the root TypeScript references exclude `api/tsconfig.json`. Add `tsc -p api/tsconfig.json --noEmit` to CI.
2. **Grant rate limits are not usage budgets.** The API publishes an 18-minute hard cap, but no server control enforces duration, audio seconds, TTS characters, concurrent sockets, or provider spend.
3. **The anonymous principal bucket is cookie-rotatable.** Deleting or refusing the cookie obtains another anonymous-principal grant bucket; only the network-address limiter remains load-bearing.

## Medium-priority findings

1. **Meta Pixel can remain initialized after SPA navigation into speaking.** Explicit tracking calls are guarded, but an already-loaded third-party script is not unloaded or revoked.
2. **Machine-readable privacy overstates verified provider controls.** STT requests include `mip_opt_out=true`, while TTS and the planned Anthropic dialogue retention status are not equivalently represented.
3. **Capability and grant types contain vendor literals.** Deepgram, Flux, and Anthropic literal types weaken the provider-neutral boundary.
4. **The IndexedDB v1-to-v2 migration lacks a seeded migration test.** Malformed legacy rows may abort the upgrade, and the legacy store is retained.
5. **Attempt-scoped clear uses separate read and write transactions.** A concurrent enqueue can survive between them.

## Lower-priority findings

- The API and client duplicate the launch-scenario allowlist without a drift check.
- Scenario validation gates token issuance but cannot scope the provider token to that scenario.
- The STT adapter has no connect timeout/reconnect/token refresh, and `CloseStream` against Flux v2 needs real-provider validation.
- Hard-coded price constants need an `asOf` date.
- Provider code has no non-test consumer and has not exercised the server age gate or live socket end to end.

## Strengths

- `productionReady` cannot be enabled by an environment variable.
- The token route checks spike flag, policy flag, trusted origin, age attestation, scenario allowlist, signed principal, budget availability, and provider configuration before granting.
- Server secrets are not exposed through Vite variables.
- The docs do not misrepresent desktop checks as iPhone evidence or default provider retention as zero.
- Attempt/idempotency compound keys match the database uniqueness rule.
- List-price arithmetic matches the documented example and remains qualified.

## Recommended order

1. Put API typechecking in CI.
2. Make grant limits and the planned hard cap truthful; track durable metering.
3. Resolve Meta/privacy claim breadth.
4. Test and make the IndexedDB migration/clear path atomic.
5. Clean up provider boundaries and lower-priority spike hygiene.

The CLI made no edits and changed no GitHub state.
