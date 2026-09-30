# Secure coding (Squimbo)

- Validate all external input (`class-validator` DTOs).
- Authorize every room/round/vote by `userId` + room membership (or host role).
- Minimize Prisma `select`; never return Discord access tokens or JWT in game DTOs.
- `activity/exchange` is `@Public()` but rate-limited; it is not harmless (account provision + token mint).
- Log events, not secrets. Redact `Authorization`, `code`, `access_token`.
- CORS: allow Activity origin / Discord embed needs; no `*` with credentials.
- HIGH/CRITICAL fixes need a regression test in the same PR.

## Supabase / Postgres

- Treat `VITE_SUPABASE_ANON_KEY` as public. Activity may use it for Realtime Broadcast only, never for PostgREST table access.
- After migrate `20260930120000_supabase_rls_lockdown`, app tables have RLS enabled with no policies for API roles, plus `REVOKE` from `anon` / `authenticated` on Supabase. Do not add broad `GRANT` or permissive policies that re-open tables to the anon key.
- Do not implement game authz as RLS policies (`auth.uid()`, room membership). Keep that in Nest.
- Prisma’s pooler / direct role must keep `BYPASSRLS` (default Supabase `postgres` / migration role). Do not `FORCE ROW LEVEL SECURITY` on that role.
- Smoke after deploying the migration: `node scripts/verify-supabase-rls-lockdown.mjs` (https `SUPABASE_URL` + anon key; must not return Vote rows).
