# PRD — Language Threshold Speaking Engine

**Status:** Approved with design-review amendments for implementation (2026-08-12)
**Owner:** Toby Anderton  
**Product:** Language Threshold  
**Repo:** `adobetoby-maker/language-threshold`  
**Review gate:** Completed — Grok + Claude independent reviews → Codex synthesis → Toby approval

---

## 0. Approved Design-Review Amendments

Toby approved the updated synthesis on 2026-08-12. The complete decision record is in
[`docs/reviews/speaking-engine/CODEX-SYNTHESIS.md`](reviews/speaking-engine/CODEX-SYNTHESIS.md).
The amendments below control wherever they conflict with the original review draft:

1. **Launch slice:** Spanish only. The first six scenarios are the approved Construction and Missionary missions: pre-shift safety briefing; materials and measurement; hazard reporting; door approach and return appointment; Restoration explanation; and church invitation/ride coordination. Medical speaking is deferred pending expert content and safety validation.
2. **Session length:** 10–15 minutes is the target, 7–9 minutes is available as a quick mode, and approximately 18 minutes is the hard cap. Objectives—not a rigid timer—end a valid session, and partial valid sessions still receive feedback.
3. **Speech architecture:** Use a provider-neutral streaming cascade (STT → constrained dialogue/evaluation → TTS) with tap-to-speak as a required fallback. True full-duplex speech-to-speech and barge-in are deferred until a physical-iPhone provider spike proves reliability, retention terms, latency, and cost.
4. **Canonical content:** Speaking references immutable `LanguageUnit`, `Concept`, and `ContentOccurrence` identities. Existing curriculum remains source content; speaking must not create a parallel vocabulary copy. Unresolved speaking-derived words use provisional identities until curated.
5. **Persistence:** Postgres is durable truth for principals, scenario versions, attempts, append-only events, evaluations, and learner state. IndexedDB is a recoverable client outbox/cache. Upstash is limited to rate limits, ephemeral coordination, and caches.
6. **Scoring:** `Incomplete` is separate from Clay. Objective completion, understandability, assistance, and communication recovery determine Clay/Bronze/Silver/Gold using a versioned deterministic rubric. Pronunciation is diagnostic and cannot independently gate mastery. Model judgments require evidence and confidence.
7. **Privacy and minors:** Raw audio is not retained by default. Speaking is restricted to users age 13+ until a parental-consent and child-data path is approved. Third-party analytics and pixels are suppressed on speaking routes. Retention, deletion/export, subprocessor, and no-training controls are required before provider-backed launch.
8. **Safety:** Construction and Missionary scenarios include authored vertical rules. The product practices language rather than providing regulatory, engineering, clinical, or doctrinal authority.
9. **Launch gates:** Physical-iPhone testing, calibrated evaluation fixtures, human review of all launch language/specialty content, fail-closed usage budgets, latency SLOs, and measured provider costs are required before production launch.
10. **Deployment:** Approval authorizes implementation and review, not production deployment. Deployment still requires explicit authorization.

---

## 1. Product Thesis

Language Threshold should add a first-class **Speaking Engine** that turns existing lesson content, vocabulary, scenarios, and learner weaknesses into daily AI-guided speaking practice.

This is not a generic AI chat tab. It is a structured competency layer that connects the entire app:

> **Learn → Speak → Detect Weakness → Practice → Retry → Demonstrate Mastery**

The system should teach users to communicate successfully in realistic situations, including when they do not know the exact word.

The primary outcome is **understandable, resilient communication**. Native-like speech is an advanced goal, not the minimum success criterion.

---

## 2. User Problem

Language learners often know vocabulary and grammar but cannot deploy them under conversational pressure. Existing lesson and flashcard systems frequently measure recognition rather than functional speech.

Users need to practice:

- speaking aloud in realistic scenarios;
- understanding responses at natural but level-appropriate speed;
- repairing communication breakdowns;
- receiving useful pronunciation/grammar/vocabulary feedback;
- learning how to ask about unknown words without abandoning the target language;
- converting speaking mistakes into future practice;
- proving that they can handle a situation independently.

