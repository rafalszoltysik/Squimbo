import { discordActivityCopy } from "./copy/discord-activity";
import { discordActivityMobileCopy } from "./copy/discord-activity-mobile";
import { discordActivityNotABotCopy } from "./copy/discord-activity-not-a-bot";
import { discordIcebreakerCopy } from "./copy/discord-icebreaker";
import { discordPartyGameCopy } from "./copy/discord-party-game";
import { discordPartyGamePlayersCopy } from "./copy/discord-party-game-players";
import { discordVoiceChannelGameCopy } from "./copy/discord-voice-channel-game";
import { faqCopy } from "./copy/faq";
import { howToPlayCopy } from "./copy/how-to-play";
import { mostLikelyCopy } from "./copy/most-likely";
import { noHostPartyGameCopy } from "./copy/no-host-party-game";
import { openDiscordActivityCopy } from "./copy/open-discord-activity";
import { voteInTheDarkCopy } from "./copy/vote-in-the-dark";
import {
  addSquimboCopy,
  discordActivityGroupCallCopy,
  discordActivityVsBrowserGameCopy,
  discordGameNightCopy,
  discordHangoutGameCopy,
  discordPartyGameForFriendsCopy,
  discordPartyGameNoDownloadCopy,
  discordRoastPartyGameCopy,
  freeDiscordPartyGameCopy,
  mostLikelyPartyOnDiscordCopy,
  playInsideDiscordCopy,
  shortDiscordPartyGameCopy,
  squimboFinaleCopy,
  squimboRevealCopy,
  startSquimboCopy,
  whosMostLikelyToDiscordCopy,
} from "./copy/wave4-guides";
import {
  casualDiscordPartyGameCopy,
  discordActivityFirstLaunchCopy,
  discordPartyGameNoScreenShareCopy,
  discordPartyGameWithAvatarsCopy,
  discordPartyWithoutBotCopy,
  discordServerVoicePartyGameCopy,
  joinSquimboLateCopy,
  mostLikelyAmongFriendsDiscordCopy,
  multiplayerDiscordActivityPartyCopy,
  noLobbyCodeDiscordGameCopy,
  secretVoteDiscordPartyCopy,
  squimboPlayAgainCopy,
  squimboReadyUpCopy,
  squimboTieRevoteCopy,
  talkWhileYouPlayDiscordCopy,
  whoKnowsTheGroupBestDiscordCopy,
} from "./copy/wave5-guides";
import {
  discordActivitySharedControlsCopy,
  discordChannelIsTheRoomCopy,
  discordPartyGameNoMatchmakingCopy,
  discordPartyGameNoModeratorCopy,
  discordPartyGameNoSignupCopy,
  discordPartyGameOnCallCopy,
  findSquimboDiscordDirectoryCopy,
  launchSquimboFromActivitiesCopy,
  noPackPickerDiscordGameCopy,
  playSquimboWithFriendsCopy,
  sameVoiceChannelSquimboCopy,
  scoresHiddenUntilFinaleCopy,
  squimboLobbyCopy,
  squimboNextRoundCopy,
  squimboWrapUpCopy,
  voteForAnotherPlayerDiscordCopy,
} from "./copy/wave6-guides";
import type { SeoPageCopy, SeoRouteDef, SeoRoutePath } from "./types";

