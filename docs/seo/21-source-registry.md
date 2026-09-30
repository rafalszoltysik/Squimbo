# 21 - Source registry

Do not duplicate rows. Reuse IDs when citing.

| ID | Source | URL | Type | Date checked | Used for | Confidence |
| -- | ------ | --- | ---- | ------------ | -------- | ---------- |
| SRC-001 | Squimbo product doc | repo:`docs/product.md` | Official product doc | 2026-09-30 | Entity, loop, scope, players | High |
| SRC-002 | Squimbo SEO map | repo:`docs/seo.md` | Project SEO doc | 2026-09-30 | Intents, URLs, GEO rules | High |
| SRC-003 | Squimbo strategy | repo:`docs/strategy.md` | Official strategy | 2026-09-30 | JTBD, A/B layers, monetization thesis | High |
| SRC-004 | Discord Activity setup | repo:`docs/discord-activity-setup.md` | Engineering doc | 2026-09-30 | OAuth, Entry Point, identity rule | High |
| SRC-005 | Deployment | repo:`docs/deployment.md` | Engineering doc | 2026-09-30 | Hosting, `squimbo.app`, envs | High |
| SRC-006 | Metrics | repo:`docs/metrics.md` | Product metrics | 2026-09-30 | North star, analytics status | High |
| SRC-007 | Roadmap | repo:`docs/roadmap.md` | Roadmap | 2026-09-30 | Shipped vs deferred features | High |
| SRC-008 | SEO route registry | repo:`apps/web/src/seo/registry.ts` | Source code | 2026-09-30 | Canonical path inventory | High |
| SRC-009 | Support Discord doc | repo:`docs/discord-support-server.md` | Ops doc | 2026-09-30 | Support invite URL | High |
| SRC-010 | Marketing home (Preview) | https://web-silk-six-61.vercel.app/en | Live page | 2026-09-30 | Public positioning, FAQ claims | High |
| SRC-011 | llms.txt (Preview) | https://web-silk-six-61.vercel.app/llms.txt | Live GEO file | 2026-09-30 | Product facts, page list, canonical host | High |
| SRC-012 | Discord Activities overview | https://docs.discord.com/developers/activities/overview | Official platform docs | 2026-09-30 | What Activities are (iframe, clients) | High |
| SRC-013 | squimbo.app home fetch | https://squimbo.app/en | Live HTTP check | 2026-09-30 | Production availability (503) | High |
| SRC-014 | robots.txt (Preview) | https://web-silk-six-61.vercel.app/robots.txt | Live robots | 2026-09-30 | Crawl allow + sitemap pointer | High |
| SRC-015 | sitemap.xml via WebFetch | https://web-silk-six-61.vercel.app/sitemap.xml | Live sitemap (tool) | 2026-09-30 | External tool HTTP 500 | High |
| SRC-016 | Web search site:squimbo.app | search query `site:squimbo.app` | SERP observation | 2026-09-30 | Indexation snapshot (no hits) | Medium |
| SRC-017 | Web search site:Preview | search query `site:web-silk-six-61.vercel.app` | SERP observation | 2026-09-30 | Indexation snapshot (no hits) | Medium |
| SRC-018 | Web search brand + Discord | search query `Squimbo Discord Activity party game` | SERP observation | 2026-09-30 | Brand discoverability / name collisions | Medium |
| SRC-019 | llms-full.txt (Preview) | https://web-silk-six-61.vercel.app/llms-full.txt | Live GEO file | 2026-09-30 | Expanded FAQ / facts | High |
| SRC-020 | site-url helper | repo:`apps/web/src/seo/site-url.ts` | Source code | 2026-09-30 | Canonical origin from `NEXT_PUBLIC_SITE_URL` | High |
| SRC-021 | User message | chat 2026-09-30 | Operator input | 2026-09-30 | Preview URL identification | High |
| SRC-022 | Chrome DevTools SEO extract (home) | https://web-silk-six-61.vercel.app/en | Live DOM/meta | 2026-09-30 | Canonical, OG, JSON-LD, robots | High |
| SRC-023 | Same-origin URL status matrix | Preview origin fetch script | Live HTTP | 2026-09-30 | Content/asset status codes | High |
| SRC-024 | Redirect follow checks | `/`, `/pl`, `/pl/faq`, bare paths | Live HTTP | 2026-09-30 | Locale and slash redirects | High |
| SRC-025 | Browser sitemap parse | https://web-silk-six-61.vercel.app/sitemap.xml | Live sitemap (browser) | 2026-09-30 | 200 + 17 locs | High |
| SRC-026 | WebFetch sitemap recheck | https://web-silk-six-61.vercel.app/sitemap.xml | Live sitemap (tool) | 2026-09-30 | Confirmed tool still 500 | High |
| SRC-027 | robots.ts | repo:`apps/web/app/robots.ts` | Source code | 2026-09-30 | Allow all + sitemap URL | High |
| SRC-028 | llms-content builders | repo:`apps/web/src/seo/llms-content.ts` | Source code | 2026-09-30 | GEO file generation | High |
| SRC-029 | Root layout metadata | repo:`apps/web/app/layout.tsx` | Source code | 2026-09-30 | metadataBase, GSC verification | High |
| SRC-030 | buildPageMetadata | repo:`apps/web/src/seo/metadata.ts` | Source code | 2026-09-30 | Canonical/OG builders | High |
| SRC-031 | middleware | repo:`apps/web/middleware.ts` | Source code | 2026-09-30 | `/pl` and locale redirects | High |
| SRC-032 | sitemap.ts | repo:`apps/web/app/sitemap.ts` | Source code | 2026-09-30 | Sitemap entry construction | High |
| SRC-033 | registry Vitest | repo:`apps/web/src/seo/registry.spec.ts` | Tests | 2026-09-30 | Unique meta + sitemap coverage tests | High |
| SRC-034 | SiteFooter | repo:`apps/web/src/components/SiteFooter.tsx` | Source code | 2026-09-30 | Footer Learn = pillars + FAQ | High |
| SRC-035 | SeoContentPage JSON-LD | repo:`apps/web/src/components/SeoContentPage.tsx` | Source code | 2026-09-30 | WebPage/FAQ/HowTo schema | High |
| SRC-036 | Discord App Directory Squimbo | https://discord.com/discovery/applications/1545063528422183043 | Official Directory | 2026-09-30 | Listing, servers=3, categories | High |
| SRC-037 | Preview 404 page | https://web-silk-six-61.vercel.app/en/this-page-should-404 | Live 404 | 2026-09-30 | robots noindex | High |
| SRC-038 | User continue + Preview host | chat 2026-09-30 | Operator input | 2026-09-30 | Proceed Stage 2 on Preview | High |
| SRC-039 | Operator GSC status | chat 2026-09-30 | Operator input | 2026-09-30 | GSC exists for Preview; mostly empty | High |
| SRC-040 | robots.txt recheck | https://web-silk-six-61.vercel.app/robots.txt | Live robots | 2026-09-30 | Allow + sitemap line | High |
| SRC-041 | Browser sitemap recheck | Preview `/sitemap.xml` via page fetch | Live sitemap | 2026-09-30 | 200 + 17 locs | High |
| SRC-042 | Google Search Central: build/submit sitemap | https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap | Official docs | 2026-09-30 | Sitemap hint, limits, ignore priority/changefreq | High |
| SRC-043 | site: Preview (Stage 3) | search `site:web-silk-six-61.vercel.app` | SERP observation | 2026-09-30 | No results | Medium |
| SRC-044 | Quoted Preview hostname search | search `"web-silk-six-61.vercel.app"` | SERP observation | 2026-09-30 | No Squimbo hit | Medium |
| SRC-045 | site: Preview + Squimbo | search `site:web-silk-six-61.vercel.app Squimbo` | SERP observation | 2026-09-30 | No results | Medium |
| SRC-046 | Brand query Squimbo Discord Activity | search `Squimbo Discord Activity` | SERP observation | 2026-09-30 | No product hit; name collisions | Medium |
| SRC-047 | Squimbo Directory site: search | search `Squimbo site:discord.com/discovery/applications` | SERP observation | 2026-09-30 | No Squimbo Directory hit | Medium |
| SRC-048 | Google Search Central: sitemaps overview | https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview | Official docs | 2026-09-30 | New sites with few links benefit from sitemap | High |
| SRC-049 | SERP probe: Discord party game | search `Discord party game` | SERP observation | 2026-09-30 | Activities + third-party + bots mix | Medium |
| SRC-050 | SERP probe: how to open Discord Activity | search `how to open Discord Activity` | SERP observation | 2026-09-30 | Discord support/docs dominate | Medium |
| SRC-051 | SERP probe: most likely to party game | search `most likely to party game` | SERP observation | 2026-09-30 | Browser party sites/apps dominate | Medium |
| SRC-052 | SERP probe: Discord Activities | search `Discord Activities` | SERP observation | 2026-09-30 | Platform/docs heavy in tool results | Medium |
| SRC-053 | SERP probe: Discord voice channel games | search `Discord voice channel games` | SERP observation | 2026-09-30 | Activities + bots/packages | Medium |
| SRC-054 | SERP probe: Discord icebreaker game | search `Discord icebreaker game` | SERP observation | 2026-09-30 | Bots + Ask Away-style products | Medium |
| SRC-055 | SERP probe: Discord Activity vs bot | search `Discord Activity vs bot` | SERP observation | 2026-09-30 | Explainers + Discord docs | Medium |
| SRC-056 | SERP probe mismatch: who is most likely to Discord game | search `who is most likely to Discord game` | SERP observation | 2026-09-30 | Demographics mismatch | Medium |
| SRC-057 | SERP probe: Squimbo | search `Squimbo` | SERP observation | 2026-09-30 | Slang/UD/unrelated; no product | Medium |
| SRC-059 | Stage 5 SERP: Squimbo | search `Squimbo` | SERP observation | 2026-09-30 | Synonym farms + UD + homebrew; no product | Medium |
| SRC-060 | Stage 5 SERP: Squimbo Discord | search `Squimbo Discord` | SERP observation | 2026-09-30 | Unrelated Discord communities; no product | Medium |
| SRC-061 | Stage 5 SERP: Discord party game | search `Discord party game` | SERP observation | 2026-09-30 | Discord blog + Activities + bots | Medium |
| SRC-062 | Stage 5 SERP: Discord Activities | search `Discord Activities` | SERP observation | 2026-09-30 | Docs-heavy + consumer blog | Medium |
| SRC-063 | Stage 5 SERP: Discord voice channel games | search `Discord voice channel games` | SERP observation | 2026-09-30 | Docs + listicles + WikiHow | Medium |
| SRC-064 | Stage 5 SERP: how to open Discord Activity | search `how to open Discord Activity` | SERP observation | 2026-09-30 | Discord support/blog dominate | Medium |
| SRC-065 | Stage 5 SERP: most likely to party game | search `most likely to party game` | SERP observation | 2026-09-30 | Web/apps/cards; Discord Activity absent | Medium |
| SRC-066 | Stage 5 SERP: Discord icebreaker game | search `Discord icebreaker game` | SERP observation | 2026-09-30 | Ask Away + bots + Discord blogs | Medium |
| SRC-067 | Stage 5 SERP: Discord Activity vs bot | search `Discord Activity vs bot` | SERP observation | 2026-09-30 | Explainers + Discord docs | Medium |
| SRC-068 | Discord Activities blog | https://discord.com/blog/server-activities-games-voice-watch-together | Official platform | 2026-09-30 | First-party Activities category | High |
| SRC-069 | Undercover landing | https://undercover.gg/ | Official product | 2026-09-30 | Activity claim, players, free FAQ | High |
| SRC-070 | Flantic Activity Arcade docs | https://flantic.app/docs/arcade | Official docs | 2026-09-30 | Activity arcade games + player counts | High |
| SRC-071 | Flantic homepage | https://flantic.app/ | Official product | 2026-09-30 | Multipurpose bot + Prime pricing | High |
| SRC-072 | Spikey homepage | https://spikey.app/ | Official product | 2026-09-30 | Games list + in-bot economy | High |
| SRC-073 | Spikey Info Center | https://spikey.app/info | Official docs | 2026-09-30 | Confirms Discord bot + Premium | High |
| SRC-074 | Gamebot home/docs | https://gamebot.rocks/ + /docs | Official product | 2026-09-30 | Slash bot games | High |
| SRC-075 | Gamebot Premium | https://gamebot.rocks/premium | Official pricing | 2026-09-30 | Premium from $4.99/mo | High |
| SRC-076 | Ask Away (blocked) | https://activities.rocks/ask-away | Official (CF challenge) | 2026-09-30 | Could not verify Stage 7 | Low |
| SRC-077 | Ice Breaker Top.gg (blocked) | https://top.gg/bot/838686730428088351 | Listing (CF challenge) | 2026-09-30 | Could not verify Stage 7 | Low |
| SRC-078 | mostlikelyto.fun | https://mostlikelyto.fun/ | Official product | 2026-09-30 | Web most-likely; free; not Activity | High |
| SRC-079 | VoteMostLikely | https://www.votemostlikely.com/ | Official product | 2026-09-30 | Web most-likely; freemium; Discord as VC context | High |
| SRC-080 | Discord How to Use Apps (Help) | https://support-apps.discord.com/hc/en-us/articles/26593412574359-How-to-Use-Apps | Official help | 2026-09-30 | Generic Apps/Activities UI; cited on open-Activity | High |
| SRC-081 | KG-12 probe: most likely Discord Activity | search `most likely Discord Activity` | SERP observation | 2026-09-30 | Mismatch (warnings/spam/docs); not party-game SERP | Medium |
| SRC-082 | KG-12 probe: who is most likely Discord Activity game | search `who is most likely Discord Activity game` | SERP observation | 2026-09-30 | Generic Activities listicles/docs; no most-likely Activity cluster | Medium |
| SRC-083 | KG-12 probe: "most likely" Discord Activity party | search `"most likely" Discord Activity party` | SERP observation | 2026-09-30 | Web generators (VoteMostLikely, Poparty); Discord as call context | Medium |
| SRC-084 | Wave 3: site: Preview host | search `site:web-silk-six-61.vercel.app` | SERP observation | 2026-09-30 | No results | Medium |
| SRC-085 | Wave 3: Squimbo Discord Activity | search `Squimbo Discord Activity` | SERP observation | 2026-09-30 | Still no product/Directory | Medium |
| SRC-086 | Wave 3: Squimbo Directory site: | search `Squimbo site:discord.com/discovery/applications` | SERP observation | 2026-09-30 | No Squimbo Directory hit | Medium |
| SRC-087 | New-URL probe: who knows you best Discord game | search `who knows you best Discord game` | SERP observation | 2026-09-30 | Async/browser/App Store quizzes | Medium |
| SRC-088 | New-URL probe: vote in the dark Discord party | search `vote in the dark Discord party game` | SERP observation | 2026-09-30 | Social deduction / Undercover-class | Medium |
| SRC-089 | New-URL probe: most likely Discord voice | search `most likely to Discord voice channel` | SERP observation | 2026-09-30 | SERP mismatch (VC guides) | Medium |
| SRC-090 | New-URL probe: Discord Activity friend group party | search `Discord Activity for friend group party` | SERP observation | 2026-09-30 | Docs + Flantic + first-party Activities | Medium |
