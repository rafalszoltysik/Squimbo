# 02 - Technical audit (Preview host)

Date: 2026-09-30  
Research host (operator decision): `https://web-silk-six-61.vercel.app`  
Intended future production (docs): `https://squimbo.app` (still HTTP 503 when checked earlier; not re-audited as primary this stage)  
Code changes: none (research only)

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Scope and method

| Check | Method | Source IDs |
| ----- | ------ | ---------- |
| Live HTML meta / canonical / OG / JSON-LD | Chrome DevTools on Preview | SRC-022 |
| URL status matrix (content + assets) | Same-origin `fetch` from Preview | SRC-023 |
| Redirects (`/`, `/pl`, bare paths) | `fetch` follow | SRC-024 |
| Sitemap body | Browser `fetch` of `/sitemap.xml` | SRC-025 |
| Sitemap via external WebFetch tool | Cursor WebFetch | SRC-015, SRC-026 |
| robots / llms | Live + repo | SRC-014, SRC-011, SRC-027, SRC-028 |
| Implementation | Repo read | SRC-008, SRC-020, SRC-029…SRC-035 |
| Discord App Directory | Live Directory page | SRC-036 |

Core Web Vitals / Lighthouse scores: **unavailable** (not run).  
Crawl budget / Search Console coverage: **unavailable**.

---

## 2. Host and crawl policy

| Item | Finding | Label | Notes |
| ---- | ------- | ----- | ----- |
| HTTPS | Yes (`https://web-silk-six-61.vercel.app`) | [OBSERVATION] | Vercel |
| `robots.txt` | `User-Agent: *` / `Allow: /` / Sitemap → Preview `sitemap.xml` | [FACT] | SRC-014, SRC-027 |
| Content pages robots meta | `index, follow` | [OBSERVATION] | Home + how-to-play + open-discord-activity |
| Unknown slug 404 robots | `noindex` | [OBSERVATION] | SRC-037 |
| `x-robots-tag` header | Not observed on sampled fetches | [OBSERVATION] | SRC-023 |
| Google site verification meta | Present (`google-site-verification=5rh4…`) | [OBSERVATION] | SRC-022; which GSC property owns it: UNKNOWN |
| Preview vs Production indexing | Preview is currently indexable | [FACT]/[INFERENCE] | By design of current meta + robots. Cutover to `squimbo.app` will need canonical/redirect plan |

Decision logged (operator, 2026-09-30): research and interim SEO work target **Preview**, not `squimbo.app`.

---

## 3. Canonicalization and redirects

| Check | Result | Label |
| ----- | ------ | ----- |
| Home canonical | `https://web-silk-six-61.vercel.app/en` | [OBSERVATION] |
| Content canonical (sample) | Absolute Preview URL matching path | [OBSERVATION] |
| `og:url` | Matches canonical host/path | [OBSERVATION] |
| `metadataBase` | `new URL(getSiteUrl())` | [FACT] | SRC-029 |
| Canonical builder | Relative path + metadataBase | [FACT] | SRC-030 |
| `NEXT_PUBLIC_SITE_URL` effect | All absolute SEO URLs use Preview origin | [INFERENCE] | Matches live OG/canonical/llms |
| Hreflang | None | [OBSERVATION] | EN-only; aligns with SRC-002 |
| `/` → `/en` | Redirect then 200 | [OBSERVATION] | SRC-024 |
| `/pl` → `/en` | Redirect then 200 | [OBSERVATION] | SRC-024 |
| `/pl/faq` → `/en/faq` | Redirect then 200 | [OBSERVATION] | SRC-024 |
| `/discord-party-game` → `/en/discord-party-game` | Redirect then 200 | [OBSERVATION] | SRC-024 |
| `/en/` → `/en` | Redirect then 200 | [OBSERVATION] | Trailing slash normalized |
| Middleware rules | `/pl` rewrite to `/en`; locale-less paths prefixed with `/en` | [FACT] | SRC-031 |

No alternate language URLs to reconcile. No observed self-canonical conflict on sampled pages.

---

## 4. Sitemap

| Check | Result | Label |
| ----- | ------ | ----- |
| Browser `GET /sitemap.xml` | HTTP 200, `application/xml`, 17 `<loc>` URLs | [OBSERVATION] | SRC-025 |
| External WebFetch of sitemap | HTTP 500 (2026-09-30, twice) | [OBSERVATION] | SRC-015, SRC-026 |
| URL inventory vs registry | Home + 13 `SEO_ROUTES` + support + privacy + terms = 17 | [FACT] | Matches SRC-008 + SRC-032 |
| Host in `<loc>` | Preview origin | [OBSERVATION] |
| `lastmod` sample | `2026-09-21T15:21:26.683Z` (frozen at build) | [OBSERVATION] | Code uses `new Date()` at sitemap generation (SRC-032); Preview build appears static from that deploy |
| robots sitemap pointer | Points at Preview sitemap | [OBSERVATION] |

