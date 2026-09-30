/**
 * Wave 4 curated long-tail guide copy.
 * Facts only from product.md: no competitor brands, no question banks, no async quiz.
 */
import type { SeoPageCopy } from "../types";

const CTA = "Play on Discord";
const RELATED = "Related";

function page(
  partial: Omit<SeoPageCopy, "cta" | "relatedTitle" | "faqTitle"> & {
    faqTitle?: string;
  },
): SeoPageCopy {
  return {
    cta: CTA,
    relatedTitle: RELATED,
    faqTitle: partial.faqTitle ?? "FAQ",
    ...partial,
  };
}

export const discordGameNightCopy = page({
  metaTitle: "Discord game night Activity",
  metaDescription:
    "Turn a Discord voice hang into a game night. Squimbo is a Discord Activity with sealed most likely rounds, then a finale.",
  footerLabel: "Discord game night",
  llmsDescription:
    "Using Squimbo as a Discord Activity game night for friends already in voice.",
  title: "A Discord game night for the call you already started",
  lead:
    "When the voice channel is full and someone says “what do we play,” Squimbo is a Discord Activity party loop: sealed most likely rounds, reveals, then scores at the finale. You stay on the call you already started.",
  sections: [
    {
      title: "Game night without leaving Discord",
      body: "You stay in voice. Open Squimbo as an Activity in that channel. Discord display names and avatars come with you after Discord allows the Activity. There is no separate game installer and no browser lobby code to read out loud.",
    },
    {
      title: "What you play",
      body: "One shared most-likely stream with no pack picker. Everyone votes for another player; tallies stay sealed until lock-in, then the reveal hits the call. Soft nights often run about 8 to 12 rounds before wrap.",
      points: [
        "Min 2 players; about 3 to 8 feels best",
        "No in-game host privileges",
        "Scores wait for the finale",
      ],
    },
    {
      title: "Not a stranger lobby",
      body: "Squimbo is for people already together on the call, not random matchmaking and not a slash-command bot in chat. Late friends open the same Activity in the same voice channel to join the room.",
    },
    {
      title: "How a night wraps",
      body: "After reveals, the group chooses next round or wrap with shared controls. The finale is when night scores show. See [How to play](/how-to-play) and [Start Squimbo](/start-squimbo).",
    },
  ],
  faq: [
    {
      question: "Is Squimbo a Discord game night Activity?",
      answer:
        "Yes. It launches as a Discord Activity for groups already in a voice channel.",
    },
    {
      question: "How long is a night?",
      answer:
        "Groups often run many short rounds. Soft target is about 8 to 12 rounds before wrap-up nudges.",
    },
    {
      question: "Do we need a host?",
      answer:
        "No in-game host privileges. Everyone shares the same controls.",
    },
    {
      question: "Screen share required?",
      answer:
        "No. Each player opens the Activity. See [Party without screen share](/discord-party-game-no-screen-share).",
    },
  ],
});

export const discordHangoutGameCopy = page({
  metaTitle: "Discord hangout game",
  metaDescription:
    "A Discord Activity hangout game for chill voice calls. Sealed most likely rounds among friends already talking.",
  footerLabel: "Hangout game",
  llmsDescription:
    "Squimbo as a hangout game on Discord voice with sealed votes, not a chat bot.",
  title: "A hangout game for Discord voice",
  lead:
    "Squimbo fits the chill call: friends already talking, open an Activity, roast with sealed “most likely” rounds, then see the finale. No stranger matchmaking and no bot invite to start.",
  sections: [
    {
      title: "Built for the hang, not the LFG queue",
      body: "There is no stranger matchmaking. Whoever opens Squimbo in the same voice channel is in the same room. About 3 to 8 feels best; min two to start.",
    },
    {
      title: "Keep talking while you play",
      body: "Voice stays on. Votes stay sealed mid-round so the reveal still lands. Running scores wait for the finale when you wrap.",
    },
    {
      title: "Activity, not a hangout bot",
      body: "Slash bots live in chat commands. Squimbo is a Discord Activity UI on the voice channel. See [Activity, not a bot](/discord-activity-not-a-bot).",
    },
    {
      title: "Soft night length",
      body: "Soft target is about 8 to 12 rounds. Wrap when the hang feels done. See [How to play](/how-to-play).",
    },
  ],
  faq: [
    {
      question: "Is this only for big parties?",
      answer:
        "No. Small friend hangs work. At least two players; about 3 to 8 feels best.",
    },
    {
      question: "Can we play on mobile Discord?",
      answer:
        "Yes. Squimbo runs inside Discord on desktop and mobile clients.",
    },
    {
      question: "Do we leave Discord for a browser lobby?",
      answer:
        "No. The night runs inside the Discord Activity.",
    },
    {
      question: "How do we open it?",
      answer:
        "See [Open a Discord Activity](/open-discord-activity).",
    },
  ],
});

