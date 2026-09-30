import type { SeoPageCopy } from "../types";

export const mostLikelyCopy: SeoPageCopy = {
  metaTitle: "Most likely on Discord",
  metaDescription:
    "Play sealed “who is most likely” as a Discord Activity in voice. Not a browser room you share over Discord. Scores wait for the finale.",
  footerLabel: "Most likely",
  llmsDescription:
    "How Squimbo’s “who is most likely” rounds work with sealed votes and a finale scoreboard inside Discord.",
  title: "Most likely inside Discord, sealed until lock-in",
  lead:
    "Squimbo’s core loop is “who is most likely,” played as a Discord Activity with the voice group you already have, not a separate browser lobby or a one-phone pass-around. Votes stay sealed until the last person locks in.",
  sections: [
    {
      title: "Vote in the dark",
      body: "Each prompt names a specific situation. Example: who is most likely to say they are outside while still looking for their shoes. Everyone picks another player. Your choice stays private while others still vote. When the last person locks in, the round resolves and the night continues. For sealed tallies in more detail, see [Vote in the dark](/vote-in-the-dark).",
    },
    {
      title: "Why sealed votes matter",
      body: "If tallies updated live, the joke would collapse. Sealed votes keep the roast fair and the reveal worth waiting for. Scores still wait for the finale, not every round.",
    },
    {
      title: "Discord Activity vs browser “play over Discord”",
      body: "Some web most-likely tools ask you to share a link while you happen to be on a Discord call. Squimbo is different: the game is the Discord Activity. Everyone is in the same instance with Discord names and avatars. Voice stays on; there is no separate browser room to host.",
    },
    {
      title: "Ties, next round, wrap-up",
      body: "Clear winner → next round or wrap when the group is ready. Tie → vote again on the same prompt or keep going. Running scores stay hidden until the finale scoreboard. Soft target is a multi-round night, not a single gag.",
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
        "Yes. Squimbo runs as a Discord Activity. Open it in voice with the group you already have, not as a standalone browser party tool.",
    },
    {
      question: "Do you publish a big question list?",
      answer:
        "No. Squimbo uses an original English most-likely bank inside the Activity. This site explains the format: it is not a prompt dump.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Related",
  guidesTitle: "Guides around most likely",
};
