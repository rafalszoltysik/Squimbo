import type { SeoPageCopy } from "../types";

export const openDiscordActivityCopy: SeoPageCopy = {
  metaTitle: "Open a Discord Activity",
  metaDescription:
    "Join voice, open the Activity shelf, and launch Squimbo. Same channel, same room. No separate game install.",
  footerLabel: "Open a Discord Activity",
  llmsDescription:
    "How to open Squimbo from a Discord voice channel via the Activity shelf.",
  title: "How to open Squimbo as a Discord Activity",
  lead:
    "Squimbo lives in Discord’s Activity shelf. Join voice with friends, launch Squimbo, and the Activity instance becomes the room.",
  sections: [
    {
      title: "1. Join a voice channel",
      body: "Get everyone into the same Discord voice channel. Squimbo is built for people who are already talking — not for random matchmaking.",
    },
    {
      title: "2. Open the Activity shelf",
      body: "In Discord desktop or mobile, open Activities (the shelf or Apps menu on the voice channel). Find Squimbo and launch it.",
    },
    {
      title: "3. Play in the same instance",
      body: "Whoever opens Squimbo in that channel joins the same room. Discord’s Activity instance id is the lobby. Display names and avatars come with you.",
    },
    {
      title: "What you do not need",
      points: [
        "No separate installer for the game itself.",
        "No slash-command bot to start a round.",
        "No browser lobby outside Discord.",
      ],
    },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      question: "Where do I find Squimbo in Discord?",
      answer:
        "Join a voice channel, open the Activity shelf or Apps menu, and launch Squimbo from there.",
    },
    {
      question: "Do late joiners need a link?",
      answer:
        "They open Squimbo in the same voice channel. The Activity instance is the room.",
    },
    {
      question: "Desktop and mobile?",
      answer:
        "Yes. Squimbo runs inside Discord on desktop and mobile clients. There is no extra game install.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Keep reading",
  howTo: {
    name: "How to open Squimbo as a Discord Activity",
    steps: [
      {
        name: "Join a voice channel",
        text: "Get everyone into the same Discord voice channel. Squimbo is built for people who are already talking.",
      },
      {
        name: "Open the Activity shelf",
        text: "In Discord desktop or mobile, open Activities on the voice channel. Find Squimbo and launch it.",
      },
      {
        name: "Play in the same instance",
        text: "Whoever opens Squimbo in that channel joins the same room. Discord’s Activity instance is the lobby.",
      },
    ],
  },
};
