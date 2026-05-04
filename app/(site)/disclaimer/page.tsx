import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalH2,
  LegalPageLayout,
  LegalReviewNotice,
} from "@/components/LegalPageLayout";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer | RAKA Marketing",
  description:
    "Important limitations on information provided by RAKA Marketing.",
};

const LAST_UPDATED = "May 5, 2026";

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Disclaimer" lastUpdated={LAST_UPDATED}>
      <LegalReviewNotice>
        <strong className="text-raka-onSurface">Legal review:</strong> This
        disclaimer clarifies the limits of information on this website and in
        preliminary communications. It does not replace tailored legal or
        regulatory advice. Your counsel should align this text with your
        contracts, markets, and risk profile.
      </LegalReviewNotice>

      <section>
        <LegalH2>1. General information only</LegalH2>
        <p className="mt-3">
          The content on this website (including descriptions of services,
          methodologies, and educational material) is provided for general
          informational purposes in a business-to-business context. It is not
          a substitute for independent professional judgment or for advice
          tailored to your specific facts, products, jurisdictions, or
          regulatory filings.
        </p>
      </section>

      <section>
        <LegalH2>2. No guarantee of results</LegalH2>
        <p className="mt-3">
          Past experience, examples, or outcomes referenced on this site — if
          any — are illustrative only and do not guarantee future performance,
          engagement levels, customer response, audience growth, or any
          particular metric. Every brand and creator context differs; results
          depend on many factors outside our control.
        </p>
      </section>

      <section>
        <LegalH2>3. Not legal or regulatory advice</LegalH2>
        <p className="mt-3">
          We are not a law firm or regulatory consultancy. Content on this site
          does not constitute legal advice, regulatory advice, or a
          determination of compliance with advertising standards, consumer
          protection rules, privacy laws, or similar obligations. You remain
          responsible for obtaining advice from qualified legal and regulatory
          professionals and for approvals required in your markets.
        </p>
      </section>

      <section>
        <LegalH2>4. Communication review scope</LegalH2>
        <p className="mt-3">
          A review provided through this site focuses on communication clarity,
          structure, and response strategy. It is not an audit of legal,
          financial, or compliance matters, and does not certify any element
          of your operations, products, or marketing claims.
        </p>
      </section>

      <section>
        <LegalH2>5. Client responsibility</LegalH2>
        <p className="mt-3">
          Clients are responsible for ensuring that their materials, campaigns,
          and engagements comply with applicable laws, industry codes,
          platform policies, and contractual obligations. Any work performed
          under a written engagement is subject to the scope, representations,
          and responsibilities set out in that agreement.
        </p>
      </section>

      <section>
        <LegalH2>6. Third-party content and links</LegalH2>
        <p className="mt-3">
          References or links to third-party websites, tools, or resources are
          provided for convenience. We do not endorse and are not responsible
          for the accuracy, availability, or practices of third parties.
        </p>
      </section>

      <section>
        <LegalH2>7. No professional relationship from browsing alone</LegalH2>
        <p className="mt-3">
          Use of this website, submission of a review request form, or
          attendance at an introductory call does not by itself create a
          consulting, fiduciary, or agency relationship. A professional
          engagement arises only when both parties agree in writing (or as
          otherwise expressly stated in a signed or countersigned agreement).
        </p>
      </section>

      <section>
        <LegalH2>8. Contact</LegalH2>
        <p className="mt-3">
          For questions about how we work or to discuss a potential engagement:{" "}
          <span className="text-raka-primary">{CONTACT_EMAIL}</span>.
        </p>
        <p className="mt-3">
          Related:{" "}
          <Link href="/terms" className="text-raka-primary hover:underline">
            Terms of use
          </Link>
          {" · "}
          <Link href="/privacy" className="text-raka-primary hover:underline">
            Privacy policy
          </Link>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