/** Source of truth for sitemap, footer Learn, llms.txt, and [slug] pages. */
export const SEO_ROUTES: readonly SeoRouteDef[] = [
  {
    path: "/discord-party-game",
    kind: "pillar",
    changeFrequency: "monthly",
    priority: 0.8,
    related: [
      "/discord-activity",
      "/most-likely",
      "/discord-activity-not-a-bot",
      "/faq",
    ],
    guides: [
      "/discord-voice-channel-game",
      "/discord-party-game-players",
      "/discord-icebreaker",
      "/no-host-party-game",
      "/discord-game-night",
      "/discord-hangout-game",
      "/short-discord-party-game",
      "/discord-party-game-no-download",
      "/discord-party-game-for-friends",
      "/free-discord-party-game",
      "/discord-roast-party-game",
      "/discord-server-voice-party-game",
      "/discord-party-game-with-avatars",
      "/casual-discord-party-game",
      "/multiplayer-discord-activity-party",
      "/discord-party-without-bot",
      "/discord-party-game-no-signup",
      "/discord-party-game-no-matchmaking",
      "/discord-party-game-on-call",
      "/play-squimbo-with-friends",
      "/discord-party-game-no-moderator",
    ],
  },
  {
    path: "/discord-activity",
    kind: "pillar",
    changeFrequency: "monthly",
    priority: 0.8,
    related: ["/discord-party-game", "/how-to-play", "/faq"],
    guides: [
      "/open-discord-activity",
      "/discord-activity-mobile",
      "/discord-activity-not-a-bot",
      "/discord-voice-channel-game",
      "/play-inside-discord",
      "/add-squimbo",
      "/discord-activity-group-call",
      "/discord-activity-vs-browser-game",
      "/discord-party-game-no-download",
      "/discord-party-game-no-screen-share",
      "/discord-party-game-with-avatars",
      "/no-lobby-code-discord-game",
      "/multiplayer-discord-activity-party",
      "/discord-activity-first-launch",
      "/talk-while-you-play-discord",
      "/discord-party-game-no-signup",
      "/same-voice-channel-squimbo",
      "/discord-channel-is-the-room",
      "/find-squimbo-discord-directory",
      "/discord-activity-shared-controls",
      "/launch-squimbo-from-activities",
    ],
  },
  {
    path: "/how-to-play",
    kind: "pillar",
    changeFrequency: "monthly",
    priority: 0.8,
    related: ["/most-likely", "/discord-activity", "/faq"],
    guides: [
      "/open-discord-activity",
      "/vote-in-the-dark",
      "/discord-party-game-players",
      "/no-host-party-game",
      "/start-squimbo",
      "/add-squimbo",
      "/squimbo-reveal",
      "/squimbo-finale",
      "/short-discord-party-game",
      "/join-squimbo-late",
      "/squimbo-ready-up",
      "/squimbo-tie-revote",
      "/squimbo-play-again",
      "/no-pack-picker-discord-game",
      "/squimbo-lobby",
      "/squimbo-next-round",
      "/squimbo-wrap-up",
      "/discord-activity-shared-controls",
      "/vote-for-another-player-discord",
    ],
  },
  {
    path: "/most-likely",
    kind: "pillar",
    changeFrequency: "monthly",
    priority: 0.75,
    related: ["/how-to-play", "/discord-party-game", "/faq"],
    guides: [
      "/vote-in-the-dark",
      "/discord-icebreaker",
      "/discord-party-game-players",
      "/whos-most-likely-to-discord",
      "/most-likely-party-on-discord",
      "/discord-roast-party-game",
      "/discord-activity-vs-browser-game",
      "/squimbo-reveal",
      "/who-knows-the-group-best-discord",
      "/secret-vote-discord-party",
      "/most-likely-among-friends-discord",
      "/no-pack-picker-discord-game",
      "/scores-hidden-until-finale",
      "/vote-for-another-player-discord",
    ],
  },
  {
    path: "/faq",
    kind: "hub",
    changeFrequency: "monthly",
    priority: 0.7,
    related: [
      "/how-to-play",
      "/discord-party-game",
      "/discord-activity",
      "/most-likely",
    ],
  },
  {
    path: "/open-discord-activity",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.65,
    related: [
      "/how-to-play",
      "/add-squimbo",
      "/discord-activity",
      "/faq",
    ],
  },
  {
    path: "/discord-voice-channel-game",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.65,
    related: [
      "/discord-party-game",
      "/discord-activity-group-call",
      "/discord-activity-not-a-bot",
      "/faq",
    ],
  },
  {
    path: "/vote-in-the-dark",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.65,
    related: ["/most-likely", "/squimbo-reveal", "/how-to-play", "/faq"],
  },
  {
    path: "/discord-party-game-players",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.65,
    related: [
      "/discord-party-game",
      "/discord-party-game-for-friends",
      "/how-to-play",
      "/faq",
    ],
  },
  {
    path: "/discord-activity-mobile",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.65,
    related: [
      "/discord-activity",
      "/discord-party-game-no-download",
      "/open-discord-activity",
      "/faq",
    ],
  },
  {
    path: "/no-host-party-game",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.65,
    related: [
      "/how-to-play",
      "/discord-party-game",
      "/start-squimbo",
      "/faq",
    ],
  },
  {
    path: "/discord-icebreaker",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.65,
    related: [
      "/discord-hangout-game",
      "/most-likely",
      "/discord-party-game",
      "/faq",
    ],
  },
  {
    path: "/discord-activity-not-a-bot",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.65,
    related: [
      "/discord-activity",
      "/play-inside-discord",
      "/discord-party-game",
      "/faq",
    ],
  },
  {
    path: "/discord-game-night",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-party-game",
      "/short-discord-party-game",
      "/how-to-play",
      "/faq",
    ],
  },
  {
    path: "/discord-hangout-game",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-icebreaker",
      "/discord-voice-channel-game",
      "/discord-party-game",
      "/faq",
    ],
  },
  {
    path: "/short-discord-party-game",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-game-night",
      "/how-to-play",
      "/discord-party-game",
      "/faq",
    ],
  },
  {
    path: "/discord-party-game-no-download",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/play-inside-discord",
      "/discord-activity-mobile",
      "/discord-party-game",
      "/faq",
    ],
  },
  {
    path: "/discord-party-game-for-friends",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-party-game",
      "/discord-party-game-players",
      "/discord-voice-channel-game",
      "/faq",
    ],
  },
  {
    path: "/free-discord-party-game",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-party-game",
      "/add-squimbo",
      "/how-to-play",
      "/faq",
    ],
  },
  {
    path: "/play-inside-discord",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-activity",
      "/discord-activity-vs-browser-game",
      "/discord-activity-not-a-bot",
      "/faq",
    ],
  },
  {
    path: "/add-squimbo",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/open-discord-activity",
      "/start-squimbo",
      "/discord-activity",
      "/faq",
    ],
  },
  {
    path: "/discord-activity-group-call",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-voice-channel-game",
      "/discord-activity",
      "/play-inside-discord",
      "/faq",
    ],
  },
  {
    path: "/discord-activity-vs-browser-game",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/most-likely",
      "/play-inside-discord",
      "/discord-activity",
      "/faq",
    ],
  },
  {
    path: "/whos-most-likely-to-discord",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/most-likely",
      "/most-likely-party-on-discord",
      "/vote-in-the-dark",
      "/faq",
    ],
  },
  {
    path: "/most-likely-party-on-discord",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/most-likely",
      "/whos-most-likely-to-discord",
      "/discord-party-game",
      "/faq",
    ],
  },
  {
    path: "/discord-roast-party-game",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/most-likely",
      "/discord-party-game",
      "/vote-in-the-dark",
      "/faq",
    ],
  },
  {
    path: "/start-squimbo",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/how-to-play",
      "/add-squimbo",
      "/open-discord-activity",
      "/faq",
    ],
  },
  {
    path: "/squimbo-reveal",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/vote-in-the-dark",
      "/squimbo-finale",
      "/most-likely",
      "/faq",
    ],
  },
  {
    path: "/squimbo-finale",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/how-to-play",
      "/squimbo-reveal",
      "/most-likely",
      "/faq",
    ],
  },
  {
    path: "/who-knows-the-group-best-discord",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/most-likely",
      "/most-likely-among-friends-discord",
      "/discord-party-game",
      "/faq",
    ],
  },
  {
    path: "/discord-server-voice-party-game",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-party-game",
      "/discord-voice-channel-game",
      "/discord-activity",
      "/faq",
    ],
  },
  {
    path: "/discord-party-game-no-screen-share",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-activity",
      "/play-inside-discord",
      "/discord-activity-vs-browser-game",
      "/faq",
    ],
  },
  {
    path: "/discord-party-game-with-avatars",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-activity",
      "/discord-party-game",
      "/discord-party-game-for-friends",
      "/faq",
    ],
  },
  {
    path: "/no-lobby-code-discord-game",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-activity",
      "/open-discord-activity",
      "/play-inside-discord",
      "/faq",
    ],
  },
  {
    path: "/casual-discord-party-game",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-party-game",
      "/no-host-party-game",
      "/short-discord-party-game",
      "/faq",
    ],
  },
  {
    path: "/multiplayer-discord-activity-party",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-activity",
      "/discord-party-game",
      "/discord-party-game-players",
      "/faq",
    ],
  },
  {
    path: "/discord-activity-first-launch",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/open-discord-activity",
      "/add-squimbo",
      "/start-squimbo",
      "/faq",
    ],
  },
  {
    path: "/join-squimbo-late",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/how-to-play",
      "/discord-party-game-players",
      "/start-squimbo",
      "/faq",
    ],
  },
  {
    path: "/squimbo-ready-up",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/how-to-play",
      "/start-squimbo",
      "/no-host-party-game",
      "/faq",
    ],
  },
  {
    path: "/squimbo-tie-revote",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/how-to-play",
      "/squimbo-reveal",
      "/vote-in-the-dark",
      "/faq",
    ],
  },
  {
    path: "/squimbo-play-again",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/squimbo-finale",
      "/how-to-play",
      "/start-squimbo",
      "/faq",
    ],
  },
  {
    path: "/secret-vote-discord-party",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/vote-in-the-dark",
      "/most-likely",
      "/discord-party-game",
      "/faq",
    ],
  },
  {
    path: "/most-likely-among-friends-discord",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/most-likely",
      "/discord-party-game-for-friends",
      "/who-knows-the-group-best-discord",
      "/faq",
    ],
  },
  {
    path: "/discord-party-without-bot",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-activity-not-a-bot",
      "/discord-party-game",
      "/discord-activity",
      "/faq",
    ],
  },
  {
    path: "/talk-while-you-play-discord",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-voice-channel-game",
      "/discord-activity",
      "/discord-party-game",
      "/faq",
    ],
  },
  {
    path: "/discord-party-game-no-signup",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-activity",
      "/discord-party-game",
      "/discord-activity-first-launch",
      "/faq",
    ],
  },
  {
    path: "/same-voice-channel-squimbo",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-activity",
      "/discord-voice-channel-game",
      "/no-lobby-code-discord-game",
      "/faq",
    ],
  },
  {
    path: "/discord-party-game-no-matchmaking",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-party-game",
      "/discord-party-game-for-friends",
      "/play-squimbo-with-friends",
      "/faq",
    ],
  },
  {
    path: "/no-pack-picker-discord-game",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/how-to-play",
      "/most-likely",
      "/start-squimbo",
      "/faq",
    ],
  },
  {
    path: "/squimbo-lobby",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/how-to-play",
      "/squimbo-ready-up",
      "/start-squimbo",
      "/faq",
    ],
  },
  {
    path: "/squimbo-next-round",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/how-to-play",
      "/squimbo-reveal",
      "/squimbo-wrap-up",
      "/faq",
    ],
  },
  {
    path: "/squimbo-wrap-up",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/how-to-play",
      "/squimbo-finale",
      "/squimbo-next-round",
      "/faq",
    ],
  },
  {
    path: "/scores-hidden-until-finale",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/squimbo-finale",
      "/most-likely",
      "/squimbo-wrap-up",
      "/faq",
    ],
  },
  {
    path: "/discord-activity-shared-controls",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/no-host-party-game",
      "/how-to-play",
      "/discord-party-game-no-moderator",
      "/faq",
    ],
  },
  {
    path: "/find-squimbo-discord-directory",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/add-squimbo",
      "/discord-activity",
      "/open-discord-activity",
      "/faq",
    ],
  },
  {
    path: "/discord-party-game-on-call",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-party-game",
      "/discord-voice-channel-game",
      "/talk-while-you-play-discord",
      "/faq",
    ],
  },
  {
    path: "/vote-for-another-player-discord",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/most-likely",
      "/how-to-play",
      "/vote-in-the-dark",
      "/faq",
    ],
  },
  {
    path: "/discord-channel-is-the-room",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-activity",
      "/no-lobby-code-discord-game",
      "/same-voice-channel-squimbo",
      "/faq",
    ],
  },
  {
    path: "/play-squimbo-with-friends",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/discord-party-game",
      "/discord-party-game-for-friends",
      "/most-likely-among-friends-discord",
      "/faq",
    ],
  },
  {
    path: "/discord-party-game-no-moderator",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/no-host-party-game",
      "/discord-party-game",
      "/discord-activity-shared-controls",
      "/faq",
    ],
  },
  {
    path: "/launch-squimbo-from-activities",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.62,
    related: [
      "/open-discord-activity",
      "/discord-activity",
      "/add-squimbo",
      "/faq",
    ],
  },
] as const;

