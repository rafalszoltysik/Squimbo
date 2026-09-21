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
  | "/discord-activity-not-a-bot";

export type SeoRouteDef = {
  path: SeoRoutePath;
  kind: SeoPageKind;
  changeFrequency: "monthly" | "weekly";
  priority: number;
  /** Related “Keep reading” paths (must exist in the registry). */
  related: readonly SeoRoutePath[];
  /** Guide paths listed on pillars (must be kind guide). */
  guides?: readonly SeoRoutePath[];
};
