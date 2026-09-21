import type { SeoPageCopy } from "../types";

export const discordActivityNotABotCopy: SeoPageCopy = {
  metaTitle: "Discord Activity, not a bot",
  metaDescription:
    "Squimbo is a Discord Activity in voice — not a slash-command bot, chat economy, or separate browser lobby.",
  footerLabel: "Activity, not a bot",
  llmsDescription:
    "Squimbo is a Discord Activity, not a slash-command bot or chat moderation tool.",
  title: "Squimbo is a Discord Activity, not a bot",
  lead:
    "Squimbo launches from the Activity shelf on a voice channel. It is not a Discord bot with slash commands, chat moderation, or a text-channel economy.",
  sections: [
    {
      title: "Activity vs bot",
      body: "A Discord Activity is a shared app inside Discord, usually tied to a voice channel. A bot is a different surface: messages, slash commands, and server permissions. Squimbo ships as an Activity.",
    },
    {
      title: "What that means for players",
      body: "You open Squimbo in voice. The Activity instance is the room. Votes and scores live in the Activity UI, not as bot replies in chat.",
    },
    {
      title: "Out of scope for Squimbo MVP",
      points: [
        "No /play slash commands.",
        "No chat moderation or server economy.",
        "No requirement to add a bot before you can play.",
      ],
    },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      question: "Do I need to invite a Squimbo bot?",
      answer:
        "No. Open Squimbo as a Discord Activity in a voice channel. There is no bot invite required to play.",
    },
    {
      question: "Will Squimbo post results in chat?",
      answer:
        "The night happens inside the Activity. Reveals and the finale scoreboard show in the Activity UI.",
    },
    {
      question: "Is the marketing site the game?",
      answer:
        "No. squimbo.app explains the product and hosts legal pages. The game runs inside Discord.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Keep reading",
};
