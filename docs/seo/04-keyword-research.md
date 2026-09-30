# 04 - Keyword research

Date: 2026-09-30  
Host context: Preview interim; indexation not observed yet (Stage 3)  
Metrics rule: **Volume / KD / CPC / impressions = unavailable** unless a tool or GSC export is added later. Do not invent numbers.

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Method

| Step | What we did | Label |
| ---- | ----------- | ----- |
| Seed from product + existing SEO map | `docs/product.md`, `docs/seo.md`, registry intents | [FACT] SRC-001, SRC-002 |
| Classify intent | Navigational / commercial-investigational / informational / transactional | [INFERENCE] |
| Map to owned URL | Registry paths under `/en` | [FACT] SRC-008 |
| Light SERP probe | Live web search for selected seeds (2026-09-30) | [OBSERVATION] SRC-049…SRC-057 |
| Quantify demand | Not done | Volume: unavailable |

SERP probes prove **existence and rough shape** of results, not search volume.

Deep ranking / competitor page inventory is Stage 5.

---

## 2. Intent clusters (working)

```text
A. Brand / entity
B. Discord party / Activities (platform + category)
C. How-to launch / play (procedural)
D. Most likely format (mechanic)
E. Session fit (players, voice, icebreaker, no host, not a bot)
F. Support / legal (low SEO priority)
```

---

## 3. Seed keyword table

Columns:

- **Vol** = unavailable  
- **KD** = unavailable  
- **SERP signal** = qualitative from Stage 4 probes only  
- **Priority** = research priority for later stages, not traffic forecast