---

## 3. Core Product Principle

**Gold means: “I can handle this situation.”**

A learner does not need perfect accent, grammar, or vocabulary to achieve functional competence. The system should reward successful communication, including intelligent circumlocution and clarification strategies.

Example:

If the learner does not know the word **bank**, saying:

> “the building/place where they keep money”

in the target language should be treated as successful communication recovery, not failure.

---

## 4. Primary User Experience

### 4.1 Daily Speaking Session

Target duration: **15 minutes**.

#### Phase A — Coaching / Correction (~5 minutes)

The system selects the most useful pre-session or prior-session weaknesses, such as:

- difficult pronunciation;
- stress or rhythm errors;
- high-value vocabulary;
- phrases needed for the upcoming scenario;
- recurring grammar mistakes;
- previously failed words.

Typical interaction:

1. hear native/model pronunciation;
2. repeat;
3. receive targeted feedback;
4. retry;
5. move on once sufficiently understandable.

Do not overtrain perfection before conversation begins.

#### Phase B — Scenario Conversation (~10 minutes)

The AI adopts a role and runs a realistic scenario.

Example:

**Mission: Your restaurant reservation disappeared**

Objectives:

- state that you have a reservation;
- give the reservation name;
- understand the problem;
- ask whether another table is available;
- negotiate an acceptable time or solution;
- close the interaction naturally.

The AI should behave like a realistic conversation partner rather than automatically rescuing the learner.

---

## 5. Feedback Language

Users must be able to choose how coaching and correction are delivered:

1. **English feedback** — explanations and corrections primarily in English;
2. **Target-language feedback** — corrections and explanations primarily in the destination language;
3. **Adaptive** — begins with more English support and progressively shifts toward the target language as demonstrated competence increases.

This setting should be accessible both globally and at session start.

The AI conversation itself should remain primarily in the target language unless the learner deliberately requests English help or the session mode allows it.

---

## 6. Communication Recovery Skills Track

Create a reusable speaking skill track tentatively named **Keep Talking**.

This teaches what to do when the learner does not know a word.

### 6.1 Circumlocution

Learners practice describing an unknown noun, action, or concept using vocabulary they already know.

Examples:

- bank → “the place where they keep money”;
- pharmacy → “the store where you buy medicine”;
- screwdriver → “the tool you use to turn a screw.”

The AI should recognize successful circumlocution semantically and reward it.

### 6.2 Clarification Strategies

Teach and repeatedly practice phrases equivalent to:

- What does ___ mean?
- Can you explain that another way?
- Can you say it more slowly?
- Is it similar to ___?
- Can you give me an example?
- What do you call the thing that ___?

### 6.3 Learning a New Word in the Target Language

The learner should practice acquiring vocabulary without immediately translating to English.

Example flow:

1. AI uses an unfamiliar word.
2. Learner asks what it means in the target language.
3. AI explains the word using simpler target-language vocabulary and examples.
4. Learner restates the meaning in the target language.
5. AI confirms or corrects the paraphrase.
6. Word is added to the learner's vocabulary graph if useful.

This ability becomes a measurable competency: **Target-Language Independence**.

---

## 7. Correction Philosophy

The Speaking Engine should not interrupt every error.

### Immediate correction

Interrupt when an error:

- prevents understanding;
- materially changes meaning;
- is a high-priority recurring pronunciation problem;
- causes the simulated conversation partner to realistically misunderstand.

### Deferred correction

Collect lower-severity issues for the coaching/review phase:

- minor grammar mistakes;
- accent differences that do not affect comprehension;
- stylistic unnaturalness;
- better vocabulary choices;
- non-blocking pronunciation issues.

The experience should remain conversational rather than becoming a continuous oral examination.

---

## 8. Session Mastery — Clay / Bronze / Silver / Gold

Each scenario has a persistent mastery state.

### Clay — Completed

- learner completed the mission;
- substantial coaching or rescue may have been required.

