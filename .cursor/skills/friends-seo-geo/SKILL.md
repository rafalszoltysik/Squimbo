---
name: friends-seo-geo
description: >-
  Squimbo marketing SEO/GEO — pillars, guides, llms.txt, schema. Use when
  adding or auditing content pages, sitemap, or generative-engine surfaces.
---

# Squimbo SEO + GEO

Marketing site only (`apps/web`). Product facts from [docs/product.md](../../../docs/product.md). Canonical map: [docs/seo.md](../../../docs/seo.md).

## Modes

| Mode | Do |
|------|----|
| **AUDYT** | Diff intents vs registry; flag cannibalization, thin pages, missing internal links |
| **IMPLEMENTACJA** | Add/edit route in `registry.ts` + `seo/copy/*` + wire Guides/related; never invent features |
| **STRATEGIA** | Propose new URLs only with a unique intent not owned by an existing path |
| **GEO** | Keep `llms.txt` / `llms-full.txt` factual; Product facts + Contact match the product |

## Cluster shape (PlayGrid model)

```text
/en (brand)
  → pillars (primary intents)
    → guides (long-tail)
  → /faq (hub)
llms.txt mirrors Key pages → Pillars → Guides → Product facts → Contact
```

## Source of truth

| What | Where |
|------|--------|
| Routes, kind, related, guides, sitemap priority | `apps/web/src/seo/registry.ts` |
| Page copy + meta | `apps/web/src/seo/copy/*.ts` |
| Renderer | `apps/web/app/[locale]/[slug]/page.tsx` |
| llms builders | `apps/web/src/seo/llms-content.ts` |
| Shared chrome (landing, legal, cookies) | `apps/web/src/i18n/messages/en.ts` |

## MUST

- **EN-only** marketing (`locales = ["en"]`). No hreflang until a real PL catalog ships.
- One primary intent per URL. Do not duplicate “most likely” vs “vote in the dark” without a clear split (format vs sealed mechanic).
- Facts only from `docs/product.md` / strategy. No competitor brands. No PlayGrid features.
- Footer Learn = pillars + FAQ only. Guides appear on pillar pages and in `llms.txt`.
- Unique `title` + `description` per page. No stuffed global `keywords`.
- FAQ / HowTo JSON-LD must match on-page copy.
- After registry changes: update `docs/seo.md` keyword map; run `pnpm --filter @friends/web test`.

## MUST NOT

- Copy third-party party-game banks, assets, or landing prose.
- Claim bots, store OAuth, category packs, or async quiz as shipped MVP features.
- Put every guide in the site footer.
- Invent contact emails — use `NEXT_PUBLIC_SUPPORT_EMAIL` / Support Discord from the product.

## Checklist (PR)

1. New path registered with `kind`, `related`, and (if pillar) `guides`.
2. Copy file exists; meta title/description unique across the registry.
3. Sitemap + `buildLlmsTxt()` include the URL (via registry).
4. Registry Vitest passes.
5. Spot-check canonical `/en…` and Discord CTA on the page.
