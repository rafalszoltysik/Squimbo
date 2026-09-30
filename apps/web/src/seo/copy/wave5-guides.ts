/**
 * Wave 5 curated long-tail guide copy (expanded).
 * Facts from product.md only: no competitor brands, no question banks, no async quiz.
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

export const whoKnowsTheGroupBestDiscordCopy = page({
  metaTitle: "Who knows the group best on Discord",
  metaDescription:
    "Find out who knows the group best as a Discord Activity. Squimbo uses sealed most likely rounds in voice, not an async quiz app.",
  footerLabel: "Who knows the group best",
  llmsDescription:
    "Squimbo pitch on Discord: who knows the group best via sealed most-likely Activity rounds.",
  title: "Who knows the group best on Discord",
  lead:
    "Squimbo’s pitch is simple: you’re already together on Discord voice. Play sealed “most likely” rounds among friends, then see who knows the crew best when the finale scoreboard lands. This is a live party Activity, not an async quiz you send later.",
  sections: [
    {
      title: "Sync party, not a solo quiz builder",
      body: "Everyone shares one Activity instance in the voice channel. Votes stay sealed until the last person locks in. Running scores wait for wrap-up. You are not building a quiz alone and waiting for replies in DMs.",
    },
    {
      title: "Why voice friends fit",
      body: "Prompts land when people know each other. Discord display names and avatars come with you after Discord verifies the session. About 3 to 8 players feels best; you need at least two to start.",
    },
    {
      title: "How a night proves it",
      body: "Ready up in the lobby, vote sealed, hit the reveal, keep going or wrap. Soft nights often run about 8 to 12 rounds. The finale is the “who knows the group best” moment.",
    },
    {
      title: "What stays off this page",
      body: "We do not dump the prompt bank here. Prompts live in the Activity. For sealed tallies in detail, see [Vote in the dark](/vote-in-the-dark). For the format pitch, see [Most likely](/most-likely).",
    },
  ],
  faq: [
    {
      question: "Is this a quiz I send to friends later?",
      answer:
        "No. Squimbo is a live Discord Activity with the people already on voice.",
    },
    {
      question: "Where do I play?",
      answer:
        "Inside Discord. Open Squimbo from the Activity shelf on a voice channel, or [add Squimbo](discord:directory) from the Directory first.",
    },
    {
      question: "Do you list every question here?",
      answer:
        "No. This page is the job and the pitch. Prompts stay in the Activity.",
    },
    {
      question: "Do we need a host to run the night?",
      answer:
        "No. Everyone shares the same controls. See [No host party game](/no-host-party-game).",
    },
  ],
});

export const discordServerVoicePartyGameCopy = page({
  metaTitle: "Discord server voice party game",
  metaDescription:
    "Run a party game in a Discord server voice channel. Squimbo is a Discord Activity with sealed most likely, finale scores.",
  footerLabel: "Server voice party",
  llmsDescription:
    "Squimbo as a party Activity in a Discord server voice channel.",
  title: "A party game for your Discord server voice channel",
  lead:
    "Pick a server voice channel, open Squimbo as an Activity, and play sealed most-likely rounds with whoever is on that call. The server is where you hang; the Activity instance is the room for the night.",
  sections: [
    {
      title: "Server channel is the room key",
      body: "Discord’s Activity instance for that voice channel is the lobby. People who open Squimbo there share one session. A different channel is a different room.",
    },
    {
      title: "Permissions can block launch",
      body: "Servers can restrict Activities by role or channel. If Squimbo will not open, check Use Activities and app permissions. That is Discord’s setting, not a Squimbo lobby password.",
    },
    {
      title: "Still a small-crew game",
      body: "Aim at the people on the call (about 3 to 8), not the entire member list watching from text chat. Min two players to start a night.",
    },
    {
      title: "No bot invite to play",
      body: "You launch Squimbo from Activities, not from a slash command. For the Activity vs bot split, see [Activity, not a bot](/discord-activity-not-a-bot).",
    },
  ],
  faq: [
    {
      question: "Does the whole server auto-join?",
      answer:
        "No. Only people who join the voice channel and open the Activity are in the room.",
    },
    {
      question: "Can we use a stage channel?",
      answer:
        "Prefer a normal voice hang where Activities are allowed. Squimbo is built for that party context.",
    },
    {
      question: "Bot required on the server?",
      answer:
        "No bot invite is required to play Squimbo as an Activity.",
    },
    {
      question: "How do friends find Squimbo?",
      answer:
        "From the Activity shelf on the call, or [open Squimbo in the Directory](discord:directory).",
    },
  ],
});

export const discordPartyGameNoScreenShareCopy = page({
  metaTitle: "Discord party game without screen share",
  metaDescription:
    "Play Squimbo without screen-sharing a browser tab. Everyone opens the Discord Activity and plays in sync.",
  footerLabel: "No screen share",
  llmsDescription:
    "Squimbo does not need screen share: each player opens the Discord Activity.",
  title: "Party game on Discord without screen share",
  lead:
    "You do not need one person to screen-share a website while everyone squints at a tiny window. In Squimbo, each player opens the Discord Activity and sees the same session on their own client.",
  sections: [
    {
      title: "Each client, one instance",
      body: "Players launch Squimbo in the same voice channel. Discord’s Activity instance keeps the room together. Nobody has to stream a browser tab for the group to play.",
    },
    {
      title: "Voice still carries the roast",
      body: "Keep talking on the call. Votes stay sealed until lock-in, then the reveal hits. Running scores wait for the finale, so mid-round attention stays on the prompt and the reaction.",
    },
    {
      title: "Desktop and mobile without a shared desktop",
      body: "Friends on Discord mobile open the Activity the same way. You do not need a PC host sharing a screen so phones can “watch.”",
    },
    {
      title: "When screen share still happens",
      body: "Someone can stream for fun or memes. Squimbo does not depend on that stream to run sealed most-likely rounds. For Activity vs browser lobby, see [Activity vs browser game](/discord-activity-vs-browser-game).",
    },
  ],
  faq: [
    {
      question: "Does someone host a browser for everyone?",
      answer:
        "No. Squimbo is the Activity. Each player opens it in Discord.",
    },
    {
      question: "Mobile players too?",
      answer:
        "Yes. Discord mobile clients can open the Activity without a PC screen share.",
    },
    {
      question: "Is this a Watch Together clone?",
      answer:
        "No. Squimbo is a sealed most-likely party loop, not synced video playback.",
    },
    {
      question: "How do we start?",
      answer:
        "Join the same voice channel, open Activities, launch Squimbo. Step-by-step: [Open a Discord Activity](/open-discord-activity).",
    },
  ],
});

export const discordPartyGameWithAvatarsCopy = page({
  metaTitle: "Discord party game with avatars",
  metaDescription:
    "Squimbo uses Discord display names and avatars. Vote sealed on most likely rounds inside a Discord Activity.",
  footerLabel: "Discord avatars",
  llmsDescription:
    "Players are Discord identities: display names and avatars in the Squimbo Activity.",
  title: "Party rounds with Discord names and avatars",
  lead:
    "In Squimbo you vote on the people on the call. Discord display names and avatars come from the Activity identity flow. You do not invent a throwaway nickname on a separate website first.",
  sections: [
    {
      title: "Identity comes from Discord",
      body: "After Discord verifies you for the Activity, Squimbo uses your Discord display name and avatar in the room. The marketing site is not the login for the night.",
    },
    {
      title: "Voting targets are friends you see",
      body: "Each most-likely round, you pick another player in the instance. Tallies stay sealed until lock-in. The reveal shows who got the most votes for that prompt, with avatars in the mix.",
    },
    {
      title: "No fake lobby nicknames required",
      body: "You are already you on Discord. That keeps the roast personal and the join path short: open Squimbo in the same voice channel.",
    },
    {
      title: "Who is not a player",
      body: "Players are Discord users who open the Activity. Squimbo is not a slash-bot player list in chat. See [Activity, not a bot](/discord-activity-not-a-bot).",
    },
  ],
  faq: [
    {
      question: "Do I create a Squimbo account on the website?",
      answer:
        "Play identity comes through Discord in the Activity. The marketing site explains the product; it is not the night’s login.",
    },
    {
      question: "Can I hide my avatar?",
      answer:
        "Avatars follow Discord. Change them in Discord if you want a different look.",
    },
    {
      question: "Bots as players?",
      answer:
        "No. Players are people who open the Activity.",
    },
    {
      question: "What if someone joins late?",
      answer:
        "They join the same voice channel and open Squimbo. See [Join mid-game](/join-squimbo-late).",
    },
  ],
});

export const noLobbyCodeDiscordGameCopy = page({
  metaTitle: "Discord party game no lobby code",
  metaDescription:
    "No lobby codes. Squimbo uses the Discord Activity instance in your voice channel as the room.",
  footerLabel: "No lobby code",
  llmsDescription:
    "Squimbo rooms are Discord Activity instances: no separate lobby codes to share.",
  title: "No lobby codes: the Activity is the room",
  lead:
    "Squimbo does not ask you to invent a four-digit lobby code or paste a browser room link. Whoever opens Squimbo in the same Discord voice channel shares the Activity instance.",
  sections: [
    {
      title: "How friends join",
      body: "They join the same voice channel and open Squimbo. Late joiners do the same mid-night. Being in a different channel means a different room.",
    },
    {
      title: "What you share instead",
      body: "A Discord invite to the server or call, plus “open Squimbo.” Friends can also [open Squimbo in the Directory](discord:directory) if they need the listing first.",
    },
    {
      title: "Why that fits Discord",
      body: "You already have a place to gather. Squimbo attaches the sealed most-likely loop to that place instead of inventing a parallel lobby website.",
    },
    {
      title: "Permissions are not a lobby password",
      body: "If Activities are blocked for roles or the channel, Squimbo cannot open. That is a server setting. For shelf steps, see [Open a Discord Activity](/open-discord-activity).",
    },
  ],
  faq: [
    {
      question: "Is there a room password?",
      answer:
        "No separate Squimbo lobby code field. The Activity instance for the channel is the room.",
    },
    {
      question: "What if two Activities start?",
      answer:
        "Open the same Squimbo Activity in the same voice channel so you share one instance.",
    },
    {
      question: "Browser room link?",
      answer:
        "Play inside Discord. The website is not the live lobby.",
    },
    {
      question: "Related page?",
      answer:
        "See [Channel is the room](/discord-channel-is-the-room) and [Same voice channel](/same-voice-channel-squimbo).",
    },
  ],
});

export const casualDiscordPartyGameCopy = page({
  metaTitle: "Casual Discord party game",
  metaDescription:
    "A casual Discord Activity party game: low setup, sealed most likely rounds, no host privileges, finale when you wrap.",
  footerLabel: "Casual party game",
  llmsDescription:
    "Squimbo as a casual, low-setup Discord Activity party game for voice friends.",
  title: "A casual party game for Discord voice",
  lead:
    "Squimbo is low setup: open the Activity, Ready up, vote sealed, roast on reveal. No pack picker to argue about and no host admin panel. Soft nights, shared controls, finale when the room wraps.",
  sections: [
    {
      title: "Casual does not mean empty",
      body: "Prompts are specific most-likely situations, not generic “who is funniest” lines. Soft multi-round nights; wrap when the room is done. About 8 to 12 rounds is a common soft target.",
    },
    {
      title: "Controls everyone understands",
      body: "Ready, vote, next, wrap, and revote paths are shared. Technical host id is bookkeeping only. See [No host party game](/no-host-party-game).",
    },
    {
      title: "Fit the hang",
      body: "Works as a mid-call break or a short game night. About 3 to 8 people feels best. Min two to start.",
    },
    {
      title: "What you skip",
      body: "No category pack negotiation before start. One shared English most-likely stream. For that angle, see [No pack picker](/no-pack-picker-discord-game).",
    },
  ],
  faq: [
    {
      question: "Do we configure categories first?",
      answer:
        "Categories are not selectable. One shared English most-likely stream.",
    },
    {
      question: "Is it competitive?",
      answer:
        "There is a finale scoreboard, but the energy is party roast among friends.",
    },
    {
      question: "Hard rules binder?",
      answer:
        "Short loop: sealed vote, reveal, continue or wrap. See [How to play](/how-to-play).",
    },
    {
      question: "How long is a night?",
      answer:
        "You wrap when the room is done. Soft target is about 8 to 12 rounds; the UI may nudge wrap later.",
    },
  ],
});

export const multiplayerDiscordActivityPartyCopy = page({
  metaTitle: "Multiplayer Discord Activity party",
  metaDescription:
    "Multiplayer party play as a Discord Activity. Squimbo: everyone in voice opens the same instance and votes sealed.",
  footerLabel: "Multiplayer Activity",
  llmsDescription:
    "Squimbo multiplayer party as a Discord Activity: shared instance, sealed votes.",
  title: "Multiplayer party as a Discord Activity",
  lead:
    "Squimbo is multiplayer by design. Friends in the same voice context open one Activity instance and play sealed most-likely rounds together on their own Discord clients.",
  sections: [
    {
      title: "Shared session",
      body: "Min two players to start. Sweet spot about 3 to 8. Everyone sees the same prompts and reveals. Scores wait for the finale.",
    },
    {
      title: "Real-time enough for a party",
      body: "Votes lock in, then reveal. Keep talking on voice between rounds. Ties can revote or keep going with shared controls.",
    },
    {
      title: "Not solo pass-and-play",
      body: "Each person uses their own Discord client, desktop or mobile, in the same channel. Nobody passes one phone around the couch as the only screen.",
    },
    {
      title: "How the room forms",
      body: "Same voice channel, open Squimbo, Ready up. Late joiners open the Activity in that channel. See [Join mid-game](/join-squimbo-late).",
    },
  ],
  faq: [
    {
      question: "Is one phone enough for the whole group?",
      answer:
        "Squimbo expects each player to open the Activity. It is not a one-device pass-around game.",
    },
    {
      question: "Max players?",
      answer:
        "Design for the voice crew. Marketing focuses on the 3 to 8 sweet spot; min start is two.",
    },
    {
      question: "Cross-platform multiplayer?",
      answer:
        "Yes. Mixed desktop and mobile Discord clients in one channel.",
    },
    {
      question: "Do we need screen share?",
      answer:
        "No. See [Party without screen share](/discord-party-game-no-screen-share).",
    },
  ],
});

export const discordActivityFirstLaunchCopy = page({
  metaTitle: "First time launching Squimbo",
  metaDescription:
    "First Squimbo launch: Discord may ask you to authorize the Activity. Then open it again from the voice shelf anytime.",
  footerLabel: "First launch",
  llmsDescription:
    "What happens the first time you launch Squimbo as a Discord Activity.",
  title: "First time launching Squimbo",
  lead:
    "The first time you open Squimbo, Discord may ask you to allow the Activity. That prompt is from Discord, not a signup form on this website. After you allow it, you Ready up with friends and play.",
  sections: [
    {
      title: "Allow Squimbo, then play",
      body: "Approve what Discord shows so Squimbo can use your Discord name and avatar in that session. You are not creating a separate Squimbo password on the marketing site.",
    },
    {
      title: "Later launches",
      body: "Next time, join voice, open Activities, find Squimbo, and go. Same channel still means same room for the group. You can also [open Squimbo in the Directory](discord:directory) if you need the listing.",
    },
    {
      title: "If the permission screen fails",
      body: "Retry from the shelf, confirm you are in voice, and check server Activity permissions. Support can help if it keeps failing. For Discord’s Apps UI in general, [their help is here](discord:apps-help).",
    },
    {
      title: "Then the night starts",
      body: "Ready up with at least two players. Sealed most-likely rounds, reveals, wrap to the finale. Full beats: [How to play](/how-to-play).",
    },
  ],
  faq: [
    {
      question: "Is this OAuth on squimbo.app?",
      answer:
        "No. Play identity goes through Discord inside the Activity, not a login on the marketing site.",
    },
    {
      question: "Do friends each authorize?",
      answer:
        "Each person may need to allow Squimbo the first time they launch it on that client.",
    },
    {
      question: "Generic Discord help?",
      answer:
        "For Apps menu chrome, [Discord’s Apps help is here](discord:apps-help). This page is only Squimbo’s first-launch notes.",
    },
    {
      question: "Related launch guides?",
      answer:
        "See [Open a Discord Activity](/open-discord-activity) and [Add Squimbo](/add-squimbo).",
    },
  ],
});

export const joinSquimboLateCopy = page({
  metaTitle: "Join Squimbo mid-game",
  metaDescription:
    "Late to the call? Join the same Discord voice channel and open Squimbo. The Activity instance is the room.",
  footerLabel: "Join mid-game",
  llmsDescription:
    "How late joiners enter Squimbo: same voice channel, open the Activity instance.",
  title: "Joining Squimbo after the night started",
  lead:
    "Late joiners do not need a special lobby code. Join the same Discord voice channel and open Squimbo so you enter the Activity instance already in play. Ask the call what round you are on; voice is part of the product.",
  sections: [
    {
      title: "Same channel first",
      body: "If you are in a different voice channel, you are not in the same Activity room yet. Move to the call that is already playing Squimbo.",
    },
    {
      title: "Open Squimbo",
      body: "Launch Squimbo from Activities on that channel. You should land with the group that is already playing. No four-digit code to type.",
    },
    {
      title: "Catch-up expectations",
      body: "You join the live session state for that instance. Full night history is not the marketing promise for late-join UX. Friends on voice will tell you the vibe of the current round.",
    },
    {
      title: "Starting vs joining",
      body: "Starting a night needs at least two players Ready. Joining mid-night assumes a session already exists. See [Ready up](/squimbo-ready-up) and [Start Squimbo](/start-squimbo).",
    },
  ],
  faq: [
    {
      question: "Do I need an invite link to the Activity?",
      answer:
        "Being in the same voice channel and opening Squimbo is the join path. Discord may also show join-Activity affordances in the client.",
    },
    {
      question: "Will I see past rounds?",
      answer:
        "You play from the current session state. Ask the call what you missed.",
    },
    {
      question: "Minimum players still applies?",
      answer:
        "Starting needs at least two. Joining mid-night assumes a session already exists.",
    },
    {
      question: "Desktop and mobile?",
      answer:
        "Yes. Open the Activity from Discord desktop or mobile in that channel.",
    },
  ],
});

export const squimboReadyUpCopy = page({
  metaTitle: "Squimbo Ready up",
  metaDescription:
    "Squimbo lobby Ready: everyone signals ready, then sealed most likely rounds start with at least two players. No host force-start.",
  footerLabel: "Ready up",
  llmsDescription:
    "How Squimbo lobby Ready works: shared ready, min two players, no host privileges.",
  title: "Ready up in the Squimbo lobby",
  lead:
    "Before rounds start, everyone Ready in the lobby. When the group is ready and at least two players are in, the sealed most-likely night can begin. There is no privileged host force-start button.",
  sections: [
    {
      title: "Shared Ready, not a host countdown",
      body: "Ready is a shared signal. Technical host id is bookkeeping only. Nudge friends on voice if someone stalls; there is no admin override and no pack picker before start.",
    },
    {
      title: "Who is in the lobby",
      body: "Whoever opened Squimbo in the voice channel. Discord names and avatars show who is present. Late joiners open the Activity in the same channel to appear in the lobby.",
    },
    {
      title: "After Ready",
      body: "Prompts begin. Vote sealed for another player, reveal, continue or wrap toward the finale. Soft nights often land around 8 to 12 rounds before wrap nudges.",
    },
    {
      title: "No pack picker before Ready",
      body: "You do not negotiate categories first. One shared English most-likely stream. See [No pack picker](/no-pack-picker-discord-game) and [Lobby](/squimbo-lobby).",
    },
  ],
  faq: [
    {
      question: "What if one person never Readies?",
      answer:
        "The lobby waits on shared ready and start conditions. Nudge them on voice. There is no host override button.",
    },
    {
      question: "Can we Ready on mobile?",
      answer: "Yes. Same Activity UI in Discord mobile clients.",
    },
    {
      question: "Related start guide?",
      answer:
        "See [Start Squimbo](/start-squimbo) and [How to play](/how-to-play).",
    },
    {
      question: "Min players?",
      answer: "At least two players to start the night.",
    },
  ],
});

export const squimboTieRevoteCopy = page({
  metaTitle: "Squimbo tie and revote",
  metaDescription:
    "Tied Squimbo reveal? Revote the same most likely prompt or keep going. Revotes void that ballot and reopen sealed voting.",
  footerLabel: "Ties and revotes",
  llmsDescription:
    "How Squimbo handles tied reveals: revote or keep going; revote voids the ballot.",
  title: "Ties and revotes after a reveal",
  lead:
    "If a reveal ties, the group can vote again on the same prompt or keep going. A revote voids that ballot and reopens sealed voting on the prompt. Shared controls decide, not a host gavel.",
  sections: [
    {
      title: "Clear winner path",
      body: "When one player leads the prompt, you can move on. Keep going or Next applies scores per product rules, then continues toward more rounds or wrap.",
    },
    {
      title: "Tie path",
      body: "Tied players show on reveal. Choose Vote again or Keep going as the product allows for consensus among everyone in the Activity.",
    },
    {
      title: "What revote means",
      body: "The previous ballot for that prompt is voided (kept in history) and voting reopens sealed until lock-in again. Same prompt, fresh sealed picks.",
    },
    {
      title: "Sealed UX still applies",
      body: "Mid-revote tallies stay hidden until everyone locks in. For sealed mechanics, see [Vote in the dark](/vote-in-the-dark). For reveal framing, see [Squimbo reveal](/squimbo-reveal).",
    },
  ],
  faq: [
    {
      question: "Do ties skip scoring forever?",
      answer:
        "Follow the in-Activity choices for revote vs keep going. Finale still waits for wrap.",
    },
    {
      question: "Who decides?",
      answer:
        "Shared controls. There is no host-only tiebreak panel.",
    },
    {
      question: "Where is sealed UX explained?",
      answer:
        "See [Vote in the dark](/vote-in-the-dark) and [Squimbo reveal](/squimbo-reveal).",
    },
    {
      question: "What about the finale?",
      answer:
        "Wrap after at least one reveal to reach the scoreboard. See [Wrap up](/squimbo-wrap-up).",
    },
  ],
});

export const squimboPlayAgainCopy = page({
  metaTitle: "Squimbo play again",
  metaDescription:
    "After the Squimbo finale, Play again starts a new session with scores reset. Same Discord Activity, fresh night.",
  footerLabel: "Play again",
  llmsDescription:
    "Play again after Squimbo finale: new sessionKey, scores reset.",
  title: "Play again after the finale",
  lead:
    "When the finale scoreboard is up, any player can Play again. Squimbo starts a new session with scores reset so the crew can run another night in the same Discord Activity context.",
  sections: [
    {
      title: "What resets",
      body: "Session scores reset for the new night. You stay in the Discord Activity with the same friends on voice. Ready up again with at least two players and go.",
    },
    {
      title: "What may remain",
      body: "Product may keep round and vote history for possible future profiles. Marketing does not promise a public history UI on this site. Soft nights often run about 8 to 12 rounds again.",
    },
    {
      title: "Same join rules",
      body: "Still the Activity instance in the voice channel. Late joiners open Squimbo in that channel. No lobby code and no stranger matchmaking.",
    },
    {
      title: "Who can click Play again",
      body: "Any player from the finale flow. There is no exclusive host replay button. See [Squimbo finale](/squimbo-finale) and [Wrap up](/squimbo-wrap-up).",
    },
  ],
  faq: [
    {
      question: "Who can click Play again?",
      answer:
        "Any player from the finale flow. No exclusive host replay button.",
    },
    {
      question: "Do we re-authorize Discord?",
      answer:
        "Usually not if you already allowed Squimbo on that client.",
    },
    {
      question: "Related finale page?",
      answer:
        "See [Squimbo finale](/squimbo-finale) for why scores wait until wrap.",
    },
    {
      question: "Scores from the last night?",
      answer:
        "Play again resets session scores for the new night.",
    },
  ],
});

export const secretVoteDiscordPartyCopy = page({
  metaTitle: "Secret vote Discord party game",
  metaDescription:
    "Secret, sealed votes in a Discord Activity party game. Squimbo hides tallies until lock-in, then reveals. Scores at the finale.",
  footerLabel: "Secret vote party",
  llmsDescription:
    "Secret/sealed voting in Squimbo Discord Activity party rounds.",
  title: "Secret votes for a Discord party night",
  lead:
    "Squimbo’s party loop depends on secret votes. Your pick stays private while others still vote. Tallies unlock only when the last player locks in, then the reveal hits the call.",
  sections: [
    {
      title: "Secret mid-round",
      body: "The UI can show who has voted without showing who got how many votes, until lock-in. That keeps early votes from snowballing.",
    },
    {
      title: "Why secrecy matters",
      body: "Live tallies would let early votes steer the room and kill the joke. Sealed picks keep the roast fair and the reveal worth waiting for.",
    },
    {
      title: "After the secret lifts",
      body: "Reveal the prompt winner, then continue. Full night scores still wait for the finale when you wrap.",
    },
    {
      title: "Same mechanic, party framing",
      body: "Vote in the dark is the deep UX guide. This page is the party framing. See [Vote in the dark](/vote-in-the-dark).",
    },
  ],
  faq: [
    {
      question: "Is this anonymous forever?",
      answer:
        "No. After lock-in the round reveals tallies for that prompt.",
    },
    {
      question: "Same as vote in the dark?",
      answer:
        "Same sealed mechanic. Vote in the dark is the deep UX guide; this page is the party framing.",
    },
    {
      question: "Bot poll in chat?",
      answer: "No. Activity UI, not slash polls.",
    },
    {
      question: "When do night scores show?",
      answer:
        "At the finale after wrap. See [Scores until finale](/scores-hidden-until-finale).",
    },
  ],
});

export const mostLikelyAmongFriendsDiscordCopy = page({
  metaTitle: "Most likely among friends on Discord",
  metaDescription:
    "Play most likely among friends as a Discord Activity. Sealed votes, Discord avatars, finale for the crew already in voice.",
  footerLabel: "Most likely among friends",
  llmsDescription:
    "Most likely among friends you already know. Squimbo Discord Activity.",
  title: "Most likely among friends on Discord",
  lead:
    "Most-likely hits hardest with friends. Squimbo runs those rounds as a Discord Activity for the people already on your call: sealed votes, Discord avatars you recognize, then a finale.",
  sections: [
    {
      title: "Friends first",
      body: "No stranger matchmaking. Same voice channel, same Activity instance, Discord names you recognize. About 3 to 8 feels best; min two to start.",
    },
    {
      title: "The format",
      body: "Specific prompts. Vote for someone else. Tallies sealed until lock-in, then the reveal hits the call. Soft nights often run about 8 to 12 rounds before wrap.",
    },
    {
      title: "Not a public question dump",
      body: "Prompts live in the Activity. Marketing pages explain the job, not a scrapeable bank. Running scores wait for the finale. See [Most likely](/most-likely) and [Vote in the dark](/vote-in-the-dark).",
    },
    {
      title: "Related friend JTBD",
      body: "For friends framing, see [For friends](/discord-party-game-for-friends). For the pitch line, see [Who knows the group best](/who-knows-the-group-best-discord). Play with friends path: [Play Squimbo with friends](/play-squimbo-with-friends).",
    },
  ],
  faq: [
    {
      question: "Can acquaintances play?",
      answer:
        "Yes, if they are on the call and open Squimbo. The product is tuned for people who know each other.",
    },
    {
      question: "Packs for friend groups?",
      answer:
        "Categories are not selectable. One shared most-likely stream.",
    },
    {
      question: "Related pages?",
      answer:
        "See [Most likely](/most-likely) and [For friends](/discord-party-game-for-friends).",
    },
    {
      question: "Do we need a host?",
      answer:
        "No. Shared controls for everyone. See [No host party game](/no-host-party-game).",
    },
  ],
});

export const discordPartyWithoutBotCopy = page({
  metaTitle: "Discord party game without a bot",
  metaDescription:
    "Party on Discord without inviting a slash bot. Squimbo is a Discord Activity in voice with sealed most likely rounds.",
  footerLabel: "Party without a bot",
  llmsDescription:
    "Squimbo Discord party without a bot invite. Activity shelf launch.",
  title: "A Discord party game without a bot invite",
  lead:
    "You do not add a Squimbo bot to play. Open Squimbo from the Activity shelf on a voice channel and run sealed most-likely rounds in the Activity UI, not as slash replies in chat.",
  sections: [
    {
      title: "Activity shelf, not a chat bot",
      body: "Slash-command bots live in chat. Squimbo ships as an Activity with a shared UI on the voice channel. Votes and reveals happen there.",
    },
    {
      title: "What that changes",
      body: "You are not flooding a text channel with bot messages. The night stays in the Activity while voice carries the roast.",
    },
    {
      title: "Still on Discord",
      body: "You need Discord voice and permission to use Activities. No separate game installer. [Open Squimbo in the Directory](discord:directory) if you want the listing first.",
    },
    {
      title: "Deep explainer",
      body: "For definitions, see [Activity, not a bot](/discord-activity-not-a-bot). For launch steps, see [Open a Discord Activity](/open-discord-activity).",
    },
  ],
  faq: [
    {
      question: "Do admins install anything?",
      answer:
        "People launch Squimbo as an Activity. Server settings may still gate Activities generally.",
    },
    {
      question: "Deep Activity vs bot explainer?",
      answer: "See [Activity, not a bot](/discord-activity-not-a-bot).",
    },
    {
      question: "Can bots sit in the player list?",
      answer:
        "Players are Discord users who open the Activity.",
    },
    {
      question: "Do we type a command to start?",
      answer:
        "No. Launch from Activities on the voice channel.",
    },
  ],
});

export const talkWhileYouPlayDiscordCopy = page({
  metaTitle: "Talk while you play Discord Activity",
  metaDescription:
    "Keep Discord voice on while you play Squimbo. Sealed most likely rounds in the Activity. Reactions stay on the call.",
  footerLabel: "Talk while you play",
  llmsDescription:
    "Squimbo keeps voice on: talk while you vote sealed in the Discord Activity.",
  title: "Talk while you play on Discord",
  lead:
    "Squimbo is built so the call stays alive. You vote in the Activity with sealed tallies while reactions happen on voice, then the reveal hits the room. Mute etiquette stays Discord’s; Squimbo rides along.",
  sections: [
    {
      title: "Voice is not optional flavor",
      body: "The product assumes people already talking. The Activity does not replace the call; it rides along with it. That is why same-channel join matters for sealed most-likely rounds.",
    },
    {
      title: "Mute etiquette still yours",
      body: "Squimbo does not manage Discord mute or deafen. Use Discord controls; keep playing in the Activity on desktop or mobile clients.",
    },
    {
      title: "Why sealed helps the talk",
      body: "Nobody sees live tallies mid-round, so the conversation can speculate until lock-in. Then the reveal gives the call something to yell about before next round or wrap.",
    },
    {
      title: "Related voice JTBD",
      body: "See [Discord voice channel game](/discord-voice-channel-game), [Party on a call](/discord-party-game-on-call), and [Party without screen share](/discord-party-game-no-screen-share).",
    },
  ],
  faq: [
    {
      question: "Can we play muted?",
      answer:
        "You can, but the design centers on voice reactions. Min players and Activity join rules still apply.",
    },
    {
      question: "Desktop and mobile voice?",
      answer:
        "Yes. Discord voice clients plus the Activity UI.",
    },
    {
      question: "Related voice JTBD page?",
      answer: "See [Discord voice channel game](/discord-voice-channel-game).",
    },
    {
      question: "Screen share required?",
      answer:
        "No. See [Party without screen share](/discord-party-game-no-screen-share).",
    },
  ],
});
