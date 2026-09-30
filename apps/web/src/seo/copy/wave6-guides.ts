/**
 * Wave 6 curated long-tail guide copy (expanded).
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

export const discordPartyGameNoSignupCopy = page({
  metaTitle: "Discord party game no signup",
  metaDescription:
    "Play Squimbo without a website signup. Discord identity opens the Activity with sealed most likely rounds in voice.",
  footerLabel: "No website signup",
  llmsDescription:
    "Squimbo needs no marketing-site signup. Discord identity for the Activity.",
  title: "A Discord party game without website signup",
  lead:
    "Squimbo does not ask you to create an account on this website before the night. You open the Discord Activity; Discord verifies your identity for that session. Then you Ready up and play.",
  sections: [
    {
      title: "Identity is Discord’s",
      body: "Display name and avatar come from Discord after the Activity allow flow. The marketing site explains the product; it is not the login for the night.",
    },
    {
      title: "First launch may still prompt",
      body: "Discord can ask you to allow Squimbo the first time. That prompt is from Discord, not a Squimbo email and password form. See [First launch](/discord-activity-first-launch).",
    },
    {
      title: "Then you just play",
      body: "Ready up, vote sealed, reveal, wrap. Same crew on voice. Soft nights often run about 8 to 12 rounds before the finale.",
    },
    {
      title: "Finding Squimbo",
      body: "Open it from Activities on the call, or [open Squimbo in the Directory](discord:directory) if you want the listing first.",
    },
  ],
  faq: [
    {
      question: "Do I register on the website?",
      answer:
        "No. Play happens in Discord. The site explains the product. To find the app, [open Squimbo in the Directory](discord:directory).",
    },
    {
      question: "Is there a Squimbo password?",
      answer:
        "Play identity is Discord’s Activity identity, not a Squimbo email and password.",
    },
    {
      question: "Related first-launch page?",
      answer: "See [First launch](/discord-activity-first-launch).",
    },
    {
      question: "Desktop and mobile?",
      answer:
        "Yes. Launch from Discord clients on desktop or mobile after Discord verifies the session.",
    },
  ],
});

export const sameVoiceChannelSquimboCopy = page({
  metaTitle: "Same voice channel for Squimbo",
  metaDescription:
    "Squimbo’s room is the Discord Activity instance in one voice channel. Everyone must join that channel and open Squimbo.",
  footerLabel: "Same voice channel",
  llmsDescription:
    "Squimbo players share one voice channel Activity instance. Same channel required.",
  title: "Same voice channel, same Squimbo room",
  lead:
    "Squimbo does not invent a separate lobby code. Friends who want the same night join the same Discord voice channel and open Squimbo there. A different channel is a different room.",
  sections: [
    {
      title: "Channel is context for the instance",
      body: "Discord’s Activity instance for that channel is the room. Late joiners must move to the call that is already playing, then open Squimbo. Soft nights of sealed most-likely rounds start after Ready with at least two players.",
    },
    {
      title: "Late joiners",
      body: "Join the call that is already playing, then open Squimbo, not a side channel. Listening on voice without opening the Activity does not put you in the room. See [Join mid-game](/join-squimbo-late).",
    },
    {
      title: "Server invites still help",
      body: "You may share a Discord invite to get people into the server or call. The Activity itself still opens from that voice context once everyone is together.",
    },
    {
      title: "No lobby code field",
      body: "There is no Squimbo four-digit code to paste. For that angle, see [No lobby code](/no-lobby-code-discord-game) and [Channel is the room](/discord-channel-is-the-room).",
    },
  ],
  faq: [
    {
      question: "Can two channels share one night?",
      answer:
        "No. One voice channel Activity instance is one Squimbo room.",
    },
    {
      question: "Text-only channel?",
      answer:
        "Squimbo is built for Activity play from voice contexts where Activities are allowed.",
    },
    {
      question: "Related no-lobby-code page?",
      answer:
        "See [No lobby codes](/no-lobby-code-discord-game).",
    },
    {
      question: "What if I am in the wrong channel?",
      answer:
        "Switch to the voice channel where Squimbo is open, then launch the Activity there.",
    },
  ],
});

export const discordPartyGameNoMatchmakingCopy = page({
  metaTitle: "Discord party game no matchmaking",
  metaDescription:
    "No stranger matchmaking. Squimbo is a Discord Activity for friends already on your voice call with sealed most likely rounds.",
  footerLabel: "No matchmaking",
  llmsDescription:
    "Squimbo has no stranger matchmaking. Play with people already on the call.",
  title: "Party game without stranger matchmaking",
  lead:
    "Squimbo is not a public lobby that pairs you with random players. You play with whoever is already on your Discord voice call and opens the Activity. Friends first, sealed most-likely rounds, finale when you wrap.",
  sections: [
    {
      title: "Friends first by design",
      body: "Most-likely prompts land when people know each other. About 3 to 8 on the call feels best. Min two to start. Soft nights often run about 8 to 12 sealed rounds.",
    },
    {
      title: "How the group forms",
      body: "Someone starts a call, friends join, someone opens Squimbo. That is the party. No skill rating or region queue and no website signup to enter the room.",
    },
    {
      title: "Not ranked queues",
      body: "There is no fill-from-strangers flow. If you want more people, invite them to the Discord call the normal way, then have them open the Activity.",
    },
    {
      title: "Related friend pages",
      body: "See [For friends](/discord-party-game-for-friends), [Play with friends](/play-squimbo-with-friends), and [Most likely among friends](/most-likely-among-friends-discord).",
    },
  ],
  faq: [
    {
      question: "Can acquaintances play?",
      answer:
        "Yes if they are on the call and open Squimbo. The product is tuned for people who know each other.",
    },
    {
      question: "Public Squimbo rooms on the web?",
      answer: "No. The live room is the Discord Activity instance.",
    },
    {
      question: "Related friends page?",
      answer:
        "See [For friends](/discord-party-game-for-friends) and [Play Squimbo with friends](/play-squimbo-with-friends).",
    },
    {
      question: "How do new friends find the Activity?",
      answer:
        "They join your voice channel and open Squimbo, or [open Squimbo in the Directory](discord:directory).",
    },
  ],
});

export const noPackPickerDiscordGameCopy = page({
  metaTitle: "Discord party game no pack picker",
  metaDescription:
    "No category pack picker in Squimbo. One shared English most-likely stream with sealed votes, then a finale.",
  footerLabel: "No pack picker",
  llmsDescription:
    "Squimbo has no pack/category picker: one shared most-likely prompt stream.",
  title: "No pack picker: one most-likely stream",
  lead:
    "Squimbo does not ask anyone to choose a category pack before start. When everyone is Ready and at least two players are in, the night uses one shared English most-likely stream. Themes may mix in the bank behind the scenes; players do not pick them.",
  sections: [
    {
      title: "What that means in lobby",
      body: "Player list plus Ready. No theme menu to negotiate. Shared controls for everyone. Soft target about 8 to 12 rounds.",
    },
    {
      title: "Why keep it simple",
      body: "A short path to the first sealed round. Less lobby debate, more roast on the call. Wrap when the room is done.",
    },
    {
      title: "What Squimbo is not",
      body: "There is no pack picker and no async quiz builder. Live Discord Activity party only.",
    },
    {
      title: "Still specific prompts",
      body: "Prompts are specific most-likely situations, not vague “who is funniest” lines. They stay in the Activity, not on this site.",
    },
  ],
  faq: [
    {
      question: "Can we filter dating vs gaming prompts?",
      answer:
        "Categories are not selectable. One shared most-likely stream for the session.",
    },
    {
      question: "Are prompts English only?",
      answer:
        "Prompts are English. Activity UI chrome ships en + pl.",
    },
    {
      question: "Related start guide?",
      answer: "See [Start Squimbo](/start-squimbo) and [Ready up](/squimbo-ready-up).",
    },
    {
      question: "Paid packs on the website?",
      answer:
        "There is no pack picker in the start flow and no paid join fee on the marketing site to start a night.",
    },
  ],
});

export const squimboLobbyCopy = page({
  metaTitle: "Squimbo lobby",
  metaDescription:
    "Squimbo lobby: see who opened the Activity, Ready up together, then sealed most likely rounds. Min two players.",
  footerLabel: "Squimbo lobby",
  llmsDescription:
    "Squimbo lobby before rounds: player list, Ready, min two players.",
  title: "The Squimbo lobby",
  lead:
    "Before sealed rounds start, Squimbo shows a lobby: who is in the Activity, Discord names and avatars, and a shared Ready signal. When everyone is ready and at least two players are present, the night can begin.",
  sections: [
    {
      title: "Who appears",
      body: "People who joined the same voice channel and opened Squimbo. Late joiners open the Activity mid-night the same way. Listening on voice without opening Squimbo does not put you in the lobby. See [Join mid-game](/join-squimbo-late).",
    },
    {
      title: "Ready starts the night",
      body: "Shared Ready, no pack picker, no host force-start. Soft nights often run about 8 to 12 sealed most-likely rounds after you leave the lobby for the first prompt.",
    },
    {
      title: "No host admin panel",
      body: "Technical host id is bookkeeping only. Everyone shares the same lobby controls for Ready and start conditions. See [Shared controls](/discord-activity-shared-controls).",
    },
    {
      title: "Where the lobby lives",
      body: "Inside the Discord Activity UI, not on this website. Launch steps: [Open a Discord Activity](/open-discord-activity). Directory listing: [Squimbo in the Directory](discord:directory).",
    },
  ],
  faq: [
    {
      question: "Is lobby a separate website?",
      answer: "No. The lobby is inside the Discord Activity UI.",
    },
    {
      question: "Related Ready page?",
      answer: "See [Ready up](/squimbo-ready-up).",
    },
    {
      question: "Can one person force start?",
      answer: "No host force-start. Shared Ready.",
    },
    {
      question: "Min players in lobby?",
      answer: "At least two players to start the night.",
    },
  ],
});

export const squimboNextRoundCopy = page({
  metaTitle: "Squimbo next round",
  metaDescription:
    "After a Squimbo reveal with a clear winner, choose Next round or Wrap up. Shared controls and sealed votes again.",
  footerLabel: "Next round",
  llmsDescription:
    "After a clear Squimbo reveal: Next round or Wrap up (shared consensus).",
  title: "Next round after a clear reveal",
  lead:
    "When a reveal has a clear winner, the group can go Next round for another sealed most-likely prompt, or Wrap up toward the finale. Shared controls decide. Soft nights often land around 8 to 12 rounds.",
  sections: [
    {
      title: "Scores apply when you continue",
      body: "Keep going or Next applies scores per product rules, then continues. The voted player gets plus one for that most-likely round. Running totals stay hidden until the finale.",
    },
    {
      title: "Soft length",
      body: "From about round 8 the UI may nudge wrap-up. The group still chooses continue or wrap. Soft target is about 8 to 12 rounds so the finale has weight without forcing a hard clock.",
    },
    {
      title: "Ties are different",
      body: "Tied reveals use Vote again or Keep going instead of a simple next. See [Ties and revotes](/squimbo-tie-revote).",
    },
    {
      title: "Empty prompt stream",
      body: "If unused prompts run out, the night can finish toward the finale. See [Wrap up](/squimbo-wrap-up) and [Finale](/squimbo-finale).",
    },
  ],
  faq: [
    {
      question: "Who clicks Next?",
      answer: "Shared controls, not a host-only next button.",
    },
    {
      question: "Empty prompt bank?",
      answer:
        "If the unused prompt stream runs out, the night can finish toward the finale.",
    },
    {
      question: "Related reveal page?",
      answer: "See [Squimbo reveal](/squimbo-reveal).",
    },
    {
      question: "When do night scores show?",
      answer:
        "At the finale after wrap. See [Scores until finale](/scores-hidden-until-finale).",
    },
  ],
});

export const squimboWrapUpCopy = page({
  metaTitle: "Squimbo wrap up",
  metaDescription:
    "Wrap up Squimbo after at least one reveal to reach the finale scoreboard. Shared consensus. Scores unlock at wrap.",
  footerLabel: "Wrap up",
  llmsDescription:
    "Squimbo Wrap up after at least one reveal leads to the finale scoreboard.",
  title: "Wrap up and reach the finale",
  lead:
    "When the room is done roasting, choose Wrap up after at least one reveal. Squimbo takes the crew to the finale scoreboard. That is when night scores show. Shared consensus, not a host end button.",
  sections: [
    {
      title: "Why wrap is a moment",
      body: "Mid-night running scores stay hidden so each sealed round stays about the prompt, not the leaderboard. Wrap unlocks the scoreboard and is the “who knows the group best” moment.",
    },
    {
      title: "Consensus, not host end",
      body: "Wrap is a shared control path after at least one reveal. Technical host has no exclusive end-night privilege. See [Shared controls](/discord-activity-shared-controls).",
    },
    {
      title: "After the finale",
      body: "Any player can Play again for a new session with scores reset. Soft nights often wrap around 8 to 12 rounds first. See [Play again](/squimbo-play-again) and [Finale](/squimbo-finale).",
    },
    {
      title: "UI nudge",
      body: "From about round 8 the Activity may nudge wrap-up. The group still chooses continue or wrap. Empty unused prompts can also finish the night toward the finale.",
    },
  ],
  faq: [
    {
      question: "Can we wrap before any reveal?",
      answer:
        "Finale wrap expects at least one reveal in the night flow.",
    },
    {
      question: "UI nudge to wrap?",
      answer:
        "From about round 8 the Activity may nudge wrap-up; the group still chooses.",
    },
    {
      question: "Related finale page?",
      answer: "See [Squimbo finale](/squimbo-finale).",
    },
    {
      question: "Who can wrap?",
      answer: "Shared wrap path. Not a host-only end button.",
    },
  ],
});

export const scoresHiddenUntilFinaleCopy = page({
  metaTitle: "Squimbo scores hidden until finale",
  metaDescription:
    "Squimbo keeps running session scores hidden until the finale. Sealed votes and reveals stay about each prompt.",
  footerLabel: "Scores until finale",
  llmsDescription:
    "Squimbo session scores stay hidden mid-night; unlock on the finale scoreboard.",
  title: "Scores stay hidden until the finale",
  lead:
    "Each sealed round can show who won that prompt after lock-in. Running night scores stay hidden until Wrap up reaches the finale scoreboard. That keeps mid-night attention on the roast, not a points race.",
  sections: [
    {
      title: "Round reveal is not night totals",
      body: "Reveal shows tallies for the current most-likely prompt after lock-in. The cumulative night scoreboard waits for wrap so mid-round stays about the roast.",
    },
    {
      title: "Why hide totals",
      body: "Keeps attention on this round and the voice reaction. Soft nights still build toward a finale moment around 8 to 12 rounds.",
    },
    {
      title: "Scoring rule",
      body: "Most likely: plus one to the player who was voted. Applied when the group continues after reveal per product rules. Ties can revote before scores apply.",
    },
    {
      title: "Play again",
      body: "Play again resets session scores for a new night. Round and vote history may be kept for future profiles. See [Play again](/squimbo-play-again) and [Wrap up](/squimbo-wrap-up).",
    },
  ],
  faq: [
    {
      question: "Do I see who is winning mid-game?",
      answer:
        "There is no live night leaderboard. The finale is the scoreboard moment.",
    },
    {
      question: "Play again resets scores?",
      answer:
        "Yes. New session, scores reset. History may be kept for future profiles.",
    },
    {
      question: "Related wrap page?",
      answer: "See [Wrap up](/squimbo-wrap-up) and [Squimbo finale](/squimbo-finale).",
    },
    {
      question: "What does a round reveal show?",
      answer:
        "Who got the most votes for that prompt after lock-in, not the full night totals.",
    },
  ],
});

export const discordActivitySharedControlsCopy = page({
  metaTitle: "Discord Activity shared controls",
  metaDescription:
    "Squimbo gives every player the same Activity controls. Technical host id has no in-game privileges.",
  footerLabel: "Shared controls",
  llmsDescription:
    "Squimbo Activity: shared controls for all players; hostUserId is technical only.",
  title: "Shared controls in the Squimbo Activity",
  lead:
    "Whoever opens Squimbo gets the same night controls: Ready, vote, next, wrap, and revote paths. The first joiner may be stored as a technical host id with no privileges.",
  sections: [
    {
      title: "No host toolkit",
      body: "No force-start, kick panel, or pack admin reserved for one person. Shared consensus moves Ready, next, wrap, and revote for the whole night.",
    },
    {
      title: "Why that fits Discord voice",
      body: "The call already has social norms. Squimbo stays a shared party UI, not a moderator console. Soft spot about 3 to 8 players; min two to start.",
    },
    {
      title: "Ties and wrap too",
      body: "Revote, keep going, and wrap use shared paths after sealed reveals. Soft nights often run about 8 to 12 rounds. See [Ties and revotes](/squimbo-tie-revote) and [Wrap up](/squimbo-wrap-up).",
    },
    {
      title: "Server admins vs Squimbo host",
      body: "Discord server permissions can still gate Activities. That is not Squimbo in-game host power. See [No host party game](/no-host-party-game) and [No moderator](/discord-party-game-no-moderator).",
    },
  ],
  faq: [
    {
      question: "Is there a host crown in UI?",
      answer:
        "Product rule: no in-game host privileges. Do not expect a privileged host mode.",
    },
    {
      question: "Related no-host page?",
      answer:
        "See [No host party game](/no-host-party-game) and [No moderator](/discord-party-game-no-moderator).",
    },
    {
      question: "Server admins vs Squimbo host?",
      answer:
        "Discord permissions can gate Activities. That is outside Squimbo’s in-game host model.",
    },
    {
      question: "Who advances rounds?",
      answer:
        "Shared next and wrap paths after reveal.",
    },
  ],
});

export const findSquimboDiscordDirectoryCopy = page({
  metaTitle: "Find Squimbo in Discord Directory",
  metaDescription:
    "Find Squimbo in the Discord App Directory, then open it as an Activity on a voice channel for sealed most likely rounds.",
  footerLabel: "Find in Directory",
  llmsDescription:
    "How to find Squimbo via Discord App Directory, then launch as an Activity.",
  title: "Find Squimbo in the Discord Directory",
  lead:
    "Want the public listing first? [Open Squimbo in Discord’s Directory](discord:directory), then launch it as an Activity on a voice channel. That is where the sealed most-likely night happens.",
  sections: [
    {
      title: "Directory is discovery",
      body: "The listing helps people trust and find Squimbo. Play still starts in Discord voice via Activities, not inside the Directory page itself.",
    },
    {
      title: "Website is not the lobby",
      body: "This site explains the product. The live room is the Activity instance in Discord. You can also [add Squimbo on Discord](discord:play) through Discord’s authorize flow.",
    },
    {
      title: "After you find it",
      body: "Join voice, open Activities, launch Squimbo, Ready up with friends. Step-by-step: [Open a Discord Activity](/open-discord-activity).",
    },
    {
      title: "If menus look different",
      body: "Discord Apps UI labels change by client. For generic controls, [Discord’s Apps help is here](discord:apps-help).",
    },
  ],
  faq: [
    {
      question: "Is Directory the same as installing a bot?",
      answer:
        "No. Squimbo is an Activity, not a slash-bot invite. See [Activity, not a bot](/discord-activity-not-a-bot).",
    },
    {
      question: "Related add page?",
      answer:
        "See [Add Squimbo](/add-squimbo) and [Open Discord Activity](/open-discord-activity).",
    },
    {
      question: "Support if it will not launch?",
      answer:
        "Check Activity permissions on the server, then Support from the marketing site. For Discord Apps UI, [help is here](discord:apps-help).",
    },
    {
      question: "Do I still need voice?",
      answer:
        "Yes. The Directory helps you find Squimbo; the night runs as an Activity on a voice channel.",
    },
  ],
});

export const discordPartyGameOnCallCopy = page({
  metaTitle: "Discord party game on a call",
  metaDescription:
    "Already on a Discord call? Open Squimbo as an Activity and play sealed most likely rounds without leaving voice.",
  footerLabel: "Party on a call",
  llmsDescription:
    "Squimbo as a Discord Activity party game for people already on a voice call.",
  title: "A party game while you’re already on a call",
  lead:
    "Squimbo fits mid-call. Keep Discord voice up, open the Activity, Ready, and run sealed most-likely rounds with whoever is on that call. No leave-and-rejoin circus to a browser lobby.",
  sections: [
    {
      title: "No leave-and-rejoin circus",
      body: "You do not move the crew to a browser lobby. The Activity rides with the call. Each player opens Squimbo in the same channel and shares one Activity instance.",
    },
    {
      title: "Talk through reveals",
      body: "Sealed votes, then unlock tallies when everyone locks in. Reactions stay on voice. Running scores wait for the finale when you wrap after reveals.",
    },
    {
      title: "Sweet spot",
      body: "About 3 to 8 players on the call. Min two to start. Soft nights often run about 8 to 12 rounds before the wrap nudge feels natural.",
    },
    {
      title: "Related voice pages",
      body: "See [Discord voice channel game](/discord-voice-channel-game), [Talk while you play](/talk-while-you-play-discord), and [Group call Activity](/discord-activity-group-call).",
    },
  ],
  faq: [
    {
      question: "Does Squimbo end the call?",
      answer: "No. Voice stays Discord’s. Squimbo is the Activity UI.",
    },
    {
      question: "Related voice JTBD?",
      answer:
        "See [Discord voice channel game](/discord-voice-channel-game) and [Talk while you play](/talk-while-you-play-discord).",
    },
    {
      question: "Screen share required?",
      answer:
        "No. See [Party without screen share](/discord-party-game-no-screen-share).",
    },
    {
      question: "How do we start mid-call?",
      answer:
        "Open Activities on the voice channel and launch Squimbo. See [Open a Discord Activity](/open-discord-activity).",
    },
  ],
});

export const voteForAnotherPlayerDiscordCopy = page({
  metaTitle: "Vote for another player on Discord",
  metaDescription:
    "In Squimbo you vote for another player on each most likely prompt, not yourself. Votes stay sealed until lock-in.",
  footerLabel: "Vote for another player",
  llmsDescription:
    "Squimbo most-likely: vote for one other player; sealed until all lock in.",
  title: "Vote for another player, not yourself",
  lead:
    "Each Squimbo most-likely round, you pick one other person in the Activity. That is the whole vote. Tallies stay sealed until everyone has locked in, then the reveal shows who got the most votes for that prompt.",
  sections: [
    {
      title: "Targets are friends on the call",
      body: "Discord display names and avatars show who you can vote for. Min two players so there is someone else to pick. Sweet spot about 3 to 8 people who already know each other.",
    },
    {
      title: "Sealed until lock-in",
      body: "Tallies stay hidden while voting. The UI can show who has voted without showing counts, so the roast lands together. See [Vote in the dark](/vote-in-the-dark).",
    },
    {
      title: "Scoring",
      body: "Plus one to the voted player when the group continues after reveal. Night totals wait for the finale so mid-round attention stays on the prompt.",
    },
    {
      title: "Ties",
      body: "Tied reveals can revote or keep going with shared controls. See [Ties and revotes](/squimbo-tie-revote) and [Reveal](/squimbo-reveal).",
    },
  ],
  faq: [
    {
      question: "Can I vote for myself?",
      answer:
        "Most-likely play is vote for another player, not self-vote.",
    },
    {
      question: "Related sealed UX?",
      answer:
        "See [Vote in the dark](/vote-in-the-dark) and [Secret vote party](/secret-vote-discord-party).",
    },
    {
      question: "What if only two players?",
      answer:
        "You can start with two; each votes for the other. Sweet spot is still about 3 to 8.",
    },
    {
      question: "When do tallies show?",
      answer:
        "When the last player locks in for that round.",
    },
  ],
});

export const discordChannelIsTheRoomCopy = page({
  metaTitle: "Discord channel is the Squimbo room",
  metaDescription:
    "In Squimbo the Discord Activity instance for the voice channel is the room. Open Squimbo there. No separate lobby code.",
  footerLabel: "Channel is the room",
  llmsDescription:
    "Squimbo room equals Discord Activity instance on the voice channel.",
  title: "The Discord channel is the room",
  lead:
    "Squimbo does not mint a parallel chat room on the website. Whoever opens the Activity in the same Discord voice channel shares that instance. That is the room for sealed most-likely rounds.",
  sections: [
    {
      title: "Instance, not invite code",
      body: "No four-digit lobby field to read aloud. Discord’s Activity instance binds the session to the channel context. Friends open Squimbo there and land in the same room. See [No lobby code](/no-lobby-code-discord-game).",
    },
    {
      title: "Identity still Discord",
      body: "Players appear with Discord names and avatars after Discord allows the Activity. The marketing site is not the night’s login. See [With avatars](/discord-party-game-with-avatars).",
    },
    {
      title: "Permissions matter",
      body: "If Activities are blocked for roles or the channel, Squimbo cannot open. That is a Discord server setting, not a Squimbo lobby password you type into this website.",
    },
    {
      title: "Same channel rule",
      body: "Friends in another voice channel are not in your room yet. Move together, then open Squimbo. See [Same voice channel](/same-voice-channel-squimbo).",
    },
  ],
  faq: [
    {
      question: "Related pages?",
      answer:
        "See [No lobby code](/no-lobby-code-discord-game), [Same voice channel](/same-voice-channel-squimbo), and the [Discord Activity](/discord-activity) pillar.",
    },
    {
      question: "Two Activities in one channel?",
      answer:
        "Squimbo’s room is the Activity instance for that channel context. Friends need to open Squimbo in the same voice channel to share the night.",
    },
    {
      question: "Browser spectators?",
      answer:
        "Play is in Discord. The marketing site is not a live spectator lobby.",
    },
    {
      question: "How do I open it?",
      answer:
        "See [Open a Discord Activity](/open-discord-activity).",
    },
  ],
});

export const playSquimboWithFriendsCopy = page({
  metaTitle: "Play Squimbo with friends",
  metaDescription:
    "Play Squimbo with friends on Discord voice. Open the Activity together for sealed most likely rounds and a finale.",
  footerLabel: "Play with friends",
  llmsDescription:
    "Play Squimbo with friends already on Discord voice. Sealed most-likely Activity.",
  title: "Play Squimbo with friends",
  lead:
    "Grab friends already on Discord, hop on voice, open Squimbo, and find out who knows the group best. Sealed votes, reveals, finale. No stranger matchmaking and no website signup to start.",
  sections: [
    {
      title: "Simple path",
      body: "Same call, Activities, Squimbo, Ready, vote sealed for another player, reveal, wrap. Soft nights often run about 8 to 12 rounds before the finale scoreboard.",
    },
    {
      title: "Built for people you know",
      body: "No stranger matchmaking. Discord avatars you recognize. About 3 to 8 feels best; min two to start. See [No matchmaking](/discord-party-game-no-matchmaking) and [For friends](/discord-party-game-for-friends).",
    },
    {
      title: "Keep talking",
      body: "The roast lives on voice. Squimbo is the Activity UI riding along, not a silent browser tab someone screen-shares. See [Talk while you play](/talk-while-you-play-discord).",
    },
    {
      title: "Finding Squimbo",
      body: "From the Activity shelf, or [open Squimbo in the Directory](discord:directory). You can also [add Squimbo on Discord](discord:play) through Discord’s authorize flow.",
    },
  ],
  faq: [
    {
      question: "Cost?",
      answer:
        "Marketed as a free Discord party Activity. See [Free Discord party game](/free-discord-party-game).",
    },
    {
      question: "Bot invite?",
      answer: "No slash-bot required. Activity shelf launch.",
    },
    {
      question: "Related friends JTBD?",
      answer:
        "See [For friends](/discord-party-game-for-friends) and [Most likely among friends](/most-likely-among-friends-discord).",
    },
    {
      question: "How many people?",
      answer:
        "Min two to start. About 3 to 8 feels best.",
    },
  ],
});

export const discordPartyGameNoModeratorCopy = page({
  metaTitle: "Discord party game no moderator",
  metaDescription:
    "Run Squimbo without a game moderator. Shared Activity controls, sealed most likely rounds, finale when you wrap.",
  footerLabel: "No moderator",
  llmsDescription:
    "Squimbo needs no game moderator. Shared Discord Activity controls for everyone.",
  title: "A Discord party game without a moderator",
  lead:
    "You do not need someone to run decks, read cards, or own a host tablet. Squimbo’s Activity UI is shared: Ready, vote, reveal, next, and wrap for everyone. Soft nights, sealed tallies, finale when you wrap.",
  sections: [
    {
      title: "Moderator fatigue is the enemy",
      body: "Classic party games often stall when one person holds the prompts. Squimbo serves prompts from the session stream so the call can stay social through sealed votes and reveals.",
    },
    {
      title: "Still not chaos admin",
      body: "Shared controls are not Discord server admin tools. Server Activity permissions may still apply. Soft spot about 3 to 8 players; min two to start.",
    },
    {
      title: "Same as no-host product rule",
      body: "Technical host id has no in-game privileges. Soft nights often run about 8 to 12 rounds with shared next and wrap. See [No host party game](/no-host-party-game) and [Shared controls](/discord-activity-shared-controls).",
    },
    {
      title: "Ties and wrap without a gavel",
      body: "Revote and wrap use shared consensus paths after sealed reveals. See [Ties and revotes](/squimbo-tie-revote) and [Wrap up](/squimbo-wrap-up).",
    },
  ],
  faq: [
    {
      question: "Who advances rounds?",
      answer:
        "Shared next, wrap, and revote paths after reveal. Not a moderator gavel.",
    },
    {
      question: "Related shared-controls page?",
      answer: "See [Discord Activity shared controls](/discord-activity-shared-controls).",
    },
    {
      question: "Can server mods stop Activities?",
      answer:
        "Yes via Discord permissions. That is outside Squimbo’s in-game host model.",
    },
    {
      question: "Do we pick categories first?",
      answer:
        "No pack picker. One shared most-likely stream. See [No pack picker](/no-pack-picker-discord-game).",
    },
  ],
});

export const launchSquimboFromActivitiesCopy = page({
  metaTitle: "Launch Squimbo from Activities",
  metaDescription:
    "Launch Squimbo from Discord’s Activities shelf on a voice channel. Allow once if needed, then Ready up with friends.",
  footerLabel: "Launch from Activities",
  llmsDescription:
    "How to launch Squimbo from the Discord Activities shelf on voice.",
  title: "Launch Squimbo from the Activities shelf",
  lead:
    "Join a Discord voice channel, open Activities, find Squimbo, and launch. That starts the Activity instance your friends join. Prefer the listing first? [Open Squimbo in the Directory](discord:directory).",
  sections: [
    {
      title: "Shelf, not a chat bot",
      body: "Squimbo is not a chat bot command. Launch from Activities on the voice channel where Discord shows Activity entry points. You can also [add Squimbo on Discord](discord:play) through Discord’s authorize flow.",
    },
    {
      title: "The first time Discord asks permission",
      body: "Discord may ask you to allow Squimbo once per client. After that, relaunch from the shelf. Soft nights start after Ready with at least two players. See [First launch](/discord-activity-first-launch).",
    },
    {
      title: "Friends join the instance",
      body: "They open Squimbo in the same voice channel. No lobby code to shout. Late joiners open the Activity the same way. See [Same voice channel](/same-voice-channel-squimbo) and [Join mid-game](/join-squimbo-late).",
    },
    {
      title: "If the Apps UI looks different",
      body: "Menus change by client. [Discord’s Apps help is here](discord:apps-help). Squimbo’s path stays: find it, launch it, Ready up, play sealed most-likely rounds, wrap for the finale.",
    },
  ],
  faq: [
    {
      question: "Related open guide?",
      answer:
        "See [Open Discord Activity](/open-discord-activity), [Add Squimbo](/add-squimbo), and [First launch](/discord-activity-first-launch).",
    },
    {
      question: "Generic Discord UI help?",
      answer:
        "Menus change by client. [Discord’s Apps help is here](discord:apps-help). This page is Squimbo’s launch path.",
    },
    {
      question: "Mobile shelf?",
      answer:
        "Yes. Discord mobile clients can open Activities where supported.",
    },
    {
      question: "Do we need screen share?",
      answer:
        "No. See [Party without screen share](/discord-party-game-no-screen-share).",
    },
  ],
});