export const shortDiscordPartyGameCopy = page({
  metaTitle: "Short Discord party game",
  metaDescription:
    "A short Discord Activity party loop: sealed most likely rounds with friends in voice, then a finale scoreboard.",
  footerLabel: "Short party game",
  llmsDescription:
    "Squimbo as a short Discord party Activity for a multi-round night, soft 8 to 12 round target.",
  title: "A short party game for Discord voice",
  lead:
    "Squimbo is built for a shared beat, not an all-evening campaign. Open the Activity, run sealed most-likely rounds, wrap when the room feels done. Soft target is about 8 to 12 rounds.",
  sections: [
    {
      title: "Rounds that move",
      body: "Each prompt is a quick vote for another player. Tallies stay sealed until lock-in, then the reveal. You keep talking on voice between rounds.",
    },
    {
      title: "Start when the channel is ready",
      body: "Lobby Ready when everyone is set. Need at least two players. No category pack picker before start.",
    },
    {
      title: "Wrap without a host menu",
      body: "Everyone shares the same controls. Scores wait for the finale when the group wraps. See [Wrap up](/squimbo-wrap-up).",
    },
    {
      title: "Not a one-prompt gag only",
      body: "You can wrap after reveals when ready, but the format is built for several rounds so the finale has weight.",
    },
  ],
  faq: [
    {
      question: "Is there a hard time limit?",
      answer:
        "No marketed hard clock. The UI can nudge wrap-up later in a long night.",
    },
    {
      question: "Can we play one round and stop?",
      answer:
        "You can wrap after reveals when the group is ready. The format is built for several rounds.",
    },
    {
      question: "What do we play?",
      answer:
        "Sealed “who is most likely” rounds inside a Discord Activity.",
    },
    {
      question: "How do we start?",
      answer:
        "See [Start Squimbo](/start-squimbo) and [Ready up](/squimbo-ready-up).",
    },
  ],
});

export const discordPartyGameNoDownloadCopy = page({
  metaTitle: "Discord party game no download",
  metaDescription:
    "Play Squimbo as a Discord Activity: no separate game download. Open it in voice on desktop or mobile Discord.",
  footerLabel: "No download",
  llmsDescription:
    "Squimbo needs no separate game download; it runs as a Discord Activity.",
  title: "A Discord party game with no separate download",
  lead:
    "Squimbo is a Discord Activity. You launch it from Discord on desktop or mobile. There is no standalone Squimbo installer for the game itself. Friends open the same Activity in the same voice channel.",
  sections: [
    {
      title: "Discord is the client",
      body: "Join voice, open the Activity shelf, launch Squimbo. Display names and avatars come from Discord after the Activity allow flow. Soft nights of sealed most-likely rounds start after Ready.",
    },
    {
      title: "What you are not installing",
      body: "No extra installer or app-store party pack just to start. The marketing site explains the game; the night happens inside Discord on desktop or mobile clients.",
    },
    {
      title: "Still a real session",
      body: "Sealed most-likely votes, reveals, finale scores: same loop whether you are on desktop or mobile Discord. Soft target about 8 to 12 rounds.",
    },
    {
      title: "Finding Squimbo",
      body: "From Activities on the call, or [open Squimbo in the Directory](discord:directory). See [Open a Discord Activity](/open-discord-activity) and [Add Squimbo](/add-squimbo).",
    },
  ],
  faq: [
    {
      question: "Is there a Squimbo app store listing?",
      answer:
        "Squimbo plays as a Discord Activity inside Discord clients, not as a separate consumer game install.",
    },
    {
      question: "Do friends need the same download?",
      answer:
        "They need Discord and to open Squimbo in the same voice channel.",
    },
    {
      question: "Is it a bot invite instead?",
      answer:
        "No. Squimbo is an Activity, not a slash-command bot.",
    },
    {
      question: "Screen share required?",
      answer:
        "No. See [Party without screen share](/discord-party-game-no-screen-share).",
    },
  ],
});

