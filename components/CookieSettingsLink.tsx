"use client";

import { COOKIE_CONSENT_OPEN_EVENT } from "@/lib/cookie-consent";

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_CONSENT_OPEN_EVENT))}
      className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 transition-colors hover:text-white"
    >
      Cookie settings
    </button>
  );
}
