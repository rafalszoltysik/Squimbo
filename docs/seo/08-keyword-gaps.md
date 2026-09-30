# 08 - Keyword gaps

Date: 2026-09-30  
Depends on: Stages 4–7  
Rule: Volume / KD = unavailable. Gaps are evidence of **coverage / competitiveness / visibility**, not guaranteed traffic.

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Gap types used here

| Type | Meaning |
| ---- | ------- |
| VISIBILITY | Intent mapped to Squimbo URL, but Squimbo not observed in SERP |
| ANGLE | URL exists; SERP winners use a different framing Squimbo under-emphasizes |
| ENTITY | Brand/modifier queries do not resolve to Squimbo |
| UNMAPPED | Real SERP intent with no dedicated Squimbo URL (candidate only if thin-content test passes) |
| METRIC | Cannot prioritize by volume until GSC/tool data exists |
| DO-NOT-CHASE | Intent exists but wrong for product or thin/risky |

---

## 2. Gap register

| ID | Seed(s) | Type | Owned URL | Evidence | Severity | Action class |
| -- | ------- | ---- | --------- | -------- | -------- | ------------ |
| KG-01 | KW-001, KW-002, KW-003 | ENTITY + VISIBILITY | `/en` | Brand SERPs show slang / unrelated Discord; no product or Directory [OBSERVATION] SRC-059, SRC-060 | Critical | Index + entity (Directory, home disambiguation), not new URL |
| KG-02 | KW-005 | VISIBILITY | `/discord-party-game` | Category SERP active; Squimbo absent; peers Undercover/Flantic/bots [OBSERVATION] SRC-061 | High | Index + strengthen Activity-native party positioning on existing pillar |
| KG-03 | KW-009, KW-008 | VISIBILITY | `/discord-voice-channel-game` | VC games SERP has listicles/docs; Squimbo absent [OBSERVATION] SRC-063 | High | Index + “already in voice” proof |
| KG-04 | KW-006, KW-007 | ANGLE + VISIBILITY | `/discord-activity` | SERP skewed platform/docs; consumer listicles elsewhere [OBSERVATION] SRC-062 | Medium–High | Keep consumer; avoid SDK tutorial clone |
| KG-05 | KW-010, KW-011 | ANGLE | `/open-discord-activity` | Discord Support owns generic how-to [OBSERVATION] SRC-064 | High | Squimbo-specific steps only; do not chase generic rank |
| KG-06 | KW-013 | ANGLE + VISIBILITY | `/most-likely` | Web generators dominate; no Discord Activity in tool SERP [OBSERVATION] SRC-065 | High | Discord-native sealed angle; **not** question-bank SEO |
| KG-07 | KW-018, KW-017 | VISIBILITY + ANGLE | `/discord-icebreaker` | Bot-heavy + Ask Away-class [OBSERVATION] SRC-066 | Medium | Activity ≠ bot + sealed most-likely icebreaker |
| KG-08 | KW-023, KW-022 | VISIBILITY | `/discord-activity-not-a-bot` | Educational SERP exists; Squimbo absent [OBSERVATION] SRC-067 | Medium | Tie definitions to play CTA |
| KG-09 | KW-015, KW-016 | METRIC + UNMAPPED demand | `/vote-in-the-dark` | Differentiator phrase; SERP demand UNKNOWN (not probed deeply) | Low–Medium | Keep page; do not expand cluster until probe |
| KG-10 | KW-012, KW-024, KW-025 | ENTITY-dependent | how-to / faq / support | Brand awareness weak → navigational demand weak [INFERENCE] | Medium | Follows KG-01 |
| KG-11 | KW-004 | METRIC | `/en` | Pitch phrase demand UNKNOWN | Low | No dedicated new URL |
| KG-12 | — | UNMAPPED candidate | none | “Discord Activity most likely” / “most likely Discord Activity” exact strings not systematically probed | UNKNOWN | Stage 5 follow-up probe before any new page |
| KG-13 | — | DO-NOT-CHASE | — | Generic most-likely question lists | [OBSERVATION] SERP + product forbid bank copy | Do not create |
| KG-14 | — | DO-NOT-CHASE | — | Competitor brand comparison URLs | Skill: no competitor brands in marketing without decision | Do not create unless strategy unlocks |
| KG-15 | — | DO-NOT-CHASE | — | Polish keyword catalog | EN-only marketing [FACT] SRC-002 | Defer |
| KG-16 | — | DO-NOT-CHASE | — | Async “how well do you know me” quiz SEO | Out of MVP [FACT] SRC-001 | Defer |
| KG-17 | Bot-only party queries | DO-NOT-CHASE as primary | — | Spikey/Gamebot own slash-bot nights | Verified bots SRC-073, SRC-074 | Compete on Activity clarity, not bot feature parity |
| KG-18 | All seeds | METRIC | — | Volume/KD unavailable; GSC empty | Stage 3–4 | Wait for index + GSC queries |

