import type { SeoPageCopy } from "../types";

export const mostLikelyCopy: SeoPageCopy = {
  metaTitle: "Most likely on Discord",
  metaDescription:
    "Play sealed “who is most likely” rounds inside Discord. Votes stay hidden until lock-in. Scores wait for the finale.",
  footerLabel: "Most likely",
  llmsDescription:
    "How Squimbo’s “who is most likely” rounds work with sealed votes and a finale scoreboard.",
  title: "Most likely rounds, sealed until lock-in",
  lead:
    "Squimbo’s core loop is “who is most likely,” voted in the dark inside Discord. Nobody peeks at the tally mid-round. Tension holds until the last vote locks in.",
  sections: [
    {
      title: "Vote in the dark",
      body: "Each prompt names a specific situation. Example: who is most likely to say they are outside while still looking for their shoes. Everyone picks another player. Your choice stays private while others still vote. When the last person locks in, the round resolves and the night continues.",
    },
    {
      title: "Why sealed votes matter",
      body: "If tallies updated live, the joke would collapse. Sealed votes keep the roast fair and the reveal worth waiting for. Scores still wait for the finale, not every round.",
    },
    {
      title: "Made for the voice channel",
      body: "You hear reactions while you play. Display names and avatars come from Discord. Open the Activity and you are in the next prompt with the group.",
    },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      question: "What is a most likely round?",
      answer:
        "A prompt asks who is most likely to do something. Each player votes for someone else. In Squimbo, those votes stay sealed until lock-in.",
    },
    {
      question: "When do I see the scoreboard?",
      answer:
        "At the finale. Mid-round you only get the sealed-vote reveal for that prompt, not the full night scores.",
    },
    {
      question: "Is this only on Discord?",
      answer:
        "Yes. Squimbo runs as a Discord Activity. Open it in voice with the group you already have.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Keep reading",
  guidesTitle: "Guides around most likely",
};