Sitemap URL list (Preview) [OBSERVATION] SRC-025:

1. `/en`
2. `/en/discord-party-game`
3. `/en/discord-activity`
4. `/en/how-to-play`
5. `/en/most-likely`
6. `/en/faq`
7. `/en/open-discord-activity`
8. `/en/discord-voice-channel-game`
9. `/en/vote-in-the-dark`
10. `/en/discord-party-game-players`
11. `/en/discord-activity-mobile`
12. `/en/no-host-party-game`
13. `/en/discord-icebreaker`
14. `/en/discord-activity-not-a-bot`
15. `/en/support`
16. `/en/privacy`
17. `/en/terms`

Gap: why WebFetch gets 500 while browser gets 200 is **UNKNOWN**. Possible bot/edge difference. Googlebot behavior not verified.

---

## 5. Indexable URL status (Preview)

All of the following returned HTTP 200 via same-origin fetch [OBSERVATION] SRC-023:

- All 13 content routes under `/en/…`
- `/en/support`, `/en/privacy`, `/en/terms`
- `/llms.txt`
- `/squimbo-cover-art.png`, `/squimbo-logo.png`

| Path | Status | Label |
| ---- | ------ | ----- |
| `/en/this-page-should-404` | 404 + `noindex` | [OBSERVATION] |

`/llms-full.txt` was 200 in Stage 1 (SRC-019); not re-fetched in Stage 2 matrix (assume unchanged unless proven otherwise).

---

## 6. On-page technical (sampled)

### Home `/en`

| Signal | Value | Label |
| ------ | ----- | ----- |
| `<title>` | Squimbo, a Discord party game | [OBSERVATION] |
| meta description | Who knows the group best? Vote in the dark inside Discord. | [OBSERVATION] |
| Single H1 | Squimbo | [OBSERVATION] |
| `html lang` | en | [OBSERVATION] |
| Viewport | device-width, initial-scale=1, viewport-fit=cover | [OBSERVATION] |
| OG image | Absolute Preview URL to `/squimbo-cover-art.png` (1152×864) | [OBSERVATION] |
| Twitter card | summary_large_image | [OBSERVATION] |
| JSON-LD `@graph` | WebSite, Organization, SoftwareApplication, FAQPage | [OBSERVATION] |
| SoftwareApplication.offers | price 0 USD | [OBSERVATION] |
| installUrl / sameAs | `https://discord.com/discovery/applications/1545063528422183043` | [OBSERVATION] |

### `/en/how-to-play`

| Signal | Value | Label |
| ------ | ----- | ----- |
| Title template | How to play Squimbo \| Squimbo | [OBSERVATION] |
| Schema | WebPage, BreadcrumbList, FAQPage, HowTo (3 steps) | [OBSERVATION] |
| Internal links | Guides + pillars + footer legal | [OBSERVATION] |

### `/en/open-discord-activity`

| Signal | Value | Label |
| ------ | ----- | ----- |
| Schema | WebPage, BreadcrumbList, FAQPage, HowTo (3 steps) | [OBSERVATION] |

HowTo on how-to-play and open-discord-activity matches `docs/seo.md` intent [FACT]/[OBSERVATION].

Meta title uniqueness across registry is enforced by Vitest [FACT] SRC-033. Live uniqueness of all 13 titles not exhaustively re-scraped this stage; treat as covered by tests + sample.

---

## 7. Internal linking architecture (code)

| Surface | Behavior | Label | Source |
| ------- | -------- | ----- | ------ |
| Footer Learn | Pillars + FAQ hub only (not guides) | [FACT] | SRC-008, SRC-034 |
| Pillar → guides | `guides` arrays on pillars | [FACT] | SRC-008 |
| Related links | Per-route `related` + home | [FACT] | SRC-008 |
| Home entity links | Links to discord-party-game + discord-activity | [OBSERVATION] | Live HTML |
| CTA | Play on Discord → App Directory URL | [OBSERVATION] | Live HTML |

No orphan routes found in registry relative to sitemap [INFERENCE] (every SEO_ROUTES path is in sitemap).

---

## 8. GEO / AI surfaces

| Surface | Status | Label |
| ------- | ------ | ----- |
| `/llms.txt` | 200; Canonical site = Preview `/en`; pillars + guides + product facts + contact | [OBSERVATION]/[FACT] |
| `/llms-full.txt` | Present (Stage 1) | [OBSERVATION] |
| Builders | `buildLlmsTxt` / `buildLlmsFullTxt` | [FACT] | SRC-028 |
| JSON-LD FAQ/HowTo | Present on sampled pages | [OBSERVATION] |

