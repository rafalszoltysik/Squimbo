# 07 - Competitor verification

Date verified: 2026-09-30  
Method: Official pages / docs only where possible. Cloudflare-blocked pages marked Partial.  
Do not equate “works with Discord” / “play while on Discord” / “Discord Activity” / “slash bot”.

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## C-01 — Discord first-party Activities (platform)

| Field | Value | Label | Source |
| ----- | ----- | ----- | ------ |
| Official URL | https://discord.com/blog/server-activities-games-voice-watch-together | [FACT] | SRC-068 |
| Category | Platform feature: embedded games/media in Discord | [FACT] | SRC-068 |
| Discord support | **Is** Discord Activities (launch via rocket / App Launcher in voice) | [FACT] | SRC-068 |
| Online / offline | Online (Discord client) | [INFERENCE] | Platform Activities require Discord |
| Install | No separate game install; inside Discord | [FACT] | SRC-068 |
| Browser (outside Discord) | N/A as primary; Activities run in Discord clients including web Discord | [FACT]/[OBSERVATION] | SRC-068 mobile/desktop/web voice |
| Mobile | Supported per blog | [FACT] | SRC-068 |
| Player count | Per Activity; blog says some unlimited | [FACT] | SRC-068 |
| Pricing | UNKNOWN for each title; platform feature described as open to jump in | [UNKNOWN] | Not a single SKU |
| Core mechanic | Catalog (drawing, cards, sports, watch together, etc.) | [FACT] | SRC-068 list |
| Content strategy | Official blog + Help Center; App Launcher discovery | [OBSERVATION] | SRC-068 |
| LAST VERIFIED | 2026-09-30 | | |
| CONFIDENCE | High for platform description; list dated June 11, 2024 in article note — catalog may have changed | Medium-High | SRC-068 editor note |

Relation to Squimbo: Category context and SERP owner, not a single rival product.

---

## C-02 — Undercover

| Field | Value | Label | Source |
| ----- | ----- | ----- | ------ |
| Official URL | https://undercover.gg/ | [FACT] | SRC-069 |
| Category | Social deduction word party game | [FACT] | SRC-069 |
| Discord support | Claims **Discord Activity** (voice or text channels) | [FACT] landing claim | SRC-069 |
| Online / offline | Online | [INFERENCE] | Activity model |
| Install | No app install / no sign-up claimed | [FACT] | SRC-069 |
| Browser outside Discord | Not claimed as primary | [OBSERVATION] | |
| Mobile | Desktop, iOS, Android where Discord runs | [FACT] | SRC-069 |
| Players | 3–12; best 5–8 | [FACT] | SRC-069 |
| Pricing | Free; no IAP, premium, or ads claimed | [FACT] | SRC-069 FAQ |
| Core mechanic | Secret words; undercover has different word; clues; vote eliminate; optional Phantom | [FACT] | SRC-069 |
| Host / privileges | UNKNOWN | [UNKNOWN] | |
| Languages | EN, FR, ES, PT word pairs + UI | [FACT] | SRC-069 |
| Round length | Typical 3–5 minutes | [FACT] | SRC-069 |
| Content / SEO | Product landing + FAQ on undercover.gg | [OBSERVATION] | SRC-069 |
| LAST VERIFIED | 2026-09-30 | | |
| CONFIDENCE | High for landing claims; live Discord client QA not done | Medium-High | |

Overlap with Squimbo: Discord Activity party for small groups; social deduction voting ≠ most_likely sealed vote. [INFERENCE]

---

## C-03 — Flantic Activity Arcade (+ Flantic brand)

| Field | Value | Label | Source |
| ----- | ----- | ----- | ------ |
| Official URL (Arcade) | https://flantic.app/docs/arcade | [FACT] | SRC-070 |
| Brand home | https://flantic.app/ (multipurpose **bot** marketing) | [FACT] | SRC-071 |
| Category | Voice-channel Activity arcade (8 games) + separate moderation bot | [FACT] | SRC-070, SRC-071 |
| Discord support | Arcade = **Discord Activity** (rocket launcher → Flantic → Arcade) | [FACT] docs | SRC-070 |
| Bot layer | Prefix commands, antinuke, tickets, etc. | [FACT] | SRC-071 |
| Online / offline | Online | [INFERENCE] | |
| Install | Activity: no separate install claimed; Bot: add bot to server | [FACT]/[OBSERVATION] | SRC-070, SRC-071 |
| Players (examples) | Tic Tac Toe 2; Memory 2–6; Punchline/Reaction/Reflex/Imposter 3–8; Doodle Guess 2–8 | [FACT] | SRC-070 |
| Pricing (bot Prime) | Free core bot; Prime from €2.49/mo | [FACT] | SRC-071 |
| Pricing (Arcade Activity) | UNKNOWN (not stated on arcade doc) | [UNKNOWN] | SRC-070 |
| Core mechanic (Arcade) | Multiple: drawing, reaction, punchline voting, imposter word, board games | [FACT] | SRC-070 |
| Closest to Squimbo | Punchline (anonymous answers + vote) / social tables — still not “who is most likely” among players | [INFERENCE] | |
| LAST VERIFIED | 2026-09-30 | | |
| CONFIDENCE | High that Arcade is documented as Activity; relationship bot↔Activity under same brand | High | |

