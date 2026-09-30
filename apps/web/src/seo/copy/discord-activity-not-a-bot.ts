import type { SeoPageCopy } from "../types";

export const discordActivityNotABotCopy: SeoPageCopy = {
  metaTitle: "Discord Activity, not a bot",
  metaDescription:
    "Squimbo is a Discord Activity in voice, not a slash-command bot, chat economy, or separate browser lobby.",
  footerLabel: "Activity, not a bot",
  llmsDescription:
    "Squimbo is a Discord Activity, not a slash-command bot or chat moderation tool.",
  title: "Squimbo is a Discord Activity, not a bot",
  lead:
    "Squimbo opens from the Activity shelf on a voice channel. You do not invite a bot, type slash commands, or play through chat replies.",
  sections: [
    {
      title: "Activity vs bot",
      body: "A Discord Activity is a shared app inside Discord, usually tied to a voice channel. A bot lives in chat with messages and slash commands. Squimbo is an Activity so everyone already on the call shares one UI.",
    },
    {
      title: "What that means for players",
      body: "You open Squimbo in voice. The Activity instance is the room. Votes and scores live in the Activity UI, not as bot messages in text chat.",
    },
    {
      title: "What you skip",
      points: [
        "No bot invite before you can play.",
        "No slash commands in chat to start a night.",
        "No moderation tools or server economy bolted on.",
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
        "No. This site explains the product and hosts legal pages. The game runs inside Discord.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Related",
};
