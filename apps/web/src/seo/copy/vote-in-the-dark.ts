import type { SeoPageCopy } from "../types";

export const voteInTheDarkCopy: SeoPageCopy = {
  metaTitle: "Vote in the dark on Discord",
  metaDescription:
    "Squimbo keeps mid-round tallies sealed until the last player locks in. Fair roasts, worth-waiting reveals.",
  footerLabel: "Vote in the dark",
  llmsDescription:
    "How sealed tallies work in Squimbo: votes stay hidden until lock-in; scores wait for the finale.",
  title: "Sealed votes until the last lock-in",
  lead:
    "In Squimbo, nobody sees the tally mid-round. Everyone picks someone else on a “most likely” prompt. Tallies stay sealed until the last person locks in.",
  sections: [
    {
      title: "What “vote in the dark” means",
      body: "Your choice stays private while others still vote. The UI can show who has voted, but not who got how many votes, until the round locks.",
    },
    {
      title: "Why it is not a live poll",
      body: "If tallies updated live, early votes would steer the room and kill the joke. Sealed votes keep the roast fair and the reveal worth waiting for.",
    },
    {
      title: "Reveal vs scoreboard",
      body: "When everyone has voted, the round reveals who got the most votes for that prompt. Running session scores stay hidden until the finale.",
    },
    {
      title: "Format vs mechanic",
      body: "“Most likely” is the prompt format. Vote in the dark is the sealed-tally mechanic. For the full Discord-native format pitch, see Most likely. This page stays on sealed UX.",
    },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      question: "Can I see my own vote after I lock in?",
      answer:
        "You pick someone else and lock in. Mid-round tallies stay sealed for everyone until the last player locks in.",
    },
    {
      question: "When do full night scores show?",
      answer:
        "At the finale. Mid-round you get the sealed-vote reveal for that prompt, not the cumulative scoreboard.",
    },
    {
      question: "Is this the same as “most likely”?",
      answer:
        "Sealed voting is the mechanic. “Most likely” is the prompt format Squimbo uses for each round. Both happen inside the Discord Activity.",
    },
    {
      question: "What happens on a tie?",
      answer:
        "Tied reveals can revote the same prompt or keep going. A revote voids that ballot and reopens voting on the same prompt.",
    },
  ],
  cta: "Play on Discord",
  relatedTitle: "Related",
};
