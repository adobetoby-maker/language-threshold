# Language Threshold Speaking Engine — Design and Architecture Review

**Status:** Review complete; implementation intentionally not started  
**Authoritative input:** `docs/PRD-SPEAKING-ENGINE.md` at `fb52c4450afc2fb97f03c6e392cab4782eb4c48c`  
**Review issue:** GitHub Issue #2  
**Codex verdict:** **ACCEPT WITH CHANGES**

## Executive decision

The product direction is worth pursuing. The structured Learn → Speak → Detect Weakness → Practice → Retry loop, scenario mastery tiers, and explicit reward for clarification and circumlocution are differentiated and pedagogically coherent.

The PRD is not yet implementation-ready. The current application has no production speech stack, authenticated user model, server-side learning state, canonical vocabulary identity, executable scenario model, or evaluation harness. Its curriculum is repeated across multiple static stores, and some specialty translations show signs of semantic contamination. Speaking would amplify those weaknesses.

Approve the concept, revise the PRD as specified below, validate the revised contracts with content and technical spikes, and then seek a separate build authorization.

## Repository findings at the pinned commit

### Current architecture

- React 19, TypeScript, Vite 8, React Router 7 SPA/PWA deployed on Vercel.
- Thin serverless API only: Anthropic-backed word lookup, an email subscribe endpoint, and Upstash rate limiting/storage for those narrow functions.
- The current limiter fails open when Upstash is unavailable and is IP/hour based. A paid audio endpoint needs fail-closed metering, authenticated per-principal budgets, and explicit concurrency limits.
- No authentication provider, primary application database, ORM, realtime service, audio SDK, speech SDK, or automated test configuration.
- Routes are manually enumerated by specialty and language. `/app` is a separate mobile shell whose tabs are component state rather than normalized routes.

### Curriculum and vocabulary

- Module records are multilingual rows with English plus eight target-language fields, ten vocabulary items, a sample phrase, and a scenario description.
- Separate lesson stores repeat much of the same material. Medical has 13 subsections / 390 lessons, Construction 9 / 270, Climbing 6 / 48, and Missionary 5 / 38.
- Additional book, trifold, and word-cache stores add more lexical copies. There are no canonical lexical or occurrence IDs.
- A scan found 8,576 parsed vocabulary rows, 6,679 unique English/Spanish pairs, roughly 1,897 repeated pair occurrences, and 1,230 repeated English forms.
- Existing scenarios are prose strings, not authored objective graphs or state machines.
- Some specialty content needs human QA before it can enter scoring or safety-sensitive dialogue. For example, medical-context terms contain translations that appear to use construction/mechanical senses.

### Existing learning experiences

- Flashcards flip in component memory; a featured module rotates on a calendar schedule.
- The medical terminology browser/flashcard/quiz modes also keep state in memory.
- There is no spaced-repetition scheduler, canonical review queue, or persisted word mastery.
- Word-card enrichment caches by language + word + sentence and therefore cannot provide stable lexical identity.
- No existing code uses `getUserMedia`, `MediaRecorder`, browser speech recognition, speech synthesis, audio playback, or a speech provider.

### Persistence and identity

- Lesson completion is a localStorage boolean map.
- Specialty choice is localStorage.
- The Missionary profile and progress restore mechanism uses an unsigned base64 URL fragment; it is not an account system or a safe foundation for microphone-derived state.
- Some Missionary progress identifiers do not align with lesson IDs, and a linked Missionary Swahili route is absent from the router.
- Google Analytics and Meta Pixel currently load application-wide. They must be suppressed on speaking routes before any microphone feature, especially given foreseeable child users.

### Product constraints the PRD must recognize

- The site explicitly markets a children’s product for ages 4–12. The speaking MVP should exclude under-13 use until parental consent, child privacy terms, retention, deletion, and vendor processing are deliberately designed.
- Medical is high-stakes and the content needs validation. It should not supply the first launch scenarios.

## Independent-review synthesis

Both independent reviewers returned **ACCEPT WITH CHANGES**. They agreed that the core loop and Keep Talking pedagogy are strong, while canonical content identity, real persistence, iOS audio behavior, scoring fairness, microphone privacy, and per-session economics remain pre-build requirements.

The main adjudication is persistence: Redis-style storage is useful for rate limits, ephemeral session coordination, and caches, but it should not be the source of truth for durable learner state and relational content provenance. Use managed Postgres for canonical content references, attempts, events, evaluations, and learner state; retain Upstash for its current ephemeral roles.

