/**
 * Set `NEXT_PUBLIC_GOOGLE_PLAY_APP_ID` in `.env.local` (e.g. com.company.app) for a direct store listing.
 * Used by JSON-LD, download buttons, and structured data when set.
 */
export function googlePlayListingUrl(): string | undefined {
    const id = process.env.NEXT_PUBLIC_GOOGLE_PLAY_APP_ID?.trim();
    if (!id) return undefined;
    return `https://play.google.com/store/apps/details?id=${encodeURIComponent(id)}`;
}

/** Link target for UI: listing URL when configured, otherwise Play Store home. */
export function googlePlayHref(): string {
    return googlePlayListingUrl() ?? "https://play.google.com/store";
}
