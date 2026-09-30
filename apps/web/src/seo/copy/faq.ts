import type { SeoPageCopy } from "../types";

export const faqCopy: SeoPageCopy = {
  metaTitle: "Squimbo FAQ",
  metaDescription:
    "Answers about Squimbo: Discord Activity setup, players, sealed votes, platforms, and support.",
  footerLabel: "FAQ",
  llmsDescription:
    "Short answers about players, sealed votes, platforms, and support for Squimbo.",
  title: "Squimbo FAQ",
  lead:
    "Short answers about the Discord Activity party game: players, sealed votes, platforms, and where to get help.",
  sections: [],
  faqTitle: "Questions",
  faq: [
    {
      question: "What is Squimbo?",
      answer:
        "Squimbo is a party game that runs as a Discord Activity. Your group opens it in a voice channel, votes on most likely rounds with sealed tallies, and sees scores at the finale.",
    },
    {
      question: "Is Squimbo a Discord bot?",
      answer:
        "No. Squimbo is a Discord Activity, not a slash-command bot. You open it from the Activity shelf in voice: there is no bot invite required to play.",
    },
    {
      question: "How many players do I need?",
      answer:
        "At least two to start. About 3 to 8 people already in voice feels best.",
    },
    {
      question: "How do people join?",
      answer:
        "They open Squimbo in the same voice channel. Whoever opens the Activity there is in the same room.",
    },
    {
      question: "Is it a separate app?",
      answer:
        "No. Squimbo launches inside Discord on desktop and mobile. There is no extra install for the game itself.",
    },
    {
      question: "What are sealed votes?",
      answer:
        "Mid-round tallies stay hidden until the last player locks in. That keeps “who is most likely” fair and the reveal worth waiting for.",
    },
    {
      question: "When do scores appear?",
      answer:
        "At the finale. You can keep playing rounds before you wrap the night. There are no in-game host privileges: everyone shares the same controls.",
    },
    {
      question: "Is Squimbo free?",
      answer: "Yes. Squimbo is free to play as a Discord Activity.",
    },
    {
      question: "Something broke. What now?",
      answer:
        "Leave and reopen the Activity in the same voice channel, wait for Discord to finish loading, and ask everyone to refresh. If you are still stuck, use the Support page.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Related",
};
