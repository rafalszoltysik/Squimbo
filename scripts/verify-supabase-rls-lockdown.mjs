/**
 * Smoke: PostgREST must not return Vote rows with the public anon key after RLS lockdown.
 *
 * Requires https SUPABASE_URL (or VITE_SUPABASE_URL) and SUPABASE_ANON_KEY
 * (or VITE_SUPABASE_ANON_KEY). Exit 0 = blocked or empty; 1 = rows leaked; 2 = env skip.
 * Does not print key values.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile(name) {
  const path = resolve(process.cwd(), name);
  if (!existsSync(path)) return;
  const text = readFileSync(path, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

loadEnvFile(".env.development");
loadEnvFile(".env");

function resolveSupabaseHttpOrigin(raw) {
  const v = raw?.trim().replace(/^['"]|['"]$/g, "") ?? "";
  if (!v) return "";
  if (/^https?:\/\//i.test(v)) return v.replace(/\/+$/, "");
  return "";
}

const base =
  resolveSupabaseHttpOrigin(process.env.SUPABASE_URL) ||
  resolveSupabaseHttpOrigin(process.env.VITE_SUPABASE_URL);
const anon =
  process.env.SUPABASE_ANON_KEY?.trim() ||
  process.env.VITE_SUPABASE_ANON_KEY?.trim() ||
  "";

if (!base || !anon) {
  console.info(
    "[rls-smoke] skip: set SUPABASE_URL (https) and SUPABASE_ANON_KEY (or VITE_*)",
  );
  process.exit(2);
}

const url = `${base}/rest/v1/Vote?select=id&limit=1`;
const res = await fetch(url, {
  headers: {
    apikey: anon,
    Authorization: `Bearer ${anon}`,
    Accept: "application/json",
  },
  signal: AbortSignal.timeout(10_000),
});

const body = await res.text();
let rows = null;
try {
  const parsed = JSON.parse(body);
  if (Array.isArray(parsed)) rows = parsed;
} catch {
  // non-JSON error body is fine (permission denied, etc.)
}

if (rows && rows.length > 0) {
  console.error(
    `[rls-smoke] FAIL: PostgREST returned Vote rows with anon key (HTTP ${res.status}).`,
  );
  process.exit(1);
}

console.info(
  `[rls-smoke] OK: anon Vote read blocked or empty (HTTP ${res.status}).`,
);
process.exit(0);
