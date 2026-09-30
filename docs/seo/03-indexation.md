# 03 - Indexation

Date: 2026-09-30  
Research host: `https://web-silk-six-61.vercel.app` (operator-locked interim host)  
GSC: Operator reports property exists for this Preview, but data is mostly empty yet  
Code changes: none

Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Verdict (short)

Preview is **crawl-ready** (robots allow, pages `index,follow`, sitemap discoverable via robots + browser 200).  

Public Google index evidence for Preview URLs: **none observed** (`site:` empty; hostname query does not surface Squimbo).  

Operator GSC: **property present, little/no meaningful data yet** [FACT] SRC-039. That is consistent with a new or barely crawled property, not proof of a technical block.

Discord App Directory listing exists, but that is **not** the same as Google indexing the marketing site.

---

## 2. Crawl readiness checklist

| Check | Status | Label | Source |
| ----- | ------ | ----- | ------ |
| HTTPS | Yes | [OBSERVATION] | Stage 2 |
| `robots.txt` Allow `/` | Yes | [OBSERVATION] | SRC-014, SRC-040 |
| Sitemap declared in robots | Yes → Preview `/sitemap.xml` | [OBSERVATION] | SRC-040 |
| Sitemap HTTP (browser) | 200, 17 absolute Preview URLs | [OBSERVATION] | SRC-041 |
| Sitemap HTTP (WebFetch tool) | 500 | [OBSERVATION] | SRC-015, SRC-026 |
| Content `robots` meta | `index, follow` on samples | [OBSERVATION] | Stage 2 |
| 404 handling | `noindex` on unknown slug | [OBSERVATION] | SRC-037 |
| Canonicals self-host | Preview absolute URLs | [OBSERVATION] | Stage 2 |
| Soft 404 / cloaking | Not observed | [OBSERVATION] | Sample pages return real content |
| Login / paywall blocking crawl | No | [OBSERVATION] | Public marketing HTML |
| Duplicate host (`squimbo.app`) | Production still unhealthy earlier; not active host | [OBSERVATION] | SRC-013; not rechecked this stage |

Sitemap size (17 URLs) is well under Google's documented 50,000 URL / 50MB limits [FACT] SRC-042.

Google documents that submitting a sitemap is a **hint**, not a guarantee of crawl or index [FACT] SRC-042.

Google ignores sitemap `<priority>` and `<changefreq>`; uses `<lastmod>` only if consistently accurate [FACT] SRC-042. Preview sitemap includes those tags from Next.js MetadataRoute (code SRC-032).

---

## 3. Current indexation evidence (Google)

| Probe | Result | Date | Label | Source |
| ----- | ------ | ---- | ----- | ------ |
| `site:web-silk-six-61.vercel.app` | No results | 2026-09-30 | [OBSERVATION] | SRC-043 |
| Quoted hostname `web-silk-six-61.vercel.app` | No Squimbo Preview hit in returned SERP | 2026-09-30 | [OBSERVATION] | SRC-044 |
| `site:web-silk-six-61.vercel.app Squimbo` | No results | 2026-09-30 | [OBSERVATION] | SRC-045 |
| Brand query `Squimbo Discord Activity` | No Squimbo product / Preview / Directory hit in returned SERP | 2026-09-30 | [OBSERVATION] | SRC-046 |
| `Squimbo site:discord.com/discovery/applications` | No Squimbo Directory hit in returned SERP | 2026-09-30 | [OBSERVATION] | SRC-047 |

Indexed page count: **unavailable** (no GSC export pasted; SERP `site:` shows zero).  
Impressions / clicks / coverage chart: **unavailable** (operator: GSC mostly empty) [FACT] SRC-039.

Do not invent crawl stats.

---

## 4. Google Search Console (operator-reported)

| Item | Status | Label | Source |
| ---- | ------ | ----- | ------ |
| GSC property for Preview | Exists; operator has access | [FACT] | SRC-039 |
| Meaningful performance / coverage data | Mostly empty / not much yet | [FACT] | SRC-039 |
| Exact property URL string | UNKNOWN (not pasted) | [UNKNOWN] | Need exact URL-prefix or domain property string |
| Sitemap submitted in GSC UI | UNKNOWN | [UNKNOWN] | Operator to confirm |
| Sitemap last read by Google | UNKNOWN | [UNKNOWN] | GSC Sitemaps report |
| URL Inspection samples | UNKNOWN | [UNKNOWN] | Not run / not shared |
| Page indexing report counts | UNKNOWN / empty | [UNKNOWN]/[FACT] | Aligns with empty GSC |

