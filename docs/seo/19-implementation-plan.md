# 19 - Implementation plan

Date: 2026-09-30  
**Approval:** Operator approved Stage 18 **Phase 0+1+2** (2026-09-30).

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Scope in this implement cycle

| Phase | In scope | Code in repo? |
| ----- | -------- | ------------- |
| 0 Ops | GSC, Directory, host decision process | Checklist for operator; no app code |
| 1 P0 | home, party, most-likely, open-Activity | **Yes** |
| 2 P1 | activity, voice, not-a-bot, icebreaker, FAQ | **Yes** |
| 4 GEO | Spot-check after deploy | Verify via builders/tests |

Out of scope: new URLs, pSEO, Phase 5 outreach, Phase 6 research, `squimbo.app` cutover (still open).

---

## 2. Phase 0 — operator checklist (not automated)

| ID | Task | Owner |
| -- | ---- | ----- |
| R-0.1 | GSC: confirm sitemap for Preview; URL Inspection `/en` + party + most-likely | Operator |
| R-0.2 | Discord Directory: align listing language with product (UI en+pl) | Operator |
| R-0.3 | Discord Directory: check if marketing URL can be linked | Operator |
| R-0.4 | Host cutover still **open** — keep Preview interim | Stage 20 |
| R-0.5 | Do not noindex Preview until cutover plan exists | Operator |

Log outcomes in `22-verification-log.md` when done.

---

## 3. Code changes (Phases 1–2)

| ID | File(s) | Change |
| -- | ------- | ------ |
| R-1.1 | `apps/web/src/i18n/messages/en.ts`, `page.tsx` | Entity meta; optional not-a-bot Learn link |
| R-1.2 | `seo/copy/discord-party-game.ts`, `registry.ts` related | Activity≠bot; related → not-a-bot |
| R-1.3 | `seo/copy/most-likely.ts` | Discord-native vs web/phone-pass; vote-in-dark pointer |
| R-1.4 | `seo/copy/open-discord-activity.ts` | Squimbo meta title; Discord Help deferral; how-to after launch |
| R-2.1 | `seo/copy/discord-activity.ts` | Friends-in-voice lead |
| R-2.2 | `seo/copy/discord-voice-channel-game.ts`, registry related | JTBD reinforce; related → not-a-bot |
| R-2.3 | `seo/copy/discord-activity-not-a-bot.ts` | Light tighten if needed |
| R-2.4 | `seo/copy/discord-icebreaker.ts` | Sealed Activity icebreaker angle |
| R-2.5 | `seo/copy/faq.ts` | Align + Activity≠bot Q |

Discord Help URL used: `https://support-apps.discord.com/hc/en-us/articles/26593412574359-How-to-Use-Apps` (official Apps Help; matches Stage 5 SERP peers).

---

## 4. Verification

1. `pnpm --filter @friends/web test`  
2. Meta titles/descriptions unique (registry spec)  
3. llms builders still include all routes + Product facts  
4. No competitor brand names; no invented features  

---

## 5. Status

Implementation executed in the same session as this plan (Phases 1–2 code). Phase 0 remains operator-owned.
