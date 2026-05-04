"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  COOKIE_CONSENT_OPEN_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  type CookieConsentValue,
  clearCookieConsentCookie,
  readCookieConsentFromDocument,
  writeCookieConsentCookie,
} from "@/lib/cookie-consent";

function readStoredConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const ls = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (ls === "accepted" || ls === "essential") return ls;
  } catch {
    /* ignore */
  }
  return readCookieConsentFromDocument();
}

function persistConsent(value: CookieConsentValue) {
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  } catch {
    /* ignore */
  }
  writeCookieConsentCookie(value);
  window.dispatchEvent(
    new CustomEvent<CookieConsentValue>("raka-cookie-consent", { detail: value }),
  );
}

export function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const refreshOpen = useCallback(() => {
    setOpen(readStoredConsent() === null);
  }, []);

  useEffect(() => {
    setMounted(true);
    refreshOpen();
  }, [refreshOpen]);

  useEffect(() => {
    const onOpen = () => {
      clearCookieConsentCookie();
      try {
        localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
      } catch {
        /* ignore */
      }
      setOpen(true);
    };
    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, onOpen);
  }, []);

  const choose = (value: CookieConsentValue) => {
    persistConsent(value);
    setOpen(false);
  };

  if (!mounted || !open) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-black/90 px-6 py-5 shadow-[0_-8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl md:px-10"
    >
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="min-w-0 flex-1">
          <p
            id="cookie-consent-title"
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white"
          >
            Cookies & privacy
          </p>
          <p
            id="cookie-consent-desc"
            className="mt-2 text-sm leading-relaxed text-neutral-400"
          >
            We use cookies where needed for the site to work and, if you allow
            it, to understand how visitors use our pages. See our{" "}
            <Link
              href="/privacy"
              className="text-raka-primary underline-offset-4 hover:text-raka-primaryContainer hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="border border-white/20 px-6 py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="bg-raka-primaryContainer px-6 py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
