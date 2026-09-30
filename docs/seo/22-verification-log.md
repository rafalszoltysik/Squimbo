# 22 - Verification log

| Item | Claim | Source | Verified | Date | Confidence |
| ---- | ----- | ------ | -------- | ---- | ---------- |
| Product category | Discord Activity party game | SRC-001, SRC-010 | YES | 2026-09-30 | High |
| Room model | Activity instance is the room | SRC-001 | YES | 2026-09-30 | High |
| Core mechanic MVP | Sealed `most_likely` votes → reveal → finale | SRC-001, SRC-010 | YES | 2026-09-30 | High |
| Min players | 2 to start | SRC-001, SRC-010 | YES | 2026-09-30 | High |
| Sweet spot players | About 3-8 | SRC-001, SRC-010 | YES | 2026-09-30 | High |
| Hard max players | (any number) | - | NO | 2026-09-30 | UNKNOWN |
| Host privileges | None in-game | SRC-001, SRC-010 | YES | 2026-09-30 | High |
| Separate app install | Not required for the game itself | SRC-010 | YES (marketing claim) | 2026-09-30 | High |
| Desktop + mobile Discord | Claimed on marketing + product | SRC-001, SRC-010 | YES (docs/site); live Discord client QA not done | 2026-09-30 | Medium |
| Free to play | Yes; no paid join fee on marketing site | SRC-010 | YES (marketing claim) | 2026-09-30 | High |
| Paid tier live | None in MVP | SRC-001, SRC-003 | YES (scope docs) | 2026-09-30 | High |
| Offline play | Supported | - | NO / not claimed | 2026-09-30 | UNKNOWN |
| Online play | Requires Discord Activity + backend | SRC-001, SRC-012 | YES (architecture) | 2026-09-30 | High |
| Browser play outside Discord | Primary product path | SRC-001 | NO (not primary) | 2026-09-30 | High |
| Is Discord Activity (not "works while on Discord") | Yes - runs as Activity iframe | SRC-001, SRC-012 | YES | 2026-09-30 | High |
| Intended marketing domain | squimbo.app | SRC-001, SRC-002, SRC-005 | YES (docs) | 2026-09-30 | High |
| squimbo.app reachable | Serves marketing home | SRC-013 | NO (HTTP 503) | 2026-09-30 | High |
| Preview marketing reachable | web-silk-six-61.vercel.app/en | SRC-010, SRC-021 | YES | 2026-09-30 | High |
| Preview sitemap (WebFetch tool) | Valid XML 200 | SRC-015, SRC-026 | NO (HTTP 500) | 2026-09-30 | High |
| Preview sitemap (browser fetch) | Valid XML 200 with 17 locs | SRC-025 | YES | 2026-09-30 | High |
| Preview content URLs | HTTP 200 for registry paths | SRC-023 | YES | 2026-09-30 | High |
| Preview robots | Allow / + sitemap pointer | SRC-014, SRC-027 | YES | 2026-09-30 | High |
| Preview home canonical | Absolute Preview `/en` | SRC-022 | YES | 2026-09-30 | High |
| Preview home JSON-LD | WebSite + Organization + SoftwareApplication + FAQPage | SRC-022 | YES | 2026-09-30 | High |
| HowTo on /how-to-play | Present (3 steps) | Stage 2 DOM extract | YES | 2026-09-30 | High |
| HowTo on /open-discord-activity | Present (3 steps) | Stage 2 DOM extract | YES | 2026-09-30 | High |
| Preview 404 | noindex | SRC-037 | YES | 2026-09-30 | High |
| Locale redirects | `/` and `/pl*` → `/en*` | SRC-024, SRC-031 | YES | 2026-09-30 | High |
| Discord App Directory listing | Squimbo public Directory page exists | SRC-036 | YES | 2026-09-30 | High |
| Discord Directory server count | 3 servers (UI) | SRC-036 | YES (UI only) | 2026-09-30 | Medium |
| Discord Directory implies paid IAP SKUs | Has purchasable IAP | SRC-036 + SRC-001 | UNVERIFIED (UI chrome only) | 2026-09-30 | Low |
| Operator GSC for Preview | Property exists; mostly empty data | SRC-039 | YES (operator report) | 2026-09-30 | High |
| Google index Preview (site:) | Any indexed Preview URL | SRC-043, SRC-045 | NO hits observed | 2026-09-30 | Medium |
| Google brand SERP for Squimbo product | Product/marketing/Directory in top results | SRC-046, SRC-047 | NO | 2026-09-30 | Medium |
| robots + sitemap discoverability | robots Allow + Sitemap line | SRC-040 | YES | 2026-09-30 | High |
| Sitemap URL count | 17 absolute Preview URLs | SRC-041 | YES | 2026-09-30 | High |
| GSC sitemap submitted | Submitted successfully | - | UNKNOWN | 2026-09-30 | - |
| Brand SERP Squimbo | Product Discord Activity appears | SRC-057 | NO | 2026-09-30 | Medium |
| Category SERP Discord party game | Multi-result SERP exists | SRC-049 | YES | 2026-09-30 | Medium |
| Procedural SERP how to open Discord Activity | Discord official docs dominate | SRC-050 | YES | 2026-09-30 | Medium |
| Mechanic SERP most likely to party game | Browser party sites dominate | SRC-051 | YES | 2026-09-30 | Medium |
| Keyword volume any seed | Numeric volume available | - | NO / unavailable | 2026-09-30 | High |
| Stage 5 brand SERP product | Squimbo Activity in Squimbo / Squimbo Discord results | SRC-059, SRC-060 | NO | 2026-09-30 | Medium |
| Stage 5 category SERP peers | undercover.gg / Flantic / Spikey / Gamebot appear for Discord party game | SRC-061 | YES (URLs observed) | 2026-09-30 | Medium |
| Stage 5 most-likely SERP | Discord Activity products in top tool links | SRC-065 | NO | 2026-09-30 | Medium |
| Undercover | Discord Activity (landing) | SRC-069 | YES (landing claim) | 2026-09-30 | Medium-High |
| Undercover | Free; no IAP/ads | SRC-069 | YES (FAQ claim) | 2026-09-30 | High |
| Undercover | Players 3–12 | SRC-069 | YES | 2026-09-30 | High |
| Flantic Arcade | Discord Activity | SRC-070 | YES (docs) | 2026-09-30 | High |
| Flantic brand | Also multipurpose bot | SRC-071 | YES | 2026-09-30 | High |
| Spikey | Discord bot (not Activity) | SRC-073 | YES | 2026-09-30 | High |
| Gamebot | Slash-command bot | SRC-074 | YES | 2026-09-30 | High |
| mostlikelyto.fun | Browser most-likely; not Discord Activity | SRC-078 | YES | 2026-09-30 | High |
| VoteMostLikely | Web game; Discord = share link/VC context | SRC-079 | YES | 2026-09-30 | High |
| Ask Away | Full Stage 7 fields | SRC-076 | NO (Cloudflare) | 2026-09-30 | Low |
| Ice Breaker Top.gg | Full Stage 7 fields | SRC-077 | NO (Cloudflare) | 2026-09-30 | Low |
| Stage 9 new URL approval | Any new marketing URL approved | `09-content-gaps.md` | NO | 2026-09-30 | High |
| Stage 8 primary gap class | Missing URLs vs visibility/angle | `08-keyword-gaps.md` | Visibility/angle (not missing URLs) | 2026-09-30 | Medium |
| Indexed in Google (site:) | Any Squimbo marketing URL | SRC-016, SRC-017 | NO hits observed | 2026-09-30 | Medium |
| Brand SERP for product | Squimbo Discord Activity appears | SRC-018 | NO | 2026-09-30 | Medium |
| Discord Activities platform definition | iframe web apps via Embedded App SDK | SRC-012 | YES | 2026-09-30 | High |
| Support Discord invite | discord.gg/PrQkDcxEqk | SRC-009, SRC-011 | YES (docs + llms) | 2026-09-30 | High |
| Stage 18 Phase 0+1+2 approval | Operator approve copy+ops scope | User message 2026-09-30 | YES | 2026-09-30 | High |
| Phase 1–2 on-page copy shipped | Tier 0–1 + FAQ/icebreaker/not-a-bot angles | Stage 12 + `seo/copy` + en.ts | YES (code) | 2026-09-30 | High |
| Discord Help URL on open-Activity | Official How to Use Apps | SRC-080 | YES (cited in copy) | 2026-09-30 | High |
| Phase 0 GSC / Directory ops | Operator checklist | Stage 19 §2 | GSC DONE (operator); Directory R-0.2/R-0.3 still open | 2026-09-30 | High |
| Interim host for first users | Vercel Preview canonical | User 2026-09-30 | YES locked | 2026-09-30 | High |
| `@friends/web` Vitest after copy | registry.spec | local run | PASS (7) | 2026-09-30 | High |
| KG-12 dedicated URL | Create most-likely Discord Activity page | SRC-081…083 | REJECT | 2026-09-30 | High |
| Wave 2 deepen + Tier 2 | Extra sections on existing URLs | `24-wave-2-expansion.md` | YES (code) | 2026-09-30 | High |
| PL marketing catalog | EN-only lock | User Wave 2 | NO (explicit) | 2026-09-30 | High |
| Directory R-0.2 / R-0.3 | Listing copy + site link | Wave 2 checklist | **DONE** (2026-09-30 live verify); languages en-only still open | 2026-09-30 | High |
| Directory Website link | Points at Preview `/en` | Live CDP | YES → `web-silk-six-61.vercel.app/en` | 2026-09-30 | High |
| Directory Supported Languages | en+pl vs English US | Live UI | English US only (gap vs product UI en+pl) | 2026-09-30 | Medium |
| Wave 3 site: Preview | Any indexed Preview URL | SRC-084 | NO | 2026-09-30 | Medium |
| Wave 3 brand+Discord SERP | Product or Directory | SRC-085 | NO | 2026-09-30 | Medium |
| Organization sameAs Directory+Support | Home JSON-LD | Wave 3 code | YES (shipped) | 2026-09-30 | High |
| Wave 4 guide count | 16 new curated guides | `27-wave-4-url-map.md` | YES (24 guides total) | 2026-09-30 | High |
| `@friends/web` Vitest Wave 4 | registry.spec unique meta + 24 guides | local run | PASS (7) | 2026-09-30 | High |
| Wave 5 guide count | 16 new curated guides | `28-wave-5-url-map.md` | YES (40 guides total) | 2026-09-30 | High |
| `@friends/web` Vitest Wave 5 | registry.spec unique meta + 40 guides | local run | PASS (7) | 2026-09-30 | High |
| Wave 6 guide count | 16 new curated guides | `29-wave-6-url-map.md` | YES (56 guides total) | 2026-09-30 | High |
| `@friends/web` Vitest Wave 6 | registry.spec unique meta + 56 guides | local run | PASS (7) | 2026-09-30 | High |