### Bronze — Understandable

- learner achieved the main objective;
- speech was generally understandable;
- hints and corrections were still meaningfully required.

### Silver — Conversational

- learner handled the scenario with minimal help;
- good comprehension and response quality;
- errors did not materially disrupt communication.

### Gold — Ready

- learner completed the scenario independently;
- consistently understandable;
- recovered from unknown words or misunderstandings effectively;
- achieved scenario objectives without major rescue.

Gold does **not** require a native accent.

### Retry behavior

Every completed session should offer a prominent progression CTA:

- Retry for Bronze
- Retry for Silver
- Go for Gold

A user may replay a mission multiple times.

Future consideration: Gold competency may become due for refresh after a configurable interval, but do not implement decay unless validated in review.

---

## 9. Scoring Dimensions

Internally score multiple dimensions rather than one opaque percentage.

Recommended dimensions:

- **Understandability**
- **Pronunciation**
- **Comprehension**
- **Grammar**
- **Vocabulary Range**
- **Conversation Recovery**
- **Target-Language Independence**
- **Scenario Objective Completion**

A session tier should be determined from a transparent rubric, not just a model-generated subjective label.

The product may show a simplified result while retaining detailed diagnostic scores.

Reviewers should specifically challenge the proposed thresholds and whether pronunciation scoring is technically reliable enough to be gating.

---

## 10. Vocabulary Integration — Bidirectional Vocabulary Graph

This is a core differentiator.

Speaking must integrate with existing Language Threshold vocabulary rather than creating a second silo.

### 10.1 Lesson → Speaking

Existing vocabulary and phrases from a lesson should influence scenario generation and speaking objectives.

Examples include current Language Threshold verticals such as:

- Medical;
- Construction;
- Missionary;
- Travel/general language;
- future specialty blocks.

### 10.2 Speaking → Flashcards / Lesson

Words that cause difficulty during a speaking session should be added to the learner's review queue.

The system should not create duplicate lexical objects when the word already exists in an existing module.

Instead, link the existing vocabulary item to the speaking event and update learner-state metadata.

Proposed provenance metadata:

- encountered in lesson;
- encountered in speaking mission;
- failed pronunciation;
- failed comprehension;
- requested explanation;
- used successfully;
- used successfully without prompt.

Example:

`prenotazione`

- Travel Italian → Restaurants
- Speaking Mission 17 → Restaurant Reservation
- pronunciation difficulty ×2
- spontaneous correct use ×1

### 10.3 Reverse Compatibility Requirement

Existing specialty vocabulary must automatically be reusable by speaking missions.

For example, Missionary vocabulary already present in Language Threshold must be available in missionary speaking scenarios without manual duplication.

---

## 11. Vocabulary Mastery / “Gold Words”

Optional but recommended product layer.

Individual vocabulary can have functional mastery states, potentially:

- Seen
- Recognized
- Recalled
- Spoken understandably
- Used spontaneously in context

The final state should communicate something closer to **functional use** rather than mere flashcard repetition.

Reviewers should assess whether the Clay/Bronze/Silver/Gold metaphor should apply to individual words or remain scenario-only to avoid over-gamification.

---

## 12. Daily Learning Loop

The home/dashboard should eventually present a unified daily path, conceptually:

1. Learn
2. Review words
3. Speak

Example:

**Today's Italian**

- 8 min — Learn: Restaurants & Reservations
- 5 min — Words: 12 due, 4 from speaking
- 15 min — Speak: Restaurant Reservation
- Current mission level: Bronze
- CTA: Go for Silver

The Speaking Engine should be capable of acting as the daily capstone or “boss battle” for lesson material.

Do not redesign the entire home screen in the first implementation unless required to make the speaking feature discoverable.

---

## 13. Scenario Sources

Scenarios may be derived from:

- existing module scenario fields;
- lesson vocabulary;
- specialty domain;
- user-selected goals;
- proficiency level;
- prior weaknesses;
- prior completed scenarios.

Examples:

