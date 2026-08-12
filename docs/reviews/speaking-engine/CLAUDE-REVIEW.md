# Independent Claude Review — commit fb52c4450afc2fb97f03c6e392cab4782eb4c48c

## 1 Executive verdict

**ACCEPT WITH CHANGES.** The pedagogy is genuinely differentiated — "Gold = I can handle this situation," deferred correction, and the *Keep Talking* recovery track are the strongest ideas here and are rare in the market. The PRD's flaw is not its product thinking; it is that it describes a feature while the repo requires a platform. There is no speech code, no server, no auth, no durable user state, no tests, and no CI. MVP items §22.15 (persistent state), §22.16 (iOS), §22.17 (logging) and acceptance tests §23.3/16/17/19/20 are all *backend* work that does not exist yet. Treat this as three deliverables: (a) identity + durable persistence, (b) a speech turn service, (c) the speaking product. Approving §22 as written approves roughly 3× the work it appears to describe.

## 2 Architecture/repo findings

- **Routing is a hand-maintained flat list**, `src/App.tsx:100-141`, with a fullscreen shell for `/app` prefixes (`src/App.tsx:68-86`). Speaking belongs under `/app/speak/*` so it inherits the chrome-free shell. Low friction; no router change needed.
- **Server surface is three functions.** `api/word-lookup.ts`, `api/subscribe.ts`, `api/_ratelimit.ts`. **`api/_ratelimit.ts:9` fails open** — no Upstash env means `getLimiter()` returns `null` and `checkRateLimit` returns `false` (allowed). For an endpoint metering real audio spend that is a direct cost-exfiltration path. `api/_ratelimit.ts:14` is 60/hr/IP: simultaneously too loose for a 25-turn session and useless behind CGNAT/school NAT.
- **Persistence is a boolean map in localStorage.** `src/components/LessonGrid.tsx:21,24-40` stores `lt-lesson-progress` as `Record<lessonId, boolean>`; `src/pages/AppHome.tsx` stores `lt-specialty`. MissionaryPortal's unsigned base64 progress link is a forgeable "sync." Nothing survives device loss. §23.16 ("persist after reload/**login**") presumes a login that does not exist.
- **Vocabulary has no identity.** `src/components/WordCard.tsx:46` keys on `` `${lang}:${word}|${sentence}` `` — surface form plus context sentence. The prebuild takes the first translation token. `public/word-cache` holds 5,821 Spanish entries keyed the same way. §10's "link the existing vocabulary item" is currently unimplementable: there is no item to link to.
- **Schema sprawl and dead curriculum.** Module `VocabPair` (10 languages) vs Lesson vocab (`en/es/sw`, `src/components/LessonGrid.tsx:5-12`) vs book-chapter `en/es` vs trifold dialogue vs page-hardcoded Fishing vs med terms. `src/data/missionaryLessons.ts` (39 lessons) and `src/data/climbingLessons.ts` (49) are **imported by nothing** — real content already paid for and orphaned. `LessonGrid` Props accept only `'es' | 'sw'` (`:18`) while modules ship 10 languages.
- **"AI speaking partner" is marketing copy** in `ModuleStarter.tsx`/`FishingModule.tsx` pointing at an external `APP_URL`. Shipping this PRD converts a claim into a promise — good, but it means the copy is currently unbacked.
- **PWA `autoUpdate`** can swap the SW mid-session; **GA + Meta Pixel load app-wide** (`src/App.tsx:153-154`), which collides with minors and speaking routes (§5).

## 3 Product/UX/pedagogy critique

**Agree:** deferred vs immediate correction (§7) is correct and rarely done; realistic misunderstanding as the feedback signal (§14) is better pedagogy than an error list; separating Understandability from Pronunciation (§9) is right; refusing decay at MVP (§8) is right.

