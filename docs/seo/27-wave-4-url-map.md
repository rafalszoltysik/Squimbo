# 27 - Wave 4 URL map (curated long-tail)

Date: 2026-09-30  
**Operator directive:** Plan + implement a larger SEO URL inventory (not 2–5 pages). Indexation deferred.  
**Constraint:** EN-only; no PL; no question banks; no competitor brand pages; no async Friend Quiz; no pSEO matrices (player-count spam, locale grids).

Decision shift: prior “no new URLs” freeze **lifted for curated long-tail guides** with unique primary intents. Still **not** programmatic thin factories (Stage 13 spirit).

---

## 1. Cluster shape (after Wave 4)

```text
/en
├── pillars (unchanged 4) + /faq
├── existing guides (8)
└── Wave 4 guides (16) — long-tail under pillars
```

Total content URLs ≈ **4 pillars + 1 hub + 24 guides = 29** (+ home/legal outside registry kinds).

---

## 2. New URLs (ownership)

| Path | Primary intent | Parent pillar(s) | Must not own |
| ---- | -------------- | ---------------- | ------------ |
| `/discord-game-night` | Discord game night in voice | party | Full category definition |
| `/discord-hangout-game` | Chill hangout / call game | party, voice | Icebreaker full ruleset |
| `/short-discord-party-game` | Short party loop (~multi-round night) | party, how-to | Exact minute SLAs |
| `/discord-party-game-no-download` | No download / no installer | party, activity | Mobile-only story |
| `/discord-party-game-for-friends` | Friends you already know | party | Matchmaking claims |
| `/free-discord-party-game` | Free Discord party Activity | party | Invented paid tiers |
| `/play-inside-discord` | Play party game inside Discord | activity | SDK tutorial |
| `/add-squimbo` | Add / find Squimbo | activity, open | Generic Discord Help |
| `/discord-activity-group-call` | Activity on a group voice call | activity, voice | Party category |
| `/discord-activity-vs-browser-game` | Activity vs browser party lobby | activity, most-likely | Naming competitors |
| `/whos-most-likely-to-discord` | Who’s most likely on Discord | most-likely | Question bank |
| `/most-likely-party-on-discord` | Most likely as Discord party | most-likely | Web generator SEO |
| `/discord-roast-party-game` | Roast-friendly sealed party | most-likely, party | Harassment features |
| `/start-squimbo` | Start Squimbo night | how-to | Generic Activity UI |
| `/squimbo-reveal` | Reveal beat after sealed votes | how-to, vote-in-dark | Full format page |
| `/squimbo-finale` | Finale scoreboard / wrap | how-to | Mid-round scoring claims |

---

## 3. Explicitly not in Wave 4

Question lists · best-of listicles · vs Undercover/Spikey · PL paths · `/most-likely-discord-activity` (KG-12) · player-count URL spam · async quiz SEO.

---

## 4. Implementation

`registry.ts` + `types.ts` + `seo/copy/*` + `docs/seo.md`. Footer Learn stays pillars + FAQ only.
