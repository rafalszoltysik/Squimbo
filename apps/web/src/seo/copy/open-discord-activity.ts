import type { SeoPageCopy } from "../types";

export const openDiscordActivityCopy: SeoPageCopy = {
  metaTitle: "Open Squimbo as a Discord Activity",
  metaDescription:
    "Join voice, open the Activity shelf, and launch Squimbo. Same channel, same room. No separate game install.",
  footerLabel: "Open a Discord Activity",
  llmsDescription:
    "How to open Squimbo from a Discord voice channel via the Activity shelf.",
  title: "How to open Squimbo as a Discord Activity",
  lead:
    "Here’s the short path to start Squimbo with friends already on voice. Join a channel, find Squimbo on the Activity shelf, and launch it. That Activity instance is your room. If Discord’s Apps menu looks different on your client, [read Discord’s guide to Apps here](discord:apps-help).",
  sections: [
    {
      title: "1. Join a voice channel",
      body: "Get everyone into the same Discord voice channel. Squimbo is for people who are already talking, not random matchmaking.",
    },
    {
      title: "2. Find and launch Squimbo",
      body: "On desktop or mobile, open Activities (the shelf or Apps menu on the voice channel). Find Squimbo and launch it. Prefer searching from Discord first? [Open Squimbo in the Directory](discord:directory).",
    },
    {
      title: "3. Play in the same instance",
      body: "Whoever opens Squimbo in that channel joins the same room. Discord’s Activity instance is the lobby. Display names and avatars come with you.",
    },
    {
      title: "4. After launch",
      body: "In the lobby, everyone Ready when they are set. When the group is ready and at least two players are in, the night starts. For sealed votes and the finale, see [How to play Squimbo](/how-to-play).",
    },
    {
      title: "The first time Discord asks permission",
      body: "The first launch may show Discord’s permission screen for Squimbo. Tap allow so the Activity can use your Discord name and avatar. You are not creating an account on this website. Next time, open Squimbo again from the same shelf.",
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
        "Join a voice channel, open the Activity shelf or Apps menu, and launch Squimbo. You can also [open the Squimbo Directory page](discord:directory).",
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
    {
      question: "Where is Discord’s help for the Apps UI?",
      answer:
        "Menus change by client. For the generic controls, [Discord’s Apps help is here](discord:apps-help). This page stays on the Squimbo path: find it, launch it, Ready up, play.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Related",
  howTo: {
    name: "How to open Squimbo as a Discord Activity",
    steps: [
      {
        name: "Join a voice channel",
        text: "Get everyone into the same Discord voice channel. Squimbo is built for people who are already talking.",
      },
      {
        name: "Find and launch Squimbo",
        text: "In Discord desktop or mobile, open Activities on the voice channel. Find Squimbo and launch it.",
      },
      {
        name: "Play in the same instance",
        text: "Whoever opens Squimbo in that channel joins the same room. Discord’s Activity instance is the lobby.",
      },
      {
        name: "Ready up and start",
        text: "Everyone Ready in the lobby. With at least two players ready, the sealed most-likely night can start.",
      },
    ],
  },
};
