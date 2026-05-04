/** Stored when the visitor chooses how cookies may be used. */
export type CookieConsentValue = "accepted" | "essential";

export const COOKIE_CONSENT_STORAGE_KEY = "raka-cookie-consent";
export const COOKIE_CONSENT_COOKIE_NAME = "raka_cookie_consent";

const COOKIE_MAX_AGE_SEC = 365 * 24 * 60 * 60;

export function parseCookieConsent(
  raw: string | null | undefined,
): CookieConsentValue | null {
  if (raw === "accepted" || raw === "essential") return raw;
  return null;
}

export function readCookieConsentFromDocument(): CookieConsentValue | null {
  if (typeof document === "undefined") return null;
  const prefix = `${COOKIE_CONSENT_COOKIE_NAME}=`;
  for (const part of document.cookie.split("; ")) {
    if (part.startsWith(prefix)) {
      const raw = part.slice(prefix.length);
      return parseCookieConsent(decodeURIComponent(raw));
    }
  }
  return null;
}

export function writeCookieConsentCookie(value: CookieConsentValue): void {
  if (typeof document === "undefined") return;
  const secure = typeof window !== "undefined" && window.location.protocol === "https:";
  const parts = [
    `${COOKIE_CONSENT_COOKIE_NAME}=${encodeURIComponent(value)}`,
    "path=/",
    `max-age=${COOKIE_MAX_AGE_SEC}`,
    "SameSite=Lax",
  ];
  if (secure) parts.push("Secure");
  document.cookie = parts.join("; ");
}

export function clearCookieConsentCookie(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=;path=/;max-age=0`;
}

export const COOKIE_CONSENT_OPEN_EVENT = "raka-cookie-consent-open";
