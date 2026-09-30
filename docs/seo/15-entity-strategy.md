# 15 - Entity strategy

Date: 2026-09-30  
Depends on: Stages 1, 3–5 (brand SERP), 10 (attributes), 14 (GEO)  
Label legend: [FACT] [OBSERVATION] [INFERENCE] [HYPOTHESIS] [UNKNOWN]

---

## 1. Decision

**Treat “Squimbo” as a fragile brand entity.** Win recognition by **hard product attributes + Discord Directory + indexed marketing home**, not by arguing with slang definitions or building Wikipedia prematurely.

| Priority | Entity goal |
| -------- | ----------- |
| P0 | Indexed `/en` + Preview/production host strategy that crawlers can trust |
| P0 | Discord App Directory listing accurate and linked from site schema/CTA |
| P0 | Consistent attribute set everywhere (Stage 10 §5 / Stage 14 §4) |
| P1 | Brand+modifier queries (`Squimbo Discord`, `Squimbo Discord Activity`) resolve to product |
| P2 | Third-party profiles (optional) — only after P0 |
| Defer | Wikidata / Wikipedia — not justified yet |

---

## 2. Desired entity card (what search/AI should learn)

| Field | Target value | Source |
| ----- | ------------ | ------ |
| Name | Squimbo | SRC-001 |
| Disambiguator | Discord Activity party game | SRC-001 |
| Function | Sealed “who is most likely” among friends already in Discord voice | SRC-001 |
| Operator | Rafał Szołtysik (legal pages) | SRC-011 |
| Official web | Intended `https://squimbo.app/en`; interim Preview host | Stage 20 |
| Official play | Discord App Directory app `1545063528422183043` | SRC-036 |
| Support | Support Discord invite (site/env) | SRC-009 |

**Not part of the entity:** Balatro slang, Urban Dictionary senses, GitHub user `@squimbo`, “Squimblo” ladder sites. [OBSERVATION] SRC-018, SRC-057, SRC-059.

---

## 3. Collision map (observed)

| Colliding / confusable signal | Type | Risk to Squimbo | Response |
| ----------------------------- | ---- | --------------- | -------- |
| Urban Dictionary / synonym farms for “Squimbo” | Slang | Brand SERP pollution | Do not battle slang pages; outrank with Discord Activity modifiers + index [INFERENCE] |
| Balatro community “Squimbo” usage | Game slang | Name collision | Same — attribute disambiguation |
| Squimblo (ladder / other) | Near-homophone site | Confusion | Clear spelling + Discord Activity in titles |
| GitHub `@squimbo` | Unrelated user | Weak | Ignore unless impersonation |
| Unrelated Discord communities in “Squimbo Discord” SERP | Noise | Brand+Discord still fails | Directory + site must appear [OBSERVATION] SRC-060 |

Bare query `Squimbo` is **hostile** today. [OBSERVATION] Stages 4–5.

---

## 4. Entity signal inventory

| Signal | Status | Label | Action |
| ------ | ------ | ----- | ------ |
| Marketing home `/en` | Live on Preview; not observed in Google index | [OBSERVATION] | Indexation ops (Stage 3 checklist) |
| Canonical / OG consistency | Self-canonical on Preview | [OBSERVATION] | Cutover plan for squimbo.app |
| JSON-LD Organization + SoftwareApplication | Present; sameAs → Directory play URL | [FACT] | Keep; strengthen description with entity terms when Stage 12 lands |
| Discord App Directory | Live; ~3 servers UI; categories Community + Games | [OBSERVATION] SRC-036 | Align copy with product (en+pl UI claim gap); keep CTA |
| Directory in Google SERP for brand | Not observed | [OBSERVATION] SRC-046/047 | Patience + accurate listing; not a new marketing URL |
| Support Discord | Documented | [FACT] | Keep in llms Contact |
| Product Hunt / G2 / AlternativeTo | Not verified | [UNKNOWN] | Optional later; do not fake listings |
| Wikipedia / Wikidata | Not verified; likely absent | [UNKNOWN] | **Do not create** until notability + stable production domain |
| Social brand accounts | UNKNOWN | [UNKNOWN] | Out of SEO research scope unless operator provides |
| Knowledge Panel | Absent (inferred from brand SERP) | [INFERENCE] | Not a near-term target |

---

## 5. Disambiguation tactics (allowed)

| Tactic | Do | Don’t |
| ------ | -- | ----- |
| On-page / meta | Lead with “Discord Activity party game” | Write “not the Urban Dictionary meme” essays |
| Modifiers | Squimbo + Discord / Activity in titles where natural | Keyword-stuff every H2 |
| Structured data | Accurate SoftwareApplication + installUrl | Fake ratings, review counts, download numbers |
| Directory | Accurate description, categories, language claims | Claim bots, packs, or unshipped modes |
| Internal consistency | Same attributes in FAQ, llms, schema | Contradict product.md |
| Comparisons | Mechanic/platform contrasts | Name competitors unless strategy unlocks |

Stage 12 home/party/most-likely specs implement the copy side of this. [INFERENCE]

---

## 6. Directory as co-equal entity node

Discord App Directory is an **official play identity**, not owned HTML.

| Rule | Detail |
| ---- | ------ |
| Site → Directory | Primary Play CTA + schema installUrl/sameAs | [FACT] code |
| Directory → Site | Ideal: listing links marketing URL when Discord UI allows — **verify in portal** [UNKNOWN] |
| Copy parity | Directory must not contradict MVP (Activity vs bot; free play claims; language) | Stage 2 T-005 |
| Server count | UI showed 3 — do not market fabricated popularity | [OBSERVATION] |

---

## 7. Operator / Organization entity

Legal pages establish Rafał Szołtysik as operator [FACT].  
Organization schema currently uses site name “Squimbo” + logo [OBSERVATION].  

| Option | Verdict |
| ------ | ------- |
| Keep Organization name = Squimbo | **Preferred** for product entity |
| Add Person schema for operator | Optional trust; not required for MVP SEO |
| Mix personal brand into SoftwareApplication name | **Avoid** |

---

## 8. Success criteria (entity)

| Criterion | Now | Target |
| --------- | --- | ------ |
| `site:` or GSC shows `/en` indexed | Fail / empty | Pass |
| Query `Squimbo Discord Activity` shows site or Directory | Fail [OBSERVATION] | Site and/or Directory in top results |
| Query `Squimbo` alone | Slang-dominated | At least one product result OR acceptable that bare slang needs modifiers [HYPOTHESIS] |
| AI systems state “Discord Activity party game” | UNKNOWN | Stage 16 probes |

---

## 9. Explicit non-goals

- Buying PBNs / fake citation networks  
- Creating lookalike domains  
- Editing slang wikis adversarially  
- Claiming affiliation with Discord Inc. beyond “runs on Discord Activities” (Terms already state non-affiliation) [FACT]

## Next

Stage 16 AI citability (what models should cite; probe plan; no fabricated citation claims).
