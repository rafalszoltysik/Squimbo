import { PrismaClient } from "@prisma/client";
import { MOST_LIKELY_BANK } from "./prompt-bank";

const prisma = new PrismaClient();

/**
 * Sync the English most_likely bank.
 * Updates in place when `replaces` matches an old body (keeps Prompt.id).
 * Polish `bodyPl` is not inserted (Prompt_locale_en_only_check).
 */
async function syncMostLikelyBank(force: boolean) {
  const referencedRows = await prisma.round.findMany({
    select: { promptId: true },
    distinct: ["promptId"],
  });
  const referenced = new Set(referencedRows.map((row) => row.promptId));

  const existing = await prisma.prompt.findMany({
    where: { kind: "most_likely", locale: "en" },
  });
  const byBody = new Map(existing.map((row) => [row.body, row]));
  const keepIds = new Set<string>();

  let updated = 0;
  let created = 0;

  for (const entry of MOST_LIKELY_BANK) {
    const exact = byBody.get(entry.body);
    if (exact) {
      keepIds.add(exact.id);
      continue;
    }

    const predecessor = (entry.replaces ?? [])
      .map((old) => byBody.get(old))
      .find((row) => row && !keepIds.has(row.id));

    if (predecessor) {
      await prisma.prompt.update({
        where: { id: predecessor.id },
        data: { body: entry.body },
      });
      keepIds.add(predecessor.id);
      byBody.delete(predecessor.body);
      byBody.set(entry.body, { ...predecessor, body: entry.body });
      updated += 1;
      continue;
    }

    const createdRow = await prisma.prompt.create({
      data: { kind: "most_likely", locale: "en", body: entry.body },
    });
    keepIds.add(createdRow.id);
    byBody.set(entry.body, createdRow);
    created += 1;
  }

  const stale = existing.filter((row) => !keepIds.has(row.id));
  const deletable = stale.filter((row) => !referenced.has(row.id));
  const blocked = stale.filter((row) => referenced.has(row.id));

  let deleted = 0;
  if (force && deletable.length > 0) {
    const result = await prisma.prompt.deleteMany({
      where: { id: { in: deletable.map((row) => row.id) } },
    });
    deleted = result.count;
  }

  const total = await prisma.prompt.count({
    where: { kind: "most_likely", locale: "en" },
  });

  console.log(
    `Prompt bank sync: updated ${updated}, created ${created}, deleted ${deleted} (force=${force}). Bank file ${MOST_LIKELY_BANK.length}, table ${total}.`,
  );
  if (!force && deletable.length > 0) {
    console.log(
      `${deletable.length} unreferenced leftover prompt(s) left in place. Pass --force locally to delete them.`,
    );
  }
  if (blocked.length > 0) {
    console.log(
      `Left ${blocked.length} referenced leftover prompt(s) (round history).`,
    );
  }
}

async function main() {
  const force = process.argv.includes("--force");
  if (force && process.env.NODE_ENV === "production") {
    throw new Error("Refusing --force seed in production");
  }

  await syncMostLikelyBank(force);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