### Agreement side by side

| Area | Grok | Claude | Codex adjudication |
|---|---|---|---|
| Verdict | Accept with changes | Accept with changes | Accept with changes; revised PRD approval is a build gate. |
| Speech | Hybrid STT → LLM → TTS for control | Hybrid cascade; defer realtime S2S | Hybrid cascade behind swappable interfaces. |
| Pronunciation | Diagnostic, not a mastery gate | Diagnostic, never a tier gate | Non-gating; no unsupported phoneme claims. |
| Content | Canonical stable IDs + provisional dynamic IDs | Additive registry + aliases + `dyn:` IDs | Immutable units plus occurrence/provenance registry and provisional namespace. |
| Scenario engine | Authored objectives, generated dialogue | Authored state/safety, generated surface | Deterministic graph and validators; constrained model wording. |
| Persistence | Server-backed with client cache | Durable server journal, client outbox | Postgres source of truth, append-only events, IndexedDB outbox. |
| Audio/privacy | No raw audio by default | No raw audio by default; concrete transcript policy | No raw audio by default; approve explicit evidence retention before build. |
| iOS | First-class testing and fallbacks | Tap-to-talk first; explicit pause/resume | Physical-device spike; tap-to-speak is mandatory. |
| Scope | Spanish, six polished scenarios | Spanish, six polished scenarios | Spanish and six existing-content scenarios. |

### Disagreements and resolution

- **Persistence technology:** Grok proposed Upstash-style durable state; Claude proposed relational storage. The data is relational, versioned, and audit-heavy, so Codex selects Postgres for durable truth and Upstash for rate limits/caches.
- **First scenarios:** Claude preferred low-risk travel scenarios, but most of those are marketing concepts rather than implemented curriculum in this commit. Grok favored existing specialty content, including Medical. Codex selects existing Construction and Missionary content, and defers Medical because its language is high-stakes and its data already contains QA concerns.
- **Session duration:** Grok accepted the PRD’s 15-minute shape; Claude recommended 7–9 minutes by default. Codex retains 10–15 minutes as the target, adds a quick mode and an approximately 18-minute hard cap, and ends on objective completion rather than a rigid timer.
- **Barge-in:** Grok treated cancellation/barge-in as part of the desired pipeline; Claude deferred it for iPhone MVP risk. Codex requires interruption-safe cancellation and push/tap-to-talk first, while true full-duplex barge-in remains behind the device spike and may be deferred.
- **Cost estimate:** Grok supplied a broad approximate range; Claude refused an unverified number. Codex uses current official list prices only to set a provisional pilot budget, and makes measured provider pricing/usage a scope-lock gate.
- **Canonical ID form:** Claude suggested readable lemma/sense IDs; Grok requested stable namespaced/versioned IDs. Codex does not derive immutable identity from mutable strings: use opaque immutable IDs, with readable aliases and explicit concept/sense metadata.

## Answers to PRD §25

### 1. What existing structures are reusable?

Reuse the React/Vite PWA shell, presentational components, specialty/lesson content, existing SEO routes, and the Vercel function conventions. Treat localStorage progress, static scenario strings, duplicated vocabulary rows, the Missionary restore link, and the current `/app` navigation as migration inputs—not the new system of record.

### 2. Which speech architecture should MVP use?

Use a hybrid streaming pipeline: microphone → streaming STT → server-controlled dialogue/evaluation → streaming TTS. Connect the browser directly to providers with short-lived scoped tokens where practical; keep authoritative turn and scoring logic on the server. Provide tap-to-speak as a mandatory fallback. Do not depend on the browser Web Speech API for production quality, and do not begin with a fully opaque speech-to-speech model.

### 3. Which providers/models should be evaluated?

Run a bakeoff rather than locking a vendor in the PRD. Evaluate Deepgram Nova-3 or Flux and OpenAI transcription for Spanish STT; a small, tool-capable model for constrained dialogue and a separately versioned evaluator; and Deepgram Aura, OpenAI TTS, or Azure neural voices for TTS. Benchmark specialty vocabulary, accented speech, noise, interruption behavior, latency, and actual cost on real iPhones.

### 4. Is pronunciation scoring reliable enough to gate mastery?

No. Use pronunciation only as a diagnostic coaching signal. Objective completion, meaning preservation, understandability, clarification, and recovery should determine scenario mastery. Provider pronunciation assessments can be used in carefully scripted drills when the language and feature are supported; they must not be a hard gate for open Spanish conversation.

