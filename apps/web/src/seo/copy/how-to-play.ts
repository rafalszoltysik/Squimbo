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
      body: "Join a Discord voice channel with your friends. Open Squimbo as an Activity. Whoever joins is in the same room. Discord’s instance is the lobby. Need the shelf steps only? See [Open a Discord Activity](/open-discord-activity).",
    },
    {
      title: "2. Vote in the dark",
      body: "Each round asks who is most likely. Everyone picks someone else. Tallies stay sealed until the last person locks in, then the night moves on. Sealed UX detail lives on Vote in the dark.",
    },
    {
      title: "3. Score at the finale",
      body: "Keep playing or wrap when the room feels done. The scoreboard waits for the finale, then you can start another night with Play again.",
    },
    {
      title: "Ties and revotes",
      body: "If the reveal is a tie, the group can vote again on the same prompt or keep going. A revote voids that ballot and reopens the prompt. Clear winners apply scores when you move on; full night scores still wait for the finale.",
    },
    {
      title: "Tips for a good night",
      points: [
        "Best with about 3 to 8 people already in voice.",
        "Make sure Discord has finished loading before you launch.",
        "If someone joins late, they open the same Activity in the same channel.",
        "Soft target is about 8 to 12 rounds; the UI can nudge wrap-up later.",
      ],
    },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      question: "How do I start Squimbo?",
      answer:
        "Open a Discord voice channel, launch the Squimbo Activity, Ready up, and play. There is no separate install for the game itself.",
    },
    {
      question: "Can someone join mid-game?",
      answer: "They open Squimbo in the same voice channel.",
    },
    {
      question: "Where do scores show?",
      answer:
        "Scores wait for the finale. Mid-round tallies stay sealed until lock-in, then that prompt reveals.",
    },
    {
      question: "Who is the host?",
      answer:
        "Nobody has in-game host privileges. Everyone shares the same controls. See [No host privileges](/no-host-party-game).",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Related",
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