---

## 9. Discord App Directory (distribution surface)

Live Directory page for app id `1545063528422183043` [OBSERVATION] SRC-036:

| Field | Observed value | Label |
| ----- | -------------- | ----- |
| Name | Squimbo | [OBSERVATION] |
| Pitch | You're already together. Find out who knows the group best. | [OBSERVATION] |
| Server count UI | 3 servers | [OBSERVATION] |
| Categories | Community, Games (PL UI: Społeczność, Gry) | [OBSERVATION] |
| Language listed | English (US) | [OBSERVATION] |
| Links section | Website, Support, Privacy Policy, Terms of Service | [OBSERVATION] |
| IAP chrome | UI string "Zakupy w aplikacji" visible | [OBSERVATION] | Does **not** prove Squimbo sells IAP; product docs say IAP out of MVP (SRC-001). Treat as Discord chrome until store SKUs verified |
| Directory copy vs product | Directory says Activity UI supports English; product docs say UI chrome en+pl | [OBSERVATION] | Consistency gap for later |

---

## 10. Issues and priorities

Severity is engineering/SEO risk judgment, not a keyword volume claim.

| ID | Severity | Issue | Evidence | Suggested direction (not implemented) |
| -- | -------- | ----- | -------- | ------------------------------------- |
| T-001 | High (when leaving Preview) | All canonicals / OG / sitemap / llms point at Preview host | SRC-022, SRC-025, SRC-011 | Keep intentional while on Preview; plan 301 + `NEXT_PUBLIC_SITE_URL` cutover to `squimbo.app` later |
| T-002 | Medium | External WebFetch gets sitemap 500; browser gets 200 | SRC-015, SRC-026 vs SRC-025 | Verify with Google URL Inspection / curl as Googlebot; fix if crawlers fail |
| T-003 | Medium | `squimbo.app` still unhealthy (Stage 1) | SRC-013 | Restore production domain before brand SEO scale |
| T-004 | Low | Sitemap `lastmod` frozen to deploy time | SRC-025, SRC-032 | Acceptable; optional runtime lastmod later |
| T-005 | Low | Directory listing language/UI claim may drift from product.md | SRC-036 vs SRC-001 | Align Discord Directory copy with product facts |
| T-006 | Info | GSC verification meta present; property mapping UNKNOWN | SRC-022 | Confirm GSC property is Preview URL or future domain |
| T-007 | Info | CWV / performance not measured | - | Run Lighthouse / CrUX later if needed |
| T-008 | Info | Indexation of Preview URLs not observed via `site:` | SRC-017 | Stage 3 |

What looks healthy on Preview:

- Unique titles/descriptions (tested in repo)
- Canonical + OG consistency on samples
- robots allow + index/follow on content
- 404 noindex
- Locale redirects
- Full content URL coverage in sitemap (browser)
- JSON-LD WebSite/Organization/SoftwareApplication/FAQ/HowTo/Breadcrumb as documented
- llms.txt / llms-full.txt present
- Discord install URL wired into schema + CTA

---

## 11. Unknowns

| ID | Unknown | How to verify |
| -- | ------- | ------------- |
| U-T01 | Does Googlebot receive sitemap 200 or 500? | GSC sitemap report / URL Inspection |
| U-T02 | Is Preview the GSC-verified property? | GSC settings |
| U-T03 | LCP/INP/CLS on mobile/desktop | Lighthouse or CrUX |
| U-T04 | Whether Discord "IAP" label implies SKUs | Discord Developer Portal store / live purchase UI |
| U-T05 | Exact HTTP status codes for redirects (301 vs 308 vs 307) | Capture without follow (browser opaque earlier) |
| U-T06 | Security headers completeness (CSP, HSTS, etc.) | Header dump on cold 200 (partial headers on 304 only) |

---

## 12. Assumptions

| ID | Assumption | Label |
| -- | ---------- | ----- |
| A-T01 | Preview remains the SEO research + interim public marketing host until operator says otherwise | [FACT] from user instruction 2026-09-30 |
| A-T02 | Registry Vitest uniqueness still holds on the deployed build | [INFERENCE] |
| A-T03 | Sitemap 500 on WebFetch is not necessarily what Google sees | [HYPOTHESIS] |

---

## 13. Next actions

1. Stop (execution protocol).
2. On continue: **Stage 3 Indexation** using Preview as the property under test (GSC if available; `site:` / URL Inspection notes).
3. Do not implement T-* fixes until research → strategy → approval, unless operator explicitly asks to fix sitemap/bot 500 now.