### 5. How should canonical vocabulary identity work?

Introduce immutable `LanguageUnit` IDs independent of mutable display strings. A unit records language, locale, type (word/phrase), lemma/display form, part of speech, and sense; an optional `Concept` links equivalents across languages. `ContentOccurrence` links every original row to its source type, source ID, path, surface form, and version. Create and review a one-time manifest for all existing stores; do not infer identity solely from hashes of editable text.

### 6. How should speaking-derived vocabulary coexist with static curriculum?

Resolve to an existing canonical unit first. If no match is sufficiently certain, create a provisional unit with provenance and review status. Learner state references the unit ID, while curriculum membership remains an occurrence relationship. Curation can merge or promote provisional units without rewriting attempt history.

### 7. What belongs on server versus client?

Postgres owns users/anonymous principals, canonical content metadata, scenario versions, attempts, append-only events, evaluations, and learner vocabulary/speaking state. The client owns ephemeral UI state, a short rolling audio buffer, and an IndexedDB offline/idempotency queue. Upstash may support rate limits, short-lived session state, and caches.

### 8. What audio should be retained?

None by default after processing. Retain structured events, rubric evidence, scores, provider/model versions, and only the minimum transcript fragments required for feedback or disputes. Immediate replay can use a short local rolling buffer. Any server-side audio/debug retention must be explicit opt-in with a duration, purpose, deletion path, access controls, and vendor no-training terms.

### 9. How should turns, silence, and interruption work?

Model the session as an explicit finite-state machine: idle, requesting permission, listening, end-of-turn pending, evaluating, responding, paused, recovering, completed. Use provider VAD/turn detection but expose tap-to-speak when it fails. Barge-in cancels TTS and starts a new capture. Low-confidence or silent turns should prompt a retry without consuming an objective or corrupting the attempt.

### 10. How should adaptive feedback language work?

Let the learner choose English, target language, or adaptive at session start and in settings. Adaptive mode follows a deterministic policy using recent comprehension, clarification success, rescue usage, and learner requests; it changes in bounded steps and explains the change. It must not be improvised independently by the dialogue model.

### 11. Should scenarios be authored or generated?

Hybrid. Authors define the scenario, roles, objectives, critical meaning constraints, allowed branches, linked units, difficulty parameters, and rubric. The model varies surface dialogue inside that envelope. Fully generated scenarios are too difficult to validate and compare; fully scripted conversations are too brittle.

### 12. How deterministic should scenario state be?

The objective graph and completion evidence are deterministic and versioned. The dialogue surface may be model-driven. Model outputs must conform to structured schemas and emit proposed events; server validators accept or reject those events before state advances.

### 13. How can retries feel fair?

Pin `scenario_version`, `rubric_version`, evaluator model/version, and a comparable difficulty envelope for an attempt series. Keep critical objectives and tier thresholds fixed. Store evidence for every awarded or missed dimension. Maintain calibrated transcript/audio fixtures and measure repeat-run variance before launch.

### 14. How should circumlocution be detected?

Each target concept gets authored salient semantic features and prohibited shortcuts. The evaluator returns evidence spans, feature coverage, target-language use, vagueness flags, and confidence. Reward only high-confidence attempts that communicate multiple useful features or produce a successful clarification exchange; do not use length or a single keyword as a proxy.

### 15. What are the microphone security and privacy risks?

Accidental capture, sensitive background speech, vendor reuse, over-retention, shared devices, weak identity links, and child data are the major risks. Require just-in-time permission disclosure, visible capture state, minimal scoped tokens, encryption in transit/at rest, provider DPAs and no-training settings, retention/deletion controls, export, incident logging, and a documented subprocessor list.

### 16. What iOS Safari cases must be handled?

Permission denial/revocation, required user gestures, audio-session changes, calls and notifications, Bluetooth route changes, screen locking/backgrounding, echo during barge-in, unstable networks, page refresh, and provider reconnects. Test current and previous major iOS versions on physical devices. A failure must preserve attempt state and offer tap-to-speak or text-supported recovery.

### 17. What telemetry is needed?

Capture permission outcomes, state transitions, end-of-speech-to-first-audio latency, STT confidence/failure proxies, low-confidence retries, objective evidence, tier dimensions, evaluator disagreements, provider/model/scenario/rubric versions, network and reconnect failures, circumlocution attempts/success, estimated cost by component, abandonment, and deletion/retention operations. Do not log raw audio by default.

