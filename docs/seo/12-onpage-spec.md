# 12 - On-page spec

Date: 2026-09-30  
Depends on: Stages 9–11 + live copy in `apps/web` + [product.md](../product.md)  
Rule: **Spec only.** No production code until Stage 19 + explicit approval. Do not invent features, volumes, or competitor names.

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Scope

| In scope (full editorial specs) | Emphasis |
| ------------------------------- | -------- |
| `/en` | Tier 0 |
| `/en/discord-party-game` | Tier 1 |
| `/en/discord-activity` | Tier 1 |
| `/en/most-likely` | Tier 1 |
| `/en/open-discord-activity` | Tier 1 |
| `/en/discord-voice-channel-game` | Tier 1 |

Tier 2–3: maintain / light guardrails only (§8). Implementation order deferred to Stage 18.

Copy sources today [FACT]:

- Home: `apps/web/src/i18n/messages/en.ts` → `meta` + `landing`
- Pillars/guides: `apps/web/src/seo/copy/*.ts`
- Internal links: `apps/web/src/seo/registry.ts`

---

## 2. Shared on-page rules (all Tier 0–1)

| Rule | Detail | Label |
| ---- | ------ | ----- |
| Facts only | Product claims from product.md / strategy only | [FACT] SRC-001 |
| One intent | H1 + lead must match Stage 11 ownership lock | Stage 11 |
| Unique meta | Distinct `title` + `description` vs every other registry page | friends-seo-geo |
| CTA | Primary = Play on Discord (Directory / play URL pattern) | Live Stage 2 |
| No competitor brands | Contrast by **surface/mechanic**, not named rivals | friends-seo-geo |
| No question banks | At most 1–2 **example** prompts already on home; never listicles of 50–100 | Stage 9 |
| Schema | FAQ / HowTo JSON-LD must match visible copy after any rewrite | [FACT] docs/seo.md |
| EN-only | No PL marketing strings | [FACT] SRC-002 |
| Host | Interim Preview self-canonical; long-term `squimbo.app` undecided | Stage 20 |

**Voice:** Party host, short, factual. Not SaaS. [FACT] product.md tone.

---

## 3. Spec card template

Each card below uses:

1. **Owns / must not** — Stage 11 lock  
2. **Primary seeds** — Stage 4 KW IDs  
3. **Gap IDs** — Stages 8–9  
4. **Current state** — what live copy already does [OBSERVATION]  
5. **Target angle** — required editorial change class  
6. **Meta / H1 / lead targets** — direction, not final locked strings  
7. **Required sections / claims** — must-include facts  
8. **Internal links** — must surface  
9. **Schema / CTA**  
10. **Acceptance checks** — before merge in Stage 19  

Proposed meta/H1 strings below are **spec drafts** for later copy PR. They are not shipped.

---

## 4. Tier 0 — `/en` (entity home)

### Owns / must not

| Owns | Must not |
| ---- | -------- |
| Brand entity + pitch (“who knows the group best”) | Detailed how-to walkthrough; mechanic deep-dive; question bank |

### Seeds / gaps

- KW-001…KW-004  
- KG-01, CG-01  

### Current state [OBSERVATION]

- Brand + pitch already strong: headline “Who knows the group best?”, entityBlurb defines Discord Activity + sealed most_likely + 3–8.  
- Meta title: “Squimbo, a Discord party game”; description leans pitch, light on “Discord Activity” entity terms.  
- Learn links: party, how-to, most-likely, activity, FAQ present.  
- **Missing for brand SERP defense:** explicit “Squimbo ≠ slang / unrelated web hits” is not stated (and may stay subtle); stronger Activity + Directory entity signals in meta; no above-fold link to not-a-bot triangulation.

### Target angle

**Entity first, then pitch.** Above the fold must answer: what Squimbo *is* (Discord Activity party game) before vibe-only copy. Disambiguate from random “Squimbo” SERP noise by **product attributes**, not by arguing with Urban Dictionary. [INFERENCE] from SRC-059.