export const discordPartyGameForFriendsCopy = page({
  metaTitle: "Discord party game for friends",
  metaDescription:
    "Squimbo is a Discord Activity for friends already in voice with sealed most likely rounds, not stranger matchmaking.",
  footerLabel: "For friends",
  llmsDescription:
    "Squimbo targets friend groups already on Discord voice, not random matchmaking.",
  title: "A Discord party game for friends you already have",
  lead:
    "Squimbo assumes the hard part is done: your friends are on the call. Open the Activity and play sealed most-likely rounds with Discord names and avatars. About 3 to 8 feels best.",
  sections: [
    {
      title: "Already together",
      body: "No LFG queue. No stranger lobby. Same voice channel, same Activity instance, same room. Soft spot about 3 to 8; min two to start. See [No matchmaking](/discord-party-game-no-matchmaking).",
    },
    {
      title: "Why friends matter for most likely",
      body: "Prompts land when people know each other. Everyone votes for another player; tallies stay sealed until lock-in, then the reveal hits the call. Soft nights often run about 8 to 12 rounds.",
    },
    {
      title: "Same controls for the whole crew",
      body: "No in-game host privileges. Ready, vote, next, and wrap are shared so nobody needs a host tablet. See [No host party game](/no-host-party-game).",
    },
    {
      title: "Related friend pages",
      body: "See [Play with friends](/play-squimbo-with-friends), [Most likely among friends](/most-likely-among-friends-discord), and [Who knows the group best](/who-knows-the-group-best-discord).",
    },
  ],
  faq: [
    {
      question: "Can random server members join?",
      answer:
        "Anyone who joins the same voice channel and opens Squimbo can enter the Activity instance. The product is aimed at the people already on the call.",
    },
    {
      question: "Do we need packs for friend groups?",
      answer:
        "Categories are not selectable. One shared most-likely stream.",
    },
    {
      question: "How many people?",
      answer: "Min two to start. About 3 to 8 feels best.",
    },
    {
      question: "Bot invite?",
      answer: "No. Activity shelf launch.",
    },
  ],
});

export const freeDiscordPartyGameCopy = page({
  metaTitle: "Free Discord party game Activity",
  metaDescription:
    "Squimbo is free to play as a Discord Activity. Open it in voice, vote sealed on most likely rounds, score at the finale.",
  footerLabel: "Free party game",
  llmsDescription:
    "Squimbo is free to play as a Discord Activity; marketing site has no paid join fee.",
  title: "A free Discord Activity party game",
  lead:
    "Squimbo is free to play as a Discord Activity. There is no paid join fee on the marketing site. Open it in voice with friends, run sealed most-likely rounds, and wrap at the finale when the group is done.",
  sections: [
    {
      title: "What “free to play” means here",
      body: "You launch Squimbo from Discord. The marketing site does not charge a join fee to start a night. Play identity comes through Discord in the Activity, not a paid website account.",
    },
    {
      title: "What you get",
      body: "Sealed most likely rounds, reveals, finale scores, no pack picker, and no in-game host privileges. Desktop and mobile Discord clients open the same Activity in the same voice channel.",
    },
    {
      title: "Still Discord’s platform",
      body: "You need a Discord account and a voice channel where Activities are allowed. Squimbo does not replace Discord’s own rules, Nitro plans, or server permission settings.",
    },
    {
      title: "No lobby paywall",
      body: "Categories are not selectable and there is no paid pack picker in the start flow. Soft nights often run about 8 to 12 rounds. See [No pack picker](/no-pack-picker-discord-game) and [Add Squimbo](/add-squimbo).",
    },
  ],
  faq: [
    {
      question: "Is Squimbo free?",
      answer:
        "Yes. Squimbo is free to play as a Discord Activity per current marketing claims.",
    },
    {
      question: "Are there paid question packs in the lobby?",
      answer:
        "Categories are not selectable. There is no pack picker in the start flow.",
    },
    {
      question: "Do I pay on the website to play?",
      answer:
        "No. Play from Discord; the site explains the product and hosts legal pages.",
    },
    {
      question: "How do we start for free?",
      answer:
        "Join voice, open Activities, launch Squimbo. Steps: [Open a Discord Activity](/open-discord-activity).",
    },
  ],
});