### 18. What is a realistic cost per 15-minute session?

For roughly 7.5 minutes of learner speech and 5–7 minutes of generated speech, a controlled hybrid target of about **$0.20–$0.40 typical** is credible, with an initial launch budget of **p50 under $0.50 and p95 under $0.75**. STT is relatively inexpensive; TTS and the dialogue/evaluation model dominate. A managed voice-agent bundle can exceed $1 for 15 minutes. Measure actual silence, interruptions, output characters, and retries before committing to pricing.

### 19. What must change before build?

Lock the first language and scenarios; add the canonical content contract and migration; define authenticated/anonymous identity and durable persistence; specify the scenario graph and structured event schemas; make tier thresholds and the incomplete state explicit; make pronunciation non-gating; define audio retention and child policy; add measurable latency/cost SLOs; define iOS fallback behavior; require content validation and an evaluation fixture suite.

### 20. What should be deferred?

All additional languages, broad specialty rollout, Medical launch scenarios, Gold Words/decay, automatic home redesign, perfect phoneme scoring, social/multiplayer features, avatars/video tutors, certification claims, user-authored scenarios, and longitudinal accent profiling.

## Initial architecture recommendation

```text
iPhone/Safari PWA
  microphone + playback + session FSM
  tap-to-speak fallback + IndexedDB outbox
          │ scoped ephemeral token
          ▼
  Streaming STT provider ───────────────┐
                                        ▼
Vercel API: session/turn controller → constrained dialogue model
     │                                  │ structured proposal
     │                                  ▼
     ├── scenario/rubric validator → append-only attempt events
     ├── separate versioned evaluator → evidence + tier dimensions
     ├── ephemeral TTS token/config → streaming TTS provider → client
     └── Postgres transaction → learner state / review queue

Upstash: rate limits, short-lived coordination, cache—not durable truth
Object storage: disabled for audio by default; explicit-consent diagnostics only
```

The app should keep legacy public routes for compatibility while adding normalized data-driven app routes such as `/learn/:specialty/:language/:lessonId` and `/speak/:scenarioId`. Do not place a long-lived bidirectional voice gateway inside short-lived Vercel functions; if direct provider connections become insufficient, add a dedicated stateful edge/realtime service later.

### Core records

- `Principal` / `User`: anonymous-to-account upgrade without changing ownership IDs.
- `Concept`, `LanguageUnit`, `ContentOccurrence`, `CurriculumVersion`.
- `Scenario`, immutable `ScenarioVersion`, `Objective`, `RubricVersion`.
- `SpeakingAttempt`, append-only `AttemptEvent`, `Evaluation`.
- `LearnerVocabularyState`, `LearnerSpeakingState`, `ReviewQueueItem`.
- `ProviderRun`: model/provider versions, timings, token/audio/character usage, cost estimate, no secrets.

All client mutations carry stable idempotency keys. Attempt summaries are derived from events rather than overwritten in place.

## Mastery rubric correction

`Incomplete` must be distinct from Clay.

- **Incomplete:** the session did not reach a valid end state or critical evidence is unavailable.
- **Clay:** completed with heavy scaffolding; meaning was recoverable.
- **Bronze:** all critical objectives completed, with bounded rescue support.
- **Silver:** all objectives completed, no unresolved communication block, at most one hint.
- **Gold:** all objectives completed without hints or English rescue, with consistently understandable meaning and successful self-recovery where needed.

Pronunciation supplies diagnostic feedback but does not independently lower the tier. In future safety-sensitive scenarios, an authored critical meaning error may cap mastery; a provider pronunciation score may not.

## MVP recommendation

### Lock the launch slice

- **Language:** Spanish.
- **Specialties:** Construction and Missionary for the first six; Medical is deferred pending expert content validation and high-stakes safety design.
- **Six scenarios:**
  1. Give and confirm a pre-shift PPE/safety briefing.
  2. Request materials and clarify a measurement.
  3. Report a job-site hazard or minor incident.
  4. Handle a door approach and arrange a definite return appointment.
  5. Explain the Restoration and respond to a sincere question.
  6. Invite someone to church and coordinate practical details such as a ride.

This set tests commands, clarification, numbers, reporting, explanation, negotiation, repair, and social closing without making the first release a medical decision-support surface.

### Measurable launch gates

