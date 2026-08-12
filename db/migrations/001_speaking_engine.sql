-- Speaking Engine durable state. PostgreSQL 16+.
-- Raw audio is intentionally absent: the product does not retain it by default.

create table if not exists principals (
  id uuid primary key,
  kind text not null check (kind in ('anonymous', 'account')),
  email text,
  created_at timestamptz not null default now(),
  claimed_at timestamptz
);

create table if not exists concepts (
  id text primary key,
  created_at timestamptz not null default now()
);

create table if not exists language_units (
  id text primary key,
  concept_id text not null references concepts(id),
  language text not null,
  locale text not null,
  kind text not null check (kind in ('word', 'phrase')),
  lemma text not null,
  display_form text not null,
  part_of_speech text not null,
  sense_key text not null,
  status text not null default 'canonical' check (status in ('canonical', 'provisional', 'retired')),
  created_at timestamptz not null default now()
);

create table if not exists content_occurrences (
  id text primary key,
  language_unit_id text not null references language_units(id),
  specialty text not null,
  source_kind text not null,
  source_id text not null,
  source_path text not null,
  surface_form text not null,
  content_version integer not null,
  unique (specialty, source_kind, source_id, source_path, content_version)
);

create table if not exists speaking_scenarios (
  id text primary key,
  specialty text not null,
  language text not null,
  created_at timestamptz not null default now()
);

create table if not exists speaking_scenario_versions (
  id text primary key,
  scenario_id text not null references speaking_scenarios(id),
  version integer not null,
  rubric_version text not null,
  definition jsonb not null,
  published_at timestamptz,
  unique (scenario_id, version)
);

create table if not exists speaking_attempts (
  id uuid primary key,
  principal_id uuid not null references principals(id),
  scenario_version_id text not null references speaking_scenario_versions(id),
  status text not null check (status in ('active', 'paused', 'completed', 'failed')),
  feedback_language text not null check (feedback_language in ('english', 'target', 'adaptive')),
  started_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists speaking_attempt_events (
  id uuid primary key,
  attempt_id uuid not null references speaking_attempts(id) on delete cascade,
  idempotency_key text not null,
  event_type text not null,
  occurred_at timestamptz not null,
  payload jsonb not null default '{}'::jsonb,
  unique (attempt_id, idempotency_key)
);

create index if not exists speaking_attempt_events_attempt_time
  on speaking_attempt_events (attempt_id, occurred_at);

create table if not exists speaking_evaluations (
  id uuid primary key,
  attempt_id uuid not null references speaking_attempts(id) on delete cascade,
  rubric_version text not null,
  evaluator_provider text not null,
  evaluator_model text not null,
  evidence jsonb not null,
  mastery_tier text not null check (mastery_tier in ('incomplete', 'clay', 'bronze', 'silver', 'gold')),
  created_at timestamptz not null default now()
);

create table if not exists learner_vocabulary_state (
  principal_id uuid not null references principals(id),
  language_unit_id text not null references language_units(id),
  stage text not null check (stage in ('seen', 'recognized', 'recalled', 'spoken', 'spontaneous')),
  source_attempt_id uuid references speaking_attempts(id),
  updated_at timestamptz not null default now(),
  primary key (principal_id, language_unit_id)
);

create table if not exists learner_speaking_state (
  principal_id uuid not null references principals(id),
  scenario_id text not null references speaking_scenarios(id),
  best_tier text not null check (best_tier in ('clay', 'bronze', 'silver', 'gold')),
  best_attempt_id uuid not null references speaking_attempts(id),
  updated_at timestamptz not null default now(),
  primary key (principal_id, scenario_id)
);
