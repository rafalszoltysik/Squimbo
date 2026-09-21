import { describe, expect, it } from "vitest";
import {
  countPromptThemes,
  GENERIC_PROMPT_FAIL,
  listPromptBankIssues,
  MOST_LIKELY_BANK,
  PROMPT_THEMES,
} from "./prompt-bank";

describe("most_likely prompt bank", () => {
  it("has no uniqueness, locale-shape, or generic-filter issues", () => {
    expect(listPromptBankIssues(MOST_LIKELY_BANK)).toEqual([]);
  });

  it("rejects the master-prompt bland examples", () => {
    const bland = [
      "Who is most likely to become successful?",
      "Who is most likely to travel the world?",
      "Who is most likely to become famous first?",
      "Who is the nicest?",
      "Who is the funniest?",
      "Who is most likely to be late?",
    ];
    for (const body of bland) {
      expect(GENERIC_PROMPT_FAIL.some((pattern) => pattern.test(body))).toBe(
        true,
      );
    }
  });

  it("authors a Polish body next to every English row", () => {
    for (const entry of MOST_LIKELY_BANK) {
      expect(entry.bodyPl.length).toBeGreaterThan(20);
      expect(entry.bodyPl).not.toBe(entry.body);
      expect(entry.bodyPl.includes("Who is most likely")).toBe(false);
    }
  });

  it("covers every editorial theme without one dominating", () => {
    const counts = countPromptThemes(MOST_LIKELY_BANK);
    const total = MOST_LIKELY_BANK.length;
    for (const theme of PROMPT_THEMES) {
      expect(counts.get(theme) ?? 0).toBeGreaterThanOrEqual(3);
    }
    for (const count of counts.values()) {
      expect(count / total).toBeLessThanOrEqual(0.22);
    }
  });
});
