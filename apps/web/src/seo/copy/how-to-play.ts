import type { SeoPageCopy } from "../types";

export const howToPlayCopy: SeoPageCopy = {
  metaTitle: "How to play Squimbo",
  metaDescription:
    "Start Squimbo in a Discord voice channel, vote on most likely rounds in the dark, then face the finale.",
  footerLabel: "How to play",
  llmsDescription:
    "Three beats: open in voice, vote sealed, score at the finale. No host privileges.",
  title: "How to play Squimbo",
  lead:
    "Three beats: open the Activity in voice, vote sealed on most likely rounds, then face the finale. No host privileges.",
  sections: [
    {
      title: "1. Start in the voice channel",
      body: "Join a Discord voice channel with your friends. Open Squimbo as an Activity. Whoever joins is in the same room. Discord’s instance is the lobby.",
    },
    {
      title: "2. Vote in the dark",
      body: "Each round asks who is most likely. Everyone picks someone else. Tallies stay sealed until the last person locks in, then the night moves on.",
    },
    {
      title: "3. Score at the finale",
      body: "Keep playing or wrap when the room feels done. The scoreboard waits for the finale, then you can start another night.",
    },
    {
      title: "Tips for a good night",
      points: [
        "Best with about 3 to 8 people already in voice.",
        "Make sure Discord has finished loading before you launch.",
        "If someone joins late, they open the same Activity in the same channel.",
      ],
    },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      question: "How do I start Squimbo?",
      answer:
        "Open a Discord voice channel, launch the Squimbo Activity, and play. There is no separate install for the game itself.",
    },
    {
      question: "Can someone join mid-game?",
      answer: "They open Squimbo in the same voice channel.",
    },
    {
      question: "Where do scores show?",
      answer:
        "Scores wait for the finale. Mid-round tallies stay sealed.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Keep reading",
  guidesTitle: "Step-by-step guides",
  howTo: {
    name: "How to play Squimbo",
    steps: [
      {
        name: "Start in the voice channel",
        text: "Join a Discord voice channel with your friends. Open Squimbo as an Activity. Whoever joins is in the same room. Discord’s instance is the lobby.",
      },
      {
        name: "Vote in the dark",
        text: "Each round asks who is most likely. Everyone picks someone else. Tallies stay sealed until the last person locks in, then the night moves on.",
      },
      {
        name: "Score at the finale",
        text: "Keep playing or wrap when the room feels done. The scoreboard waits for the finale, then you can start another night.",
      },
    ],
  },
};
