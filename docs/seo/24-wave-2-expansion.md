# Wave 2 — SEO expansion

Date: 2026-09-30  
**Approval:** Wave 2 full (operator). **Constraint:** EN-only; **no PL** marketing catalog.

Depends on: Stages 12–19 ship + Preview host for first users.

---

## 1. Scope

| In | Out |
| -- | --- |
| Deepen Tier 0–1 (extra sections/FAQ, no new paths) | New marketing URLs |
| Tier 2 pass (how-to, vote-in-dark, players/mobile/no-host) | PL locale SEO |
| Directory operator checklist | pSEO / question banks |
| KG-12 SERP probe + verdict | Competitor brand pages |

---

## 2. KG-12 probe (2026-09-30)

| Query | Observed SERP shape | Label |
| ----- | ------------------- | ----- |
| `most likely Discord Activity` | Mismatch (warnings / “likely” spam / developer Activity docs) — not party-game “most likely” | [OBSERVATION] SRC-081 |
| `who is most likely Discord Activity game` | Generic Discord Activities / listicles — no Squimbo; no dedicated “most likely Activity” product cluster | [OBSERVATION] SRC-082 |
| `"most likely" Discord Activity party` | **Web generators** (VoteMostLikely, Poparty) using Discord as call context; not Discord Activities | [OBSERVATION] SRC-083 |

**Verdict: do not create** `/most-likely-discord-activity` (or similar).  
Intent is covered by `/most-likely` (format + Discord-native contrast) + `/discord-activity` (platform). New URL would cannibalize without a distinct SERP. HOLD lifted → **REJECT** until SERP changes.

---

## 3. Directory checklist (operator)

Live listing verified 2026-09-30: https://discord.com/discovery/applications/1545063528422183043

| Check | Status | Notes |
| ----- | ------ | ----- |
| Description: Activity party / sealed most likely / voice | **DONE** | Overview: How a night goes + Why Squimbo (sealed votes, no host, Discord identities) |
| Website → marketing `/en` | **DONE** | `https://web-silk-six-61.vercel.app/en` |
| Privacy / Terms → Preview legal | **DONE** | `/en/privacy`, `/en/terms` |
| Support Discord | **DONE** | `https://discord.gg/PrQkDcxEqk` |
| Categories Games (+ Social) | **DONE** | Social, Games; ~3 servers UI |
| Languages en+pl (Activity UI) | **OPEN** | Listing shows **English, US** only; product UI chrome is en+pl — optional portal fix |
| No bot / slash claims | **OK** | Not observed |
| In-App Purchases badge | **NOTE** | Discord UI shows “In-App Purchases”; marketing still claims free to play as Activity — do not invent paid features on site |

Operator: optional follow-up = add Polish (or “en + pl”) under Supported Languages if the portal allows, to match product UI.

---

## 4. Code deliverables (this wave)

See changelog + copy diffs: home deepen, party/most-likely/activity/open/voice deepen, how-to + vote-in-dark + Tier 3 fact polish.

## 5. Still deferred

GSC query review after index matures; AI citation probes; optional outreach (Stage 17 P1).
