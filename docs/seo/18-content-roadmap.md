# 18 - Content roadmap

Date: 2026-09-30  
Depends on: Stages 1–17 (especially 9, 12, 14–17)  
Status: **Approved Phase 0+1+2** (2026-09-30). Phases 1–2 implemented in repo; Phase 0 remains operator checklist (`19-implementation-plan.md`).

No pages proposed until gap + SERP evidence exists.

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. North star for this roadmap

Ship **indexable entity clarity** and **Tier 0–1 angle fixes** on the **existing** registry.  

Do **not**: add URLs, pSEO, question banks, competitor pages, PL catalog, or link factories.  
[FACT] Stages 9–13, 17 locks.

Distribution reminder: SEO/GEO explain and send people into Discord; they do not replace “someone on voice says let’s play.” [HYPOTHESIS]/strategy.md

---

## 2. Workstreams (parallel-capable)

| Stream | Owner surface | Depends on approval? |
| ------ | ------------- | -------------------- |
| **A. Ops / index / host** | GSC, Directory portal, env canonical | Operator actions; little/no web copy PR |
| **B. On-page Tier 0–1** | `en.ts` + `seo/copy/*` | **Yes** — Stage 12 specs |
| **C. Tier 2 maintain** | Light copy/link fixes | Yes, after B or bundled |
| **D. GEO harden** | Mostly follows B (builders); fact audit | Yes if code; checklist can start anytime |
| **E. Mentions / links** | Outreach, not repo | Operator; Stage 17 P1 |
| **F. Deferred research** | KG-12 SERP probe, AI probes, link metrics | No code |

---

## 3. Phased backlog

### Phase 0 — Ops (start now / anytime; no marketing copy PR required)

| ID | Task | Source | Done when |
| -- | ---- | ------ | --------- |
| R-0.1 | GSC: submit/confirm sitemap for active host; URL Inspection on `/en` + 2 pillars | Stage 3 | Sitemap seen; inspection requested |
| R-0.2 | Directory listing: align language/UI claims with product.md (en+pl chrome) | Stage 2 T-005, Stage 15 | Listing text matches MVP facts |
| R-0.3 | Directory: verify whether marketing URL can be linked from listing | Stage 15 | Logged YES/NO in verification log |
| R-0.4 | Decide Preview vs `squimbo.app` cutover timeline | Stage 20 open | Decision row updated |
| R-0.5 | Until cutover: keep Preview intentional as interim canonical | SRC-038 | No accidental dual-index chaos |

### Phase 1 — P0 content (first code PR after approval)

Implements Stage 12 rewrite classes. **One PR preferred** (or split home vs seo/copy if reviewability needs it).

| ID | URL | Change class | Spec | Gap |
| -- | --- | ------------ | ---- | --- |
| R-1.1 | `/en` | Meta description (+ optional entity blurb clause): Discord Activity entity first | Stage 12 §4 | KG-01, CG-01 |
| R-1.2 | `/discord-party-game` | Body: Activity ≠ slash bot; links to not-a-bot + most-likely | Stage 12 §5 | KG-02, CG-02 |
| R-1.3 | `/most-likely` | Discord-native vs web/phone-pass; keep ≤1–2 examples; link vote-in-the-dark | Stage 12 §7 | KG-06, CG-03 |
| R-1.4 | `/open-discord-activity` | Meta title branded Squimbo; defer generic UI to Discord Help; link how-to-play | Stage 12 §8 | KG-05, CG-04 |

**Files (expected):**

- `apps/web/src/i18n/messages/en.ts` (R-1.1)  
- `apps/web/src/seo/copy/discord-party-game.ts` (R-1.2)  
- `apps/web/src/seo/copy/most-likely.ts` (R-1.3)  
- `apps/web/src/seo/copy/open-discord-activity.ts` (R-1.4)  
- Possibly `docs/seo.md` if intent wording shifts  

**Tests:** `pnpm --filter @friends/web test` after copy/registry touches.  
**Do not** change registry paths/kinds unless linking arrays need a real fix (unlikely).

### Phase 2 — P1 content (second PR or same PR if small)

| ID | URL | Change class | Spec | Gap |
| -- | --- | ------------ | ---- | --- |
| R-2.1 | `/discord-activity` | Consumer “friends in voice”; zero SDK; link open-Activity | Stage 12 §6 | KG-04 |
| R-2.2 | `/discord-voice-channel-game` | Maintain JTBD; optional not-a-bot link; no listicle | Stage 12 §9 | KG-03 |
| R-2.3 | `/discord-activity-not-a-bot` | Ensure short defs + CTA; linked from party (may already be OK — diff only if thin) | Stage 11/12 guardrails | KG-08, CG-02 |
| R-2.4 | `/discord-icebreaker` | Activity + sealed icebreaker angle; no question bank | Stage 9/12 Tier 2 | KG-07 |
| R-2.5 | Cross-check FAQ hub answers vs product.md | Stage 9 | Drift |

