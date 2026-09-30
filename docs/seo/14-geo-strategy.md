# 14 - GEO strategy

Date: 2026-09-30  
Depends on: Stages 1–3 (surfaces), 10–13 (cluster locks), product.md  
Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

GEO here = generative-engine / LLM-facing discoverability (llms.txt, factual mirrors, structured data), not “geographic SEO.”

---

## 1. Decision

**Keep and harden the existing GEO stack. Do not invent parallel AI-only page farms.**

| Surface | Role | Verdict |
| ------- | ---- | ------- |
| `/llms.txt` | Curated index (llmstxt.org-style) | **Keep** — mirror registry + product facts |
| `/llms-full.txt` | Expanded how + FAQ + facts | **Keep** — same truth set |
| JSON-LD | WebSite / Organization / SoftwareApplication / FAQ / HowTo / Breadcrumb | **Keep** — must match visible copy |
| Marketing HTML cluster | Human + crawler + citation source | **Primary** — GEO is a mirror, not a second product |

No new GEO-only URLs. No AI-generated prompt dumps for citation bait. [FACT] Stage 13 NO pSEO + product constraints.

---

## 2. Current state (verified)

| Item | State | Label | Source |
| ---- | ----- | ----- | ------ |
| Builders | `apps/web/src/seo/llms-content.ts` | [FACT] | SRC-028 |
| Live `/llms.txt` | 200 on Preview; includes entity blurb, pillars, guides, MVP facts, contact | [OBSERVATION] | SRC-011 |
| Live `/llms-full.txt` | Present | [OBSERVATION] | SRC-019 |
| Canonical in llms | Preview host `/en` while interim host locked | [OBSERVATION] | SRC-011; Stage 20 |
| Home JSON-LD | WebSite, Organization, SoftwareApplication, FAQPage | [OBSERVATION] | SRC-022; `page.tsx` |
| SoftwareApplication | GameApplication; OS Discord; price 0; `installUrl`/`sameAs` → Directory when play URL set | [FACT]/[OBSERVATION] | code + Stage 2 |
| Content pages | WebPage / Breadcrumb / FAQ / HowTo via SeoContentPage | [FACT] | SRC-035, docs/seo.md |
| FAQ/HowTo accuracy rule | Must match on-page copy | [FACT] | friends-seo-geo |

---

## 3. GEO principles

1. **One truth:** product.md → landing/copy → llms Product facts → JSON-LD descriptions. Drift is a defect.  
2. **Cite the Activity, not a fake web game:** facts must repeat Discord Activity, instance room, sealed most_likely, no bot / no installer / no matchmaking.  
3. **Host honesty:** `getSiteUrl()` / `NEXT_PUBLIC_SITE_URL` must equal the intended indexable host; Preview today, `squimbo.app` after cutover.  
4. **Contact real:** Support Discord + optional `NEXT_PUBLIC_SUPPORT_EMAIL` only — never invent emails.  
5. **No competitor brands** in llms or schema.  
6. **EN-only** marketing catalog.

---

## 4. Required fact block (canonical for GEO)

Must stay consistent everywhere agents/crawlers read [FACT] SRC-001:

| Attribute | Value |
| --------- | ----- |
| Name | Squimbo |
| Type | Discord Activity party game |
| Pitch | Who knows the group best? / You’re already together |
| Room | Discord Activity instance |
| Players | Min 2; ~3–8 feels best |
| Loop | Sealed most_likely → reveal → finale scores |
| Host | No in-game privileges |
| Not | Slash bot; separate installer; random matchmaking; async Friend Quiz (MVP) |
| Play | Discord Directory / Activity launch |
| Site role | Legal + SEO/GEO home; night inside Discord |

When Stage 12 meta/entity rewrites land, **update llms via message/copy sources automatically** (builders already pull `entityBlurb`, landing how-steps, FAQ). Manual fact bullets in `llms-content.ts` must be edited if product.md changes.

---

## 5. GEO improvement backlog (spec only — Stage 19)

| ID | Change | Priority | Notes |
| -- | ------ | -------- | ----- |
| GEO-01 | Ensure Product facts bullets stay aligned after any product.md change | P0 | Process |
| GEO-02 | On host cutover: `NEXT_PUBLIC_SITE_URL` so llms/sitemap/canonicals flip together | P0 ops | Stage 20 |
| GEO-03 | After Stage 12 home meta: landingDescription used in llms blockquote should carry Discord Activity entity terms | P1 | Follows on-page |
| GEO-04 | Directory URL in SoftwareApplication `sameAs`/`installUrl` remains live | P0 | Already conditional on playUrl |
| GEO-05 | Optional: add Support Discord to Organization `sameAs` if we want multi-profile graph — **only if URL stable** | P2 | Hypothesis; not required |
| GEO-06 | Do **not** add Wikidata/Wikipedia claims to schema until entities exist | P0 forbid | Stage 15 |
| GEO-07 | llms-full FAQ must track `/faq` + landing FAQ sources (already mostly wired) | P1 | Verify in implement PR |

---

## 6. What GEO will not do

| Anti-pattern | Why |
| ------------ | --- |
| Parallel “for AI” blog farm | Thin; Stage 13 |
| Claim AI citations we have not observed | Stage 16 UNKNOWN |
| Stuff keywords into llms Product facts | Corrupts trust for agents |
| Mirror Discord Help as Squimbo content | CG-04 |
| Expose secrets / JWT / Discord tokens | Security baseline |

---

## 7. Measurement (later)

| Signal | Status now |
| ------ | ---------- |
| Agents fetching `/llms.txt` | UNKNOWN (no logs analyzed) |
| AI Overview / ChatGPT / Perplexity citing Squimbo | UNKNOWN — Stage 16 |
| GSC + schema rich results | Empty / early [OBSERVATION] Stage 3 |

## Next

Stage 15 Entity strategy (brand collisions + Directory + schema identity).
