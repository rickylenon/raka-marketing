import Link from "next/link";
import { CookieSettingsLink } from "@/components/CookieSettingsLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-raka-surfaceLowest px-8 pb-12 pt-12 md:px-12">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 md:text-left">
          © {new Date().getFullYear()} RAKA Marketing.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <Link
            href="/privacy"
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
          <CookieSettingsLink />
          <Link
            href="/terms"
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 transition-colors hover:text-white"
          >
            Terms of Service
          </Link>
          <Link
            href="/disclaimer"
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 transition-colors hover:text-white"
          >
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
