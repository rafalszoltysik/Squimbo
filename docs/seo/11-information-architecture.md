# 11 - Information architecture

Date: 2026-09-30  
Depends on: Stage 10 + registry [FACT] SRC-008 + `docs/seo.md` [FACT] SRC-002  

**Decision:** Keep current IA. Change emphasis and linking discipline, not URL inventory.

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Site shape (canonical)

```text
https://<host>/en                          HOME (entity)
├── /discord-party-game                    PILLAR
│     guides: voice · players · icebreaker · no-host
├── /discord-activity                      PILLAR
│     guides: open · mobile · not-a-bot · voice
├── /how-to-play                           PILLAR
│     guides: open · vote-in-dark · players · no-host
├── /most-likely                           PILLAR
│     guides: vote-in-dark · icebreaker · players
├── /faq                                   HUB
├── /open-discord-activity                 GUIDE
├── /discord-voice-channel-game            GUIDE
├── /vote-in-the-dark                      GUIDE
├── /discord-party-game-players            GUIDE
├── /discord-activity-mobile               GUIDE
├── /no-host-party-game                    GUIDE
├── /discord-icebreaker                    GUIDE
├── /discord-activity-not-a-bot            GUIDE
├── /support · /privacy · /terms           TRUST
└── /llms.txt · /llms-full.txt             GEO (root)
```

Host: interim Preview (operator decision); docs long-term `squimbo.app` [FACT] Stage 1/20.

Locale: EN only; `/pl` → `/en` [FACT] SRC-002, SRC-031.

---

## 2. URL ownership rules

| Rule | Detail | Source |
| ---- | ------ | ------ |
| One primary intent per URL | No second page for same job | friends-seo-geo / SRC-002 |
| Pillars own primary intents | Party, Activity, How-to, Most likely | SRC-002 |
| Guides own long-tail | Link up to pillars | SRC-008 |
| FAQ is hub only | Not a pillar; related to all pillars | SRC-008 |
| Footer Learn | Pillars + FAQ only (not every guide) | SRC-008, SRC-034 |
| Guides discovery | Pillar `guides` arrays + llms.txt + in-body links | SRC-008 |
| Play CTA | Discord Directory / play URL sitewide pattern | Live Stage 2 |
| No competitor brand URLs | Until strategy unlocks | friends-seo-geo |

---

## 3. Primary intent lock (anti-cannibalization)

| URL | Owns | Must not own |
| --- | ---- | ------------ |
| `/en` | Brand entity + pitch | Detailed how-to or mechanic deep-dive |
| `/discord-party-game` | “Discord party game” category job | Generic Activity SDK explainers |
| `/discord-activity` | What a Discord Activity is (consumer) | Party-night listicle; bot invite tutorials |
| `/how-to-play` | Squimbo night loop (3 beats) | Generic Discord App Launcher tutorial alone |
| `/most-likely` | Most-likely format in Squimbo / Discord-native | Question bank SEO |
| `/vote-in-the-dark` | Sealed tallies UX | Full format definition (belongs to most-likely) |
| `/open-discord-activity` | Finding/launching **Squimbo** | Generic Discord Help clone |
| `/discord-voice-channel-game` | Already-in-voice JTBD | Full party-game category |
| `/discord-icebreaker` | Icebreaker use-case | Full most-likely ruleset |
| `/discord-activity-not-a-bot` | Activity vs bot clarity | Full Activity platform history |
| `/discord-party-game-players` | Player count facts | Soft marketing fluff only |
| `/discord-activity-mobile` | Mobile/desktop Discord clients | App Store install narrative |
| `/no-host-party-game` | No host privileges | Host-tools product claims |

[INFERENCE] Stage 9 cannibalization watchlist.

---

## 4. Internal linking blueprint

### Required spines

1. **Home → 4 pillars + FAQ** (entity blurb / Learn).  
2. **Pillar → its guides** (registry `guides`).  
3. **Guide → parent pillar(s) + FAQ + play CTA**.  
4. **Cross-cut differentiation:** party ↔ not-a-bot ↔ most-likely (bots vs Activities vs web generators) [INFERENCE] CG-02.  
5. **Procedural pair:** how-to-play ↔ open-discord-activity (loop vs launcher).  

### Footer

- Learn: pillars + FAQ only [FACT] SRC-034.  
- Legal: privacy, terms, support.  

### Do not

- Put every guide in footer [FACT] skill.  
- Orphan guides (registry already wires related/guides).  
- Add hreflang until PL catalog ships [FACT] SRC-002.

---

## 5. Navigation UX vs SEO IA

| Surface | User job | SEO role |
| ------- | -------- | -------- |
| Header home | Brand return | Entity |
| Sticky / hero Play on Discord | Convert | Transactional CTA |
| Footer Learn | Explore intents | Pillar discovery |
| In-page related / guides | Continue reading | Cluster strength |
| FAQ | Objections | Long-tail Q&A + FAQ schema |

---

## 6. GEO / AI surfaces in IA

| File | Role | Rule |
| ---- | ---- | ---- |
| `/llms.txt` | Curated index: key pages, pillars, guides, facts, contact | Mirror registry; facts = product.md |
| `/llms-full.txt` | Expanded how + FAQ | Same facts; no invented features |
| JSON-LD | WebSite/Org/SoftwareApplication/FAQ/HowTo/Breadcrumb | Match on-page copy |

Canonical host must match intended indexable host [OBSERVATION] Stage 2 Preview self-canonical.

---

## 7. IA changes considered and rejected

| Change | Verdict | Why |
| ------ | ------- | --- |
| Add “most likely Discord Activity” URL | Rejected for now (HOLD) | KG-12 unprobed; cannibalizes two pillars |
| Add question-bank section/URLs | Rejected | Stage 9 DO NOT CREATE |
| Promote all guides to footer | Rejected | Skill + thin footer |
| Merge vote-in-dark into most-likely | Rejected | Distinct sealed-UX intent still useful; keep split clear |
| PL subtree | Rejected | EN-only |

---

## 8. Implementation-facing IA checklist (later Stage 12/19)

Not implemented this stage:

- [ ] Confirm every pillar page surfaces its `guides` with clear labels  
- [ ] Home entity block links party + activity + Directory  
- [ ] Party pillar links not-a-bot + most-likely  
- [ ] Most-likely explicitly contrasts Discord Activity vs web generator (no competitor names required)  
- [ ] Open-Activity defers generic UI to Discord Help; owns Squimbo steps  
- [ ] llms + sitemap host = approved research/production host  

---

## 9. Unknowns

| ID | Unknown |
| -- | ------- |
| U-IA01 | Whether Preview remains indexable host long enough for IA investment |
| U-IA02 | Need for breadcrumb UI beyond schema (schema already exists) |

## Next actions

1. Stop.  
2. Continue → **Stage 12 On-page spec** (page-level angle specs from gaps; still no code unless approved).  
3. Stage 13 Programmatic: default **no**.