### Meta / H1 / lead (spec drafts)

| Element | Direction |
| ------- | --------- |
| Title | Keep brand first; include “Discord Activity” or “Discord party game” (already mostly there). Avoid stuffing. |
| Description | Lead with Discord Activity party game + sealed most likely in voice + Directory CTA implication. Prefer entity facts over only “who knows the group best?” |
| Visible brand | Keep hero brand “Squimbo” dominant (existing design rule). |
| Headline | Keep pitch OK if entityBlurb stays immediately adjacent and factual. |
| Entity blurb | Keep; optionally one clause: not a slash-command bot / not a separate installer (facts already elsewhere). |

### Required claims (must remain true)

- Discord Activity; room = Activity instance  
- Already-in-voice groups; no matchmaking  
- Sealed most_likely → reveal → finale scores  
- Min 2; ~3–8 feels best  
- No in-game host privileges (can stay in how section)  
- Free to play as stated today (do not invent monetization)  

### Internal links (required)

| To | Why |
| -- | --- |
| `/discord-party-game` | Category |
| `/discord-activity` | Platform entity |
| `/most-likely` | Mechanic |
| `/how-to-play` | Procedural |
| `/faq` | Hub |
| Optional strengthen: `/discord-activity-not-a-bot` | CG-02 triangulation [INFERENCE] |

### Schema / CTA

- Keep WebSite / Organization / SoftwareApplication / FAQPage [FACT] docs/seo.md  
- FAQ answers must stay product-accurate after any edit  
- CTA: Play on Discord → Directory  

### Acceptance

- [ ] Meta description contains Discord Activity (or equivalent platform noun) + party game job  
- [ ] Entity blurb still matches product.md  
- [ ] No new features claimed  
- [ ] Pillars still linked from Learn / body  

---

## 5. Tier 1 — `/en/discord-party-game`

### Owns / must not

| Owns | Must not |
| ---- | -------- |
| “Discord party game” category job | Generic Activity SDK docs; bot invite tutorials as the page job |

### Seeds / gaps

- KW-005  
- KG-02, CG-02  

### Current state [OBSERVATION]

- Good category definition + Squimbo fit + “not a separate app.”  
- **Gap:** no explicit **Activity ≠ slash bot** section; body does not point readers to `/discord-activity-not-a-bot` or lean hard enough into sealed most-likely as the party loop proof.

### Target angle

Define Discord party game as **shared play in Discord for people already together**, then position Squimbo as an **Activity** (not chat bot) with sealed most_likely. Prove the night loop in three bullets max. [INFERENCE] Stage 5–7 SERP mix.

### Meta / H1 / lead (spec drafts)

| Element | Direction |
| ------- | --------- |
| Title | Keep “Discord party game”; brand optional in title if unique. |
| Description | Activity + voice + sealed votes + finale (already close). |
| H1 | Keep channel-first H1 OK. |
| Lead | Add one clear clause: runs as a Discord Activity, not a slash-command bot. |

### Required sections (rewrite class)

1. What counts as a Discord party game (keep; stress in-Discord + already-in-channel).  
2. **Activity vs bot** (new or expand “Not a separate app”): Activity UI in voice vs slash bot in chat — facts only.  
3. Why Squimbo fits: sealed most_likely, finale scores, ~3–8.  
4. FAQ: keep join / players; add or adjust one Q on bot vs Activity if not duplicated elsewhere.

### Internal links

| Must | Optional |
| ---- | -------- |
| `/discord-activity-not-a-bot` | `/discord-voice-channel-game` |
| `/most-likely` | `/discord-icebreaker` |
| `/discord-activity` | |
| Guides via registry (voice, players, icebreaker, no-host) | |

### Schema / CTA

- FAQPage matching on-page FAQ  
- Play CTA  

### Acceptance

- [ ] Page states Activity ≠ slash bot in body (not only related links)  
- [ ] Links to not-a-bot + most-likely  
- [ ] No bot-feature parity claims  

