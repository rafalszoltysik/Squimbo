---
name: friends-prisma-db
description: >-
  Squimbo Prisma schema, migrations, seed — PostgreSQL via @friends/db. Use when
  changing schema.prisma, models, migrations, db:seed, or Prisma queries for
  User, GameRoom, Round, Prompt, Vote.
---

# Squimbo Prisma & database

## Read first

1. [packages/db/README.md](../../../packages/db/README.md)
2. `packages/db/prisma/schema.prisma`
3. Prisma plugin: `schema-conventions`, `migration-best-practices`

## Domain → API

| Domain | Models | API |
|--------|--------|-----|
| Identity | `User` (`discordId`) | `discord/`, `auth/` |
| Match | `GameRoom`, `RoomPlayer` | `game/` |
| Catalog | `Prompt` | seed + `game/` |
| Play | `Round`, `Vote` | `game/` |

## Execution order

1. Align names with existing schema; both sides of relations; `createdAt`/`updatedAt`.
2. Edit `schema.prisma`; `pnpm db:migrate` from root (not `db:push` for prod-bound changes).
3. Update Nest services; always scope by authenticated user / membership.
4. Seed the `most_likely` bank from `packages/db/prisma/prompt-bank.ts`. **Insert English rows only** (`Prompt_locale_en_only_check`). Each entry also has `bodyPl` for a later PL bank; do not insert `locale = pl` until product + a migration drop that check.
5. Seed **syncs** (update via `replaces` to keep `Prompt.id`, insert missing, delete unreferenced leftovers). Do not wipe rounds/votes. No `--force` in production.
6. Prompt quality: [docs/prompt-content.md](../../../docs/prompt-content.md). Mix editorial themes in `prompt-bank.ts`. No pack picker. Do not add spice / theme Prisma columns unless schema + migration are explicitly required.
7. Tests per `friends-testing`.

## Commands

```bash
pnpm db:up
pnpm db:migrate
pnpm db:seed
pnpm db:generate
```