### Travel

- hotel check-in;
- restaurant reservation;
- wrong train platform;
- lost luggage;
- pharmacy visit;
- asking for directions;
- making a purchase;
- resolving a billing problem.

### Missionary

- door approach;
- street contact;
- explaining the Restoration;
- explaining the Plan of Salvation;
- answering a difficult question;
- inviting someone to attend church;
- coordinating with a member;
- follow-up visit.

### Medical

- history taking;
- pain description;
- medication reconciliation;
- explaining a procedure;
- consent-adjacent communication within appropriate educational scope;
- post-operative instructions.

### Construction

- jobsite safety;
- materials request;
- explaining measurements;
- discussing a plumbing/electrical problem;
- coordinating a crew task;
- customer interaction.

---

## 14. AI Conversation Behavior

The conversation agent should have explicit behavior constraints.

It should:

- remain in character;
- follow the scenario state;
- use vocabulary appropriate to the learner level;
- respond naturally to correct language;
- realistically misunderstand severely unclear speech;
- allow successful circumlocution;
- explain unknown words when asked;
- avoid instantly revealing the ideal answer unless help is requested or needed;
- gradually reduce hints across retries;
- track scenario objectives silently;
- produce structured diagnostic events for scoring and vocabulary updates.

The conversation itself should not feel like a chatbot interview.

---

## 15. Speech Feedback Requirements

At minimum, the system needs to distinguish among:

- speech recognized successfully;
- likely pronunciation issue;
- grammar/word-choice issue;
- semantic misunderstanding;
- speech not understood;
- target phrase produced acceptably.

Feedback should preferably identify the specific word/phoneme/syllable or phrase that is causing difficulty when technical confidence allows.

Do not pretend to have phoneme-level certainty if the underlying speech stack cannot support it reliably.

Reviewers must evaluate available speech-model capabilities, latency, browser/mobile support, cost, and how much pronunciation scoring can realistically be trusted.

---

## 16. Session Result Screen

At session end show:

- mastery tier: Clay/Bronze/Silver/Gold;
- mission objective completion;
- strongest skill;
- top 1–3 improvements;
- words/phrases added to review;
- examples of successful recovery/circumlocution;
- CTA to retry for the next tier;
- CTA to review difficult words.

Avoid a wall of corrections.

The result should feel motivating and actionable.

---

## 17. Persistence / Data Model Requirements

The implementation should persist, at minimum:

### SpeakingScenario

- scenario id
- specialty/domain
- language
- level
- title
- scenario prompt/state
- target objectives
- linked lesson/module ids
- linked vocabulary ids
- estimated duration

### SpeakingAttempt

- user id
- scenario id
- timestamp
- duration
- completion state
- tier achieved
- score dimensions
- help/hints used
- objective results
- transcript or derived structured events per privacy policy
- vocabulary difficulty events

### LearnerVocabularyState

- canonical vocabulary id
- exposure sources
- recognition history
- pronunciation history
- speaking-use history
- spontaneous-use count
- last practiced
- review priority

### LearnerSpeakingState

- scenario mastery
- competency dimensions
- recurring pronunciation issues
- recurring grammar issues
- recovery skill history
- target-language-independence history

Reviewers should recommend schema changes consistent with the repo's existing persistence architecture.

---

## 18. Privacy / Audio Storage

Default design principle: **store the minimum necessary audio data**.

Prefer derived results, transcripts, timestamps, scores, and error events over indefinite raw-audio retention unless raw audio provides a clearly justified product benefit.

The final implementation must clearly define:

- whether raw audio is transmitted;
- which provider receives it;
- whether raw audio is retained;
- retention duration;
- deletion behavior;
- whether the learner can replay prior recordings;
- child/minor considerations if applicable.

This is a review requirement before build approval.

---

## 19. Performance / UX Requirements

Speaking must feel live.

Targets to validate during technical review:

