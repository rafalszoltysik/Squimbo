# 01 - Product research (Squimbo)

Date: 2026-09-30  
Phase: RESEARCH  
Confidence overall: High for in-repo product facts; Low for public discoverability / production domain health.

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Entity definition

| Field | Value | Label | Source |
| ----- | ----- | ----- | ------ |
| Product name | Squimbo | [FACT] | SRC-001, SRC-010 |
| Engineering package scope | `@friends/*` monorepo (rename later) | [FACT] | SRC-001 |
| Category | Discord Activity party game | [FACT] | SRC-001, SRC-010 |
| One-line pitch | You're already together. Find out who knows the group best. | [FACT] | SRC-001 |
| Marketing tagline (site) | Who knows the group best? | [FACT] | SRC-010 |
| Core mechanic (MVP) | `most_likely`: vote for another player; votes sealed until all voted; reveal; scores at finale | [FACT] | SRC-001 |
| Room key | Discord Activity `instanceId` | [FACT] | SRC-001 |
| Identity | Discord display names + avatars via Embedded App SDK; server-side OAuth exchange | [FACT] | SRC-001, SRC-004 |
| Host model | Technical `hostUserId` only; no in-game host privileges | [FACT] | SRC-001, SRC-010 |
| Prompt bank (MVP) | English `most_likely` only; UI chrome en + pl | [FACT] | SRC-001 |
| Operator (legal pages) | Rafał Szołtysik | [FACT] | SRC-011 (llms.txt Privacy/Terms lines) |

---

## 2. Platform and distribution

| Parameter | Value | Label | Source / gap |
| --------- | ----- | ----- | ------------ |
| Primary play surface | Discord Activity iframe (desktop + mobile Discord clients) | [FACT] | SRC-001, SRC-012 |
| What Discord Activities are | Web apps hosted in an iframe; Embedded App SDK; run in Discord on desktop, mobile, and web | [FACT] | SRC-012 |
| Marketing site role | Legal + SEO / GEO home; night runs inside Discord | [FACT] | SRC-010, SRC-002 |
| Standalone mobile app (MVP) | Out of scope | [FACT] | SRC-001 |
| Discord bot / slash chat surface as product | Out of scope (Entry Point launcher only) | [FACT] | SRC-001, SRC-004 |
| Random matchmaking | Not part of product | [FACT] | SRC-010 |
| Requires Discord account + Discord client context | Yes for play | [INFERENCE] | Follows from Activity model (SRC-001, SRC-012). No alternative login documented |
| Browser-only play outside Discord (production) | Not the product path; Activity mock exists for local/browser mock | [FACT]/[INFERENCE] | SRC-001 (surface = Discord iframe); local mock noted in SRC-004 |
| Online required | Yes for Activity + API | [INFERENCE] | Architecture is Discord iframe + Nest API + DB (SRC-001, SRC-005). No offline mode documented |
| Offline play | UNKNOWN / not claimed | [UNKNOWN] | No product claim of offline. Treat as unsupported until proven |
| Installation of separate game binary | No separate game install claimed | [FACT] | SRC-010 FAQ |
| Discord App Directory listing status | UNKNOWN | [UNKNOWN] | Not verified in Discord client/portal this session |
| Public install / Interest count | UNKNOWN | [UNKNOWN] | No public metric found |

---

## 3. Players, loop, session

| Parameter | Value | Label | Source |
| --------- | ----- | ----- | ------ |
| Min players to start | 2 | [FACT] | SRC-001, SRC-010 |
| Soft sweet spot | About 3-8 | [FACT] | SRC-001, SRC-010 |
| Hard max players | UNKNOWN | [UNKNOWN] | Soft target only in product docs; code limit deferred to technical audit |
| Soft target rounds per night | ~8-12 | [FACT] | SRC-001 |
| Scoring (MVP) | +1 to voted player on `most_likely` | [FACT] | SRC-001 |
| Other prompt kinds in schema | `this_or_that`, `truth`, `challenge` - schema only, not MVP play | [FACT] | SRC-001 |
| Category packs in lobby | Not in MVP | [FACT] | SRC-001 |
| North-star metric (product) | Weekly Active Groups completing ≥1 session | [FACT] | SRC-006 |
| Game event analytics | Planned; marketing PostHog + Vercel Analytics exist on web | [FACT] | SRC-006 |

Loop (MVP) [FACT] SRC-001:

1. Lobby: Ready; ≥2 players → start (no category picker).
2. Unused English `most_likely` prompt.
3. Vote for another player; tallies hidden while voting.
4. All voted → reveal (question + tallies/avatars). Running scores hidden until finale.
5. Next / Wrap consensus; ties → Vote again or Keep going.
6. Finale scoreboard → Play again (new `sessionKey`).

---

## 4. Pricing and monetization

| Parameter | Value | Label | Source |
| --------- | ----- | ----- | ------ |
| Free to play (marketing claim) | Yes; no paid join fee on marketing site | [FACT] | SRC-010 |
| Paid tier / IAP shipped in MVP | No (out of scope) | [FACT] | SRC-001, SRC-003 |
| Future monetization thesis | Identity / history / cosmetics / server status; not paid question packs as primary | [FACT] | SRC-003 |
| Price amounts | N/A for MVP | [FACT] | No SKU shipped |

Do not treat strategy monetization thesis as a live store offering.

---

## 5. Audience and job-to-be-done

