# Squimbo prompt content

Editorial bar for `most_likely` prompts. Product loop: [product.md](./product.md). Strategy lock: [strategy.md](./strategy.md). Agent workflow: `.cursor/skills/friends-game-design/SKILL.md`.

The bank lives in `packages/db/prisma/prompt-bank.ts`. Seed writes **English rows only** (`Prompt_locale_en_only_check`). Polish `bodyPl` is authored next to each prompt for a later PL bank. Do not insert `locale = pl` until that constraint and [roadmap.md](./roadmap.md) say so.

MVP serves `most_likely` only. Category packs and other kinds stay out of selection. Do not copy third-party party-game banks.

## Job

A prompt is not a joke to read. It is a social trigger: the group should recognize someone, argue, laugh, or demand another round.

Optimize for, in order: instant comprehension, fast votes, strong reactions, humor, relatability, mild awkwardness, playful controversy, shareability, talk after the reveal, replay.

The room should feel like:

- that is literally them
- you did not just pick me
- everyone already knows
- I am not answering that
- run another one

## Writing rule

Prefer **specific + recognizable + socially revealing + slightly chaotic** over **generic + inspirational + predictable**.

Generic lines are a fail unless they carry a real twist. Do not ship:

- Who is most likely to become successful?
- Who is most likely to travel the world?
- Who is most likely to become famous?
- Who is the nicest?
- Who is the funniest?
- Who is most likely to be late? (no situation)

Weak / better / strong:

- Weak: Who is most likely to be late?
- Better: Who is most likely to say "I'm 5 minutes away" while still in the shower?
- Strong: Who is most likely to say "I'm outside" while still looking for their shoes?

Name a **behavior**, not a personality label. Do not call a player messy, toxic, dumb, or a loser in the prompt text. Let the situation reveal the archetype.

## Architecture (use a mix)

- Specific behavior (receipts, a line people actually say)
- Hypothetical chaos that still feels possible in this friend group
- Social exposure (crush, secret, "everyone knows")
- Contradiction ("I'm fine" with the voice that is not)
- Escalation / time pressure
- Digital behavior (mute, screen share, read receipts, story views)
- Relationship tension that stays playful
- Group lore ("that one time")
- Unexpected specificity

Discord-native is good when it is a real VC habit (mute, ghosting, hot mic, screen share, 3am ping). Do not stack slang in every line.

Humor comes from specificity, exaggeration, and irony. No forced slang. No emoji in prompt bodies.

## Spice (editorial, not a DB column)

There is no `spice_level` column. Judge by hand.

| Level | Use |
|-------|-----|
| 1 | Safe, still specific |
| 2 | Playfully embarrassing |
| 3 | Personal (dating, secrets, social tells) |
| 4 | Chaotic reactions, still a game |
| 5 | Rare. Adult social Discord. Playful only. |

Never: hate or protected-class targeting, harassment, self-harm, real violence or crime how-to, explicit sexual content, PII fishing, humiliating a named real person, content meant to actually wreck a friendship.

Age: 18+ social Discord. Dating, flirting, drinking culture in a non-instructional way is fine. Not explicit.

## Quality filter (reject below)

Ship a prompt only if it clears all three:

1. Overall fun in a real 3-8 friend VC: at least 7/10
2. Likely social reaction (accusation, denial, laugh): at least 7/10
3. Specificity: at least 6/10

Also reject near-duplicates. If two prompts share the same situation, mutate one (different beat, not a synonym).

## Locales

- **Activity UI chrome:** en + pl catalogs. Polish from intent, not a calque.
- **Prompt rows in Postgres:** English only in MVP. API hardcodes `locale = "en"`.
- **Prompt source:** every bank entry has `body` (EN) and `bodyPl` (PL). Polish should sound like a host in a Polish VC, not a translated landing page. Typical shape: `Kto najpewniej …?`

Marketing site samples are English only. They should be real bank-quality lines, not bland explainers.

## Output shape (generators)

When drafting new prompts, use this shape. Do not add Prisma JSON metadata unless a migration exists.

```text
kind: most_likely
category: discord
locale: en
body: Who is most likely to…?
bodyPl: Kto najpewniej…?
```

`category` is editorial mix on the TypeScript bank. It is not `Prompt.category` in Postgres (legacy pack picker: party / family / colleagues / spicy). The Activity still draws one unused English `most_likely` row. Players do not pick a pack.

Optional editorial scores (keep them in the draft, not in the schema): spice 1-5, plus humor / viral / controversy / awkwardness / relatability / specificity / surprise / conversation / shareability.

## Theme mix

Keep the format `Who is most likely to …?`. Vary the situation.

Themes on the bank: discord, gaming, friendship, dating, crushes, relationships, jealousy, secrets, embarrassing, chaotic, dark_humor, money, nightlife, social_media, work, school, personality, group_lore, hypothetical, wholesome, absurd, controversial, confession, late_night.

For a ~100-prompt batch, aim roughly: 20% safe/funny, 20% embarrassing, 15% Discord-native, 15% dating/relationships, 10% chaotic, 10% spicy, 5% wholesome, 5% absurd. Do not let one theme eat the night. Contrast makes the spicy lines land.

Seed and tests enforce: every theme at least 3 lines, no theme over 22% of the file.

## Seed

`pnpm db:seed` syncs the bank: update in place when `replaces` matches an old English body (keeps `Prompt.id` for round history), insert missing bodies. Unreferenced leftovers are deleted only with local `--force`. Referenced stale rows stay. The current file has about 150 `most_likely` rows.

Do not `--force` in production. Do not wipe vote/round history to clean the bank.