| ID | Seed query | Cluster | Intent type | Owned URL | Vol | KD | SERP signal (2026-09-30) | Priority | Notes |
| -- | ---------- | ------- | ----------- | --------- | --- | -- | ------------------------ | -------- | ----- |
| KW-001 | Squimbo | A | Navigational (desired) | `/en` | unavailable | unavailable | Product absent; slang / Urban Dictionary / unrelated profiles dominate | High (brand defense) | [OBSERVATION] SRC-057 |
| KW-002 | Squimbo Discord | A | Navigational | `/en` | unavailable | unavailable | Not separately probed this stage | High | Inherit brand collision risk [HYPOTHESIS] |
| KW-003 | Squimbo Discord Activity | A | Navigational | `/en` | unavailable | unavailable | Earlier Stage 3 brand probe: no product hit | High | SRC-046 |
| KW-004 | who knows the group best | A | Brand phrase / informational | `/en` | unavailable | unavailable | Not probed | Medium | Pitch phrase [FACT] SRC-001; demand UNKNOWN |
| KW-005 | Discord party game | B | Commercial / investigational | `/en/discord-party-game` | unavailable | unavailable | Active SERP: Activities, third-party Activities (e.g. undercover.gg, Flantic docs), bots/GitHub mix | High | [OBSERVATION] SRC-049 |
| KW-006 | Discord Activities | B | Informational / category | `/en/discord-activity` | unavailable | unavailable | Strong platform/docs presence in probe | High | [OBSERVATION] SRC-052; Squimbo absent |
| KW-007 | Discord Activity games | B | Commercial / investigational | `/en/discord-activity` | unavailable | unavailable | Not probed as exact string | Medium | Related to KW-006 [INFERENCE] |
| KW-008 | play games in Discord voice | B | Informational / commercial | `/en/discord-voice-channel-game` | unavailable | unavailable | Related probe `Discord voice channel games` shows Activities + bots | High | [OBSERVATION] SRC-053 |
| KW-009 | Discord voice channel games | B | Informational / commercial | `/en/discord-voice-channel-game` | unavailable | unavailable | Activities + bot/npm/docs mix | High | SRC-053 |
| KW-010 | how to open Discord Activity | C | Informational / procedural | `/en/open-discord-activity` | unavailable | unavailable | Official Discord support/docs dominate | High | [OBSERVATION] SRC-050 |
| KW-011 | how to start Discord Activity | C | Informational / procedural | `/en/open-discord-activity` | unavailable | unavailable | Not probed; likely overlaps KW-010 | Medium | [HYPOTHESIS] |
| KW-012 | how to play Squimbo | C | Navigational / procedural | `/en/how-to-play` | unavailable | unavailable | Depends on brand awareness; brand SERP weak | Medium | [INFERENCE] from KW-001 |
| KW-013 | most likely to party game | D | Commercial / informational | `/en/most-likely` | unavailable | unavailable | Strong **web/browser party game** SERP (PartyPlay, generators, App Store); not Discord-native | High | [OBSERVATION] SRC-051 |
| KW-014 | who's most likely to game | D | Informational | `/en/most-likely` | unavailable | unavailable | Not probed exactly; related "who is most likely to Discord game" **mismatched** to demographics | Medium | Bad query form SRC-056 |
| KW-015 | vote in the dark party game | D | Informational | `/en/vote-in-the-dark` | unavailable | unavailable | Not probed | Medium | Product differentiator phrase [FACT] marketing; demand UNKNOWN |
| KW-016 | sealed vote party game | D | Informational | `/en/vote-in-the-dark` | unavailable | unavailable | Not probed | Low–Medium | Demand UNKNOWN |
| KW-017 | Discord icebreaker | E | Informational / commercial | `/en/discord-icebreaker` | unavailable | unavailable | Probe `Discord icebreaker game`: bots + Ask Away Activity + WYR bots | Medium–High | [OBSERVATION] SRC-054 |
| KW-018 | Discord icebreaker game | E | Commercial | `/en/discord-icebreaker` | unavailable | unavailable | Same as above | Medium–High | SRC-054 |
| KW-019 | Discord Activity mobile | E | Informational | `/en/discord-activity-mobile` | unavailable | unavailable | Not probed; Discord blog claims mobile Activities exist | Medium | Demand UNKNOWN; platform claim [FACT] SRC-012 |
| KW-020 | Discord party game how many players | E | Informational | `/en/discord-party-game-players` | unavailable | unavailable | Not probed | Medium | Product fact min 2 / ~3–8 [FACT] SRC-001 |
| KW-021 | party game no host | E | Informational | `/en/no-host-party-game` | unavailable | unavailable | Not probed | Low–Medium | Differentiator; demand UNKNOWN |
| KW-022 | Discord Activity not a bot | E | Informational | `/en/discord-activity-not-a-bot` | unavailable | unavailable | Related `Discord Activity vs bot` has explanatory SERP | Medium | [OBSERVATION] SRC-055 |
| KW-023 | Discord Activity vs bot | E | Informational | `/en/discord-activity-not-a-bot` | unavailable | unavailable | Apps vs bots explainers + Discord docs | Medium | SRC-055 |
| KW-024 | Squimbo FAQ | F | Navigational | `/en/faq` | unavailable | unavailable | Brand-dependent | Low | |
| KW-025 | Squimbo support | F | Navigational | `/en/support` | unavailable | unavailable | Brand-dependent | Low | |

---

## 4. Mapping: owned pages ↔ primary seeds

| URL | Primary seed IDs | Role |
| --- | ---------------- | ---- |
| `/en` | KW-001…KW-004 | Brand home |
| `/en/discord-party-game` | KW-005 | Category pillar |
| `/en/discord-activity` | KW-006, KW-007 | Platform pillar |
| `/en/how-to-play` | KW-012 | Product how-to pillar |
| `/en/most-likely` | KW-013, KW-014 | Mechanic pillar |
| `/en/faq` | KW-024 | Hub |
| `/en/open-discord-activity` | KW-010, KW-011 | Procedural guide |
| `/en/discord-voice-channel-game` | KW-008, KW-009 | Voice-context guide |
| `/en/vote-in-the-dark` | KW-015, KW-016 | Mechanic guide |
| `/en/discord-party-game-players` | KW-020 | Players guide |
| `/en/discord-activity-mobile` | KW-019 | Mobile guide |
| `/en/no-host-party-game` | KW-021 | Host-model guide |
| `/en/discord-icebreaker` | KW-017, KW-018 | Icebreaker guide |
| `/en/discord-activity-not-a-bot` | KW-022, KW-023 | Differentiation guide |

Registry already covers these intents [FACT] SRC-002. No new URL proposed in Stage 4.

---

## 5. Findings (evidence-based)

### 5.1 Brand cluster is hostile

[OBSERVATION] Query `Squimbo` surfaces slang definitions and unrelated entities, not the Discord Activity (SRC-057).  

