import type { SeoPageCopy } from "../types";

export const discordActivityCopy: SeoPageCopy = {
  metaTitle: "Discord Activity party game",
  metaDescription:
    "Squimbo runs as a Discord Activity in voice. Same channel, sealed votes, finale scores. No separate app.",
  footerLabel: "Discord Activity",
  llmsDescription:
    "What a Discord Activity is and how Squimbo uses the voice-channel instance as the room.",
  title: "Squimbo is a Discord Activity",
  lead:
    "A Discord Activity is a shared app that opens inside Discord, usually from a voice channel. Squimbo uses that so the people already talking are the players.",
  sections: [
    {
      title: "What a Discord Activity is",
      body: "Instead of leaving Discord for a browser lobby, the group launches an Activity together. Everyone sees the same session in the channel where you started.",
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
      body: "You keep talking while you vote. Sealed “most likely” rounds, then scores at the finale. The marketing site is only the front door. The night happens in the Activity.",
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
  ],
  cta: "Play on Discord",
  relatedTitle: "Keep reading",
  guidesTitle: "Guides for Discord Activities",
};
