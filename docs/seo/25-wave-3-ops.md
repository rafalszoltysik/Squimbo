# Wave 3 — Ops, indexation, first-user discovery

Date: 2026-09-30  
Depends on: Wave 2 + live Directory  
Constraint: EN-only; no new URLs; no PL SEO catalog.

---

## 1. Indexation re-probe (2026-09-30)

| Probe | Result | Label |
| ----- | ------ | ----- |
| `site:web-silk-six-61.vercel.app` | No results | [OBSERVATION] SRC-084 |
| `Squimbo Discord Activity` | Still unrelated (Destiny/VRoid/GitHub/Squibbo) — no product or Directory | [OBSERVATION] SRC-085 |
| `Squimbo site:discord.com/discovery/applications` | No Squimbo Directory hit in tool results | [OBSERVATION] SRC-086 |

**Verdict:** Content + Directory are ready for humans; **Google still does not treat Squimbo as an indexed entity.** That is now the #1 SEO bottleneck — not more pages.

Code shipped this wave: Organization `sameAs` → Directory + Support Discord; `llms.txt` Product facts include Directory URL when Client ID is set.

---

## 2. GSC monitoring cadence (operator)

Property: Preview host (already set up).

| Cadence | Action |
| ------- | ------ |
| After each web deploy | URL Inspection on `/en` (and optionally party + most-likely) — Request indexing if “URL is not on Google” |
| Weekly (first 4 weeks) | Coverage / Page indexing; note any crawled-not-indexed reasons |
| Weekly | Performance → Queries (even if sparse); screenshot if brand or “discord party” appears |
| When first impression shows | Log in `22-verification-log.md` + new SRC |

Do **not** expect day-1 rankings. Goal: first indexed URL + first branded query impression.

---

## 3. First-user / outreach playbook (Stage 17 P1 — execute offline)

Facts only; no competitor smears; prefer Directory link for “play”, site `/en` for “what is it”.

| Channel | Message shape | Link |
| ------- | ------------- | ---- |
| Your Discord / playtest friends | “We’re live as a Discord Activity — open Squimbo in voice” | Directory |
| Support server pin | What Squimbo is + how to launch | Directory + `/en` |
| Friend servers (consent) | Short invite to try one sealed most-likely night | Directory |
| Optional Product Hunt later | Only if you want a launch moment | Directory + `/en` |

**Do not:** spam foreign servers, buy upvotes, list as a bot on Top.gg.

Log any public mention URL in `22-verification-log.md`.

---

## 4. Deploy reminder

Wave 1–3 copy/schema only help SEO after **Preview redeploy**. Confirm `NEXT_PUBLIC_SITE_URL` stays the Vercel host while first users are there.

---

## 5. Explicitly not next

- New marketing URLs  
- PL catalog  
- pSEO / question banks  
- Wikidata  
- Claiming AI citations  

## 6. Success for Wave 3

| Signal | Now | Target |
| ------ | --- | ------ |
| Preview in `site:` or GSC indexed | Fail | At least `/en` indexed |
| Brand+Discord shows Directory or site | Fail | Either appears |
| First playtests using Directory | Operator | Ongoing |
