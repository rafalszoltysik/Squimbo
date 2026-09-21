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
      "/how-to-play",
      "/most-likely",
      "/faq",
    ],
    guides: [
      "/discord-voice-channel-game",
      "/discord-party-game-players",
      "/discord-icebreaker",
      "/no-host-party-game",
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
      "/discord-activity",
      "/discord-activity-mobile",
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
      "/discord-activity",
      "/discord-icebreaker",
      "/faq",
    ],
  },
  {
    path: "/vote-in-the-dark",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.65,
    related: ["/most-likely", "/how-to-play", "/discord-icebreaker", "/faq"],
  },
  {
    path: "/discord-party-game-players",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.65,
    related: [
      "/discord-party-game",
      "/how-to-play",
      "/no-host-party-game",
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
      "/open-discord-activity",
      "/how-to-play",
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
      "/discord-party-game-players",
      "/faq",
    ],
  },
  {
    path: "/discord-icebreaker",
    kind: "guide",
    changeFrequency: "monthly",
    priority: 0.65,
    related: [
      "/discord-party-game",
      "/most-likely",
      "/vote-in-the-dark",
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
      "/open-discord-activity",
      "/discord-party-game",
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
