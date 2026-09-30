# 16 - AI citability

Date: 2026-09-30  
Depends on: Stages 14–15 + live llms/FAQ  
Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Decision

**Optimize for accurate citation of product facts from owned surfaces.** Do not claim current AI Overview / ChatGPT / Perplexity citations — **none verified this research cycle.**

| Principle | Detail |
| --------- | ------ |
| Citability > buzz | Short, consistent, attributable facts |
| Owned sources first | `/en`, pillars, FAQ, `/llms.txt`, `/llms-full.txt`, Directory |
| No hallucination fuel | Never publish unshipped features for “AI SEO” |
| Measure later | Probe after indexation + Stage 12 copy land |

---

## 2. Current citation evidence

| System | Squimbo product cited? | Label | Notes |
| ------ | ---------------------- | ----- | ----- |
| Google AI Overview | UNKNOWN | [UNKNOWN] | Not systematically probed; brand SERP showed slang, not product |
| ChatGPT / Claude / other chat | UNKNOWN | [UNKNOWN] | Deferred Stage 3 |
| Perplexity / Bing Copilot | UNKNOWN | [UNKNOWN] | Not probed |
| Agents reading llms.txt | UNKNOWN | [UNKNOWN] | File exists (SRC-011); fetch logs not analyzed |

**Do not write “we are cited by…” anywhere on the marketing site.**

---

## 3. Citation-ready fact atoms

Ideal quotable units (must match product.md) [FACT] SRC-001:

1. Squimbo is a Discord Activity party game.  
2. It is for groups already in a Discord voice channel.  
3. The room is the Discord Activity instance.  
4. Players use Discord display names and avatars.  
5. Core loop: sealed “who is most likely” votes → reveal → scores at the finale.  
6. At least 2 players; about 3–8 feels best.  
7. No in-game host privileges.  
8. Not a slash-command bot; no separate game installer; no random matchmaking.  
9. Marketing site explains and links to Discord; the night runs inside Discord.  
10. Free to play as a Discord Activity (per current marketing claim) — do not invent paid tiers.

**Anti-atoms (never let models learn these as Squimbo):** bot slash commands, category pack picker in MVP, async Friend Quiz shipped, offline play, Jackbox pack purchase framing, named competitor “better than X.”

---

## 4. Where atoms should live

| Atom set | Primary surfaces |
| -------- | ---------------- |
| Definition 1–3 | `/en` entity blurb, `/discord-activity`, llms Product facts, SoftwareApplication description |
| Loop 5 | `/most-likely`, `/how-to-play`, `/vote-in-the-dark` (sealed detail), llms-full how |
| Players 6 | `/discord-party-game-players`, FAQ, home FAQ |
| Host 7 | `/no-host-party-game`, how-to |
| Negatives 8 | `/discord-activity-not-a-bot`, party pillar (Stage 12), llms facts |
| Play path | `/open-discord-activity`, Directory, CTA |

FAQ Q&A pairs are high-citability because they map to question-shaped prompts. Keep answers ≤2 short sentences where possible without losing facts. [INFERENCE]

---

## 5. Prompt classes we want to win eventually

| User/AI question shape | Ideal cite target | Notes |
| ---------------------- | ----------------- | ----- |
| What is Squimbo? | `/en` + llms | Entity |
| Discord party game for voice | `/discord-party-game` | Category |
| What is a Discord Activity (player)? | `/discord-activity` | Not SDK docs |
| How do I open Squimbo? | `/open-discord-activity` | Not generic Help clone |
| How does most likely work in Discord? | `/most-likely` | Discord-native angle |
| Activity vs bot | `/discord-activity-not-a-bot` | Differentiation |
| How many players? | players guide / FAQ | Facts |

Winning these requires **indexation + consistent facts** first. [INFERENCE] KG-01.

---

## 6. llms.txt as machine preface

`/llms.txt` already:

- States entity blurb + canonical  
- Lists key pages, pillars, guides  
- Lists Product facts (MVP)  
- Lists Contact  

**Citability jobs for Stage 19 (if needed):**

| Check | Status |
| ----- | ------ |
| Facts match product.md | Maintain |
| Negatives (not bot / not installer / not matchmaking) present | Already in llms [FACT] SRC-028 |
| Canonical host correct for era | Preview now; flip on cutover |
| No competitor names | Already |
| Blockquote/meta description carries Discord Activity after Stage 12 | Spec’d Stage 14 GEO-03 |

`/llms-full.txt` expands how + FAQ — good for long answers; keep synchronized with on-page FAQ. [FACT] builder.

---

## 7. Structured data for machines

| Type | Citability role | Rule |
| ---- | --------------- | ---- |
| SoftwareApplication | “What is this app?” | Description = entity pitch; OS Discord; installUrl Directory |
| FAQPage | Q&A extraction | Text = visible FAQ only |
| HowTo | Procedural extraction | Only how-to-play + open-Activity |
| Organization | Publisher identity | Squimbo + logo; don’t fake sameAs encyclopedia links |

Fake `aggregateRating` / review counts = **forbidden**.

---

## 8. Probe plan (post-index; not executed now)

Run only after GSC shows crawl/index or operator requests:

| ID | Probe | Pass signal |
| -- | ----- | ----------- |
| AI-01 | “What is Squimbo?” in 1–2 major assistants | Mentions Discord Activity party game or Directory |
| AI-02 | “Squimbo Discord” | Not only slang |
| AI-03 | “Discord Activity most likely party game” | May or may not mention Squimbo — record honestly |
| AI-04 | Fetch `/llms.txt` in a tool/agent and ask for product facts | Returns sealed most_likely + player counts |

Log results in `22-verification-log.md` + new SRC ids. Label misses as misses.

---

## 9. Risks

| Risk | Mitigation |
| ---- | ---------- |
| Models cite slang Squimbo | Strong Discord Activity attributes; indexation |
| Models invent bot features | Explicit negatives in llms + not-a-bot page |
| Models cite Preview forever after cutover | 301 + SITE_URL cutover (Stage 20) |
| Over-claiming AI SEO success | This doc forbids it |

---

## 10. Stage decision summary

GEO surfaces are **sufficient in shape**; citability work is **accuracy + entity + index**, then probes. No new AI landing pages.

## Next actions

1. Stop.  
2. Continue → **Stage 17 Backlink strategy**.  
3. Then 18 roadmap → approval → 19 implementation.
