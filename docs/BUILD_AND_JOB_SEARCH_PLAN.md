# Eight-week build and job-search operating plan

The objective is measurable market proof: senior full-stack delivery plus credible Python, retrieval, evaluation, reliability, and container operations. Portfolio work is capped at 10–12 hours per week and runs alongside applications.

## Weekly rhythm

- Three 90-minute build sessions and one 2–3 hour integration session.
- One 60-minute evaluation/failure-review session.
- One 45-minute case-study or demo update.
- Six to eight high-fit applications, eight targeted outreach messages, and three follow-ups.
- One mock interview or architecture explanation.
- One-feature work-in-progress limit across the two projects.

## Day 1 — visible foundation

- Publish this portfolio source, RoleSignal source, and the refreshed Open Search and Rescue source.
- Make the public OSAR prototype safe by removing concluded real-world operational data.
- Establish RoleSignal's working Python/TypeScript slice and public backlog.
- Draft the 60-second baseline video script.

Status on 2026-09-10: source repositories complete; local builds and RoleSignal CI pass. Vercel publication awaits account reauthentication.

## Week 1 — RoleSignal end-to-end baseline

- Responsive job-description and analysis experience.
- FastAPI health/analyze/retrieval endpoints and strict Pydantic contracts.
- Sanitized candidate evidence corpus, hybrid local retrieval, and citations.
- Deterministic zero-cost mode with explicit limitations.
- Unit/API/grounding tests and public CI.

Definition of done: a job description produces a requirement map; every positive status resolves to cited evidence; missing evidence is never upgraded into a claim.

## Week 2 — real retrieval and harder evaluations

- PostgreSQL, full-text search, pgvector, metadata-aware chunks, and real embeddings.
- Expand from 30 baseline cases to at least 50 difficult cases.
- Track extraction accuracy, citation validity, recall@5, unsupported-claim rate, latency, and cost.
- Publish the first measured case study, including failures.

Definition of done: 100% positive citation validity, zero known fabricated candidate claims, recall@5 at or above 80%, and CI gates for critical grounding checks.

## Week 3 — reliability and abuse resistance

- Correlation IDs and structured logs.
- Timeouts, retries, graceful degradation, and cached demo analyses.
- Rate limiting, malformed-output recovery, no-evidence/conflict paths, and prompt-injection fixtures.
- Playwright coverage of the recruiter journey.

Definition of done: model, database, malformed-output, and no-evidence failures remain understandable and safe.

## Week 4 — RoleSignal portfolio release

- Architecture/data-flow diagrams, threat model, OpenAPI examples, and accessibility audit.
- Performance and dependency checks.
- Two-minute demo and a concise, results-first case study.
- Truthful résumé and LinkedIn project language.

Definition of done: a hiring manager can verify the product, code, tests, evaluation results, decisions, and personal contribution in ten minutes.

## Week 5 — OSAR coordinator workflow

- PostgreSQL incident, update, role, and audit-event schema.
- Coordinator authentication and invitations.
- Create, review, approve, publish, pause, resolve, archive, and export one synthetic incident.
- Two-person publication approval and automatic expiry.

Definition of done: an authenticated coordinator can complete a synthetic incident lifecycle, and no unverified or expired update recruits volunteers.

## Week 6 — field deployment and scale proof

- Complete application + PostgreSQL Docker Compose bundle.
- Backup/restore drill, offline-friendly last-verified public view, and low-bandwidth audit.
- Integration tests and a supervised synthetic field drill.
- Kubernetes overlays for TLS/ingress, secrets, network policy, workers, and observability.

Definition of done: a new operator can launch and recover one field instance from documentation; Kubernetes remains optional and demonstrably uses the same application.

## Week 7 — market-facing packaging

- Publish RoleSignal and OSAR case studies and short demos.
- Prepare applied-AI, forward-deployed, and platform/full-stack résumé variants.
- Prepare six evidence-backed interview stories: retrieval, evaluation failure, hallucination prevention, Python design, agent control, and container/field architecture.
- Add the most relevant proof link to each targeted application.

Definition of done: each role lane has a matching résumé, project proof, and interview story.

## Week 8 — conversion sprint

- Concentrate applications on applied-AI full-stack/product (60%), FDE/solutions/integrations (25%), and staff full-stack/platform (15%).
- Request 8–10 targeted introductions and run two system-design mocks.
- Review application response, recruiter feedback, GitHub traffic, and portfolio engagement.
- Fix the highest-conversion weakness rather than the most interesting feature.

Definition of done: three substantive external reviews are incorporated and funnel data determines the next project increment.

## Week 9 onward

Ship one measured improvement, add five evaluation cases, publish one concise insight, make six to eight high-fit applications, send targeted outreach, and complete one mock interview each week. Cap passive coursework at two hours unless it immediately supports shipped evidence.

## Funnel thresholds

- Triage no more than 15 roles per week and advance only the best 6–8.
- Seek a referral before submitting the top three; apply within 48 hours to strong new matches.
- After 30 qualified applications, fewer than 10% screens means positioning or targeting needs revision.
- Screens without technical-round conversion means the next increment targets the dominant failure category: Python, system design, RAG, reliability, or communication.