---

## 6. Tier 1 — `/en/discord-activity`

### Owns / must not

| Owns | Must not |
| ---- | -------- |
| Consumer what/why of a Discord Activity | Party-night listicle; bot invite how-to; developer SDK tutorial |

### Seeds / gaps

- KW-006, KW-007  
- Gap priority P1 (Stage 9)  

### Current state [OBSERVATION]

- Already consumer-facing; room = instance; no separate install; party night without leaving voice.  
- Risk vs developer docs SERP (SRC-062): page is mostly OK; avoid drifting into Embedded App SDK jargon. [INFERENCE]

### Target angle

**Player job:** “shared app inside Discord so the people already on voice play together.” Squimbo as concrete example + Directory CTA. Defer engineer docs; do not compete with Discord developer documentation.

### Meta / H1 / lead (spec drafts)

| Element | Direction |
| ------- | --------- |
| Title | “Discord Activity” + party/player cue (current “Discord Activity party game” is fine). |
| Description | Voice friends + same channel room + no separate app. |
| H1 / lead | Keep; optionally lead with “for friends already in voice” before product name repetition. |

### Required sections

1. What a Discord Activity is (player language).  
2. How Squimbo uses it (instance = room; display names/avatars).  
3. Party night in voice (sealed most_likely + finale) — short.  
4. FAQ: is it an Activity / extra app / where is the room.

### Internal links

| Must | Why |
| ---- | --- |
| `/open-discord-activity` | Launch Squimbo |
| `/discord-activity-not-a-bot` | Differentiation |
| `/discord-activity-mobile` | Client fact (guide) |
| `/discord-party-game` | Category sibling |
| Registry guides | open, mobile, not-a-bot, voice |

### Schema / CTA

- FAQPage; Play CTA  

### Acceptance

- [ ] Zero SDK/OAuth/developer setup steps on this page  
- [ ] Explicit “friends already in voice” job in lead or §1  
- [ ] Link to open-Activity guide  

---

## 7. Tier 1 — `/en/most-likely`

### Owns / must not

| Owns | Must not |
| ---- | -------- |
| Most-likely **format** in Squimbo / Discord-native | Question-bank SEO; sealed-UX deep-dive (belongs to vote-in-the-dark) |

### Seeds / gaps

- KW-013, KW-014  
- KG-06, CG-03  

### Current state [OBSERVATION]

- Strong sealed-loop explanation; one example prompt OK.  
- FAQ says “only on Discord” / Activity.  
- **Gap:** H1/lead read like generic sealed most-likely; weak contrast vs **web one-phone pass-around generators** that dominate SERP (SRC-065, C-08/C-09). [INFERENCE] CG-03  

### Target angle

**Discord-native most likely:** everyone on their own Discord client in the same Activity; sealed tallies; finale scoreboard; voices stay on. Explicitly **not** a browser game you pass around one phone. Do not name competitor brands. Keep example prompts ≤1–2; never a bank.

### Meta / H1 / lead (spec drafts)

| Element | Direction |
| ------- | --------- |
| Title | Keep Discord in title (current “Most likely on Discord” is good). |
| Description | Stress Discord Activity + sealed + finale (already close). |
| H1 | Prefer Discord-native cue in H1 or first sentence of lead (e.g. inside Discord / as a Discord Activity), not only “sealed until lock-in.” |
| Lead | Add surface contrast: play in the Activity with the voice group — not a separate browser lobby / one-device pass-around. |

### Required sections

1. How a Squimbo most-likely round works (vote other players; sealed until lock-in).  
2. Why sealed votes (keep).  
3. **Discord-native surface** (expand “Made for the voice channel”): Activity instance, Discord identities, voice reactions.  
4. Clear pointer: sealed UX detail → `/vote-in-the-dark` (format stays here).  
5. FAQ: what is most likely; when scores; Discord-only.

### Internal links