const COPY_BY_PATH: Record<SeoRoutePath, SeoPageCopy> = {
  "/discord-party-game": discordPartyGameCopy,
  "/discord-activity": discordActivityCopy,
  "/how-to-play": howToPlayCopy,
  "/most-likely": mostLikelyCopy,
  "/faq": faqCopy,
  "/open-discord-activity": openDiscordActivityCopy,
  "/discord-voice-channel-game": discordVoiceChannelGameCopy,
  "/vote-in-the-dark": voteInTheDarkCopy,
  "/discord-party-game-players": discordPartyGamePlayersCopy,
  "/discord-activity-mobile": discordActivityMobileCopy,
  "/no-host-party-game": noHostPartyGameCopy,
  "/discord-icebreaker": discordIcebreakerCopy,
  "/discord-activity-not-a-bot": discordActivityNotABotCopy,
  "/discord-game-night": discordGameNightCopy,
  "/discord-hangout-game": discordHangoutGameCopy,
  "/short-discord-party-game": shortDiscordPartyGameCopy,
  "/discord-party-game-no-download": discordPartyGameNoDownloadCopy,
  "/discord-party-game-for-friends": discordPartyGameForFriendsCopy,
  "/free-discord-party-game": freeDiscordPartyGameCopy,
  "/play-inside-discord": playInsideDiscordCopy,
  "/add-squimbo": addSquimboCopy,
  "/discord-activity-group-call": discordActivityGroupCallCopy,
  "/discord-activity-vs-browser-game": discordActivityVsBrowserGameCopy,
  "/whos-most-likely-to-discord": whosMostLikelyToDiscordCopy,
  "/most-likely-party-on-discord": mostLikelyPartyOnDiscordCopy,
  "/discord-roast-party-game": discordRoastPartyGameCopy,
  "/start-squimbo": startSquimboCopy,
  "/squimbo-reveal": squimboRevealCopy,
  "/squimbo-finale": squimboFinaleCopy,
  "/who-knows-the-group-best-discord": whoKnowsTheGroupBestDiscordCopy,
  "/discord-server-voice-party-game": discordServerVoicePartyGameCopy,
  "/discord-party-game-no-screen-share": discordPartyGameNoScreenShareCopy,
  "/discord-party-game-with-avatars": discordPartyGameWithAvatarsCopy,
  "/no-lobby-code-discord-game": noLobbyCodeDiscordGameCopy,
  "/casual-discord-party-game": casualDiscordPartyGameCopy,
  "/multiplayer-discord-activity-party": multiplayerDiscordActivityPartyCopy,
  "/discord-activity-first-launch": discordActivityFirstLaunchCopy,
  "/join-squimbo-late": joinSquimboLateCopy,
  "/squimbo-ready-up": squimboReadyUpCopy,
  "/squimbo-tie-revote": squimboTieRevoteCopy,
  "/squimbo-play-again": squimboPlayAgainCopy,
  "/secret-vote-discord-party": secretVoteDiscordPartyCopy,
  "/most-likely-among-friends-discord": mostLikelyAmongFriendsDiscordCopy,
  "/discord-party-without-bot": discordPartyWithoutBotCopy,
  "/talk-while-you-play-discord": talkWhileYouPlayDiscordCopy,
  "/discord-party-game-no-signup": discordPartyGameNoSignupCopy,
  "/same-voice-channel-squimbo": sameVoiceChannelSquimboCopy,
  "/discord-party-game-no-matchmaking": discordPartyGameNoMatchmakingCopy,
  "/no-pack-picker-discord-game": noPackPickerDiscordGameCopy,
  "/squimbo-lobby": squimboLobbyCopy,
  "/squimbo-next-round": squimboNextRoundCopy,
  "/squimbo-wrap-up": squimboWrapUpCopy,
  "/scores-hidden-until-finale": scoresHiddenUntilFinaleCopy,
  "/discord-activity-shared-controls": discordActivitySharedControlsCopy,
  "/find-squimbo-discord-directory": findSquimboDiscordDirectoryCopy,
  "/discord-party-game-on-call": discordPartyGameOnCallCopy,
  "/vote-for-another-player-discord": voteForAnotherPlayerDiscordCopy,
  "/discord-channel-is-the-room": discordChannelIsTheRoomCopy,
  "/play-squimbo-with-friends": playSquimboWithFriendsCopy,
  "/discord-party-game-no-moderator": discordPartyGameNoModeratorCopy,
  "/launch-squimbo-from-activities": launchSquimboFromActivitiesCopy,
};

