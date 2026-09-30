-- PostgREST lockdown for the public Supabase anon key (Activity bundle).
-- Nest/Prisma remains the only data path and connects as a BYPASSRLS role.
-- No per-row authz policies — deny-by-default when RLS is on and roles have no grants.

ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "GameRoom" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "RoomPlayer" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Prompt" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Round" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Vote" ENABLE ROW LEVEL SECURITY;

-- Local Docker has no Supabase API roles; skip REVOKE there.
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN
    REVOKE ALL ON TABLE
      "User",
      "GameRoom",
      "RoomPlayer",
      "Prompt",
      "Round",
      "Vote"
    FROM anon;
  END IF;

  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
    REVOKE ALL ON TABLE
      "User",
      "GameRoom",
      "RoomPlayer",
      "Prompt",
      "Round",
      "Vote"
    FROM authenticated;
  END IF;
END $$;
