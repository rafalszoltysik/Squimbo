import { getMessages } from "@/i18n";
import { defaultLocale } from "@/i18n/locales";
import { discordDirectoryUrl, discordPlayUrl } from "@/discord";
import {
  getGuideRoutes,
  getPillarRoutes,
  getSeoPageCopy,
  SEO_ROUTES,
} from "./registry";
import { getSiteUrl } from "./site-url";

const SUPPORT_DISCORD_URL =
  process.env.NEXT_PUBLIC_SUPPORT_DISCORD_URL ||
  "https://discord.gg/PrQkDcxEqk";

/** Curated llms.txt index (llmstxt.org CommonMark), PlayGrid-style cluster. */
export function buildLlmsTxt(): string {
  const site = getSiteUrl();
  const m = getMessages(defaultLocale);

  const pillarLines = getPillarRoutes().map((route) => {
    const copy = getSeoPageCopy(route.path);
    return `- [${copy.footerLabel}](${site}/en${route.path}): ${copy.llmsDescription}`;
  });

  const guideLines = getGuideRoutes().map((route) => {
    const copy = getSeoPageCopy(route.path);
    return `- [${copy.footerLabel}](${site}/en${route.path}): ${copy.llmsDescription}`;
  });

  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim();
  const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
  const directoryUrl = discordDirectoryUrl(clientId);
  const playUrl = discordPlayUrl(clientId);
  const contactLines = [
    `- Support Discord: ${SUPPORT_DISCORD_URL}`,
    supportEmail
      ? `- Privacy / support email: ${supportEmail}`
      : `- Privacy / support: see ${site}/en/support and ${site}/en/privacy`,
  ];
  const directoryLine = directoryUrl
    ? `- Discord App Directory: ${directoryUrl}`
    : null;
  const playLine = playUrl ? `- Add Squimbo on Discord: ${playUrl}` : null;

  return [
    `# ${m.meta.siteName}`,
    "",
    `> ${m.meta.landingDescription}`,
    "",
    m.landing.entityBlurb,
    "",
    `Canonical site: ${site}/en`,
    "",
    "## Key pages",
    "",
    `- [Squimbo home](${site}/en): ${m.meta.landingDescription}`,
    `- [FAQ](${site}/en/faq): ${getSeoPageCopy("/faq").llmsDescription}`,
    `- [Support](${site}/en/support): ${m.meta.supportDescription}`,
    `- [How to play](${site}/en/how-to-play): ${getSeoPageCopy("/how-to-play").llmsDescription}`,
    "",
    "## Positioning pillars (primary marketing landings)",
    "",
    ...pillarLines,
    "",
    "## Topic guides (long-tail cluster)",
    "",
    ...guideLines,
    `- [Privacy Policy](${site}/en/privacy): ${m.meta.privacyDescription}`,
    `- [Terms of Use](${site}/en/terms): ${m.meta.termsDescription}`,
    "",
    "## Product facts",
    "",
    "- Discord Activity party game; room key is the Activity instance id",
    "- Players: Discord display names and avatars from the Embedded App SDK",
    "- Minimum 2 players to start; feels best with about 3 to 8 in voice",
    "- Core loop: sealed “who is most likely” votes → reveal → finale scoreboard",
    "- Prompt bank is English most likely; Activity UI chrome is en + pl",
    "- No in-game host privileges (technical hostUserId only)",
    "- Not a slash-command bot; not a separate game installer; not random matchmaking",
    "- Marketing site is legal + SEO home; the night runs inside Discord",
    ...(directoryLine ? [directoryLine] : []),
    ...(playLine ? [playLine] : []),
    "",
    "## Contact",
    "",
    ...contactLines,
    "",
  ].join("\n");
}

/** Expanded Markdown facts for agents that fetch llms-full.txt. */
export function buildLlmsFullTxt(): string {
  const site = getSiteUrl();
  const m = getMessages(defaultLocale);
  const L = m.landing;
  const faq = getSeoPageCopy("/faq");

  const contentLinks = SEO_ROUTES.map((route) => {
    const copy = getSeoPageCopy(route.path);
    return `- ${copy.footerLabel}: ${site}/en${route.path}`;
  });

  return [
    `# ${m.meta.siteName}`,
    "",
    `> ${m.meta.landingDescription}`,
    "",
    L.entityBlurb,
    "",
    `Canonical site: ${site}/en`,
    "",
    `## ${L.howTitle}`,
    "",
    L.howLead,
    "",
    `### 1. ${L.step1Title}`,
    "",
    L.step1Body,
    "",
    `### 2. ${L.step2Title}`,
    "",
    L.step2Body,
    "",
    `### 3. ${L.step3Title}`,
    "",
    L.step3Body,
    "",
    `## ${L.fitTitle}`,
    "",
    L.fitBody,
    "",
    `- ${L.fitPoint1}`,
    `- ${L.fitPoint2}`,
    `- ${L.fitPoint3}`,
    `- ${L.fitPoint4}`,
    "",
    `## ${faq.title}`,
    "",
    ...faq.faq.flatMap((item) => [
      `### ${item.question}`,
      "",
      item.answer,
      "",
    ]),
    "## Product facts",
    "",
    "- Discord Activity; room = Activity instance id",
    "- Min 2 players; sweet spot ~3 to 8",
    "- Sealed most likely votes; scores at finale",
    "- No bot, no separate installer, no matchmaking",
    "",
    "## Links",
    "",
    `- Home: ${site}/en`,
    ...contentLinks,
    `- Support: ${site}/en/support`,
    `- Privacy: ${site}/en/privacy`,
    `- Terms: ${site}/en/terms`,
    `- Support Discord: ${SUPPORT_DISCORD_URL}`,
    "",
  ].join("\n");
}
