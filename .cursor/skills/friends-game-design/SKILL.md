---
name: friends-game-design
description: >-
  Squimbo party-game design — viral most_likely loop, reveal, scoring.
  Use when adding prompts, rounds, lobby flow, or changing how votes work.
---

# Squimbo game design

## Read first

1. [docs/strategy.md](../../../docs/strategy.md) — A-core / B-growth-later
2. [docs/product.md](../../../docs/product.md)
3. [docs/roadmap.md](../../../docs/roadmap.md) — what phase we are in
4. [friends-game.mdc](../../rules/friends-game.mdc)
5. Prompt writing: [docs/prompt-content.md](../../../docs/prompt-content.md)

## Loop (MVP = A)

1. Players open the Activity → same `instanceId` room
2. Everyone marks **Ready** / `continue` (≥2) → auto start
3. API serves an unused **`most_likely`** prompt for the **current session**
4. Players vote (votes hidden); UI shows who voted
5. All voted → auto **reveal** (tallies + winner/tie; scores applied when leaving reveal)
6. Clear winner → **Next** / **Wrap up**; tie → **Vote again** / **Keep going**. **Wrap up** → finale scoreboard when all agree (≥1 reveal)
7. Empty prompt bank → finale; **Play again** → new `sessionKey`, scores reset, history kept

## Constraints

- Original prompts only (never paste a third-party bank)
- Party-roast tone — not harassment, PII fishing, hate, or explicit sexual content
- No pack picker in MVP; category fields are legacy / unused in selection
- No second async game mode in the Activity until roadmap Phase 5 unlock
- Reveal is a server state, not a client toggle
- Prefer keeping vote/round history for future Friend Profile (do not casually wipe)
- Prompt **rows** are EN-only in MVP. Polish `bodyPl` lives in the seed source for later.

## Prompt quality (MUST)

Write for a real Discord friend group, not a generic party-game list.

- Specific situation people can picture in one read
- Socially revealing (someone in the call is obviously it)
- Fast to vote; leaves talk after the reveal
- `Who is most likely to …?` in English; Polish from intent (`Kto najpewniej …?`), not a calque
- Reject below 7/10 overall, 7/10 reaction, 6/10 specificity
- Mutate near-duplicates instead of synonym-swapping
- Mix editorial themes in the bank (discord, gaming, dating, chaotic, wholesome, …). Still one shared `most_likely` stream. No pack picker.

## Prompt quality (MUST NOT)

- Bland success / fame / nicest / funniest / “be late” with no twist
- Personality slurs in the question text (let the situation reveal the type)
- Forced slang, emoji in bodies, stacked Discord jargon
- Spice 5 as the default (rare; still playful; never designed to wreck a friendship)
- Prisma `Prompt.category` pack picker (`party` / `family` / `colleagues` / `spicy`) unless product + migration say so. Editorial `category` on the TS bank is mix metadata only.
- Hundreds of AI-flood prompts before the human bank is actually fun

Weak: Who is most likely to be late?
Better: Who is most likely to say “I'm 5 minutes away” while still in the shower?
Strong: Who is most likely to say “I'm outside” while still looking for their shoes?

Bank file: `packages/db/prisma/prompt-bank.ts`. Seed sync: `packages/db/prisma/seed.ts`.

When adding a kind back into the loop: schema enum (if any) + API selection + Activity UI + seed prompts + tests — and confirm it does not violate A-only strategy.