| Item | Statement | Label | Source |
| ---- | --------- | ----- | ------ |
| Primary JTBD | Friends already on Discord voice need something to do for ~10-15 minutes | [FACT]/[INFERENCE] | Explicit strategy framing SRC-003 |
| Competes with | "What do we do now" in voice, not every game catalog | [FACT] | SRC-003 |
| Not optimizing for early | Solo DAU, install vanity, monetization before PMF | [FACT] | SRC-006 |
| Growth layer B | Future share / Friend Quiz feeding people back into sync A; not equal mode yet | [FACT] | SRC-003, SRC-007 |
| Async "How well do you know me" as MVP | Out of scope | [FACT] | SRC-001, SRC-003 |

---

## 6. Marketing / SEO surface (current)

### Intended production

| Item | Value | Label | Source |
| ---- | ----- | ----- | ------ |
| Intended origin | `https://squimbo.app` | [FACT] | SRC-001, SRC-002, SRC-005 |
| Locale | English only (`/en`); `/pl` redirects to `/en`; no hreflang yet | [FACT] | SRC-002 |
| Route source of truth | `apps/web/src/seo/registry.ts` | [FACT] | SRC-002, SRC-008 |
| GEO files | `/llms.txt`, `/llms-full.txt` | [FACT] | SRC-002 |
| Support Discord | `https://discord.gg/PrQkDcxEqk` | [FACT] | SRC-009, SRC-011 |

### Observed live host (2026-09-30)

| Item | Value | Label | Source |
| ---- | ----- | ----- | ------ |
| Reachable URL | `https://web-silk-six-61.vercel.app/en` | [OBSERVATION] | SRC-010 (user-provided host; WebFetch OK) |
| `squimbo.app` | HTTP 503 on `/en` | [OBSERVATION] | SRC-013 |
| Canonical in `llms.txt` | Preview host, not `squimbo.app` | [OBSERVATION] | SRC-011 |
| `robots.txt` | `Allow: /`; Sitemap points at Preview `sitemap.xml` | [OBSERVATION] | SRC-014 |
| `sitemap.xml` | HTTP 500 | [OBSERVATION] | SRC-015 |
| `site:` search hits | None for Preview or `squimbo.app` | [OBSERVATION] | SRC-016, SRC-017 |

### Registered content paths (repo)

From SRC-002 / SRC-008 (paths under `/en`):

| Kind | Paths |
| ---- | ----- |
| Home | `/en` |
| Pillars | `/discord-party-game`, `/discord-activity`, `/how-to-play`, `/most-likely` |
| Hub | `/faq` |
| Guides | `/open-discord-activity`, `/discord-voice-channel-game`, `/vote-in-the-dark`, `/discord-party-game-players`, `/discord-activity-mobile`, `/no-host-party-game`, `/discord-icebreaker`, `/discord-activity-not-a-bot` |
| Support / legal | `/support`, `/privacy`, `/terms` |

Content quality judgment of each URL is deferred to content-gap / on-page stages. Existence is [FACT] via registry + live `llms.txt` link list.

---

## 7. Brand / entity footprint (external)

| Check | Result | Label | Source |
| ----- | ------ | ----- | ------ |
| Web search "Squimbo Discord Activity party game" | Did not return this product's marketing site | [OBSERVATION] | SRC-018 |
| Confusable names | "Squimblo" ladder site; Balatro community "Squimbo"; GitHub user `@squimbo` | [OBSERVATION] | SRC-018 |
| Discord App Directory | Public listing exists for app `1545063528422183043`; UI shows 3 servers; categories Community + Games | [OBSERVATION] | SRC-036 (added Stage 2) |
| Product Hunt / G2 / AlternativeTo listing | Not searched exhaustively; treat as UNKNOWN for dedicated listing pages | [UNKNOWN] | Need dedicated search next stages |
| Wikipedia / Wikidata entity | UNKNOWN | [UNKNOWN] | Not checked |

Implication for later entity strategy: brand queries may collide until `squimbo.app` + Discord presence are strong.

---

## 8. Product constraints that bind SEO claims

Do not publish or optimize for claims that contradict MVP [FACT] SRC-001 / SRC-003:

- Not a slash-command bot product
- Not random matchmaking
- Not Jackbox clone positioning that implies purchase of a TV party pack (competitor verification later)
- Not async Friend Quiz as shipped
- Not category pack picker
- Not AI-generated prompt product
- Not standalone mobile app
- Do not invent competitor feature parity
- Marketing site EN-only for now

---

## 9. Organic acquisition role (working framing)

| Statement | Label |
| --------- | ----- |
| Core distribution edge is Discord social graph + voice co-location | [FACT] from strategy SRC-003 |
| Marketing SEO/GEO should explain what Squimbo is, how to open an Activity, and who it is for, then send users into Discord | [INFERENCE] from SRC-002 + SRC-003 |
| SEO will not replace "someone in voice says let's play" | [HYPOTHESIS] |
| Preview host is valid for content inspection, not for final canonical / indexation strategy | [INFERENCE] |

---

## 10. Unknowns and missing verification

See master index U-001…U-008. Highest priority for SEO system:

1. Production domain health (`squimbo.app`).
2. Correct `NEXT_PUBLIC_SITE_URL` on the environment that should be indexed.
3. Working `sitemap.xml`.
4. Search Console / Bing property ownership.

---

## 11. Next actions

1. Stop here per execution protocol.
2. On continue: Stage 2 technical audit (Preview + repo), tagging Production gaps as UNKNOWN where `squimbo.app` is down.
3. Do not implement code until research → strategy → approval.

---

## Assumptions log

| ID | Assumption | Label |
| -- | ---------- | ----- |
| A-001 | User-provided `web-silk-six-61.vercel.app` is the current Squimbo marketing Preview | [INFERENCE] |
| A-002 | Intended public canonical remains `https://squimbo.app` after Production is healthy | [HYPOTHESIS] aligned with docs |
| A-003 | No offline mode exists | [INFERENCE] until product explicitly claims otherwise |
