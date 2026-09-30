# 09 - Content gaps

Date: 2026-09-30  
Depends on: Stages 1–8  
Rule: Prefer fixing **existing** registry pages over new URLs. New pages must pass the six-point thin-content test.

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Six-point test (applied to any proposed page)

1. Real search intent?  
2. SERP confirms intent?  
3. Unique value Squimbo can offer?  
4. Not duplicate/thin vs own or others’ pages?  
5. Logical product link?  
6. Path to play (Discord CTA)?  

Fail any → **DO NOT CREATE PAGE**.

---

## 2. Existing URL audit (gap lens)

Status of live copy quality beyond meta was not line-edited this stage. Gaps below are **strategic content gaps** from SERP + competitor evidence vs stated page jobs (`docs/seo.md` + registry).

| URL | Job | Content gap | Evidence | Priority | Proposed fix class |
| --- | --- | ---------- | -------- | -------- | ------------------ |
| `/en` | Brand + pitch | Entity disambiguation vs slang “Squimbo”; hard Discord Activity party definition above the fold | SRC-059 brand SERP | P0 | Strengthen entity blurb + Directory CTA; no new URL |
| `/en/discord-party-game` | Category pillar | Must explicitly separate Activity party games from slash bots; prove Squimbo’s sealed most-likely loop | SRC-061 mix; Stage 7 bots vs Activities | P0 | On-page angle + internal links to not-a-bot / most-likely |
| `/en/discord-activity` | Platform pillar | Stay player-facing; avoid losing to developer docs SERP | SRC-062 | P1 | Consumer “what/why for voice friends”; link Directory |
| `/en/most-likely` | Mechanic pillar | Differentiate from web one-phone generators; stress Discord-native sealed tallies + finale | SRC-065, C-08, C-09 | P0 | Angle rewrite focus (not question dump) |
| `/en/vote-in-the-dark` | Sealed mechanic guide | Demand UNKNOWN; ensure unique vs `/most-likely` (format vs sealed UX) | Skill cannibalization note; KG-09 | P1 | Clear split: sealed UX vs format definition |
| `/en/how-to-play` | Product how-to | Brand-gated; must remain Squimbo loop not generic Discord | KG-10 | P1 | Keep Squimbo-specific beats |
| `/en/open-discord-activity` | Procedural | Generic how-to owned by Discord | SRC-064 | P0 | Only Squimbo find/authorize/Ready path; cite Discord for generic UI |
| `/en/discord-voice-channel-game` | Voice job | Compete with listicles; emphasize co-located voice group job | SRC-063 | P1 | “Already together” JTBD |
| `/en/discord-icebreaker` | Icebreaker | Bot-heavy SERP; Ask Away-class Activity exists | SRC-066; C-06 partial | P1 | Activity + sealed most-likely icebreaker |
| `/en/discord-activity-not-a-bot` | Differentiation | Educational SERP exists | SRC-067 | P1 | Short definitions + CTA; not glossary-only |
| `/en/discord-party-game-players` | Players | SERP demand unprobed | KW-020 | P2 | Keep factual min 2 / ~3–8; probe later |
| `/en/discord-activity-mobile` | Mobile | Demand unprobed | KW-019 | P2 | Keep platform facts only |
| `/en/no-host-party-game` | Host model | Demand unprobed | KW-021 | P2 | Keep; low expansion |
| `/en/faq` | Hub | Fine as hub; brand-gated discovery | — | P2 | Align answers with product.md |
| `/llms.txt` + `/llms-full.txt` | GEO | Canonical currently Preview host | Stage 2 | P0 ops | Env/canonical when host strategy changes |
| Discord App Directory listing | Distribution copy | UI language claim vs product UI en+pl mismatch noted Stage 2 | SRC-036 | P1 | Align Directory copy with product facts |

---

## 3. Cross-cutting content gaps