### Phase 3 — Maintain only (no expansion)

| ID | URL | Action |
| -- | --- | ------ |
| R-3.1 | `/how-to-play` | Keep Squimbo night beats; pair with open-Activity |
| R-3.2 | `/vote-in-the-dark` | Sealed UX only; H1 must not steal format from most-likely |
| R-3.3 | players / mobile / no-host | Facts only until demand probed |
| R-3.4 | Legal/support | Out of SEO content scope unless factual error |

### Phase 4 — GEO follow-through (after Phase 1–2 copy)

| ID | Task | Source |
| -- | ---- | ------ |
| R-4.1 | Spot-check `/llms.txt` + `/llms-full.txt` on deployed host: facts, negatives, canonical | Stage 14 |
| R-4.2 | Spot-check home JSON-LD SoftwareApplication description after meta change | Stage 14–15 |
| R-4.3 | Confirm HowTo on open-Activity still matches visible steps | Stage 12 acceptance |

### Phase 5 — Off-site (operator; not a web PR)

| ID | Task | Source |
| -- | ---- | ------ |
| R-5.1 | Organic playtest mentions → Directory or `/en` | Stage 17 P1 |
| R-5.2 | Optional Product Hunt / editorial pitch — only if operator wants | Stage 17 P2 |
| R-5.3 | Log placements in `22-verification-log.md` | Stage 17 |

### Phase 6 — Deferred research (no build)

| ID | Task | Gate |
| -- | ---- | ---- |
| R-6.1 | SERP probe KG-12 (“most likely Discord Activity”) | Before any new URL consideration |
| R-6.2 | AI citation probes AI-01…04 | After index signals |
| R-6.3 | Link metrics export if tool available | Optional |
| R-6.4 | Ask Away re-verify if Cloudflare allows | Stage 7 U-C01 |
| R-6.5 | Revisit pSEO / new URLs | Only if Stage 13 revisit rules met |

---

## 4. Explicitly out of roadmap

| Item | Why |
| ---- | --- |
| New marketing URLs | Stages 9–11, 13 |
| Question banks / listicle sites | Stage 9, 13 |
| Competitor comparison pages | Policy |
| PL SEO catalog | EN-only |
| Async Friend Quiz SEO | Out of MVP |
| Wikidata/Wikipedia push | Stage 15 defer |
| PBN / mass directories | Stage 17 |

---

## 5. Suggested calendar (relative, not dates)

Volumes unknown — this is **effort order**, not a traffic forecast.

| Wave | Contents | Approx effort [HYPOTHESIS] |
| ---- | -------- | -------------------------- |
| Now | Phase 0 ops | Operator hours |
| Sprint 1 (post-approval) | Phase 1 P0 copy + Phase 4 spot-check | 1 focused copy/PR |
| Sprint 2 | Phase 2 P1 copy | 1 smaller PR |
| Ongoing | Phase 3 maintain + Phase 5 mentions | Thin |
| Later | Phase 6 research | As capacity |

---

## 6. Approval checklist (operator)

Approve **all** that should enter Stage 19, or strike items:

- [ ] Phase 0 ops (GSC / Directory / host decision process)  
- [ ] Phase 1 P0 copy (R-1.1…R-1.4) per Stage 12  
- [ ] Phase 2 P1 copy (R-2.1…R-2.5)  
- [ ] Phase 4 GEO spot-checks with copy PR  
- [ ] Phase 5 outreach (optional)  
- [ ] Confirm: **no new URLs** in this cycle  
- [ ] Confirm: interim host remains Preview until Stage 20 cutover decision  

**Approval phrase (suggested):**  
`Approve Stage 18 Phase 0+1` (or `0+1+2`) → then Stage 19 implementation plan + code.

Without approval, Stage 19 must not edit `apps/web` production copy.

---

## 7. Risks

| Risk | Mitigation |
| ---- | ---------- |
| Preview indexed then abandoned | Cutover decision R-0.4 |
| Copy invents features | Stage 12 claims list + product.md |
| Cannibalization after edits | Stage 11 ownership locks in acceptance |
| Directory/site mismatch | R-0.2, R-0.3 |

---

## 8. Stage decision

**Roadmap locked for approval:** Ops + Tier 0–1 angle rewrites on existing URLs; no inventory growth.

## Next actions

1. **Stop for approval.**  
2. On approval → **Stage 19 Implementation plan** then code for approved phases only.  
3. If “continue” without approval → Stage 19 may draft the plan checklist only, still **no code** until explicit implement/approve.