### GSC actions to run next (operator checklist)

These are verification steps, not claims that they are already done:

1. Confirm property type is URL-prefix `https://web-silk-six-61.vercel.app/` (or exact variant in use).
2. Sitemaps → submit `https://web-silk-six-61.vercel.app/sitemap.xml` if not submitted. robots.txt already references it [OBSERVATION] SRC-040; GSC submit still useful for status/errors [FACT] SRC-042.
3. If GSC shows sitemap fetch error, compare with browser 200 vs external 500 discrepancy (T-002 from Stage 2).
4. URL Inspection on:
   - `…/en`
   - `…/en/discord-party-game`
   - `…/en/how-to-play`
   - `…/en/faq`
5. Record for each: crawled? indexed? referring page? crawl allowed? Canonical selected by Google?
6. Paste or summarize results into this file / verification log on next pass.

---

## 5. Bing / other engines

| Engine | Index evidence | Label | Source |
| ------ | -------------- | ----- | ------ |
| Bing Webmaster | UNKNOWN (no access reported) | [UNKNOWN] | - |
| Bing `site:` via this research stack | Not separately verified as Bing UI | [UNKNOWN] | Web search tools used are not certified Bing SERP |
| ChatGPT / Perplexity / AI Overviews citation of Preview | UNKNOWN | [UNKNOWN] | Deferred to GEO/AI stages |

---

## 6. Non-Google discovery surfaces

| Surface | Indexed / listed? | Relation to Google index | Label | Source |
| ------- | ----------------- | ------------------------ | ----- | ------ |
| Discord App Directory | Yes (live page; 3 servers UI) | Separate product directory; brand SERP did not surface it in this check | [OBSERVATION] | SRC-036, SRC-046, SRC-047 |
| Marketing Preview site | Live, crawl-ready | Not observed in Google `site:` | [OBSERVATION] | Stages 2–3 |

---

## 7. Risks specific to Preview indexing

| Risk | Assessment | Label |
| ---- | ----------- | ----- |
| Empty GSC means technical failure | Not evidenced. Empty GSC + empty `site:` is consistent with **new property / not yet crawled or not yet indexed** | [INFERENCE] |
| Sitemap tool 500 blocks Google | Possible but unproven. Browser gets 200. Need GSC Sitemaps report | [HYPOTHESIS] |
| Preview hostname instability | Whether `web-silk-six-61.vercel.app` remains stable long-term | [UNKNOWN] | If URL changes later, any indexed Preview URLs become debt |
| Indexing Preview then moving to `squimbo.app` | Will need 301s + canonical cutover + GSC property for apex | [INFERENCE] | Standard host migration concern; cutover not scheduled |
| Brand SERP pollution | Unrelated "Squimbo" entities rank for brand-ish queries; product absent | [OBSERVATION] | SRC-046 |

---

## 8. Indexation targets (working, not ranked by volume)

Primary URLs we **want** discoverable once crawling starts (from sitemap SRC-041):

1. `/en` (brand home)
2. Pillars: `/discord-party-game`, `/discord-activity`, `/how-to-play`, `/most-likely`
3. Hub: `/faq`
4. Guides (8)
5. Support / privacy / terms

No evidence yet which of these Google has crawled.

---

## 9. Unknowns

| ID | Unknown | Needed |
| -- | ------- | ------ |
| U-I01 | Exact GSC property string | Operator paste |
| U-I02 | Sitemap submission status + Google fetch result | GSC Sitemaps |
| U-I03 | URL Inspection outcomes for sample URLs | Operator or shared screenshots/notes |
| U-I04 | First Googlebot hit date | GSC crawl stats / server logs |
| U-I05 | Bing indexation | Bing Webmaster |
| U-I06 | Preview hostname longevity | Vercel project domain settings |

---

## 10. Assumptions

| ID | Assumption | Label |
| -- | ---------- | ----- |
| A-I01 | Operator GSC property is for this Preview host | [FACT] from SRC-039 wording |
| A-I02 | "Nic za bardzo nie ma" means no meaningful indexed/performance data yet, not a GSC outage | [INFERENCE] |
| A-I03 | Empty index is temporary if crawl succeeds | [HYPOTHESIS] |

---

## 11. Next actions

1. Stop (execution protocol).
2. Optional parallel: operator submits sitemap in GSC + runs URL Inspection; paste results → update this file.
3. On continue: **Stage 4 Keyword research** (volumes = unavailable unless tool/GSC query data appears; seed list from product + registry intents only).