- End-of-turn to first response audio: median ≤1.5 s, p95 ≤3.0 s under the defined test network.
- A complete physical-device matrix for current/previous iOS and representative iPhones.
- 100% of launch scenario and linked vocabulary content reviewed by a qualified Spanish language expert and the relevant specialty owner.
- Calibrated fixtures show acceptable evaluator agreement and bounded repeat-run tier variance.
- p50 session variable cost < $0.50 and p95 < $0.75 in the pilot.
- No raw audio retained by default; deletion/export and provider retention settings verified.
- Recovery from permission denial, silence, disconnect, refresh, and interruption without losing completed attempt events.

## Proposed revised-PRD diff

Apply the following semantic changes before implementation:

```diff
@@ §4 Session experience
- A rigid 15-minute speaking session.
+ Target 10–15 minutes, add a 7–9 minute quick mode, end when objectives close,
+ and enforce an approximately 18-minute cap. Support automatic turn detection
+ and a mandatory tap-to-speak fallback. Define interruption, silence,
+ reconnect, and resume states; partial valid sessions still receive feedback.

@@ §8 Mastery tiers
+ Add Incomplete as a non-tier outcome.
+ Define Clay/Bronze/Silver/Gold with objective and assistance thresholds.
+ Pin scenario and rubric versions across comparable retries.

@@ §9 Evaluation
- Pronunciation contributes to mastery.
+ Pronunciation is diagnostic and cannot independently gate mastery.
+ Critical authored objectives are hard gates; model judgments require evidence,
+ confidence, and versioned evaluators.

@@ §10 Vocabulary integration
+ Introduce Concept, LanguageUnit, and ContentOccurrence identity contracts.
+ Require a reviewed migration manifest before speaking/review integration.
+ Speaking-discovered units are provisional until resolved or curated.
+ Launch content passes language-expert and specialty-owner QA.

@@ §11 Gold Words
+ Defer Gold Words and decay from MVP.

@@ §13 Scenarios
+ Author and version roles, objective graph, critical meanings, branches,
+ linked units, difficulty envelope, and rubric. Limit the model to controlled
+ surface variation and schema-valid event proposals.

@@ §15 Speech
+ Benchmark providers on Spanish specialty speech and physical iPhones.
+ Specify low-confidence, permission, network, and tap-to-speak fallbacks.
+ Do not promise phoneme-level feedback outside validated scripted support.

@@ §17 Persistence
+ Add Principal/User, LanguageUnit, ContentOccurrence, ScenarioVersion,
+ AttemptEvent, Evaluation, RubricVersion, ProviderRun, and idempotency keys.
+ Postgres is durable truth; local/IndexedDB state is a recoverable cache/outbox.

@@ §18 Privacy
+ No server-side raw-audio retention by default. State transcript/evidence
+ retention, deletion, export, subprocessors, consent, and no-training controls.
+ Exclude under-13 users until parental-consent and child-data requirements ship.

@@ §19 Performance
+ Define median ≤1.5 s and p95 ≤3.0 s end-of-turn-to-first-audio targets,
+ a physical-iPhone matrix, reconnection behavior, a provider pricing/retention
+ spike, fail-closed per-principal metering, and pilot cost budgets.

@@ §22 MVP
+ Lock Spanish and the six named Construction/Missionary scenarios.
+ Defer Medical pending expert content and safety review.

@@ §23 Validation
+ Add calibrated transcript/audio fixtures, evaluator agreement targets,
+ repeat-run variance tests, provider/model snapshots, and failure-mode tests.

@@ §24 Analytics
+ Add score disagreement/appeal signals, content-error reporting,
+ p50/p95 latency and cost, and privacy/deletion audit events.

@@ New: safety and delivery foundations
+ Add anonymous-to-account identity, abuse controls, tests/CI, level calibration,
+ per-vertical safety rules, scoring-audit tooling, and typed-turn accessibility.
+ Suppress third-party analytics/pixels on speaking routes.
```

## Implementation sequence for a later, separately authorized phase

1. Approve the revised PRD, launch slice, policies, and measurable gates.
2. Create and human-review the canonical content manifest; correct launch content.
3. Add principal/account design and Postgres persistence contracts.
4. Author versioned scenario graphs, rubrics, and calibrated evaluation fixtures.
5. Run the physical-iPhone audio/provider/cost spike.
6. Build the session state machine and hybrid speech pipeline.
7. Add evidence-based scoring, results, retry, and review-queue integration.
8. Complete privacy, accessibility, telemetry, failure recovery, and canary validation.

This sequence is advisory only. **No implementation, repository mutation, pull request, or issue comment was performed.**
