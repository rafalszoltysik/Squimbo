# Squimbo SEO

Marketing site: interim **https://web-silk-six-61.vercel.app** for first users; long-term **https://squimbo.app** (English only, canonical paths under `/en`).

## Positioning

- Brand home (`/en`) owns Squimbo as a Discord Activity party game (“who knows the group best”).
- **Pillars** own primary search intents.
- **Guides** own long-tail / procedural intents and link back to pillars (Waves 4–6 curated set).
- Voice: party host, short, factual — see product docs. Do not name competing brands or copy their listings.
- Open-Activity / Add Squimbo own **Squimbo** launch only; generic Apps/Activities UI defers to Discord Help.

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
| Discord game night | guide | `/en/discord-game-night` |
| Hangout / chill call game | guide | `/en/discord-hangout-game` |
| Short party loop | guide | `/en/short-discord-party-game` |
| No separate download | guide | `/en/discord-party-game-no-download` |
| For friends you already know | guide | `/en/discord-party-game-for-friends` |
| Free to play Activity | guide | `/en/free-discord-party-game` |
| Play inside Discord | guide | `/en/play-inside-discord` |
| Add / find Squimbo | guide | `/en/add-squimbo` |
| Activity on a group call | guide | `/en/discord-activity-group-call` |
| Activity vs browser lobby | guide | `/en/discord-activity-vs-browser-game` |
| Who’s most likely on Discord | guide | `/en/whos-most-likely-to-discord` |
| Most likely party on Discord | guide | `/en/most-likely-party-on-discord` |
| Roast-friendly sealed party | guide | `/en/discord-roast-party-game` |
| Start Squimbo | guide | `/en/start-squimbo` |
| Reveal after sealed votes | guide | `/en/squimbo-reveal` |
| Finale scoreboard | guide | `/en/squimbo-finale` |
| Who knows the group best (Discord) | guide | `/en/who-knows-the-group-best-discord` |
| Server voice party game | guide | `/en/discord-server-voice-party-game` |
| Party without screen share | guide | `/en/discord-party-game-no-screen-share` |
| Discord avatars as players | guide | `/en/discord-party-game-with-avatars` |
| No lobby code | guide | `/en/no-lobby-code-discord-game` |
| Casual party game | guide | `/en/casual-discord-party-game` |
| Multiplayer Activity party | guide | `/en/multiplayer-discord-activity-party` |
| First Activity launch | guide | `/en/discord-activity-first-launch` |
| Join mid-game | guide | `/en/join-squimbo-late` |
| Lobby Ready up | guide | `/en/squimbo-ready-up` |
| Ties and revotes | guide | `/en/squimbo-tie-revote` |
| Play again after finale | guide | `/en/squimbo-play-again` |
| Secret vote party | guide | `/en/secret-vote-discord-party` |
| Most likely among friends | guide | `/en/most-likely-among-friends-discord` |
| Party without a bot | guide | `/en/discord-party-without-bot` |
| Talk while you play | guide | `/en/talk-while-you-play-discord` |
| No website signup | guide | `/en/discord-party-game-no-signup` |
| Same voice channel | guide | `/en/same-voice-channel-squimbo` |
| No matchmaking | guide | `/en/discord-party-game-no-matchmaking` |
| No pack picker | guide | `/en/no-pack-picker-discord-game` |
| Squimbo lobby | guide | `/en/squimbo-lobby` |
| Next round | guide | `/en/squimbo-next-round` |
| Wrap up | guide | `/en/squimbo-wrap-up` |
| Scores until finale | guide | `/en/scores-hidden-until-finale` |
| Shared controls | guide | `/en/discord-activity-shared-controls` |
| Find in Directory | guide | `/en/find-squimbo-discord-directory` |
| Party on a call | guide | `/en/discord-party-game-on-call` |
| Vote for another player | guide | `/en/vote-for-another-player-discord` |
| Channel is the room | guide | `/en/discord-channel-is-the-room` |
| Play with friends | guide | `/en/play-squimbo-with-friends` |
| No moderator | guide | `/en/discord-party-game-no-moderator` |
| Launch from Activities | guide | `/en/launch-squimbo-from-activities` |
| Support / legal | — | `/en/support`, `/en/privacy`, `/en/terms` |

Source of routes for sitemap, footer Learn (pillars + FAQ), and `llms.txt`: `apps/web/src/seo/registry.ts`. Page copy: `apps/web/src/seo/copy/`. Wave 4–6 maps: `docs/seo/27-wave-4-url-map.md`, `28-wave-5-url-map.md`, `29-wave-6-url-map.md`.

## Structured data

- Home: `WebSite`, `Organization`, `SoftwareApplication` (Discord), `FAQPage`
- Content pages: `WebPage`, `BreadcrumbList`, `FAQPage` when FAQ is present
- HowTo: `/how-to-play`, `/open-discord-activity`, `/add-squimbo`, `/start-squimbo`

## GEO

- `/llms.txt` — Key pages, Positioning pillars, Topic guides, Product facts, Contact
- `/llms-full.txt` — expanded how-it-works + FAQ + link list
- Product facts must stay aligned with [product.md](./product.md)

## Rules

- **EN-only** on the marketing site for now (`locales = ["en"]`). `/pl` redirects to `/en`. Do not add hreflang until a real Polish catalog ships.
- Unique `title` + `description` per page via `buildPageMetadata` — no keyword stuffing.
- Internal links: home ↔ pillars ↔ guides ↔ Discord play CTA; footer Learn lists pillars + FAQ only.
- Keep FAQ / HowTo JSON-LD accurate to on-page copy.
- No question-bank URLs, competitor brand pages, or programmatic thin matrices.
- Agent workflow: `.cursor/skills/friends-seo-geo/SKILL.md`.

## Verify after deploy

1. `NEXT_PUBLIC_SITE_URL` matches the interim Preview host (or `https://squimbo.app` after cutover).
2. HTTPS, canonicals on `/en…`, sitemap, Open Graph previews.
3. All content URLs appear in the sitemap and in `/llms.txt` (pillars + guides sections).
4. Google Search Console: submit sitemap; spot-check FAQ / HowTo rich results where applicable.