export const playInsideDiscordCopy = page({
  metaTitle: "Play party games inside Discord",
  metaDescription:
    "Play Squimbo inside Discord as an Activity: same voice channel, sealed votes, finale scores. No separate browser lobby.",
  footerLabel: "Play inside Discord",
  llmsDescription:
    "Squimbo lets friend groups play a party loop inside Discord via Activities.",
  title: "Play the party game inside Discord",
  lead:
    "Squimbo runs as a Discord Activity so the people already in voice share one session. You do not move the night to a separate browser lobby or pass around one shared screen.",
  sections: [
    {
      title: "Activity = shared app in Discord",
      body: "Launch from the Activity shelf on a voice channel. Discord’s Activity instance is the room. This page is for players who want the night inside Discord, not an SDK setup guide.",
    },
    {
      title: "What you play inside",
      body: "Sealed “who is most likely” rounds among friends on the call, then scores at the finale. Discord display names and avatars come with you after Discord verifies the Activity session.",
    },
    {
      title: "Not a slash bot surface",
      body: "The night lives in the Activity UI, not as bot replies in a text channel. See [Activity, not a bot](/discord-activity-not-a-bot).",
    },
    {
      title: "Voice stays the hangout",
      body: "Keep talking while you vote. Reveals land on the call. Soft spot about 3 to 8 players; min two to start. Soft nights often run about 8 to 12 rounds. See [Party without screen share](/discord-party-game-no-screen-share).",
    },
  ],
  faq: [
    {
      question: "Do we screen-share a browser game instead?",
      answer:
        "Squimbo is its own Activity. Everyone opens it in the channel rather than watching one shared browser tab.",
    },
    {
      question: "Desktop and mobile?",
      answer:
        "Yes. Inside Discord clients on both desktop and mobile.",
    },
    {
      question: "Where do I start?",
      answer:
        "Join voice, open Activities, launch Squimbo. See [Add Squimbo](/add-squimbo) and [Open a Discord Activity](/open-discord-activity).",
    },
    {
      question: "Is the website the game?",
      answer:
        "No. This site explains the product. Play happens inside Discord.",
    },
  ],
});

export const addSquimboCopy = page({
  metaTitle: "Add Squimbo on Discord",
  metaDescription:
    "Find and launch Squimbo from Discord’s Activity shelf in voice. Same channel, same room. No separate game install.",
  footerLabel: "Add Squimbo",
  llmsDescription:
    "How to find and add/launch Squimbo as a Discord Activity for your voice channel.",
  title: "Add Squimbo to your Discord night",
  lead:
    "Squimbo is a Discord Activity. Join voice with friends, find Squimbo on the Activity shelf, and launch it. If you want the public listing first, [open Squimbo in Discord’s Directory](discord:directory). For Discord’s own Apps UI labels, [their Apps help is here](discord:apps-help).",
  sections: [
    {
      title: "1. Be in voice together",
      body: "Squimbo is for people already talking, not stranger matchmaking. Get the crew into the same Discord voice channel or call where Activities are allowed.",
    },
    {
      title: "2. Open Activities and find Squimbo",
      body: "Use the shelf or Apps menu on the voice channel. Search for Squimbo and launch it. The first launch may ask you to allow Squimbo in Discord. You can also [add Squimbo on Discord](discord:play) through Discord’s authorize flow.",
    },
    {
      title: "3. Same instance = same room",
      body: "Whoever opens Squimbo in that channel joins the same Activity instance. Late joiners open the Activity in the same voice context. Then Ready up and start when at least two players are in.",
    },
    {
      title: "4. After you are in",
      body: "Shared Ready, sealed most-likely rounds, reveals, then wrap for the finale. Soft nights often run about 8 to 12 rounds. Step-by-step open guide: [Open a Discord Activity](/open-discord-activity).",
    },
  ],
  faq: [
    {
      question: "Is this a bot invite link?",
      answer:
        "No. You open Squimbo as an Activity; there is no slash-bot invite required to play.",
    },
    {
      question: "Where is the Directory listing?",
      answer:
        "Here: [Squimbo in the Discord Directory](discord:directory).",
    },
    {
      question: "Desktop and mobile?",
      answer:
        "Yes. Launch from Discord clients on desktop or mobile.",
    },
    {
      question: "Permissions blocked launch?",
      answer:
        "Check Use Activities and app permissions on the server or call. That is Discord’s setting, not a Squimbo lobby password.",
    },
  ],
  howTo: {
    name: "Add and launch Squimbo",
    steps: [
      {
        name: "Join a voice channel",
        text: "Get your group into the same Discord voice channel.",
      },
      {
        name: "Find Squimbo",
        text: "Open Activities on the voice channel and launch Squimbo.",
      },
      {
        name: "Play in one instance",
        text: "Everyone who opens Squimbo there shares the same room.",
      },
    ],
  },
});

