import type { SeoPageCopy } from "../types";

export const discordActivityCopy: SeoPageCopy = {
  metaTitle: "Discord Activity party game",
  metaDescription:
    "A Discord Activity is a shared app in Discord for friends already in voice. Squimbo uses that room for sealed votes and finale scores.",
  footerLabel: "Discord Activity",
  llmsDescription:
    "What a Discord Activity is and how Squimbo uses the voice-channel instance as the room.",
  title: "A Discord Activity for friends already in voice",
  lead:
    "A Discord Activity is a shared app that opens inside Discord so the people already talking can play together. Squimbo uses that: same voice channel, same room, no separate game install.",
  sections: [
    {
      title: "What a Discord Activity is",
      body: "Instead of leaving Discord for a browser lobby, the group launches an Activity together. Everyone sees the same session in the channel where you started. This page is for players, not a developer setup guide.",
    },
    {
      title: "How Squimbo uses it",
      body: "Open Squimbo in voice. Discord’s Activity instance is the room. Display names and avatars come with you. There is no separate install for the game itself.",
      points: [
        "Runs inside Discord",
        "Same channel = same room",
        "Desktop and mobile Discord clients",
      ],
    },
    {
      title: "Party night without leaving voice",
      body: "You keep talking while you vote. Sealed “most likely” rounds, then scores at the finale. The marketing site is only the front door. The night happens in the Activity. To launch Squimbo step by step, see [Open a Discord Activity](/open-discord-activity).",
    },
    {
      title: "Activity vs bot vs browser lobby",
      body: "A slash-command bot plays in chat. A browser party link is a separate site you share while on a call. Squimbo is the middle path that is still fully in Discord: an Activity UI on the voice channel. See [Activity, not a bot](/discord-activity-not-a-bot) for the short definitions.",
    },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      question: "Is Squimbo a Discord Activity?",
      answer:
        "Yes. Squimbo launches as a Discord Activity for groups already in a voice channel.",
    },
    {
      question: "Do I need another app?",
      answer:
        "No. Use Discord on desktop or mobile. There is no extra install for Squimbo itself.",
    },
    {
      question: "Where does the room live?",
      answer:
        "In the Discord Activity instance for that channel. Whoever opens Squimbo there is in.",
    },
    {
      question: "Is this the same as inviting a bot?",
      answer:
        "No. You do not invite a Squimbo bot. You open the Activity from the shelf in voice.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Related",
  guidesTitle: "Guides for Discord Activities",
};
