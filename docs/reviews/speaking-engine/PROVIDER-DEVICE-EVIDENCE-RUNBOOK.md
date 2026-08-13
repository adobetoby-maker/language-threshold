# Speaking Engine Phase 4 — Protected provider/device evidence runbook

**Tracking:** GitHub Issue #9

**Status:** Harness implementation; provider run blocked until every readiness item is verified

## Hard boundary

This runbook authorizes neither production deployment nor production data processing. The speaking endpoints must continue to return `productionDisabled` when `VERCEL_ENV=production`. Never add speaking provider keys or enable flags in the Production environment.

## Current readiness audit — 2026-08-12

`vercel env ls preview` reports only `NEXT_PUBLIC_GA_ID`. The required isolated provider, storage, signing, and gate variables are absent. Therefore a real-provider run is currently **blocked**. No claim in this document is real-provider or physical-device evidence.

## Required named-tester preview controls

Before enabling the branch-scoped preview, record evidence for each item:

- [ ] Preview deployment is protected and limited to the named testers.
- [ ] `DEEPGRAM_API_KEY` belongs to an isolated preview project with a hard spend alert/limit and concurrency monitoring.
- [ ] `ANTHROPIC_API_KEY` belongs to an isolated preview workspace with a hard spend alert/limit.
- [ ] `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` point to an isolated preview database with no production data.
- [ ] `SPEAKING_PRINCIPAL_SECRET` and `SPEAKING_SESSION_SECRET` are distinct random values of at least 32 characters and are scoped to the Phase 4 branch preview.
- [ ] `SPEAKING_SPIKE_ENABLED=true` and `SPEAKING_DATA_POLICY_APPROVED=true` are scoped only to the Phase 4 branch preview.
- [ ] Provider retention, model-improvement, DPA/subprocessor, and regional-processing terms are approved for this named test population.
- [ ] Provider-by-provider retention, model-improvement, region, deletion, and logging settings are recorded without secret values.
- [ ] Testers are adults, or an approved minor-testing protocol and acknowledgement is documented before participation.
- [ ] Evidence artifacts have an approved classification, storage location, reader list, retention period, deletion owner, and incident path.
- [ ] The observer knows how to disable both speaking flags and revoke both provider keys immediately.
- [ ] Test prompts contain no real addresses, medical data, child data, credentials, or other sensitive information.

Record variable presence and scope only. Never copy secret values into an issue, evidence file, log, screenshot, or review report.

## Per-run procedure

1. Open the protected preview on the named test device and confirm the browser is not on a Production alias.
2. Select the approved scenario and read the provider-data notice.
3. Enter only a tester alias and non-sensitive device/matrix context in the evidence panel.
4. Run the assigned case. Do not improvise real names, addresses, contact details, patient information, or credentials.
5. Use **Cancel and preserve test evidence** for cancellation/lifecycle cases. Use Reset only after the artifact is safely captured.
6. Download the privacy-minimized JSON before Reset. If mobile download fails, use the copy field. Confirm `privacy.structuredContentFields` is false for every content field, `testerEnteredContextIsUnverified=true`, and `automaticallyUploaded=false`; manually inspect the tester-entered context.
7. On a controlled workstation, search the parsed artifact for unexpected payload keys such as `lease`, `token`, `apiKey`, `assistantText`, `deferredFeedback`, or raw `error`. The only `rawAudio` key must be the literal false assertion under `privacy.structuredContentFields`; stop if content appears anywhere.
8. Attach the JSON only to the approved review record. Do not paste transcripts into GitHub or an issue.
9. Reconcile Deepgram STT using its request ID. Reconcile Anthropic/TTS by the provider's aggregate usage and the run timestamps; this schema does not claim request-level IDs for those providers.
10. Disable both preview flags, revoke temporary provider credentials, and verify the speaking endpoints fail closed at the end of the test window.
11. Delete local/downloaded copies after the approved retention period and record deletion in the controlled review record.

## Required matrix

| Area | Cases | Evidence required |
|---|---|---|
| Provider path | normal turn, natural pause/multiple segments, quiet speech, accented speech, code-switching, domain terms | success/failure, STT request ID, stage timings, usage |
| Cancellation | capture cancel, STT finalization cancel, dialogue cancel, TTS cancel, playback cancel | immediate teardown, no continued audio/network activity |
| Transport | STT loss, TTS loss, offline transition, reconnect attempt | fail-closed result and explicit reset path |
| Permissions | initial allow, denial, revoked permission | truthful UI and no phantom listening state |
| Lifecycle | background, foreground, screen lock, incoming interruption | teardown timing and recovery behavior |
| Audio route | speaker, wired headset where available, Bluetooth | route, stability, first-audio and total latency |
| Network | Wi-Fi and LTE/5G | p50/p95 by network class |
| Devices | current iPhone Safari, older supported iPhone Safari, Android Chrome reference | exact model/OS/browser entered by tester |

## Evidence acceptance

- At least 20 completed turns per primary device/network cohort are required before calculating a meaningful p95.
- Treat p95 as non-meaningful below 20 samples even though the artifact reports the mathematical value; use `sampleCount` and `missingCount` to qualify every percentile.
- Report capture-to-final, dialogue, TTS first-audio, TTS completion, playback, and total latency separately.
- Timing definitions are fixed for this schema: `captureMs` is active capture until Stop; `sttFinalizeMs` is Stop until terminal Flux completion; `dialogueMs` is the server dialogue request; `ttsFirstAudioMs` is dialogue completion through the first Aura audio frame and includes token acquisition; `ttsCompletionMs` is the Aura socket's Speak-through-close interval after token acquisition; `playbackMs` is the remaining playback drain after Aura closes; and `totalMs` is active capture through playback completion.
- Separate application list-price estimates from provider-reported/billed usage. `costIsProviderReconciled=false` remains true until an authorized human completes reconciliation.
- Report every failed event; do not delete outliers without a documented reason.
- Main-thread `ScriptProcessorNode` capture remains a known measurement limitation. Record audible glitches/dropouts and migrate to `AudioWorkletNode` before treating latency/stability as launch-grade.

## Stop conditions

Immediately stop the run, disable both flags, and revoke affected credentials if any of the following occurs:

- a provider key, temporary provider token, or signed lease appears in browser-visible output, evidence, logs, or screenshots;
- audio continues after Cancel, backgrounding, permission revocation, or an unexpected transport failure;
- the preview is publicly accessible outside the named-tester boundary;
- spend/concurrency controls cannot be verified;
- raw audio or transcript content is unexpectedly retained or sent to analytics;
- any speaking endpoint is enabled in Production.

## Phase decision

Phase 4 can produce evidence only after the readiness checklist is complete. It cannot clear the production launch gates by itself; physical-device results, provider legal approval, authenticated age, authoritative metering, AudioWorklet capture, calibrated evaluation, durable attempts, deletion/export, and human content review remain separate decisions.