**Disagree / change:**
- **15 minutes is the wrong default.** It is a large ask on a phone and it maximizes cost and abandonment on session one. Ship **7–9 min default** (3 coach + 5 conversation) with 15 as an "extended" option. Make **5+10 a target, not a rigid structure**: the session ends when objectives close or a hard ~18-min cap hits, not when a timer expires. Mid-session abandonment must still score (Clay) rather than vanish.
- **No level model.** §17 stores `level` but nothing defines or assigns it, so scenario generation and "level-appropriate speed" (§2) have no anchor. Add a 3-band level (roughly A1/A2/B1) set by a 60-second calibration turn and adjustable per scenario.
- **Phase A risks becoming a drill the stack can't judge.** Coaching must be scripted-repeat with *lexical* verification (did ASR return the expected tokens), not phoneme grading. Cap at 3 items, 2 retries each, always advance.
- ***Keep Talking* is the differentiator and should be first-class**, not adjacent: put a recovery objective inside every one of the six MVP scenarios, not only in the two skill lessons.
- **Missionary/medical roleplay carries content risk** the PRD never addresses (§5 below). Travel is the right MVP surface.
- **Result screen (§16)** should show exactly one "here's what blocked Gold" line derived from the rubric, not a ranked list.

## 4 Technical/speech/latency-cost critique