| Must | Why |
| ---- | --- |
| `/vote-in-the-dark` | Sealed UX child |
| `/how-to-play` | Night loop |
| `/discord-party-game` | Category |
| `/discord-icebreaker` | Session use (guide) |
| Registry guides | vote-in-dark, icebreaker, players |

### Schema / CTA

- FAQPage; Play CTA  
- Do **not** add HowTo here (how-to / open-Activity own HowTo) [FACT] docs/seo.md  

### Acceptance

- [ ] Lead or §3 contrasts Discord Activity vs web/phone-pass pattern without brand names  
- [ ] Does not dump question lists  
- [ ] Does not steal full sealed-UX ownership from vote-in-the-dark  
- [ ] Links vote-in-the-dark with distinct job language  

---

## 8. Tier 1 — `/en/open-discord-activity`

### Owns / must not

| Owns | Must not |
| ---- | -------- |
| Finding / launching **Squimbo** | Generic Discord Help clone for all Activities |

### Seeds / gaps

- KW-010, KW-011  
- KG-05, CG-04  

### Current state [OBSERVATION]

- Squimbo-specific steps exist (join voice → shelf → same instance).  
- Meta title **“Open a Discord Activity”** is generic — high risk of looking like Discord Help competitor copy. [INFERENCE] CG-04  
- HowTo JSON-LD present and aligned with sections [FACT].  
- No deferral sentence to official Discord Help for generic UI chrome (SRC-064).

### Target angle

**Squimbo launch path only.** Steps: voice → find Squimbo on shelf/Apps → same instance room → Ready path can point to how-to-play. One short line: for generic Discord Activity UI, see Discord’s own help; this page is how you start **Squimbo**. Do not screenshot-compete with Discord docs.

### Meta / H1 / lead (spec drafts)

| Element | Direction |
| ------- | --------- |
| Title | Prefer “Open Squimbo” / “Launch Squimbo as a Discord Activity” over bare “Open a Discord Activity.” |
| Description | Keep Squimbo + voice + shelf + no separate install. |
| H1 | Current H1 already Squimbo-specific — keep that pattern. |
| Lead | Keep Squimbo shelf framing; add deferral to Discord Help for generic controls if UI labels differ by client. |

### Required sections

1. Join voice (already-together; no matchmaking).  
2. Find and launch **Squimbo** (not “any Activity”).  
3. Same instance = room; identities from Discord.  
4. What you do not need (no installer / no slash bot / no external lobby) — keep.  
5. Optional: after launch → Ready / night beats → link `/how-to-play`.  
6. FAQ: where to find Squimbo; late joiners; desktop/mobile.

### Internal links

| Must | Why |
| ---- | --- |
| `/how-to-play` | Loop after launch |
| `/discord-activity` | Platform parent |
| `/discord-activity-mobile` | Client note |
| External: Discord Help (generic Activity) | Deferral [INFERENCE] Stage 10 §6 — use official URL when implementing; do not invent alternate help URLs |

### Schema / CTA

- Keep HowTo + FAQ aligned after meta/title edits  
- Play CTA still primary conversion  

### Acceptance

- [ ] Meta title includes Squimbo (or equivalent brand)  
- [ ] Body owns Squimbo path; does not teach Discord platform UI as primary value  
- [ ] Links how-to-play  
- [ ] HowTo steps still match visible sections  

---

## 9. Tier 1 — `/en/discord-voice-channel-game`

### Owns / must not

| Owns | Must not |
| ---- | -------- |
| Already-in-voice JTBD | Full “Discord party game” category ownership |

### Seeds / gaps

- KW-008, KW-009  
- KG-03  

### Current state [OBSERVATION]

- Strong JTBD already: same channel/room; not matchmaking; voice stays on; FAQ distinguishes Activity vs bot.  
- SERP competes with listicles (SRC-063) — page should stay **job-shaped**, not become “best games” list. [INFERENCE]

### Target angle

**Maintain and slightly reinforce:** “you’re already together on voice.” Squimbo opens in that channel. Avoid listicle structure. Keep bot FAQ; optionally link not-a-bot for depth.

