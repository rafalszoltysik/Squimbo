# @friends/db

PostgreSQL via Prisma. Schema domains: identity (`User`), match (`GameRoom`, `RoomPlayer`), catalog (`Prompt`), play (`Round`, `Vote`).

`most_likely` copy lives in `prisma/prompt-bank.ts`. `pnpm db:seed` syncs English rows in place (keeps ids when `replaces` matches). Polish `bodyPl` is source-only until the EN-only locale check is lifted.

Commands from repo root: `pnpm db:up`, `pnpm db:migrate`, `pnpm db:seed`, `pnpm db:generate`.

Authz lives in Nest — do not treat the database as the authorization layer.
