"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BrandLockup } from "@/components/BrandLockup";
import { BRAND_REVIEW_HREF, CREATOR_REVIEW_HREF } from "@/lib/site";

const navItems = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#services", label: "Services", id: "services" },
  { href: "/#about", label: "Beyond Visibility", id: "about" },
  { href: "/#faqs", label: "FAQs", id: "faqs" },
  { href: "/#contact", label: "Contact", id: "contact" },
  { href: BRAND_REVIEW_HREF, label: "Brands", id: "brands", standalone: true },
  {
    href: CREATOR_REVIEW_HREF,
    label: "Creators",
    id: "creators",
    standalone: true,
  },
] as const;

const sectionItems = navItems.filter((i) => !("standalone" in i && i.standalone));

function readActiveSectionId(): string {
  const header = document.querySelector("header");
  const offset = (header?.getBoundingClientRect().height ?? 88) + 12;
  let active = "home";
  for (const item of sectionItems) {
    const el = document.getElementById(item.id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top;
    if (top <= offset) active = item.id;
  }
  return active;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>("home");

  const syncActiveFromScroll = useCallback(() => {
    if (pathname !== "/") return;
    setActiveSectionId(readActiveSectionId());
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSectionId("");
      return;
    }

    syncActiveFromScroll();
    const raf = requestAnimationFrame(() => syncActiveFromScroll());

    window.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    window.addEventListener("resize", syncActiveFromScroll);
    window.addEventListener("hashchange", syncActiveFromScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", syncActiveFromScroll);
      window.removeEventListener("resize", syncActiveFromScroll);
      window.removeEventListener("hashchange", syncActiveFromScroll);
    };
  }, [pathname, syncActiveFromScroll]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isPathActive = (href: string) => {
    if (!pathname) return false;
    if (href === BRAND_REVIEW_HREF) return pathname.startsWith("/brands");
    if (href === CREATOR_REVIEW_HREF) return pathname.startsWith("/creators");
    return false;
  };

  return (
    <header className="glass-nav fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10 lg:py-5 xl:px-12">
        {/* Desktop: logo left, nav right (no trailing CTA in bar) */}
        <div className="hidden w-full min-w-0 items-center justify-between gap-4 lg:flex xl:gap-6">
          <div className="flex min-w-0 justify-start">
            <Link
              href="/#home"
              className="shrink-0"
              aria-label="Raka home"
              onClick={() => {
                setMenuOpen(false);
                if (pathname === "/") setActiveSectionId("home");
              }}
            >
              <BrandLockup variant="header" />
            </Link>
          </div>

          <nav
            className="flex min-w-0 shrink-0 flex-nowrap items-center justify-end gap-x-1.5 text-xs font-medium uppercase leading-tight tracking-[0.1em] text-neutral-400 lg:gap-x-2 xl:gap-x-4 xl:text-sm xl:tracking-[0.12em] 2xl:gap-x-6 2xl:text-base 2xl:tracking-[0.14em]"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const standalone = "standalone" in item && item.standalone;
              const isActive = standalone
                ? isPathActive(item.href)
                : pathname === "/" && activeSectionId === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`shrink-0 whitespace-nowrap transition-colors hover:text-white ${
                    isActive
                      ? "border-b-2 border-raka-primaryContainer pb-0.5 text-raka-primaryContainer"
                      : ""
                  }`}
                  onClick={() => {
                    if (!standalone) setActiveSectionId(item.id);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile + tablet (&lt; lg) */}
        <div className="flex w-full min-w-0 items-center justify-between gap-3 lg:hidden">
          <Link
            href="/#home"
            className="min-w-0 shrink"
            aria-label="Raka home"
            onClick={() => {
              setMenuOpen(false);
              if (pathname === "/") setActiveSectionId("home");
            }}
          >
            <BrandLockup variant="header" compact />
          </Link>
          <button
            type="button"
            className="shrink-0 rounded-sm border border-white/15 px-3 py-2 text-xs font-medium uppercase tracking-wider text-raka-onSurface transition-colors hover:border-white/30 hover:bg-white/5"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
        >
          <nav
            className="mx-auto flex max-h-[min(70vh,calc(100dvh-5rem))] max-w-screen-2xl flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6 lg:px-10"
            aria-label="Primary mobile"
          >
            {navItems.map((item) => {
              const standalone = "standalone" in item && item.standalone;
              const isActive = standalone
                ? isPathActive(item.href)
                : pathname === "/" && activeSectionId === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`border-l-2 py-2.5 pl-3 text-base font-medium uppercase tracking-wide transition-colors ${
                    isActive
                      ? "border-raka-primaryContainer text-raka-primaryContainer"
                      : "border-transparent text-neutral-300 hover:text-white"
                  }`}
                  onClick={() => {
                    if (!standalone) setActiveSectionId(item.id);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href={BRAND_REVIEW_HREF}
                className="cta-btn block w-full"
                onClick={() => setMenuOpen(false)}
              >
                Request a brand review
              </Link>
              <Link
                href={CREATOR_REVIEW_HREF}
                className="cta-btn-outline block w-full"
                onClick={() => setMenuOpen(false)}
              >
                Request a creator review
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