### Meta / H1 / lead (spec drafts)

| Element | Direction |
| ------- | --------- |
| Title / H1 / lead | Largely keep; ensure “already in voice” remains the first idea. |
| Description | Keep Activity + same channel. |

### Required sections

1. Same channel, same room (keep).  
2. Built for people you already know / no LFG (keep).  
3. Voice stays on + sealed most_likely short (keep).  
4. FAQ keep bot distinction.

### Internal links

| Must | Optional |
| ---- | -------- |
| `/discord-party-game` | `/discord-activity-not-a-bot` |
| `/discord-activity` | `/discord-icebreaker` |
| `/most-likely` or how-to | |

### Schema / CTA

- FAQPage; Play CTA  

### Acceptance

- [ ] No “top 10 Discord games” section  
- [ ] JTBD “already together” remains in H1 or lead  
- [ ] Still subordinate to party pillar (links up)  

---

## 10. Cross-page triangulation block (CG-02)

For Stage 19 copy PR, ensure these three statements appear **somewhere in Tier 0–1 cluster** (not necessarily all on every page):

| Statement | Preferred homes |
| --------- | --------------- |
| Squimbo is a Discord **Activity** | `/en`, `/discord-activity`, `/open-discord-activity` |
| Not a slash-command **bot** | `/discord-party-game`, `/discord-activity-not-a-bot`, voice FAQ |
| Not a **web one-phone / browser lobby** most-likely generator | `/most-likely` (primary), optional party |

[INFERENCE] from Stages 5–7 SERP mix + Stage 9 CG-02/CG-03.

---

## 11. Tier 2–3 maintain guardrails (not full specs)

| URL | Guardrail until Stage 18 |
| --- | ------------------------ |
| `/how-to-play` | Squimbo night beats only; pair with open-Activity; keep HowTo accurate |
| `/vote-in-the-dark` | Sealed UX only; H1 must not redefine full most-likely format |
| `/discord-icebreaker` | Session purpose; Activity + sealed; no question bank |
| `/discord-activity-not-a-bot` | Short definitions + CTA; link party + activity |
| `/faq` | Align with product.md; no feature invention |
| players / mobile / no-host | Facts only; no expansion without demand probe |

---

## 12. Implementation notes (for Stage 19 — do not execute now)

| Surface | Edit location |
| ------- | ------------- |
| Home meta + landing | `apps/web/src/i18n/messages/en.ts` |
| Pillar/guide copy | `apps/web/src/seo/copy/<slug>.ts` |
| Link graph | Prefer copy + existing registry; registry change only if related/guides arrays need adjustment |
| Docs keyword map | Update `docs/seo.md` if meta intents shift |
| Tests | `pnpm --filter @friends/web test` after registry/copy changes |
| llms | Rebuild via existing builders; facts stay product.md |

**Approval gate:** Stage 18 roadmap + Stage 20 decision + user “implement” before code.

---

## 13. Unknowns

| ID | Unknown |
| -- | ------- |
| U-OP01 | Exact final English strings (spec drafts only) |
| U-OP02 | Whether home should add visible not-a-bot Learn link (design/UX tradeoff) |
| U-OP03 | Official Discord Help URL to cite on open-Activity (confirm at implement time from Discord docs) |
| U-OP04 | Meta length / SERP truncation — measure after ship in GSC |

---

## 14. Stage decision

**Decision:** Ship editorial on-page specs for Tier 0–1; **no new URLs**; **no code**. Primary rewrite classes: entity meta (home), Activity≠bot on party, Discord-native contrast on most-likely, Squimbo-branded meta + Help deferral on open-Activity; voice page mostly maintain.

## Next actions

1. Stop.  
2. Continue → **Stage 13 Programmatic SEO** (expect formal **no**).  
3. Then 14–16 GEO/entity/AI → 17 backlinks → 18 roadmap → approval → 19 implementation.
