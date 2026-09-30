# Threat model (Squimbo)

## Assets

- Discord OAuth authorization codes and access tokens
- Squimbo session JWT (maps to `User.id`)
- Game room state (votes, answers, scores) for an Activity instance
- Prompt catalog (not secret, but must not leak other rooms’ votes)

## Trust boundaries

1. Discord iframe (attacker-controlled client) → Nest API
2. Nest → Discord token endpoint / `@me`
3. Nest → Postgres (Prisma)
4. Discord URL mappings / proxy (`/api`)
5. Activity → Supabase Realtime Broadcast only (public anon key; not table CRUD)

## Invariants

- Activity identity is minted only after server-side code exchange + `/users/@me`.
- Room membership is scoped by authenticated user + server `instanceId` on the room, not client-supplied player lists as authz.
- Votes are write-once per (round, voter). Host cannot forge another player’s vote.
- Spicy-toned prompts are content, not a permission bypass.
- Game tables are not a client data API. Nest/Prisma is the only read/write path. Supabase RLS is deny-by-default for PostgREST roles (`anon` / `authenticated`); it does not replace Nest authorization.

## Out of primary scope

PlayGrid desktop, store OAuth. The public marketing site (`apps/web`) is static landing + legal/support pages only — no auth, no game API, no secrets.
