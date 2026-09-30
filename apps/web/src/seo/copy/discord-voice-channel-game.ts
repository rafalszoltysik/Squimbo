import type { SeoPageCopy } from "../types";

export const discordVoiceChannelGameCopy: SeoPageCopy = {
  metaTitle: "Discord voice channel game",
  metaDescription:
    "Squimbo is a party game for people already in Discord voice. Open the Activity in the same channel and play together.",
  footerLabel: "Voice channel game",
  llmsDescription:
    "Why Squimbo targets groups already on voice, not strangers or a separate lobby.",
  title: "A party game for the voice channel you are already in",
  lead:
    "You’re already together on voice. That is the hard part. Squimbo opens as a Discord Activity in that channel so the people talking are the players.",
  sections: [
    {
      title: "Same channel, same room",
      body: "When someone launches Squimbo in a voice channel, Discord’s Activity instance is the lobby. Anyone who opens the Activity there joins the same session.",
    },
    {
      title: "Built for people you already know",
      body: "Squimbo is not matchmaking. There is no LFG queue and no stranger lobby. It is for crews that already hang out on Discord and want a short party loop.",
    },
    {
      title: "Voice stays on",
      body: "You keep talking while you vote. Sealed “most likely” rounds, then scores at the finale. Reactions happen on the call, not in a silent browser tab.",
    },
    {
      title: "What this page is not",
      body: "This is not a ranked list of every Discord game. It is the job: play with the people already on your call. For the category pitch, see Discord party game.",
    },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      question: "Do we need a text channel?",
      answer:
        "No. Squimbo runs as an Activity on a voice channel. Your group opens it there and plays.",
    },
    {
      question: "Can people join from another channel?",
      answer:
        "They need to join the same voice channel and open Squimbo. The Activity instance for that channel is the room.",
    },
    {
      question: "Is this a bot game in chat?",
      answer:
        "No. Squimbo is a Discord Activity, not a slash-command bot. The night happens inside the Activity UI. See Activity, not a bot.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Related",
};