Critical distinction: Flantic homepage sells a **bot**; Arcade docs sell an **Activity**. Do not collapse them. [FACT]

---

## C-04 — Spikey

| Field | Value | Label | Source |
| ----- | ----- | ----- | ------ |
| Official URL | https://spikey.app/ | [FACT] | SRC-072 |
| Info / docs | https://spikey.app/info | [FACT] | SRC-073 |
| Category | Discord multiplayer minigames | [FACT] | SRC-073 |
| Discord support | **Bot** (invite bot; slash commands; `/status`) — **not** described as Discord Activity | [FACT] | SRC-073 |
| Online / offline | Online (bot in server) | [INFERENCE] | |
| Install | Invite bot to server | [FACT] | SRC-073 |
| Browser | Games in Discord channels; no external dashboard required claimed | [FACT] | SRC-073 |
| Mobile | UNKNOWN | [UNKNOWN] | |
| Players | Default lobby sizes UNKNOWN; Premium up to 99 on some games (Mismatch, Staircase) | [FACT] partial | SRC-073 |
| Pricing | Free + optional Premium (Patreon); Premium unlocks larger lobbies / options | [FACT] | SRC-073 |
| Core mechanic | GunGame, Liar's Dice, Spy Words, Staircase, Who's Lying, Who's The Spy, etc. | [FACT] | SRC-072 |
| Economy | In-bot coins / leaderboards claimed | [FACT] | SRC-072 |
| LAST VERIFIED | 2026-09-30 | | |
| CONFIDENCE | High it is a bot, not an Activity | High | |

Overlap: social deduction / party minigames in Discord, but **slash-bot surface**, not Activity iframe. [FACT]/[INFERENCE]

---

## C-05 — Gamebot

| Field | Value | Label | Source |
| ----- | ----- | ----- | ------ |
| Official URL | https://gamebot.rocks/ | [FACT] | SRC-074 |
| Docs | https://gamebot.rocks/docs | [FACT] | SRC-074 |
| Premium | https://gamebot.rocks/premium | [FACT] | SRC-075 |
| Category | Multiplayer party/board games via Discord bot | [FACT] | SRC-074 |
| Discord support | **Slash-command bot** (`/play`, `/gamelist`); not Activity | [FACT] | SRC-074 |
| Online / offline | Online | [INFERENCE] | |
| Install | Add bot to Discord | [FACT] | SRC-074 |
| Players (examples) | CAH 3–12; Chess 2; Wisecracks 3–18 (from earlier docs synthesis) | [OBSERVATION] | Confirm live per-game on docs; Stage 5/search snippets |
| Pricing | Free bot + Premium from $4.99/mo; shop cosmetics | [FACT] | SRC-075 |
| Server count claim | “100123 servers” on homepage snippet | [OBSERVATION] | Marketing number; treat as UNVERIFIED magnitude |
| Core mechanic | CAH, chess, poker, Survey Says, Wisecracks, etc. | [FACT] | SRC-074 |
| LAST VERIFIED | 2026-09-30 | | |
| CONFIDENCE | High bot surface; exact live game list may change | Medium-High | |

---

## C-06 — Ask Away (Partial)

| Field | Value | Label | Source |
| ----- | ----- | ----- | ------ |
| Official URL | https://activities.rocks/ask-away | [FACT] | SRC-076 |
| Stage 7 fetch | Cloudflare challenge; page body not retrieved | [OBSERVATION] | SRC-076 |
| Prior observation (Stage 4/5) | Claims ice-breaker for Discord; “Who knows you best?”; play via Activities bot `/activity`; free | [OBSERVATION] | SRC-066 / Stage 4 |
| Discord support | Appears Activity-oriented via “Activities bot” launch path | [OBSERVATION] | Not re-verified live |
| Players / pricing / offline | UNKNOWN | [UNKNOWN] | |
| LAST VERIFIED | 2026-09-30 (blocked) | | |
| CONFIDENCE | Low–Medium | | |

Pitch overlap with Squimbo (“who knows you best”) is notable but **unverified** beyond fan/landing text. [OBSERVATION]

---

## C-07 — Ice Breaker bot on Top.gg (Partial)

| Field | Value | Label | Source |
| ----- | ----- | ----- | ------ |
| Listing URL | https://top.gg/bot/838686730428088351 | [FACT] | SRC-077 |
| Stage 7 fetch | Cloudflare blocked | [OBSERVATION] | SRC-077 |
| Prior observation | Bot with icebreaker / WYR / NHIE / ToD / This or That packs | [OBSERVATION] | Stage 5 SRC-066 |
| Discord support | **Bot** (Top.gg bot listing) | [OBSERVATION] | |
| Other fields | UNKNOWN pending unblock | [UNKNOWN] | |
| LAST VERIFIED | 2026-09-30 (blocked) | | |
| CONFIDENCE | Low | | |

