# 13 - Programmatic SEO

Date: 2026-09-30  
Depends on: Stages 8–12 (gaps, map, IA, on-page)  
Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Definition used here

**Programmatic SEO (pSEO)** = generating many similar URLs from templates/data (question lists, city/locale matrices, “X vs Y”, “best of”, prompt dumps, auto-FAQ sprawl) where uniqueness is thin and differentiation is mostly string substitution.

This is **not**:

- The existing curated registry cluster (hand-owned pillars/guides) [FACT] SRC-008  
- Editorial angle rewrites on those URLs (Stage 12)  
- GEO mirrors (`llms.txt` / `llms-full.txt`) that index the same curated set  

---

## 2. Decision

**Do not ship programmatic SEO for Squimbo marketing.**

| Lock | Value |
| ---- | ----- |
| Verdict | **NO pSEO** |
| New URL classes from templates | **Forbidden** until this decision is explicitly revisited |
| Existing registry | Keep curated; improve angles (Stage 12), not multiply pages |
| Revisit trigger | Only with new SERP evidence + six-point thin-content pass (Stage 9) + user approval |

Recorded for Stage 20: same lock.

---

## 3. Why (evidence, not vibes)

| Reason | Evidence | Label |
| ------ | -------- | ----- |
| Primary gaps are index/entity/angle, not missing URL inventory | Stages 3, 8–9: Squimbo absent from SERPs; registry already maps intents | [OBSERVATION]/[INFERENCE] |
| Stage 9 thin-content gate rejected commodity page classes | Question banks, listicles, generic Help clones, PL matrix, async quiz SEO | [FACT] Stage 9 §4 |
| Product forbids copying third-party question banks | product.md / friends-seo-geo | [FACT] SRC-001 |
| Most-likely SERP is web-generator dominated | Chasing bank SEO loses unique-value test | [OBSERVATION] SRC-065; CG-03 |
| Competitor naming policy | Comparison grids (“X vs Squimbo”) not unlocked | friends-seo-geo |
| Marketing is EN-only | Locale/folder programmatic expansion blocked | [FACT] SRC-002 |
| No volume/KD to justify scale | GSC empty; metrics unavailable | [OBSERVATION] Stages 3–4 |
| Indexation not proven | Multiplying URLs before entity/index works dilutes crawl/quality risk | [INFERENCE] Stage 3 |

**Net:** pSEO would optimize the wrong problem.

---

## 4. Candidate pSEO patterns — gate results

Apply Stage 9 six-point test. Fail any → reject.

| Pattern | Example URLs | Intent? | SERP? | Unique Squimbo value? | Thin risk? | Product link? | CTA? | Verdict |
| ------- | ------------ | ------- | ----- | --------------------- | ---------- | ------------- | ---- | ------- |
| Question-bank / “N most likely prompts” | `/most-likely/who-is-most-likely-to-…` × N | Commodity | Yes (generators) | No | Extreme | Weak (bank ≠ Activity) | Weak | **REJECT** |
| Prompt-tag / theme matrices | `/most-likely/gaming`, `/dating`, … | Maybe | UNKNOWN | Weak (MVP has no pack picker) | High | Contradicts MVP “no packs” | Medium | **REJECT** [FACT] SRC-001 |
| “Best Discord party games 20XX” listicles | `/best-discord-party-games` | Yes | Yes | Low originality | High | Weak | Weak | **REJECT** |
| Competitor comparison factory | `/vs/undercover`, `/vs/spikey`, … | Maybe | UNKNOWN | Policy + verification | High | Medium | Medium | **REJECT** now |
| Locale programmatic (PL/EN×path) | `/pl/...` SEO catalog | Partial | UNKNOWN | Site EN-only | N/A | Partial | Partial | **REJECT** until PL catalog |
| Generic Activity how-to variants | `/how-to-open-activity-desktop`, `-mobile`, `-linux`… | Yes | Discord owns | No vs Help | High | Weak | Weak | **REJECT** |
| Player-count / niche long-tail spam | `/discord-party-game-4-players`, `-5-…` | Weak | UNKNOWN | Facts already on one guide | Extreme | Thin | Weak | **REJECT** |
| Icebreaker synonym sprawl | dozens of near-duplicate icebreaker URLs | Weak | Bot-heavy | One guide enough | High | Weak | Weak | **REJECT** |
| Single HOLD (not programmatic) | One “most likely Discord Activity” URL | Possible | Under-probed KG-12 | Only if distinct from two pillars | Medium | Yes | Yes | **HOLD** — one editorial page max after SERP probe; **not** a template set |

---

## 5. What we do instead

| Priority | Action | Stage |
| -------- | ------ | ----- |
| 1 | Indexation + entity (GSC, Directory, host strategy) | 3 ops + 15 entity |
| 2 | On-page angle rewrites Tier 0–1 | 12 → 18 → 19 |
| 3 | Curated guides only if new intent passes thin-content test | 9 + 18 |
| 4 | GEO accuracy on existing URL set | 14–16 |
| 5 | Backlinks / citations quality | 17 |

No sitemap inflation via generated paths. No auto-generated FAQ silos beyond the existing hub.

---

## 6. Guardrails (engineering / content)

If someone proposes “scale SEO pages” later:

1. Must cite new SERP observation in `21-source-registry` / `22-verification-log`.  
2. Must pass Stage 9 six-point test in writing.  
3. Must not duplicate Stage 11 ownership locks.  
4. Must not ship prompt banks or competitor brand grids without explicit product/strategy unlock.  
5. Prefer editing an existing registry URL over adding one.  
6. User approval required before registry growth.

---

## 7. Unknowns

| ID | Unknown |
| -- | ------- |
| U-PS01 | Whether KG-12 probe ever justifies **one** editorial URL (still not pSEO) |
| U-PS02 | Future category packs (roadmap) — still would need unique value per URL, not a thin matrix |
| U-PS03 | Post-index GSC query data that might surface long-tail — evaluate then, do not pre-build |

---

## 8. Stage decision summary

**Programmatic SEO: NO.**  
Curated cluster + angle + index/entity remain the system.

## Next actions

1. Stop.  
2. Continue → **Stages 14–16** (GEO strategy, entity strategy, AI citability).  
3. Implementation still blocked on roadmap + approval.