| ID | Gap | Label | Why it matters |
| -- | --- | ----- | -------------- |
| CG-01 | Squimbo not treated as an indexable entity in search | [OBSERVATION] | Blocks brand + navigational content ROI |
| CG-02 | Insufficient “Activity ≠ bot ≠ web generator” triangulation on category pages | [INFERENCE] | SERPs mix all three (Stages 5–7) |
| CG-03 | Most-likely pages risk sounding like generic generators | [INFERENCE] | Would lose unique value test vs C-08/C-09 |
| CG-04 | Open-Activity guide risks duplicating Discord Help | [INFERENCE] | Fail unique value if generic |
| CG-05 | No competitor brand callouts on marketing (by skill) | [FACT] friends-seo-geo | Compare on **mechanics/platform**, not named rivals, unless strategy unlocks |
| CG-06 | GEO/llms facts must stay product-accurate | [FACT] | Already a system rule |
| CG-07 | Preview canonical / sitemap crawler discrepancy | [OBSERVATION] | Indexation/content delivery risk |

---

## 4. Proposed NEW pages — thin-content gate

| Candidate topic | Intent? | SERP? | Unique value? | Thin risk? | Product link? | CTA? | Verdict |
| --------------- | ------- | ----- | ------------- | ---------- | ------------- | ---- | ------- |
| Most likely question list / 100 questions | Weak product fit | Yes (generators) | No (commodity) | Extreme | Weak | Weak | **DO NOT CREATE** |
| Jackbox vs Squimbo | Maybe | UNKNOWN | Risky + brand naming | High | Medium | Medium | **DO NOT CREATE** (policy + unverified) |
| Undercover vs Squimbo | Maybe | UNKNOWN | Needs verified competitor + naming policy | High | Medium | Medium | **DO NOT CREATE** now |
| “Most likely Discord Activity” dedicated URL | Possible | UNDER-PROBED (KG-12) | Possible if distinct from `/most-likely` + `/discord-activity` | Medium cannibalization | Yes | Yes | **HOLD** — probe SERP first |
| Polish locale SEO pages | Yes PL users | UNKNOWN | Site EN-only | N/A | Partial | Partial | **DO NOT CREATE** until PL catalog |
| Async Friend Quiz SEO | Future product | UNKNOWN | Out of MVP | High premature | No MVP | No | **DO NOT CREATE** |
| Best Discord party games 2026 listicle | Yes | Yes | Low originality; thin/affiliate pattern | High | Weak | Weak | **DO NOT CREATE** without unique research bar |
| How to open Discord Activity (generic) | Yes | Yes (Discord owns) | No vs Discord Help | High | Weak | Weak | **DO NOT CREATE** (guide exists; keep Squimbo-specific) |

**Net:** Stage 9 does **not** approve any new marketing URL.

---

## 5. Cannibalization watchlist

| Pair | Risk | Mitigation |
| ---- | ---- | ---------- |
| `/most-likely` vs `/vote-in-the-dark` | Format vs sealed mechanic blur | Explicit job split in H1/lead |
| `/discord-activity` vs `/discord-party-game` | Platform vs party category blur | Platform = what Activity is; party = social game job |
| `/how-to-play` vs `/open-discord-activity` | Loop vs launcher | How-to = night beats; open = shelf/authorize |
| `/discord-icebreaker` vs `/most-likely` | Overlap social reveal | Icebreaker = session purpose; most-likely = mechanic |

[INFERENCE] from registry design + friends-seo-geo skill.

---

## 6. Content roadmap inputs (not implementation)

Ordered for later Stage 18 (approval still required before code):

1. P0 entity/home + Directory alignment.  
2. P0 party pillar + most-likely Discord-native angle.  
3. P0 open-Activity Squimbo-only procedural.  
4. P1 voice / icebreaker / not-a-bot / activity consumer pillar.  
5. P2 players / mobile / no-host — maintain only until demand probed.  
6. No new URLs until KG-12 probe or new SERP evidence.

---

## 7. Unknowns

| ID | Unknown |
| -- | ------- |
| U-CG01 | On-page copy gaps vs ideal angle (needs editorial pass against live Preview pages) |
| U-CG02 | AI Overview citation gaps (Stage 14–16) |
| U-CG03 | Ask Away content overlap on “who knows you best” (C-06 partial) |

## Next actions

1. Stop.  
2. Continue → **Stage 10 Topical map** then **11 Information architecture** (likely affirm registry with gap-driven emphasis).  
3. Implementation only after strategy stages + approval.