export const discordActivityGroupCallCopy = page({
  metaTitle: "Discord Activity on a group call",
  metaDescription:
    "Launch Squimbo as a Discord Activity on a group voice call. Same instance, sealed most likely rounds, finale scores.",
  footerLabel: "Group call Activity",
  llmsDescription:
    "Squimbo on a Discord group voice call: Activity instance is the room.",
  title: "A Discord Activity for your group call",
  lead:
    "Whether it is a server voice channel or a group call, Squimbo opens as a Discord Activity so everyone on that call can share one session. Sealed most-likely rounds, reveals on voice, scores at the finale.",
  sections: [
    {
      title: "One call, one Activity instance",
      body: "People on the call open Squimbo and join the same room. Late joiners open the Activity in the same voice context. A different channel is a different room.",
    },
    {
      title: "Keep the call energy",
      body: "Voice stays on while you vote in the dark. Reveals land on the call; running night scores wait for the finale when you wrap. Soft spot about 3 to 8 players; min two to start.",
    },
    {
      title: "Permissions still matter",
      body: "Server or call settings may restrict Activities. If Squimbo will not launch, check Discord’s Activity permissions for that space. Squimbo does not invent a separate lobby password.",
    },
    {
      title: "Activity, not a call bot",
      body: "The game UI is the Activity, not slash commands in call chat. See [Activity, not a bot](/discord-activity-not-a-bot) and [Party on a call](/discord-party-game-on-call).",
    },
  ],
  faq: [
    {
      question: "Server voice or DM group call?",
      answer:
        "Squimbo is built around Discord’s Activity model in voice. Use a voice channel or call where Activities are allowed.",
    },
    {
      question: "Do spectators need to open it?",
      answer:
        "Players are whoever opens the Activity. Listening on voice without opening it does not put you in the room.",
    },
    {
      question: "Is it a bot in the call chat?",
      answer: "No. It is an Activity UI.",
    },
    {
      question: "Screen share required?",
      answer:
        "No. Each player opens Squimbo. See [Party without screen share](/discord-party-game-no-screen-share).",
    },
  ],
});

export const discordActivityVsBrowserGameCopy = page({
  metaTitle: "Discord Activity vs browser party game",
  metaDescription:
    "Squimbo is a Discord Activity, not a browser party lobby you share while on a call. Sealed most likely inside Discord.",
  footerLabel: "Activity vs browser",
  llmsDescription:
    "How Squimbo as a Discord Activity differs from browser party lobbies used alongside Discord voice.",
  title: "Discord Activity vs a browser party lobby",
  lead:
    "Some party tools ask you to open a browser room and keep Discord only for voice. Squimbo is the game surface inside Discord: an Activity on the call with sealed most-likely rounds and a finale.",
  sections: [
    {
      title: "Where the room lives",
      body: "In Squimbo, the Discord Activity instance is the lobby. Everyone plays in Discord clients with Discord identities. No separate browser host tab to babysit and no lobby code to shout across the call.",
    },
    {
      title: "What you avoid",
      body: "No one-phone pass-around as the only screen. No slash-command bot as the game. No third-party website account just to enter the room. Friends open Squimbo in the same voice channel instead.",
    },
    {
      title: "What you still use Discord for",
      body: "Voice, friends, and launching the Activity. Soft nights often run about 8 to 12 sealed rounds. The night ends on a finale scoreboard when the group wraps.",
    },
    {
      title: "Related pages",
      body: "See [Play inside Discord](/play-inside-discord), [Party without screen share](/discord-party-game-no-screen-share), and [Open a Discord Activity](/open-discord-activity).",
    },
  ],
  faq: [
    {
      question: "Can we still talk on Discord?",
      answer: "Yes. Voice stays on while you play the Activity.",
    },
    {
      question: "Is the website the game?",
      answer:
        "No. This site explains the product. Play happens inside Discord.",
    },
    {
      question: "Do you name other browser games?",
      answer:
        "This page compares surfaces (Activity vs browser lobby) without competitor brand lists.",
    },
    {
      question: "How do we start?",
      answer:
        "See [Open a Discord Activity](/open-discord-activity).",
    },
  ],
});