**Recommendation: hybrid cascade — streaming STT → LLM → streaming TTS — behind provider interfaces that a realtime speech-to-speech engine can later implement.** Not realtime S2S at MVP. Rationale: every downstream requirement (deterministic objective tracking, vocabulary events, deferred-correction queue, rubric inputs, transcript-retention policy, per-turn cost telemetry, §23.18's "what blocked you") consumes **text**. S2S hides the intermediate representation, makes objective state model-driven rather than deterministic, complicates cost attribution, and is the harder path to make survivable on iOS. Cascade also lets you swap one leg when a provider regresses. Where S2S wins is barge-in and prosody — both deferred.

**Latency budget** (validate on device): endpointing 300–500 ms client VAD → ASR final ≤400 ms after endpoint → LLM first token ≤500 ms → TTS first audio chunk ≤300 ms. Target **p50 ≤1.2 s, p95 ≤2.5 s** from user stop to AI audio. Techniques: stream partial audio during speech so ASR is nearly finished at endpoint; sentence-chunk TTS and play chunk 1 while generating chunk 2; cap context with a rolling scenario-state summary; pre-cache greeting audio.

**iOS turn-taking.** Create **one** `AudioContext` inside a user gesture and keep it for the session; re-`resume()` after every interruption. Handle `visibilitychange`, `pagehide`, audio route change, phone call/Siri, and the silent switch as explicit **paused** states with a resume affordance — never as session death. Re-acquire `getUserMedia` after backgrounding; Safari revokes tracks. Use `MediaRecorder`/AudioWorklet to your own server; **do not use `webkitSpeechRecognition`** — it ships audio to Apple with no retention control and no reliable language pinning. **MVP turn model = push-to-hold or tap-to-talk with VAD auto-stop; barge-in deferred** (full-duplex over a phone speaker needs AEC you don't control). Pin the service worker during an active session so `autoUpdate` cannot reload mid-turn.

**Provider selection must be gated by a spike, not by this document.** Requirement: before scope lock, verify current official docs, pricing pages, regional availability, data-retention/zero-retention terms, and concurrency limits, and run a **real-device spike on iPhone Safari over LTE** measuring p50/p95 for at least two candidate stacks per leg. **I am deliberately quoting no prices**: any figure I assert from memory would be stale and would anchor a budget wrongly.

**Cost formula** (fill from the spike, not from guesses):

```
session ≈ STT_rate×user_audio_min
        + TTS_rate×ai_output(chars or min)
        + Σ_turns(in_tokens×rate_in + out_tokens×rate_out)
        + scoring_pass_tokens
```

For a 15-min session assume ~5 min learner audio, ~4 min AI audio, 25–35 turns, and **context regrowth as the dominant hidden cost** — mitigate with rolling summarization, prompt caching, and a token cap per turn. **Caveat: treat every per-session number as unvalidated until the spike measures it**, and ship a server-side cost meter plus a per-user daily audio-minute budget regardless of what the number turns out to be.

**Pronunciation reliability:** generic ASR gives you no trustworthy phoneme scores. Usable proxies: ASR confidence and n-best divergence, token-level edit distance against the expected string on scripted repeats, repetition count, and whether the AI partner had to ask for clarification. That supports "this word is giving you trouble," not "your /r/ is 62%." **Pronunciation must never gate a tier** (§6). §15's honesty clause is correct — enforce it by making the UI incapable of showing phoneme claims.

## 5 Persistence/vocabulary/privacy/safety critique

**Server/client split.** Server owns: attempts, tier, rubric inputs, learner vocabulary state, transcripts, telemetry, prompts, provider keys, budgets. Client owns: ephemeral audio (never written to disk), UI state, optimistic cache, and an outbox for offline replay. No scoring on the client.

**Identity.** Anonymous-first: ULID device id in localStorage + httpOnly session cookie; all rows keyed to the anon id from turn one; **claimable later by email magic link** (reuse Upstash from `api/subscribe.ts`). On first sync, migrate existing `lt-lesson-progress` and `lt-specialty`. This satisfies §23.16 without forcing signup before value.

**Canonical additive id registry.** `lt:{lang}:{pos}:{lemma}#{sense}` (e.g. `lt:es:n:banco#1`), generated by a build-time extractor across all existing schemas into a checked-in registry file, **plus an alias table** `(source, surface, context) → canonicalId` with hand-curated overrides, **plus a `dyn:` namespace** for speaking-derived items not yet resolved. Existing content files are never rewritten — ids are additive and resolved at load. `WordCard.tsx:46` keeps its cache key and gains an optional `canonicalId`. Unresolved `dyn:` entries are promoted by a periodic curation pass. This is the mechanism that makes §10.3 and §23.12 true rather than aspirational.

**Journal / recovery / idempotency.** Append-only turn journal; client-generated `attemptId` + `turnId` (ULID); server upsert idempotent on `(attemptId, turnId)`; unacked turns replay on reconnect; **tier is recomputed from the journal**, never stored as the only truth. That is how §23.17 is satisfied — a failed request loses one turn, not the attempt.

**Audio retention.** Default: **raw audio is streamed to the STT provider and never persisted by us**; retention beyond the request requires an explicit opt-in and a stated window (7 days) and only if replay ships. Transcripts: 30 days default, user-visible delete and export, PII redaction before any longer-term analytic store. Choose providers offering zero-retention/no-training terms and state the provider by name in the PRD.

**Minors.** The product markets ages 4–12 and serves `/readers`, so under-13 users are foreseeable — this makes live microphone capture a **COPPA/GDPR-K** matter, not a footnote. Require: speaking gated to 13+ with self-attestation and a parental-consent path, or minors explicitly excluded in-product; **no GA/Meta Pixel on speaking routes** (they currently load globally, `src/App.tsx:153-154`); no raw child audio retention under any flag.

**Vertical safety.** Medical scenarios must be constrained to *language* practice with an explicit no-clinical-advice rule in the system prompt, no dosages, and a visible disclaimer; the AI plays patient/staff, never advisor. Missionary scenarios: the AI plays an investigator, does not assert doctrine authoritatively, and disengages from hostile religious argument. Add a per-vertical safety appendix to the PRD.

**Telemetry.** Per turn: `asr_ms`, `llm_ttft_ms`, `tts_ttfb_ms`, `total_ms`, ASR confidence, model+version ids, token counts, estimated cost, error class, retry count. Per session: cost meter, rubric input snapshot, `rubric_version`, sampled transcript for scoring audits.

## 6 Scoring/gamification rubric

Tier is computed **deterministically on the server** from counters the model emits as structured events; the model never names the tier. Gating uses **3 of the 8 dimensions** — objective completion, understandability proxy, and independence (hints/English use). The other five are diagnostics.

| Tier | Objectives | Hints | English fallback | Breakdowns |
|---|---|---|---|---|
| Clay | attempted, ended | any | any | any |
| Bronze | all core met | ≤3 | ≤1 | ≤3 |
| Silver | all core met | ≤1 | 0 | ≤1 |
| Gold | all core + ≥1 recovery event | 0 | 0 | ≤1, self-repaired |

Rules: **pronunciation never gates**; thresholds are constants stored with a `rubric_version` on each attempt so a retry is judged identically (retries change *scaffolding*, not thresholds — §23.15); ties resolve downward; the "what blocked Gold" line is generated from the first failing counter. Ship rubric unit tests over fixture transcripts — this is the single most drift-prone component and the repo has no tests today.

**Circumlocution detection — blind referent test.** The scoring model is shown the learner's description **without** the target word and asked to name the referent from a closed candidate set. Reward only if it recovers the target (or an accepted synonym) **and** the description contains ≥1 concrete distinguishing feature. Vague nonsense ("una cosa que se usa") fails because the blind guess doesn't converge. Log the blind guess for audit.

## 7 Section 25 answers

1. **Reusable structures:** route list `src/App.tsx:100-141` (+`/app` shell `:68-86`), module/lesson data files, `public/word-cache` (5,821 es), `api/_ratelimit.ts` pattern, `api/subscribe.ts` Upstash. **Recommend:** reuse routing/content/cache; replace the localStorage progress layer.
2. **Architecture:** **hybrid cascade STT→LLM→TTS** behind swappable provider interfaces; realtime S2S deferred.
3. **Providers:** **do not choose in the PRD.** Gate on a spike verifying current official docs/pricing/retention terms + measured iPhone-Safari-over-LTE latency for ≥2 stacks per leg.
4. **Pronunciation:** unreliable at phoneme level; use confidence/edit-distance/repair proxies. **Never gating**; diagnostics only.
5. **Canonical ids:** additive `lt:{lang}:{pos}:{lemma}#{sense}` registry + alias table, generated at build, zero edits to existing content.
6. **Dynamic vocab:** `dyn:` namespace, learner-scoped, promoted to canonical by a curation pass; dynamic items are review-eligible but never authoritative.
7. **Server vs client:** server = attempts/tiers/vocab state/transcripts/telemetry/keys/budget; client = audio capture, UI, optimistic cache, outbox. Scoring server-side.
8. **Retention:** no raw-audio persistence by default; transcripts 30 days; user delete/export; zero-retention provider terms required.
9. **Turn boundaries:** client VAD (300–500 ms silence) + tap-to-talk fallback; **barge-in deferred**; explicit paused state on interruption.
10. **Adaptive feedback:** deterministic ladder — English share steps down when the learner clears rubric counters (e.g. 2 consecutive attempts ≥Bronze with ≤1 English fallback) and steps **up** after a failed attempt. Never model-decided; always user-overridable.
11. **Scenario content:** **hybrid — authored skeleton, generated surface.** Objectives, state graph, required vocabulary, and safety rails are authored data; the model generates dialogue within them.
12. **Determinism:** objectives, transitions, hint counters, tier = deterministic server state machine. Model contributes wording plus structured event proposals it cannot self-approve.
13. **Rubric:** §6 table, versioned constants, recomputable from the journal.
14. **Circumlocution:** blind-referent test + distinguishing-feature requirement (§6).
15. **Mic risks:** always-on capture, background capture, cost abuse via an open endpoint (`api/_ratelimit.ts:9` fails open), transcript PII, minors, third-party pixels on speaking routes.
16. **iOS edge cases:** AudioContext gesture + resume, track loss on background, call/Siri/route-change interruption, silent switch, autoplay policy, SW autoUpdate mid-session, memory pressure on long sessions.
17. **Telemetry:** per-turn stage timings, ASR confidence, model ids, tokens, cost, error class; per-session rubric snapshot + sampled transcripts.
18. **Cost/session:** formula in §4; **no numeric estimate without the pricing spike** — measure, then set the budget cap.
19. **PRD changes:** §11 below.
20. **Deferrals:** §8 below.

## 8 Missing requirements and deferrals

**Missing:** account/identity and server persistence (the true prerequisite); level placement; interruption/resume state machine; cost budget + abuse control (fail-open limiter); per-vertical content safety; **tests and CI at all** — a versioned rubric with no unit tests will drift within weeks; moderation of learner speech; error taxonomy and user-facing failure copy; session resume after crash; an internal scoring-audit tool; ToS/privacy-policy updates; typed-turn mode for deaf/HoH learners (§20 omits this); data export/delete UI; **curriculum de-duplication** — decide whether `missionaryLessons.ts`/`climbingLessons.ts` become speaking source data or are deleted before they get a third schema.

**Defer:** barge-in; phoneme scoring; Gold decay; multi-character scenes; all languages beyond Spanish; fully generated scenarios; realtime S2S; leaderboards/XP; home-screen redesign; word-level metal tiers; teacher assignment; audio replay.

## 9 Recommended MVP

**Language: Spanish.** Best ASR/TTS coverage, the only language with real lesson depth (`LessonGrid` accepts `'es'|'sw'`, `src/components/LessonGrid.tsx:18`), and 5,821 cached entries already keyed for it.

**Exact first 6 scenarios** (travel-first: highest reuse, lowest safety load, each with one mandatory recovery objective):

1. Café order + wrong item delivered
2. Restaurant reservation missing (the PRD's flagship)
3. Pharmacy: describe a symptom, buy medicine (bridges Medical vocabulary safely)
4. Hotel check-in with a problem
5. Ask for directions **and understand the answer** (comprehension-weighted)
6. Jobsite materials request (bridges existing Contractor vocabulary)

Plus two skill lessons: *Keep Talking* and *Learn a Word in the Target Language*.

**Session:** 5+10 as a **target, not rigid** — objective-driven end, 7-min quick mode, ~18-min hard cap, partial sessions still score.
**Scoring:** all **8 dimensions** retained internally; 3 gate the tier; pronunciation non-gating.
**Gold Words:** server-side state machine (Seen→Recognized→Recalled→Spoken→Spontaneous) feeding the review queue; minimal UI, no metals on words.

## 10 Recommended architecture and planning-only sequence

**Client:** `/app/speak/*` added to `src/App.tsx:100-141`, rendering inside the fullscreen shell. One `SpeakingSession` machine: `idle → arming → listening → thinking → speaking → paused → ended`. Capture via `getUserMedia` + AudioWorklet with client VAD; playback through a single session-scoped `AudioContext`; transcript pane always available (accessibility + trust).

**Server:** a small persistent Node service (or streaming Vercel functions **only if** the spike proves acceptable cold-start/stream behavior) exposing `POST /speak/session`, `POST /speak/turn` (audio in, SSE out: partial transcript → assistant text → TTS chunks), `POST /speak/event`, `POST /speak/finish`. Provider adapters behind `SpeechProvider` / `LLMProvider` / `TTSProvider`. **Postgres** (Neon/Supabase) for relational learner state; keep Upstash for rate limiting and sessions. Fix `api/_ratelimit.ts:9` to fail **closed** for metered endpoints and add per-user minute budgets.

**Sequence (planning only — no code until Toby approves):** 0 decisions locked → 1 provider spike report (docs, pricing, retention terms, measured device latency/cost) → 2 identity + persistence + canonical-id registry → 3 single-scenario turn-loop vertical slice → 4 rubric + fixture tests → 5 vocabulary graph + review queue → 6 remaining scenarios + Keep Talking → 7 telemetry, budget, privacy controls → 8 iOS hardening + accessibility → 9 acceptance-test pass against §23.

## 11 Top risks and required PRD changes

**Risks:** (1) mobile-LTE latency making it feel like voice notes — the outcome §19 forbids; (2) cost blowup through a fail-open limiter; (3) unstable tiers destroying retry trust; (4) minors + live microphone; (5) scope — a backend from zero with no tests/CI; (6) provider lock-in/regression; (7) medical/missionary content liability; (8) content duplication becoming a seventh schema.

**Required PRD changes:** ① add an Identity & Accounts section (anonymous-first, claimable); ② replace "15 minutes" with target + quick mode + cap; ③ add a level/placement model; ④ state pronunciation is non-gating and phoneme claims are forbidden in UI; ⑤ specify canonical id registry + alias + `dyn:` namespace; ⑥ specify hybrid cascade with a provider-spike gate and **no prices asserted before verification**; ⑦ add turn-taking/interruption spec with barge-in deferred; ⑧ add retention numbers, provider naming, and a minors policy including analytics suppression; ⑨ add per-vertical safety rules for Medical and Missionary; ⑩ add the deterministic rubric table with `rubric_version`; ⑪ add testing/CI as an MVP requirement; ⑫ resolve `missionaryLessons.ts`/`climbingLessons.ts`.

## 12 Final verdict

**ACCEPT WITH CHANGES.** The thesis, the recovery track, and the Gold definition are worth building and are defensible product differentiation. What blocks a clean ACCEPT is that the PRD assumes infrastructure the repo does not have (identity, server state, canonical vocabulary ids, tests), asserts speech capabilities no current stack can gate on (pronunciation), and omits the two areas most likely to cause real harm or real cost (minors with live microphones, and an open metered audio endpoint behind a fail-open limiter). Land the twelve changes in §11 — especially identity/persistence, the canonical id registry, the deterministic rubric, the provider spike gate, and the minors policy — and this is buildable and worth building.

---
*Review only — no files edited, no commands run, no implementation proposed pending your approval of the revised PRD.*
