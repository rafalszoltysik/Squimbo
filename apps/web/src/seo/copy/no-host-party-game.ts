import type { SeoPageCopy } from "../types";

export const noHostPartyGameCopy: SeoPageCopy = {
  metaTitle: "Party game with no host privileges",
  metaDescription:
    "In Squimbo everyone shares the same controls. The first joiner is stored as a technical host id only — no in-game privileges.",
  footerLabel: "No host privileges",
  llmsDescription:
    "Squimbo has no in-game host privileges. Everyone shares the same controls.",
  title: "No host privileges. Same controls for everyone",
  lead:
    "Squimbo does not give one player a host menu. The first joiner may be stored as a technical host id for the room, but that does not unlock special in-game powers.",
  sections: [
    {
      title: "Everyone plays the same way",
      body: "Ready-up, voting, next round, and wrap-up intents are shared. The night moves when the group does — not when one person clicks “admin.”",
    },
    {
      title: "Why that fits Discord voice",
      body: "You already chose who is on the call. Squimbo does not need a designated game master. Sealed votes and a shared finale keep the loop fair.",
    },
    {
      title: "What “host” still means technically",
      body: "The API may remember who joined first as hostUserId. That is bookkeeping for the room, not a privilege tier in the UI.",
    },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      question: "Who starts the match?",
      answer:
        "When everyone is ready and there are at least two players, the night can start. There is no privileged host start button.",
    },
    {
      question: "Can one person kick players?",
      answer:
        "Squimbo does not ship in-game host kick controls. Discord voice membership decides who can open the Activity.",
    },
    {
      question: "Who ends the night?",
      answer:
        "Wrap-up is a shared intent after reveals. The scoreboard waits for the finale when the group wraps.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Keep reading",
};