export const whosMostLikelyToDiscordCopy = page({
  metaTitle: "Who's most likely on Discord",
  metaDescription:
    "Play “who’s most likely to” as a Discord Activity. Sealed votes among friends in voice, then a finale, not a question list site.",
  footerLabel: "Who's most likely to",
  llmsDescription:
    "Who’s most likely to rounds as a Discord Activity with sealed tallies.",
  title: "Who’s most likely to on Discord",
  lead:
    "Squimbo is “who is most likely” among friends already in Discord voice. Votes stay sealed until lock-in. This site explains the format; it is not a dump of prompts or an async quiz builder.",
  sections: [
    {
      title: "The round",
      body: "A specific prompt appears. Everyone votes for another player. Tallies stay hidden until the last person locks in, then the reveal hits the call with avatars and who got the most votes.",
    },
    {
      title: "Why Discord-native matters",
      body: "You play in the Activity with Discord names and avatars. Voice reactions stay on the call. Soft spot about 3 to 8 players; you need at least two to start.",
    },
    {
      title: "What this page is not",
      body: "Not a hundred-question generator. Not an async “make a quiz about me” product. Prompts live in the Activity. Squimbo is the live Discord Activity night instead.",
    },
    {
      title: "Scores and wrap",
      body: "Running scores wait for the finale. Soft nights often run about 8 to 12 rounds. See [Most likely](/most-likely), [Vote in the dark](/vote-in-the-dark), and [Finale](/squimbo-finale).",
    },
  ],
  faq: [
    {
      question: "Do you publish the full prompt bank here?",
      answer:
        "No. Prompts live in the Activity. Marketing pages describe how rounds work.",
    },
    {
      question: "When do scores show?",
      answer: "At the finale, not every round.",
    },
    {
      question: "Bot or Activity?",
      answer: "Discord Activity, not a slash-command bot.",
    },
    {
      question: "Related format page?",
      answer: "See [Most likely](/most-likely).",
    },
  ],
});

export const mostLikelyPartyOnDiscordCopy = page({
  metaTitle: "Most likely party game on Discord",
  metaDescription:
    "A most likely party game that runs as a Discord Activity. Sealed votes, voice on, finale scores for the friend group.",
  footerLabel: "Most likely party",
  llmsDescription:
    "Most likely as a Discord Activity party game for voice friends.",
  title: "Most likely as a Discord party Activity",
  lead:
    "Squimbo turns “most likely” into a Discord Activity party night: already in voice, sealed votes, dramatic reveals, finale scoreboard. No pack picker and no host admin panel.",
  sections: [
    {
      title: "Party format, Activity surface",
      body: "Open Squimbo in the channel. No separate installer. One shared English most-likely stream. Min two players; about 3 to 8 feels best. Discord names and avatars come with the room.",
    },
    {
      title: "Sealed, then finale",
      body: "Mid-round tallies stay dark until everyone locks in. Running scores wait until you wrap. Soft target about 8 to 12 rounds so the finale has weight.",
    },
    {
      title: "Versus web party tabs",
      body: "This is not a browser room you share while Discord is only the headset. The Activity is the game. Friends each open Squimbo in the same voice channel.",
    },
    {
      title: "Related guides",
      body: "See [Most likely](/most-likely), [Vote in the dark](/vote-in-the-dark), [Start Squimbo](/start-squimbo), and [Who knows the group best](/who-knows-the-group-best-discord).",
    },
  ],
  faq: [
    {
      question: "Is Squimbo only most likely?",
      answer:
        "Play is most likely rounds only. Other formats are not available as equal modes.",
    },
    {
      question: "How do we start?",
      answer:
        "Voice, launch Squimbo, Ready with at least two players. See [Open a Discord Activity](/open-discord-activity).",
    },
    {
      question: "Host tools?",
      answer: "No in-game host privileges.",
    },
    {
      question: "Pack picker?",
      answer:
        "Categories are not selectable. See [No pack picker](/no-pack-picker-discord-game).",
    },
  ],
});