[INFERENCE] Brand SEO will need entity disambiguation (Discord Directory + clear "Discord Activity party game" modifiers), not just the bare name.

### 5.2 Category / platform intents are real SERPs

[OBSERVATION] `Discord party game`, `Discord Activities`, `Discord voice channel games` return multi-result SERPs mixing official Discord content, third-party Activities, and bots (SRC-049, SRC-052, SRC-053).  

[INFERENCE] Squimbo has a logical place in these SERPs once indexed, competing with Activities and bots that are **not** the same product type (Stage 6–7).

### 5.3 Procedural "open Activity" is owned by Discord Help

[OBSERVATION] `how to open Discord Activity` is dominated by Discord support / docs (SRC-050).  

[INFERENCE] Squimbo's `/open-discord-activity` should add **Squimbo-specific** steps (find Squimbo, authorize, same voice room) rather than try to outrank Discord's generic how-to alone. Unique value test still required in Stage 5/9.

### 5.4 "Most likely" demand exists off Discord

[OBSERVATION] `most likely to party game` SERP is crowded with browser/phone party sites and apps (SRC-051).  

[INFERENCE] Opportunity angle: **most likely as a Discord Activity for people already in voice**, not another one-phone web generator. Cannibalization risk if Squimbo pages sound like generic generators without Discord-native proof.

### 5.5 Icebreaker SERP is bot-heavy

[OBSERVATION] `Discord icebreaker game` mixes slash bots and at least one Activity-style product (Ask Away) (SRC-054).  

[INFERENCE] Differentiation "Activity, not a bot" (KW-022/023) supports this cluster.

### 5.6 Metrics gap

Volume: unavailable.  
KD: unavailable.  
GSC queries: unavailable (property empty, Stage 3).  

Priority column is **research sequencing only** [HYPOTHESIS], not claimed traffic potential.

---

## 6. Candidate queries NOT to build pages for yet

Do not create pages until Stage 5 SERP + thin-content tests pass.

| Candidate | Why parked | Label |
| --------- | ---------- | ----- |
| Generic "most likely to questions list" banks | High duplicate/thin risk vs existing free generators; product forbids copying banks | [INFERENCE] + product rules SRC-001 |
| Jackbox / competitor brand comparisons | Requires verified competitor facts; brand naming restricted in marketing skill unless strategy opens it | [FACT] friends-seo-geo MUST NOT name competing brands in site copy without later decision |
| Polish keyword cluster | Marketing site EN-only | [FACT] SRC-002 |
| Async "how well do you know me" | Out of MVP product scope | [FACT] SRC-001, SRC-003 |

---

## 7. Negative / mismatch queries

| Query tried | Outcome | Lesson |
| ----------- | ------- | ------ |
| `who is most likely to Discord game` | Demographics / Discord gamer articles | Phraseology matters; keep "most likely to" + "party game" or Discord Activity modifiers (SRC-056) |

---

## 8. Unknowns

| ID | Unknown | Needed |
| -- | ------- | ------ |
| U-K01 | Search volume for all seeds | GSC (after index) or keyword tool export |
| U-K02 | Keyword difficulty / competition scores | Same |
| U-K03 | Exact SERP features (AI Overviews, PAA, video) per query | Stage 5 live SERP captures |
| U-K04 | Whether brand+Discord modifiers already show Directory | Fresh branded SERP with Discord qualifier screenshots |
| U-K05 | Non-English demand | Out of scope while site is EN-only |

---

## 9. Assumptions

| ID | Assumption | Label |
| -- | ---------- | ----- |
| A-K01 | Existing registry intents remain the right primary map until SERP proves otherwise | [HYPOTHESIS] |
| A-K02 | Category/platform queries matter more than bare brand until entity footprint improves | [INFERENCE] |
| A-K03 | Web search tool results approximate Google SERP shape but are not a full SERP archive | [FACT] of method limits |

---

## 10. Next actions

1. Stop (execution protocol).
2. On continue: **Stage 5 SERP research** for priority seeds KW-001, KW-005, KW-006, KW-009, KW-010, KW-013, KW-018, KW-023 (capture who ranks, content types, gaps).
3. Optional: paste any GSC query rows if they appear later → update Vol column from real data only.