---

## 3. Coverage check: registry vs evidence

| Registry intent | Seed coverage | SERP evidence | Gap verdict |
| --------------- | ------------- | ------------- | ----------- |
| Brand home | KW-001–004 | Hostile brand SERP | KG-01 |
| Discord party game | KW-005 | Real SERP, Squimbo missing | KG-02 |
| Discord Activity | KW-006–007 | Real, docs-heavy | KG-04 |
| How to play | KW-012 | Brand-gated | KG-10 |
| Most likely | KW-013–014 | Real web SERP | KG-06 |
| Open Activity | KW-010–011 | Discord-owned | KG-05 |
| Voice channel game | KW-008–009 | Real SERP | KG-03 |
| Vote in the dark | KW-015–016 | Weak evidence | KG-09 |
| Players | KW-020 | Unprobed | Metric unknown |
| Mobile | KW-019 | Unprobed | Metric unknown |
| No host | KW-021 | Unprobed | Metric unknown |
| Icebreaker | KW-017–018 | Real SERP | KG-07 |
| Not a bot | KW-022–023 | Real SERP | KG-08 |

[INFERENCE] Primary gap is **not missing URLs**. It is **visibility (index/entity)** plus **angle** on pages that already exist.

---

## 4. Competitor keyword space (no volumes)

| Competitor class | Queries they likely absorb | Squimbo response |
| ---------------- | -------------------------- | ---------------- |
| Discord official | how to open Activity, Discord Activities | Squimbo-specific how-to; consumer Activity pillar |
| Activity peers (Undercover, Flantic Arcade) | Discord party game, voice games | Same SERPs; different mechanic proof |
| Bots (Spikey, Gamebot) | Discord party / server games | Activity≠bot guide + party pillar |
| Web most-likely | most likely to party game | Discord-native sealed; not question SEO |
| Icebreaker bots / Ask Away | Discord icebreaker | Activity sealed most-likely icebreaker |

Sources: Stages 5–7.

---

## 5. Prioritized gap workstreams (research priority ≠ traffic)

1. **Entity + index** (KG-01, KG-18) — unlocks brand and all navigational seeds.  
2. **Category visibility** (KG-02, KG-03) — Discord party / voice.  
3. **Mechanic angle** (KG-06) — most-likely Discord-native.  
4. **Procedural restraint** (KG-05) — Squimbo-only how-to.  
5. **Differentiation** (KG-07, KG-08) — icebreaker + not a bot.  
6. **Probe before build** (KG-09, KG-12, players/mobile/no-host).  

---

## 6. Unknowns

| ID | Unknown |
| -- | ------- |
| U-KG01 | Which seeds get impressions after indexation |
| U-KG02 | Exact-match demand for “most likely Discord Activity” |
| U-KG03 | Whether Directory page can rank for KW-002/003 |

## Next

Stage 9 Content gaps (page-level unique value / thin risks / no new pages unless test passes).
