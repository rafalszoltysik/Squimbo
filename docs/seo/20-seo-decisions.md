# 20 - SEO decisions

Status: Partially filled (host decision only). Strategy decisions still pending later stages.

## Locked decisions

| Date | Decision | Reason | Previous | New | Source |
| ---- | -------- | ------ | -------- | --- | ------ |
| 2026-09-30 | Use Preview `https://web-silk-six-61.vercel.app` as the active SEO research / interim public marketing host | Operator instruction; `squimbo.app` not usable | Undecided between Preview and production domain | Preview host locked for ongoing research stages | SRC-038 |
| 2026-09-30 | No programmatic SEO (no template URL factories) | Gaps are index/entity/angle; Stage 9 thin-content rejects banks/listicles/locale matrices | Undecided / expected no | **NO pSEO** until explicit revisit + evidence + approval | Stage 13 |
| 2026-09-30 | No new marketing URLs in research phase | Registry covers intents; Stage 9–11 affirm | Open to new URLs | Curated registry only; KG-12 later REJECTED (Wave 2) | Stages 9–11, 13, Wave 2 |
| 2026-09-30 | GEO = harden llms + JSON-LD; no AI-only page farm | Surfaces already exist; truth > sprawl | Undecided | Keep `/llms.txt`, `/llms-full.txt`, schema; mirror product.md | Stage 14 |
| 2026-09-30 | Entity via attributes + Directory + index; defer Wikidata | Brand SERP slang-dominated; Directory live | Undecided | No premature encyclopedia; no slang warfare copy | Stage 15 |
| 2026-09-30 | Do not claim AI citations | No probes showed product citations | Undecided | Citability = fact atoms + later probes only | Stage 16 |
| 2026-09-30 | No link-building factory; prioritize Directory↔site + earned Discord mentions | Distribution is voice/Discord; DR unavailable; brand entity fragile | Undecided | Reject PBN/spam/bot-directory SEO; optional curated listings only | Stage 17 |
| 2026-09-30 | Approve Stage 18 Phase 0+1+2 for implementation | Operator | Awaiting | Phases 0+1+2 in scope; 1–2 implemented in repo | User + Stage 19 |
| 2026-09-30 | Interim public host for first users = Vercel Preview | Operator: GSC done; first users on Vercel domain | Preview research-only | Keep `https://web-silk-six-61.vercel.app` as canonical / indexable marketing host until `squimbo.app` cutover | User 2026-09-30 |
| 2026-09-30 | GSC Phase 0.1 done | Operator | Pending | Sitemap / property handled on Preview | User 2026-09-30 |
| 2026-09-30 | Wave 2 full; EN-only (no PL SEO catalog) | Operator | Wave 1 | Deepen + Tier 2 + Directory checklist; no PL | User + `24-wave-2-expansion.md` |
| 2026-09-30 | KG-12 dedicated URL REJECT | SERP probes mismatch / web-generator dominated | HOLD | Do not add most-likely-Activity URL; deepen `/most-likely` | SRC-081…083 |
| 2026-09-30 | Directory listing complete for first users | Operator + live verify | Checklist open | Website/legal/support linked; description OK; languages optional | Live Directory 2026-09-30 |
| 2026-09-30 | Wave 3 focus = indexation + outreach, not more pages | Re-probe site:/brand still fail | Content-scale temptation | Ops playbook + Org sameAs; wait for GSC index | SRC-084…086 |
| 2026-09-30 | Wave 4 curated long-tail URL expansion (+16 guides) | Operator: plan+implement large URL map; not thin pSEO | No-new-URL freeze | 24 guides / 29 registry routes; EN-only; no banks/PL/vs-pages | `27-wave-4-url-map.md` |
| 2026-09-30 | Wave 5 curated long-tail URL expansion (+16 guides) | Operator: continue URL map implementation | Wave 4 complete | 40 guides / 45 registry routes; EN-only; no banks/PL/vs-pages | `28-wave-5-url-map.md` |
| 2026-09-30 | Wave 6 curated long-tail URL expansion (+16 guides) | Operator: go wave 6 | Wave 5 complete | 56 guides / 61 registry routes; EN-only; no banks/PL/vs-pages | `29-wave-6-url-map.md` |

## Open decisions (not locked)

| Topic | Options | Blocked by |
| ----- | ------- | ---------- |
| Long-term canonical domain | Stay on Preview vs cut over to `squimbo.app` later | Production domain health / launch timing |
| Whether Preview should stay `index,follow` after eventual cutover | noindex Preview vs delete Preview | Domain cutover plan |
| Directory Supported Languages | Keep English US vs add Polish to match Activity UI en+pl | Operator portal (optional) |