---

## C-08 — mostlikelyto.fun

| Field | Value | Label | Source |
| ----- | ----- | ----- | ------ |
| Official URL | https://mostlikelyto.fun/ | [FACT] | SRC-078 |
| Category | Browser “Most Likely To” party game / question site | [FACT] | SRC-078 |
| Discord support | **Not** a Discord Activity. Video-call play via screen share mentioned in FAQ | [FACT] | SRC-078 |
| Online / offline | Online web; offline UNKNOWN | [FACT]/[UNKNOWN] | |
| Install | No app/signup claimed | [FACT] | SRC-078 |
| Browser | Yes (primary) | [FACT] | SRC-078 |
| Mobile | Works on phones claimed | [FACT] | SRC-078 |
| Players | Point mode any group / even 2; Vote mode ≥3 | [FACT] | SRC-078 |
| Pricing | Free; no payment claimed | [FACT] | SRC-078 |
| Core mechanic | Who's most likely; point or secret vote on one phone; categories | [FACT] | SRC-078 |
| LAST VERIFIED | 2026-09-30 | | |
| CONFIDENCE | High | | |

Mechanic cousin to Squimbo; **platform different** (web phone pass vs Discord Activity). [FACT]/[INFERENCE]

---

## C-09 — VoteMostLikely

| Field | Value | Label | Source |
| ----- | ----- | ----- | ------ |
| Official URL | https://www.votemostlikely.com/ | [FACT] | SRC-079 |
| Category | Online multiplayer Most Likely To | [FACT] | SRC-079 |
| Discord support | Marketing: play over Zoom/Discord/FaceTime by sharing link/screen — **not** Discord Activity | [FACT] | SRC-079 |
| Online / offline | Online | [FACT] | |
| Install | Browser; no app claimed | [FACT] | SRC-079 |
| Players | Standard 3–12; Event Host spectator up to 100 | [FACT] | SRC-079 |
| Pricing | Free base (30 questions); Premium / Adults Only / Event Host paid tiers (e.g. NSFW $4.99 mentioned; Premium details on page) | [FACT] | SRC-079 |
| Core mechanic | Simultaneous anonymous voting, leaderboard, AI/custom decks | [FACT] | SRC-079 |
| LAST VERIFIED | 2026-09-30 | | |
| CONFIDENCE | High for landing claims | | |

---

## Comparison matrix (verified fields only)

| ID | Surface | Discord Activity? | Most-likely mechanic? | Free tier claimed? |
| -- | ------- | ----------------- | --------------------- | ------------------ |
| Squimbo | Discord Activity | Yes [FACT] product | Yes sealed most_likely | Yes (marketing) |
| C-01 | Platform Activities | Yes | No (catalog) | UNKNOWN per title |
| C-02 Undercover | Activity (claimed) | Yes (claim) | No (word undercover) | Yes |
| C-03 Flantic Arcade | Activity (docs) | Yes | No (Punchline ≠ most likely) | Arcade price UNKNOWN |
| C-04 Spikey | Bot | No | No | Yes + Premium |
| C-05 Gamebot | Bot | No | No | Yes + Premium |
| C-06 Ask Away | Activity-ish (partial) | Likely / unconfirmed | Icebreaker Qs UNKNOWN detail | Free (prior obs) |
| C-07 Ice Breaker | Bot (partial) | No | Question packs | UNKNOWN |
| C-08 mostlikelyto.fun | Web | No | Yes | Yes |
| C-09 VoteMostLikely | Web | No | Yes | Freemium |

---

## SEO / content implications (inference)

1. SERP “Discord party game” mixes **Activities and bots** — Squimbo copy must keep Activity≠bot crisp (already a guide).  
2. “Most likely” SERP is owned by **web/apps** — Squimbo differentiator is Discord-native sealed rounds among voice friends, not a bigger question bank.  
3. Undercover / Flantic Arcade are nearer **platform peers** for Activity acquisition SEO than Spikey/Gamebot.  
4. Ask Away may collide on “who knows you best” language — re-verify when Cloudflare allows.  

---

## Unknowns

| ID | Item |
| -- | ---- |
| U-C01 | Ask Away live fields (Cloudflare) |
| U-C02 | Ice Breaker bot full verification |
| U-C03 | Flantic Arcade monetization |
| U-C04 | Undercover live Discord Directory listing / server count |
| U-C05 | Jackbox / Fizbo if later needed |

## Next actions

1. Stop.  
2. Continue → **Stage 8 Keyword gaps** + **Stage 9 Content gaps** using this matrix.  
3. Optional: retry Ask Away / Top.gg via browser when not blocked.
