# @friends/web

Public marketing site for Squimbo: landing, SEO content cluster (pillars + guides), privacy, terms, and support (English). Canonical production origin: `https://squimbo.app`.

**Local:** `pnpm --filter @friends/web dev` → http://localhost:3012

**SEO / GEO:** registry in `src/seo/registry.ts`, copy in `src/seo/copy/`, surfaces at `/llms.txt` and `/sitemap.xml`. See [docs/seo.md](../../docs/seo.md).

**Deploy:** Vercel root directory `apps/web` — see [docs/deployment.md](../../docs/deployment.md).

No auth and no game API. Discord Activity URLs in the Developer Portal point here for Website / Privacy / Terms / Support.
