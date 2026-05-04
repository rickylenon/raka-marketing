import type { Metadata } from "next";
import Link from "next/link";
import { BrandReviewWizard } from "@/components/BrandReviewWizard";
import { CREATOR_REVIEW_HREF, SITE_URL } from "@/lib/site";

const description =
  "Request a brand review. Share a few details so your online presence can be reviewed with the right context.";
const title = "Request a brand review | RAKA Marketing";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/brands" },
  openGraph: {
    title,
    description,
    url: "/brands",
    siteName: "RAKA Marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BrandsPage() {
  console.log("[brands/page] rendering brand review intake");

  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-raka-primary">
        For brands &amp; companies
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold uppercase tracking-tight text-raka-onSurface md:text-6xl">
        Request a brand review
      </h1>
      <p className="mt-6 max-w-3xl text-sm leading-[1.7] text-raka-onSurfaceMuted md:text-base">
        Share a few details below so your online presence can be reviewed with
        the right context.
      </p>

      <div className="mt-12">
        <BrandReviewWizard />
      </div>

      <p className="mt-12 text-sm leading-relaxed text-raka-onSurfaceMuted">
        Are you a content creator instead?{" "}
        <Link
          href={CREATOR_REVIEW_HREF}
          className="text-raka-primary underline-offset-4 hover:underline"
        >
          Request a creator review
        </Link>
        .
      </p>
    </div>
  );
}
