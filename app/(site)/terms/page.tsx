import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalH2,
  LegalPageLayout,
  LegalReviewNotice,
} from "@/components/LegalPageLayout";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use | RAKA Marketing",
  description:
    "Terms governing use of the RAKA Marketing website and related interactions.",
};

const LAST_UPDATED = "May 5, 2026";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of use" lastUpdated={LAST_UPDATED}>
      <LegalReviewNotice>
        <strong className="text-raka-onSurface">Legal review:</strong> These
        terms govern use of this website and general interactions. Paid
        consulting engagements should be governed by separate written
        agreements (such as a master services agreement and statements of
        work). Have final terms approved by legal counsel, especially regarding
        liability and governing law.
      </LegalReviewNotice>

      <section>
        <LegalH2>1. Agreement to these terms</LegalH2>
        <p className="mt-3">
          These Terms of Use (&quot;Terms&quot;) govern your access to and use
          of the website operated by RAKA Marketing (&quot;RAKA,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), including any
          content and forms made available through the site.
        </p>
        <p className="mt-3">
          By accessing or using the site, you agree to these Terms. If you do
          not agree, you must not use the site. If you are using the site on
          behalf of a company or other organization, you represent that you
          have authority to bind that entity to these Terms.
        </p>
      </section>

      <section>
        <LegalH2>2. Website terms vs consulting agreements</LegalH2>
        <p className="mt-3">
          The site describes communication review and strategy services. A
          professional engagement, deliverables, fees, confidentiality,
          intellectual property, and liability for services are governed by
          separate written contracts (for example, a master services agreement,
          proposal, or statement of work) agreed between you and RAKA. If
          there is any conflict between these Terms and a signed services
          agreement, the services agreement prevails for that engagement.
        </p>
      </section>

      <section>
        <LegalH2>3. No marketing, legal, or regulatory advice</LegalH2>
        <p className="mt-3">
          Nothing on this website constitutes legal advice, regulatory advice,
          or a recommendation regarding compliance with advertising,
          consumer-protection, or privacy laws in any jurisdiction. Marketing
          and communication strategies must be reviewed by your qualified
          internal and external advisors against your products, markets, and
          obligations. See also our{" "}
          <Link href="/disclaimer" className="text-raka-primary hover:underline">
            Disclaimer
          </Link>
          .
        </p>
      </section>

      <section>
        <LegalH2>4. Intellectual property</LegalH2>
        <p className="mt-3">
          Unless otherwise indicated, the site and its content — including
          text, graphics, logos, layout, and design — are owned by RAKA or its
          licensors and are protected by intellectual property laws. You may
          view and print a reasonable number of copies for your internal
          business use in evaluating whether to engage RAKA. You may not copy,
          modify, distribute, sell, lease, scrape, reverse engineer, or create
          derivative works from the site or its content without our prior
          written consent, except as permitted by applicable law.
        </p>
      </section>

      <section>
        <LegalH2>5. Acceptable use</LegalH2>
        <p className="mt-3">You agree not to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Use the site in any way that violates applicable law or infringes
            others&apos; rights;
          </li>
          <li>
            Attempt to gain unauthorized access to our systems, accounts, or
            data;
          </li>
          <li>
            Interfere with or disrupt the site, servers, or networks (including
            by transmitting malware or conducting denial-of-service attacks);
          </li>
          <li>
            Use automated means to access the site in a manner that imposes an
            unreasonable load or bypasses technical restrictions;
          </li>
          <li>
            Harvest or collect personal information about others without
            appropriate authority.
          </li>
        </ul>
        <p className="mt-3">
          We may suspend or terminate access if we reasonably believe you have
          violated these Terms or pose a risk to the site or other users.
        </p>
      </section>

      <section>
        <LegalH2>6. Third-party links and services</LegalH2>
        <p className="mt-3">
          The site may link to third-party tools (such as form storage or
          payment providers). Those services are governed by their own terms
          and privacy policies. We are not responsible for third-party content,
          products, or practices.
        </p>
      </section>

      <section>
        <LegalH2>7. Disclaimer of warranties</LegalH2>
        <p className="mt-3">
          The site and all content are provided on an &quot;as is&quot; and
          &quot;as available&quot; basis, without warranties of any kind,
          whether express, implied, or statutory, including implied warranties
          of merchantability, fitness for a particular purpose, title, and
          non-infringement, to the fullest extent permitted by law.
        </p>
        <p className="mt-3">
          We do not warrant that the site will be uninterrupted, error-free, or
          free of harmful components, or that any content is complete, current,
          or suitable for your specific situation.
        </p>
      </section>

      <section>
        <LegalH2>8. Limitation of liability</LegalH2>
        <p className="mt-3">
          To the maximum extent permitted by applicable law, RAKA and its
          directors, officers, employees, and contractors shall not be liable
          for any indirect, incidental, special, consequential, exemplary, or
          punitive damages, or for loss of profits, revenue, data, goodwill,
          or business opportunities, arising out of or related to your use of
          or inability to use the site, whether based on contract, tort
          (including negligence), strict liability, or any other theory, even
          if we have been advised of the possibility of such damages.
        </p>
        <p className="mt-3">
          To the maximum extent permitted by applicable law, our aggregate
          liability for any claims arising out of or related to the site (other
          than liability that cannot be excluded by law) shall not exceed the
          greater of (a) one hundred Australian dollars (AUD $100) or (b) the
          amounts you paid to RAKA specifically for website-related services in
          the twelve (12) months before the claim (if any). Some jurisdictions
          do not allow certain limitations; in those jurisdictions, our
          liability is limited to the fullest extent permitted.
        </p>
      </section>

      <section>
        <LegalH2>9. Indemnity</LegalH2>
        <p className="mt-3">
          To the extent permitted by law, you agree to indemnify and hold
          harmless RAKA and its personnel from and against any claims, damages,
          losses, liabilities, costs, and expenses (including reasonable legal
          fees) arising from your misuse of the site, violation of these Terms,
          or infringement of third-party rights.
        </p>
      </section>

      <section>
        <LegalH2>10. Governing law and disputes</LegalH2>
        <p className="mt-3">
          These Terms are governed by the laws of New South Wales, Australia,
          without regard to conflict-of-law principles. Subject to mandatory
          consumer or other protections in your jurisdiction, you agree that
          the courts of New South Wales, Australia, have non-exclusive
          jurisdiction over disputes arising from these Terms or your use of
          the site.
        </p>
      </section>

      <section>
        <LegalH2>11. Changes</LegalH2>
        <p className="mt-3">
          We may modify these Terms at any time by posting the updated version
          on this page and updating the &quot;Last updated&quot; date. Your
          continued use of the site after changes become effective constitutes
          acceptance of the revised Terms, except where applicable law requires
          additional notice or consent.
        </p>
      </section>

      <section>
        <LegalH2>12. General</LegalH2>
        <p className="mt-3">
          If any provision of these Terms is held invalid or unenforceable, the
          remaining provisions remain in full force. Failure to enforce a
          provision is not a waiver. These Terms constitute the entire agreement
          between you and RAKA regarding use of the site (excluding separate
          services agreements).
        </p>
      </section>

      <section>
        <LegalH2>13. Contact</LegalH2>
        <p className="mt-3">
          Questions about these Terms:{" "}
          <span className="text-raka-primary">{CONTACT_EMAIL}</span>.
        </p>
        <p className="mt-3">
          Related:{" "}
          <Link href="/privacy" className="text-raka-primary hover:underline">
            Privacy policy
          </Link>
          {" · "}
          <Link href="/disclaimer" className="text-raka-primary hover:underline">
            Disclaimer
          </Link>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
