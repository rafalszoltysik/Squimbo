/** Discord App Directory / Discovery listing for Squimbo. */
export function discordDirectoryUrl(
  clientId: string | undefined,
): string | null {
  if (!clientId) return null;
  return `https://discord.com/discovery/applications/${clientId}`;
}

/**
 * “Play on Discord” CTA: Discord OAuth authorize to add the Activity
 * (client_id only; Discord shows the install / authorize UI).
 */
export function discordPlayUrl(clientId: string | undefined): string | null {
  if (!clientId) return null;
  return `https://discord.com/oauth2/authorize?client_id=${encodeURIComponent(clientId)}`;
}