export const discordRoastPartyGameCopy = page({
  metaTitle: "Discord roast party game",
  metaDescription:
    "A roast-friendly Discord Activity with sealed most likely votes among friends in voice, then reveals and a finale.",
  footerLabel: "Roast party game",
  llmsDescription:
    "Squimbo as a roast-friendly sealed most-likely Discord Activity, not harassment tools.",
  title: "A roast-friendly party game for Discord voice",
  lead:
    "Squimbo’s tone is party roast: specific most-likely prompts, sealed votes so nobody steers mid-round, then the reveal on the call. Friends first, shared controls, finale when you wrap.",
  sections: [
    {
      title: "Fair roast needs sealed votes",
      body: "If tallies updated live, early votes would pile on. Sealed lock-in keeps the joke honest until the reveal. Soft nights often run about 8 to 12 rounds of that beat.",
    },
    {
      title: "Friends on voice",
      body: "Built for people who already know each other. Not stranger matchmaking. Not a moderation bot. About 3 to 8 players feels best; min two to start.",
    },
    {
      title: "What we do not ship",
      body: "No harassment toolkit, no PII fishing, no “expose chat logs” features. Prompts should be socially revealing without being abusive. You still own how you treat people in your channel.",
    },
    {
      title: "Related sealed UX",
      body: "See [Vote in the dark](/vote-in-the-dark), [Secret vote party](/secret-vote-discord-party), and [Most likely](/most-likely).",
    },
  ],
  faq: [
    {
      question: "Is this mean by design?",
      answer:
        "It is roast-friendly party energy among friends. You are responsible for how you treat people in your channel and for Discord’s rules.",
    },
    {
      question: "Can one person force prompts?",
      answer:
        "Squimbo uses a shared prompt stream without a pack picker. No privileged host prompt console.",
    },
    {
      question: "Where do scores land?",
      answer: "At the finale after you wrap the night.",
    },
    {
      question: "How many players?",
      answer: "Min two. About 3 to 8 feels best.",
    },
  ],
});

export const startSquimboCopy = page({
  metaTitle: "Start Squimbo",
  metaDescription:
    "Start Squimbo in Discord voice: open the Activity, Ready up, play sealed most likely rounds, finish at the finale.",
  footerLabel: "Start Squimbo",
  llmsDescription:
    "How to start a Squimbo night: voice, Activity, Ready, sealed rounds, finale.",
  title: "Start Squimbo",
  lead:
    "Three beats to start: get in voice, launch Squimbo, Ready when the group is set. Then sealed most-likely rounds until you wrap. Soft nights often run about 8 to 12 rounds.",
  sections: [
    {
      title: "Before the first round",
      body: "Same voice channel. Open Squimbo. At least two players. Discord may ask permission the first time you allow the Activity. See [First launch](/discord-activity-first-launch).",
    },
    {
      title: "Lobby Ready",
      body: "Everyone Ready. When the group is ready and the minimum is met, the night can start. No privileged host start button and no pack picker before launch. See [Ready up](/squimbo-ready-up).",
    },
    {
      title: "After you start",
      body: "Vote sealed for another player, hit the reveal, continue or wrap with shared controls. Running scores wait for the finale. See [How to play](/how-to-play) for the full loop.",
    },
    {
      title: "Finding Squimbo",
      body: "From Activities on the call, or [open Squimbo in the Directory](discord:directory). You can also [add Squimbo on Discord](discord:play). Related: [Add Squimbo](/add-squimbo).",
    },
  ],
  faq: [
    {
      question: "What if someone is not Ready?",
      answer:
        "The lobby waits on shared Ready and start conditions. There is no host force-start privilege.",
    },
    {
      question: "Can we restart?",
      answer:
        "After a finale, Play again starts a new session with scores reset.",
    },
    {
      question: "Bot command to start?",
      answer: "No. Launch the Activity, not a slash command.",
    },
    {
      question: "Related open guide?",
      answer: "See [Open a Discord Activity](/open-discord-activity).",
    },
  ],
  howTo: {
    name: "Start Squimbo",
    steps: [
      {
        name: "Join voice and open Squimbo",
        text: "Get everyone into the same Discord voice channel and launch Squimbo.",
      },
      {
        name: "Ready up",
        text: "Everyone Ready in the lobby with at least two players.",
      },
      {
        name: "Play sealed rounds",
        text: "Vote on most likely prompts until you wrap and open the finale.",
      },
    ],
  },
});