const ROUTE_BY_PATH = new Map(
  SEO_ROUTES.map((route) => [route.path, route] as const),
);

export function isSeoRoutePath(value: string): value is SeoRoutePath {
  return value in COPY_BY_PATH;
}

/** Path after locale without leading slash, e.g. "how-to-play". */
export function slugToSeoPath(slug: string): SeoRoutePath | null {
  const path = `/${slug}` as SeoRoutePath;
  return isSeoRoutePath(path) ? path : null;
}

export function getSeoRoute(path: SeoRoutePath): SeoRouteDef {
  const route = ROUTE_BY_PATH.get(path);
  if (!route) {
    throw new Error(`Missing SEO route for ${path}`);
  }
  return route;
}

export function getSeoPageCopy(path: SeoRoutePath): SeoPageCopy {
  return COPY_BY_PATH[path];
}

/** Footer Learn: pillars + FAQ hub only (not every guide). */
export function getFooterLearnRoutes(): SeoRouteDef[] {
  return SEO_ROUTES.filter(
    (route) => route.kind === "pillar" || route.kind === "hub",
  );
}

export function getPillarRoutes(): SeoRouteDef[] {
  return SEO_ROUTES.filter((route) => route.kind === "pillar");
}

export function getGuideRoutes(): SeoRouteDef[] {
  return SEO_ROUTES.filter((route) => route.kind === "guide");
}

export type SeoNavLink = {
  href: SeoRoutePath | "";
  label: string;
  description?: string;
};

export function getRelatedSeoLinks(
  path: SeoRoutePath,
  homeLabel: string,
): SeoNavLink[] {
  const route = getSeoRoute(path);
  const related = route.related.map((relatedPath) => ({
    href: relatedPath,
    label: getSeoPageCopy(relatedPath).footerLabel,
  }));
  return [...related, { href: "", label: homeLabel }];
}

export function getGuideSeoLinks(path: SeoRoutePath): SeoNavLink[] {
  const route = getSeoRoute(path);
  if (!route.guides?.length) return [];
  return route.guides.map((guidePath) => {
    const copy = getSeoPageCopy(guidePath);
    return {
      href: guidePath,
      label: copy.footerLabel,
      description: copy.llmsDescription,
    };
  });
}

/** All content slugs for generateStaticParams. */
export function getSeoSlugs(): string[] {
  return SEO_ROUTES.map((route) => route.path.slice(1));
}
