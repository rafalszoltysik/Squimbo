/** Kind of indexable marketing content page. */
export type SeoPageKind = "pillar" | "guide" | "hub";

export type SeoFaqItem = {
  question: string;
  answer: string;
};

export type SeoSection = {
  title: string;
  body?: string;
  points?: readonly string[];
};

export type SeoHowTo = {
  name: string;
  steps: Array<{ name: string; text: string }>;
};

/** On-page + meta copy for one content URL. */
export type SeoPageCopy = {
  metaTitle: string;
  metaDescription: string;
  /** Short label for footer, breadcrumbs, related nav. */
  footerLabel: string;
  /** One-line description for llms.txt and guide cards. */
  llmsDescription: string;
  title: string;
  lead: string;
  sections: SeoSection[];
  faqTitle: string;
  faq: SeoFaqItem[];
  cta: string;
  relatedTitle: string;
  /** Pillars: heading above the guide list. */
  guidesTitle?: string;
  howTo?: SeoHowTo;
};

export type SeoRoutePath =
  | "/discord-party-game"
  | "/discord-activity"
  | "/how-to-play"
  | "/most-likely"
  | "/faq"
  | "/open-discord-activity"
  | "/discord-voice-channel-game"
  | "/vote-in-the-dark"
  | "/discord-party-game-players"
  | "/discord-activity-mobile"
  | "/no-host-party-game"
  | "/discord-icebreaker"
  | "/discord-activity-not-a-bot"
  | "/discord-game-night"
  | "/discord-hangout-game"
  | "/short-discord-party-game"
  | "/discord-party-game-no-download"
  | "/discord-party-game-for-friends"
  | "/free-discord-party-game"
  | "/play-inside-discord"
  | "/add-squimbo"
  | "/discord-activity-group-call"
  | "/discord-activity-vs-browser-game"
  | "/whos-most-likely-to-discord"
  | "/most-likely-party-on-discord"
  | "/discord-roast-party-game"
  | "/start-squimbo"
  | "/squimbo-reveal"
  | "/squimbo-finale"
  | "/who-knows-the-group-best-discord"
  | "/discord-server-voice-party-game"
  | "/discord-party-game-no-screen-share"
  | "/discord-party-game-with-avatars"
  | "/no-lobby-code-discord-game"
  | "/casual-discord-party-game"
  | "/multiplayer-discord-activity-party"
  | "/discord-activity-first-launch"
  | "/join-squimbo-late"
  | "/squimbo-ready-up"
  | "/squimbo-tie-revote"
  | "/squimbo-play-again"
  | "/secret-vote-discord-party"
  | "/most-likely-among-friends-discord"
  | "/discord-party-without-bot"
  | "/talk-while-you-play-discord"
  | "/discord-party-game-no-signup"
  | "/same-voice-channel-squimbo"
  | "/discord-party-game-no-matchmaking"
  | "/no-pack-picker-discord-game"
  | "/squimbo-lobby"
  | "/squimbo-next-round"
  | "/squimbo-wrap-up"
  | "/scores-hidden-until-finale"
  | "/discord-activity-shared-controls"
  | "/find-squimbo-discord-directory"
  | "/discord-party-game-on-call"
  | "/vote-for-another-player-discord"
  | "/discord-channel-is-the-room"
  | "/play-squimbo-with-friends"
  | "/discord-party-game-no-moderator"
  | "/launch-squimbo-from-activities";

export type SeoRouteDef = {
  path: SeoRoutePath;
  kind: SeoPageKind;
  changeFrequency: "monthly" | "weekly";
  priority: number;
  /** Related paths (must exist in the registry). */
  related: readonly SeoRoutePath[];
  /** Guide paths listed on pillars (must be kind guide). */
  guides?: readonly SeoRoutePath[];
};