export const squimboRevealCopy = page({
  metaTitle: "Squimbo reveal round",
  metaDescription:
    "After sealed votes lock in, Squimbo reveals who got the most votes for that most likely prompt. Scores still wait for the finale.",
  footerLabel: "Reveal round",
  llmsDescription:
    "How Squimbo reveal works after sealed most-likely votes; scores wait for finale.",
  title: "The reveal after votes lock in",
  lead:
    "When the last player locks in, Squimbo reveals the round: who got the most votes on that most-likely prompt. Running night scores stay hidden until the finale. That split keeps each roast beat sharp on the call.",
  sections: [
    {
      title: "What you see on reveal",
      body: "The prompt stays up. Tallies and avatars show who the room picked. That is the roast beat on Discord voice while everyone still shares the same Activity instance.",
    },
    {
      title: "What you still do not see",
      body: "Cumulative session scores wait for wrap and finale. Mid-round tallies stay sealed for everyone until the last lock-in. See [Scores until finale](/scores-hidden-until-finale).",
    },
    {
      title: "Ties",
      body: "Tied reveals can revote the same prompt or keep going. A revote voids that ballot and reopens voting on the same prompt. See [Ties and revotes](/squimbo-tie-revote).",
    },
    {
      title: "After reveal",
      body: "Next round or wrap with shared controls. Soft nights often stack about 8 to 12 reveals before wrap. See [Next round](/squimbo-next-round) and [Wrap up](/squimbo-wrap-up).",
    },
  ],
  faq: [
    {
      question: "Is reveal the same as the finale?",
      answer:
        "No. Reveal is per prompt. The finale is the night scoreboard after wrap.",
    },
    {
      question: "Can I peek tallies early?",
      answer:
        "No. Tallies stay sealed for everyone until the last lock-in.",
    },
    {
      question: "Where is the deep sealed-UX guide?",
      answer:
        "See [Vote in the dark](/vote-in-the-dark). This page owns the reveal beat.",
    },
    {
      question: "Who clicks next after reveal?",
      answer: "Shared controls. Not a host-only next button.",
    },
  ],
});

export const squimboFinaleCopy = page({
  metaTitle: "Squimbo finale scoreboard",
  metaDescription:
    "Squimbo keeps running scores hidden until the finale. Wrap the night together, see who knows the group best, then play again.",
  footerLabel: "Finale scoreboard",
  llmsDescription:
    "Squimbo finale: scores wait until wrap; then scoreboard and optional Play again.",
  title: "Finale scoreboard: scores wait until wrap",
  lead:
    "Squimbo hides running session scores until the finale. When the group wraps after reveals, you see who the night crowned, then you can Play again. Soft nights often land around 8 to 12 rounds first.",
  sections: [
    {
      title: "Why scores wait",
      body: "Keeping the scoreboard for the end preserves tension. Mid-round you only get sealed-vote reveals for each most-likely prompt, not a live night leaderboard racing the roast.",
    },
    {
      title: "How you reach the finale",
      body: "Wrap-up is a shared intent after at least one reveal. Soft target around 8 to 12 rounds; the UI can nudge wrap-up later. Empty unused prompts can also finish the night. See [Wrap up](/squimbo-wrap-up).",
    },
    {
      title: "Play again",
      body: "From the finale, any player can Play again: new session, scores reset. Round and vote history may be kept for future profiles. See [Play again](/squimbo-play-again).",
    },
    {
      title: "Pitch moment",
      body: "The finale is the “who knows the group best” beat for friends already on Discord voice. See [Who knows the group best](/who-knows-the-group-best-discord).",
    },
  ],
  faq: [
    {
      question: "Who opens the finale?",
      answer:
        "Wrap is shared. No privileged host scoreboard button.",
    },
    {
      question: "Do mid-round reveals add visible totals?",
      answer:
        "You see that prompt’s result. Full night totals wait for the finale.",
    },
    {
      question: "Empty prompt bank?",
      answer:
        "If unused prompts run out, the night can finish toward the finale.",
    },
    {
      question: "Related scores page?",
      answer:
        "See [Scores until finale](/scores-hidden-until-finale) and [Wrap up](/squimbo-wrap-up).",
    },
  ],
});
