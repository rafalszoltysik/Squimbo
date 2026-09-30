# 10 - Topical map

Date: 2026-09-30  
Depends on: Stages 1–9  
Decision: **Affirm existing cluster.** No new topics approved for URL creation. Emphasis tiers reflect gap severity, not invented volumes.

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Topic hierarchy

```text
ENTITY: Squimbo
  = Discord Activity party game
  = sealed most_likely among friends already in voice
  = not a slash bot, not a web phone-pass generator, not matchmaking

PILLARS (primary intents)
  ├── Discord party game          [category / commercial]
  ├── Discord Activity            [platform / consumer]
  ├── How to play Squimbo         [product procedural]
  └── Most likely                 [mechanic]

HUB
  └── FAQ

GUIDES (long-tail under pillars)
  party  → voice channel · players · icebreaker · no host
  activity → open Activity · mobile · not a bot · voice channel
  how-to → open Activity · vote in the dark · players · no host
  most-likely → vote in the dark · icebreaker · players

SUPPORT / LEGAL (trust, low SEO priority)
  support · privacy · terms

GEO MIRROR
  llms.txt / llms-full.txt  (facts + same URL set)
```

Source of routes: registry [FACT] SRC-008. Product definition [FACT] SRC-001.

---

## 2. Topic nodes (owned URLs)

| Topic node | URL | Parent | Primary job | Gap IDs | Emphasis |
| ---------- | --- | ------ | ----------- | ------- | -------- |
| Squimbo entity / home | `/en` | — | Who we are; Discord Activity party; CTA Directory | KG-01, CG-01 | **Tier 0** |
| Discord party game | `/en/discord-party-game` | Entity | What a Discord party game is; why Squimbo | KG-02, CG-02 | **Tier 1** |
| Discord Activity | `/en/discord-activity` | Entity | Consumer what/why Activity (not SDK) | KG-04 | **Tier 1** |
| Most likely | `/en/most-likely` | Entity | Discord-native sealed most_likely | KG-06, CG-03 | **Tier 1** |
| How to play | `/en/how-to-play` | Entity | Squimbo night beats | KG-10 | **Tier 2** |
| FAQ | `/en/faq` | Entity | Q&A hub | — | Tier 2 |
| Open Discord Activity | `/en/open-discord-activity` | Activity / How-to | Squimbo-specific launch | KG-05, CG-04 | **Tier 1** |
| Voice channel game | `/en/discord-voice-channel-game` | Party / Activity | Already-in-voice JTBD | KG-03 | **Tier 1** |
| Vote in the dark | `/en/vote-in-the-dark` | Most likely / How-to | Sealed tallies UX | KG-09 | Tier 2 |
| Icebreaker | `/en/discord-icebreaker` | Party / Most likely | Short voice icebreaker | KG-07 | Tier 2 |
| Not a bot | `/en/discord-activity-not-a-bot` | Activity | Activity ≠ bot + CTA | KG-08, CG-02 | Tier 2 |
| Players | `/en/discord-party-game-players` | Party / How-to | Min 2 / ~3–8 | — | Tier 3 |
| Mobile | `/en/discord-activity-mobile` | Activity | Desktop + mobile Discord | — | Tier 3 |
| No host | `/en/no-host-party-game` | Party / How-to | No in-game host privileges | — | Tier 3 |
| Support / Privacy / Terms | `/en/support` etc. | Trust | Ops / legal | — | Tier 3 |

Emphasis tiers: editorial/SEO investment order after indexation [INFERENCE], not traffic ranks.

---

## 3. Topic relationships (semantic)

| From topic | Relates to | Why |
| ---------- | ---------- | --- |
| Entity | All pillars | Brand → intent landings |
| Party game | Activity, Most likely, Voice, Not a bot | Category mixes bots/Activities in SERP [OBSERVATION] |
| Activity | Open, Mobile, Not a bot, Voice | Platform understanding + launch |
| Most likely | Vote in dark, Icebreaker, Players | Mechanic + sealed UX + session use |
| How to play | Open, Vote in dark, Players, No host | Procedural completeness |
| Icebreaker | Party, Most likely, Vote in dark | Use-case without becoming question bank |

---

## 4. Out-of-map topics (explicitly excluded)

| Topic | Reason | Label |
| ----- | ------ | ----- |
| Question banks / “100 most likely questions” | Thin + product forbids copying banks | [FACT]/[INFERENCE] Stage 9 |
| Competitor brand comparison pages | Naming policy + unverified need | Stage 9 |
| Async Friend Quiz / how well do you know me | Out of MVP | [FACT] SRC-001 |
| Polish SEO catalog | EN-only site | [FACT] SRC-002 |
| Bot feature parity guides | Wrong surface | Stage 7 |
| Best Discord party games listicle | Thin listicle risk | Stage 9 |
| “Most likely Discord Activity” as new URL | HOLD pending SERP probe KG-12 | Stage 9 |

---

## 5. Entity attributes to reinforce on-map (GEO + on-page)

Must stay consistent with product.md [FACT] SRC-001:

- Name: Squimbo  
- Type: Discord Activity party game  
- Room: Activity instance  
- Mechanic: sealed most_likely → reveal → finale scores  
- Players: min 2; sweet spot ~3–8  
- Host: no in-game privileges  
- Not: slash bot, separate installer, random matchmaking, offline claim  

Brand SERP needs these attributes to disambiguate slang [OBSERVATION] SRC-059.

---

## 6. External topic nodes (not owned, linked via CTA)

| Node | Role | Source |
| ---- | ---- | ------ |
| Discord App Directory (Squimbo app) | Play / install discovery | SRC-036 |
| Discord Help (generic Activity launch) | Canonical generic how-to | SRC-064 |
| Support Discord | Human support | SRC-009 |

Do not try to replace Discord Help for generic “how to open an Activity.” [INFERENCE] KG-05.

---

## 7. Success signals for the map (later measurement)

| Signal | Status now |
| ------ | ---------- |
| URLs indexed | Not observed [OBSERVATION] Stage 3 |
| Brand query → Squimbo entity | Fail [OBSERVATION] |
| Category query → Squimbo URL in SERP | Fail [OBSERVATION] |
| GSC queries by cluster | Unavailable |

---

## 8. Next

Stage 11 Information architecture: navigation, linking rules, footer, llms mirror, cannibalization locks.
