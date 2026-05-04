import type { ReactNode } from "react";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="font-display text-3xl font-normal tracking-tight text-raka-onSurface">
        {title}
      </h1>
      <p className="mt-2 text-sm text-raka-onSurfaceMuted">
        Last updated: {lastUpdated}
      </p>
      <div className="mt-10 space-y-8 text-sm leading-[1.7] text-raka-onSurfaceMuted">
        {children}
      </div>
    </article>
  );
}

export function LegalReviewNotice({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-sm border border-raka-primary/25 bg-raka-primary/[0.06] p-4 text-raka-onSurface">
      {children}
    </p>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-lg font-medium text-raka-onSurface">
      {children}
    </h2>
  );
}
