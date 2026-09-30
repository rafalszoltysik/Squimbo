# 17 - Backlink strategy

Date: 2026-09-30  
Depends on: Stages 3, 6–7, 13–16 + strategy.md  
Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

**Metrics rule:** Backlink counts, DR/DA/Authority, referring domains, and “link velocity” are **unavailable** unless a tool export or GSC link report is added later. Do not invent numbers.

---

## 1. Decision

**Links support entity + trust; they do not replace Discord distribution or indexation work.**

| Lock | Value |
| ---- | ----- |
| Primary acquisition | Friends already in voice → Directory / Activity [FACT] strategy.md |
| Link building goal | Help Google/AI associate Squimbo with Discord Activity party game | [INFERENCE] Stages 15–16 |
| Scale tactic | **No** PBN, link farms, mass directory spam, paid unreviewed guest posts | Policy |
| Measurement | Deferred until index + optional Ahrefs/Similarweb/GSC links export | Stage 3–4 |

Recorded for Stage 20.

---

## 2. Current link / mention footprint (known)

| Asset | Inbound nature | Status | Label |
| ----- | -------------- | ------ | ----- |
| Marketing site (Preview) | Unknown external links | Not audited with a link tool | [UNKNOWN] |
| `squimbo.app` | Domain intended; health historically bad | Cutover undecided | Stage 20 |
| Discord App Directory | Official listing page (platform, not a classic “backlink” you control) | Live SRC-036 | [OBSERVATION] |
| Support Discord | Community invite from site | Exists SRC-009 | [FACT] |
| Competitor / listicle SERPs | Squimbo absent from observed listicles | Stages 5–7 | [OBSERVATION] |
| Brand SERP | Slang / unrelated; no product citations | Stages 4–5 | [OBSERVATION] |

**Inference:** There is no evidence of a meaningful third-party editorial link graph yet. Fixing that is secondary to getting the site indexed and the entity attributes consistent. [INFERENCE]

---

## 3. What “good” looks like for Squimbo

Prefer links (or brand mentions with URL) that:

1. Call Squimbo a **Discord Activity** (or link Directory + site).  
2. Sit near queries we care about (Discord party / voice / icebreaker) — without forcing listicle spam.  
3. Point at the **stable canonical host** (eventually `squimbo.app`; Preview only while locked).  
4. Are editorially placed (human page), not footer networks.

Anchor text preference (natural language):

| Prefer | Avoid |
| ------ | ----- |
| Squimbo | Exact-match spam (“best discord party game 2026”) |
| Squimbo Discord Activity | Competitor brand bait anchors |
| Naked Directory or `/en` URL | Keyword-stuffed anchors on every mention |

---

## 4. Priority link / mention classes

Ordered by fit to product + entity gaps (not by invented authority scores).

### P0 — Own and platform (do first)

| Action | Why | Label |
| ------ | --- | ----- |
| Keep site → Directory CTA + schema `installUrl`/`sameAs` | Entity co-node | [FACT] Stage 15 |
| Align Directory listing copy with product.md | Trust + SERP snippet quality | Stage 2 T-005 |
| Confirm Directory → marketing URL if Discord portal allows | Reciprocal discovery | [UNKNOWN] verify in portal |
| Indexation ops (GSC sitemap, URL Inspection) | Links to an unindexed URL underperform | Stage 3 |
| Host cutover plan when `squimbo.app` healthy | Avoid splitting equity across Preview forever | Stage 20 |

These are **not classic outreach**, but they are the highest-leverage “link graph” work now. [INFERENCE]

### P1 — Earned Discord-native mentions

| Channel class | Approach | Guardrails |
| ------------- | -------- | ---------- |
| Operator’s own networks / playtests | Ask groups that already play to bookmark Directory or site | No fake reviews |
| Squimbo Support / community Discord | Pin Directory + `/en`; do not flood other servers | [FACT] support server docs exist |
| Friend servers (organic) | “We’re trying Squimbo in voice tonight” with Directory link | Consent; no spam raids |
| Discord Activity / Embedded App builder communities | Share factual “what we built” posts if relevant | No competitor smears; no stolen assets |

**Hypothesis:** One solid mention from an Activity-aware Discord audience beats ten generic “submit URL” directories. [HYPOTHESIS]

### P2 — Selective discovery listings (optional, verify first)

