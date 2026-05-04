import type { Metadata } from "next";
import Link from "next/link";
import { CreatorReviewWizard } from "@/components/CreatorReviewWizard";
import { BRAND_REVIEW_HREF, SITE_URL } from "@/lib/site";

const description =
  "Request a creator review. Share a few details so your content and online presence can be reviewed with the right context.";
const title = "Request a creator review | RAKA Marketing";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/creators" },
  openGraph: {
    title,
    description,
    url: "/creators",
    siteName: "RAKA Marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function CreatorsPage() {
  console.log("[creators/page] rendering creator review intake");

  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-raka-primary">
        For creators
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold uppercase tracking-tight text-raka-onSurface md:text-6xl">
        Request a creator review
      </h1>
      <p className="mt-6 max-w-3xl text-sm leading-[1.7] text-raka-onSurfaceMuted md:text-base">
        Share a few details below so your content and online presence can be
        reviewed with the right context.
      </p>

      <div className="mt-12">
        <CreatorReviewWizard />
      </div>

      <p className="mt-12 text-sm leading-relaxed text-raka-onSurfaceMuted">
        Run a brand or company instead?{" "}
        <Link
          href={BRAND_REVIEW_HREF}
          className="text-raka-primary underline-offset-4 hover:underline"
        >
          Request a brand review
        </Link>
        .
      </p>
    </div>
  );
}