- minimal perceived latency between user stopping speech and AI response;
- streaming speech where practical;
- clear recording/listening state;
- interruption/turn-taking that works well on mobile Safari;
- graceful handling of microphone permission failure;
- graceful handling of weak network conditions;
- no loss of session if a transient request fails;
- visible fallback if speech analysis confidence is low.

Do not ship a speaking system that feels like sending voice notes back and forth if a lower-latency architecture is feasible.

---

## 20. Accessibility

Support:

- visible transcript option;
- replay of model speech;
- adjustable playback speed where technically reasonable;
- captions for AI audio;
- large touch targets;
- non-color-only representation of Clay/Bronze/Silver/Gold;
- keyboard fallback on desktop;
- clear microphone state.

---

## 21. Gamification

Gamification should reinforce competence rather than replace it.

Primary mechanics:

- Clay/Bronze/Silver/Gold mastery;
- retry to improve tier;
- visible count of mastered situations;
- optional streak/history integration;
- optional Gold vocabulary/mastery concept.

Avoid arbitrary XP inflation in the initial build unless it integrates cleanly with existing Language Threshold mechanics.

---

## 22. MVP / First Production Scope

The first build should prove the core loop, not every future possibility.

### Required MVP

1. Speaking entry point integrated into Language Threshold.
2. At least one language fully supported end to end (reviewers should recommend best initial language; Spanish or Italian are logical candidates).
3. At least 6 polished scenarios across one or more existing content blocks.
4. 15-minute session structure with coaching + conversation.
5. English / target-language / adaptive feedback setting.
6. Real speech input and AI spoken output.
7. Structured post-session feedback.
8. Clay/Bronze/Silver/Gold scenario mastery.
9. Retry for higher tier.
10. Existing lesson vocabulary injected into scenarios.
11. Difficult words routed into review/flashcards without duplicate creation.
12. Circumlocution / communication-recovery behavior recognized and rewarded.
13. At least one explicit **Keep Talking** skill lesson.
14. At least one explicit **Learn a Word in the Target Language** skill lesson.
15. Persistent attempt/mastery state.
16. Mobile-first behavior, particularly iPhone/Safari.
17. Logging sufficient to evaluate latency, model errors, and scoring quality.

### Not required for MVP

- all languages;
- all specialties;
- social leaderboards;
- multiplayer conversation;
- native-speaker marketplace;
- elaborate avatar/video tutor;
- automatic Gold decay;
- perfect phoneme-level scoring;
- broad home-page redesign;
- certification claims.

---

## 23. Initial Acceptance Tests

The reviewed PRD should produce more detailed acceptance criteria, but implementation must at minimum prove the following:

1. A user can launch a speaking mission from a relevant lesson/module.
2. AI conversation uses the selected target language.
3. User speech is captured and interpreted reliably on iPhone Safari.
4. User can choose English, target-language, or adaptive coaching.
5. A communication-blocking error triggers useful recovery rather than silently advancing.
6. A minor grammatical error does not unnecessarily stop the conversation.
7. Successful circumlocution is recognized as successful communication.
8. Learner can ask for a word explanation in the target language.
9. AI can explain the word using simpler target-language vocabulary.
10. Learner can paraphrase the meaning back and receive confirmation/correction.
11. A difficult vocabulary item is linked to the learner's review queue.
12. Existing vocabulary is reused rather than duplicated.
13. Scenario objectives are tracked.
14. Session returns a deterministic-enough mastery tier from a defined rubric.
15. Retry starts the same mission with reduced scaffolding where appropriate.
16. Prior tier and attempts persist after reload/login.
17. Failed network/model request does not destroy the whole attempt.
18. User can see what specifically prevented advancement to the next tier.
19. Audio/transcript retention behavior matches the approved privacy design.
20. Cost and latency telemetry can be inspected per session.

---

## 24. Success Metrics

Initial metrics should focus on whether learners actually speak and improve.

Recommended metrics:

