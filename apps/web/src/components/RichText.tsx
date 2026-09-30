import type { ReactNode } from "react";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { discordDirectoryUrl, discordPlayUrl } from "@/discord";

type Props = {
  text: string;
  locale: string;
  /** Replaces `{email}` with a mailto link when set. */
  email?: string;
  /** Resolves markdown href `discord:invite`. */
  discordInviteUrl?: string;
};

const TOKEN_RE =
  /\[([^\]]+)\]\(([^)]+)\)|\{email\}/g;

/** Fallback client id when env is unset (local / static copy previews). */
const FALLBACK_CLIENT_ID = "1545063528422183043";

const resolvedClientId =
  process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || FALLBACK_CLIENT_ID;

/** Squimbo listing in Discord App Directory / Discovery. */
export const SQUIMBO_DISCORD_DIRECTORY_URL =
  discordDirectoryUrl(resolvedClientId) ??
  `https://discord.com/discovery/applications/${FALLBACK_CLIENT_ID}`;

/** Add / authorize Squimbo on Discord (Play CTA target). */
export const SQUIMBO_DISCORD_PLAY_URL =
  discordPlayUrl(resolvedClientId) ??
  `https://discord.com/oauth2/authorize?client_id=${FALLBACK_CLIENT_ID}`;

/** Discord Help: how to use Apps / Activities UI. */
export const DISCORD_APPS_HELP_URL =
  "https://support-apps.discord.com/hc/en-us/articles/26593412574359-How-to-Use-Apps";

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:")
  );
}

function resolveHref(
  href: string,
  locale: string,
  discordInviteUrl?: string,
): string | null {
  if (href === "cookie:settings") return null;
  if (href === "discord:invite") {
    return discordInviteUrl ?? null;
  }
  if (href === "discord:directory") {
    return SQUIMBO_DISCORD_DIRECTORY_URL;
  }
  if (href === "discord:play") {
    return SQUIMBO_DISCORD_PLAY_URL;
  }
  if (href === "discord:apps-help") {
    return DISCORD_APPS_HELP_URL;
  }
  if (href.startsWith("/")) {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return `/${locale}${href}`;
    const path = href.slice(0, hashIndex);
    const hash = href.slice(hashIndex);
    return `/${locale}${path}${hash}`;
  }
  return href;
}

/**
 * Renders catalog copy with optional markdown links `[label](href)`,
 * `{email}` mailto, `cookie:settings`, `discord:invite`,
 * `discord:directory`, `discord:play`, and `discord:apps-help`.
 */
export function RichText({ text, locale, email, discordInviteUrl }: Props) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[0] === "{email}") {
      if (email) {
        nodes.push(
          <a key={key++} href={`mailto:${email}`}>
            {email}
          </a>,
        );
      } else {
        nodes.push("{email}");
      }
    } else {
      const label = match[1];
      const href = match[2];

      if (href === "cookie:settings") {
        nodes.push(
          <CookieSettingsButton
            key={key++}
            label={label}
            className="prose-page__inline-action"
          />,
        );
      } else {
        const resolved = resolveHref(href, locale, discordInviteUrl);
        if (!resolved) {
          nodes.push(label);
        } else if (isExternalHref(resolved) || resolved.startsWith("mailto:")) {
          nodes.push(
            <a
              key={key++}
              href={resolved}
              {...(resolved.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>,
          );
        } else {
          nodes.push(
            <Link key={key++} href={resolved}>
              {label}
            </Link>,
          );
        }
      }
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}

/** Plain text for JSON-LD: keep link labels, drop markdown hrefs. */
export function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}
