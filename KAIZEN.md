# KAIZEN — Language Threshold
Continuous improvement log. Review on every session. Close items when fixed.
Live: URL — check .vercel/project.json

---

## Open

### CRITICAL — Audit Needed
- [ ] **Initial audit not yet done** — No issues have been systematically catalogued for this site. Run visual review (screenshot + record.js), check for [DEMO] tags, verify contact form delivery, and confirm live URL returns 200. Found: 2026-05-24.

### HIGH — Launch Checklist
- [ ] **[DEMO] tag audit** — `grep -rn "\[DEMO\]" app/ components/ | wc -l` must return 0 before considering site production-ready. Found: 2026-05-24.
- [ ] **Contact form verified** — Submit the form and confirm receipt in client inbox. Found: 2026-05-24 — not tested.
- [ ] **Live URL health check** — `curl -sI [URL] | head -1` must return HTTP/2 200. Found: 2026-05-24 — not verified this session.

### MEDIUM — SEO
- [ ] **LocalBusiness JSON-LD** — Verify home page has Organization or LocalBusiness schema with correct name, address, phone. Found: 2026-05-24 — not checked.
- [ ] **Unique title tags** — Each page needs a unique <title> containing primary keyword + location (Twin Falls, ID or Magic Valley). Found: 2026-05-24 — not audited.

### LOW — Quality
- [ ] **Google Business Profile** — Confirm business is claimed/verified on Google Maps with correct info. Found: 2026-05-24 — status unknown.
- [ ] **Mobile visual check** — Run `node ~/record.js <port> --mobile` on the home page and verify no layout breaks. Found: 2026-05-24 — not done.

---

## Closed

| Date fixed | Item |
|---|---|
| — | No items closed yet — audit pending |