- speaking sessions started / active learner;
- speaking sessions completed;
- average spoken minutes per active learner;
- percentage of learners retrying a mission;
- Bronze → Silver and Silver → Gold conversion;
- vocabulary failures later used successfully in speech;
- frequency of communication-recovery attempts;
- success rate after circumlocution;
- target-language clarification usage;
- percentage of correction feedback rated useful, if feedback UI is added;
- median turn latency;
- speech recognition failure rate;
- per-session model/audio cost.

Do not optimize primarily for raw session count or streaks.

---

## 25. Architecture Questions for Codex / Grok / Claude Review

The review must answer these before implementation:

1. What current repo structures can be reused for lessons, modules, vocab, user state, and routing?
2. Should the first implementation use realtime speech-to-speech, STT → LLM → TTS, or a hybrid architecture?
3. Which model/providers offer the best quality/latency/cost for the initial target language?
4. How reliable is pronunciation scoring, and what should/should not gate mastery?
5. How should canonical vocabulary ids be introduced without breaking existing module data?
6. How should dynamic speaking-derived vocabulary coexist with static content?
7. What should be persisted server-side versus client-side?
8. What is the appropriate audio retention policy?
9. How should interruptions, barge-in, silence detection, and turn boundaries work?
10. How should adaptive feedback-language progression be implemented?
11. Should scenario content be authored, generated, or hybrid?
12. How much scenario state should be deterministic versus model-driven?
13. What rubric can make Clay/Bronze/Silver/Gold stable enough that retries feel fair?
14. How should successful circumlocution be detected without rewarding vague nonsense?
15. What security/privacy risks are introduced by live microphone use?
16. What browser/mobile edge cases are likely on iOS?
17. What telemetry is necessary to debug bad scoring and latency?
18. What is the estimated cost per 15-minute session under realistic usage?
19. What should be changed in this PRD before build?
20. What should explicitly be deferred from the MVP?

---

## 26. Required Review Output

Codex must solicit **independent** reviews from Grok and Claude before synthesizing.

Each reviewer should return:

- product critique;
- UX critique;
- language-learning/pedagogy critique;
- technical architecture critique;
- speech/pronunciation feasibility critique;
- persistence/data-model critique;
- privacy critique;
- latency/cost critique;
- gamification critique;
- missing requirements;
- unnecessary requirements;
- MVP scope recommendation;
- top risks;
- verdict: **ACCEPT / ACCEPT WITH CHANGES / REWORK**.

Codex then produces:

1. side-by-side areas of agreement;
2. disagreements between Grok and Claude;
3. Codex's adjudication;
4. recommended changes to this PRD;
5. recommended initial technical architecture;
6. recommended first language and first 6 scenarios;
7. estimated implementation sequence;
8. a final verdict.

**STOP after review. Do not implement until Toby explicitly approves the reviewed PRD.**

---

## 27. Planned Post-Approval Build Workflow

After explicit approval only:

1. Codex creates implementation branch/plan.
2. Codex builds the approved MVP.
3. Codex runs automated tests and browser/mobile verification.
4. Claude reviews the exact implementation commit/diff against this PRD and acceptance tests.
5. Claude returns blocking and non-blocking findings.
6. Codex repairs blocking findings.
7. Claude re-reviews the exact repaired commit if needed.
8. No production deployment without explicit approval if the repository workflow requires it.

---

## 28. Product Direction Beyond MVP

Potential later expansions:

- longitudinal pronunciation profile;
- personalized accent drills;
- scenario refresh/decay;
- multi-character situations;
- specialty certification-style competency maps without formal certification claims;
- user-created scenarios;
- teacher/coach-assigned speaking missions;
- peer or human-native review;
- longer free conversation mode;
- speaking-derived personalized curriculum;
- multi-language transfer skills;
- “survival threshold” competency map for travel, missionary work, medicine, construction, etc.

These should not distract from proving the core loop first.

---

## 29. One-Sentence Definition

> **Language Threshold Speaking Engine is a scenario-based AI speaking system that uses the learner's actual curriculum and vocabulary, teaches them to recover when language fails, converts speech weaknesses back into practice, and lets them retry real-world situations until they can handle them at Gold level.**
