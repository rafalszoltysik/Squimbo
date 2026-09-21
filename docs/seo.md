# Squimbo SEO

Marketing site: **https://squimbo.app** (English only, canonical paths under `/en`).

## Positioning

- Brand home (`/en`) owns “who knows the group best” and Squimbo as a product name.
- **Pillars** own primary search intents.
- **Guides** own long-tail / procedural intents and link back to pillars.
- Voice: party host, short, factual — see product docs. Do not name competing brands or copy their listings.

Cluster shape matches the PlayGrid model (home → pillars → guides → `llms.txt`), not PlayGrid copy or features.

## Keyword map → URLs

| Intent | Kind | Canonical URL |
|--------|------|----------------|
| Brand / who knows the group best | home | `/en` |
| Discord party game | pillar | `/en/discord-party-game` |
| Discord Activity / play inside Discord | pillar | `/en/discord-activity` |
| How to play Squimbo / start Activity | pillar | `/en/how-to-play` |
| Most likely / round format | pillar | `/en/most-likely` |
| FAQ / long-tail Q&A hub | hub | `/en/faq` |
| Open Activity from voice shelf | guide | `/en/open-discord-activity` |
| Game for people already on voice | guide | `/en/discord-voice-channel-game` |
| Sealed tallies / vote in the dark | guide | `/en/vote-in-the-dark` |
| Player count (2 min, ~3–8) | guide | `/en/discord-party-game-players` |
| Desktop + mobile, no installer | guide | `/en/discord-activity-mobile` |
| No host privileges | guide | `/en/no-host-party-game` |
| Icebreaker in the channel | guide | `/en/discord-icebreaker` |
| Activity, not a slash bot | guide | `/en/discord-activity-not-a-bot` |
| Support / legal | — | `/en/support`, `/en/privacy`, `/en/terms` |

Source of routes for sitemap, footer Learn (pillars + FAQ), and `llms.txt`: `apps/web/src/seo/registry.ts`. Page copy: `apps/web/src/seo/copy/`.

## Structured data

- Home: `WebSite`, `Organization`, `SoftwareApplication` (Discord), `FAQPage`
- Content pages: `WebPage`, `BreadcrumbList`, `FAQPage` when FAQ is present
- HowTo: `/how-to-play` and `/open-discord-activity`

## GEO

- `/llms.txt` — Key pages, Positioning pillars, Topic guides, Product facts, Contact
- `/llms-full.txt` — expanded how-it-works + FAQ + link list
- Product facts must stay aligned with [product.md](./product.md)

## Rules

- **EN-only** on the marketing site for now (`locales = ["en"]`). `/pl` redirects to `/en`. Do not add hreflang until a real Polish catalog ships.
- Unique `title` + `description` per page via `buildPageMetadata` — no keyword stuffing.
- Internal links: home ↔ pillars ↔ guides ↔ Discord play CTA; footer Learn lists pillars + FAQ only.
- Keep FAQ / HowTo JSON-LD accurate to on-page copy.
- Agent workflow: `.cursor/skills/friends-seo-geo/SKILL.md`.

## Verify after deploy

1. `NEXT_PUBLIC_SITE_URL=https://squimbo.app` on the web production project.
2. HTTPS, canonicals on `/en…`, [sitemap.xml](https://squimbo.app/sitemap.xml), Open Graph previews.
3. All content URLs appear in the sitemap and in `/llms.txt` (pillars + guides sections).
4. Google Search Console: submit sitemap if not already; spot-check FAQ / HowTo rich results where applicable.