| Target type | Status | Rule |
| ----------- | ------ | ---- |
| Product Hunt (or similar launch) | Listing existence UNKNOWN (Stage 1) | Only if operator wants a launch moment; link to Directory + site; facts only |
| Curated “Discord Activities” editorial lists | Listicles appear in SERPs (PickThe.Games-class) [OBSERVATION] | Pitch **only** if unique angle (sealed most_likely in voice); refuse paid spam placements |
| AlternativeTo / G2 / similar | UNKNOWN | Low priority for Activity party game; skip unless clear category fit |
| Top.gg | Bot-centric [OBSERVATION] C-07 | **Do not** position Squimbo as a bot listing |

Before any submission: confirm the listing allows Activities (not bots-only) and that we can state MVP accurately.

### P3 — Digital PR / content citations (later)

| Idea | Fit | Notes |
| ---- | --- | ----- |
| “How Discord Activities differ from bots” explainers citing Squimbo as example | Medium | We already own `/discord-activity-not-a-bot` — earn links *to that URL* if journalists need a plain definition |
| Party-game / voice hangout roundups | Medium | Only with Discord-native angle; no question-bank hooks |
| Founder/story posts | Low–Medium | Optional; not required for SEO system |

Do **not** create Stage 13-rejected listicle farms on our domain just to attract links.

### Explicitly reject

| Tactic | Why |
| ------ | --- |
| PBN / private blog networks | Quality + policy risk |
| Mass web 2.0 / profile link blasts | Noise; brand already collision-prone |
| Paid guest posts with no editorial bar | Thin |
| Link exchanges with unrelated gambling/crypto/etc. | Trust |
| Fake “as featured in” badges | Honesty |
| Scraping competitor backlink profiles to clone spam | Security/ethics + no tool data anyway |
| Buying Reddit/Discord upvote rings | Against platform norms |

---

## 5. Competitor link lessons (qualitative only)

No backlink tools used. From SERP/landing observation only:

| Class | Likely discovery path | Squimbo takeaway |
| ----- | --------------------- | ---------------- |
| Undercover / Flantic Arcade | Own domains + Discord | Invest in **Activity** identity, not bot directories |
| Spikey / Gamebot | Bot lists (Top.gg etc.) | Do not chase bot-directory SEO |
| mostlikelyto.fun / VoteMostLikely | Web party SEO | Do not buy into generator linkbait; stay Discord-native |
| Discord first-party | Owns platform SERPs | Earn presence via Directory + accurate consumer pages; don’t clone Help |

[INFERENCE] from Stages 6–7.

---

## 6. Outreach operating rules

1. Facts from product.md only.  
2. No competitor brand attacks in pitches.  
3. Prefer linking **Directory** for “play” and **`/en` or Tier 0–1 pillar** for “what is it.”  
4. Disclose relationship if posting in communities you moderate.  
5. Log successful placements in `22-verification-log.md` with URL + date (SRC-xxx).  
6. After `squimbo.app` cutover, update pitches to production URLs; don’t keep pushing Preview.

---

## 7. Sequencing vs other stages

```text
Index + entity attributes + Directory accuracy   (P0)
        ↓
Organic Discord mentions / playtests             (P1)
        ↓
Stage 12 on-page angles live                     (makes linked pages worth citing)
        ↓
Selective listings / editorial pitches           (P2–P3)
        ↓
Link metrics tool export (optional)              (measurement)
```

Backlinks without indexation = weak ROI. [INFERENCE] Stage 3.

---

## 8. Success signals (no invented KPIs)

| Signal | How we’ll know |
| ------ | -------------- |
| Referring pages mention Discord Activity + Squimbo | Manual spot-checks / future tool |
| Brand+Discord SERP shows site or Directory | Repeat Stage 5 probes |
| GSC “Links” report non-empty | When GSC matures |
| Unsolicited listicle inclusion | Observation log |

Target counts: **not set** (metrics unavailable).

---

## 9. Unknowns

| ID | Unknown |
| -- | ------- |
| U-BL01 | Current referring domain count to Preview or squimbo.app |
| U-BL02 | Whether Directory pages pass meaningful PageRank-like signals to marketing URLs |
| U-BL03 | Product Hunt / editorial list appetite for Discord Activities in 2026 |
| U-BL04 | Operator capacity for community outreach |

---

## 10. Stage decision summary

**Earn a few accurate Discord-native mentions and keep Directory↔site tight. Do not run a link-building factory.**

## Next actions

1. Stop.  
2. Continue → **Stage 18 Content roadmap** (prioritized work from 9–17 for approval).  
3. Implementation only after roadmap + explicit approval (Stage 19).
