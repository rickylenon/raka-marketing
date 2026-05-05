import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalH2,
  LegalPageLayout,
  LegalReviewNotice,
} from "@/components/LegalPageLayout";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy | RAKA Marketing",
  description:
    "How RAKA Marketing collects, uses, and protects personal information.",
};

const LAST_UPDATED = "May 5, 2026";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy policy" lastUpdated={LAST_UPDATED}>
      <LegalReviewNotice>
        <strong className="text-raka-onSurface">Legal review:</strong> This
        policy is intended to reflect typical practices for a B2B marketing
        consultancy. You should have it reviewed and adapted by qualified legal
        counsel before relying on it, particularly if you have material traffic
        from the European Economic Area, United Kingdom, or other jurisdictions
        with specific privacy regimes.
      </LegalReviewNotice>

      <section>
        <LegalH2>1. Introduction</LegalH2>
        <p className="mt-3">
          RAKA Marketing (&quot;RAKA,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) respects your privacy. This Privacy Policy explains
          how we collect, use, disclose, store, and protect personal information
          when you visit our website, contact us, request a review, or otherwise
          interact with us in a business context.
        </p>
        <p className="mt-3">
          By using our website or providing information to us, you acknowledge
          that you have read this policy. If you do not agree, please do not use
          the site or submit personal information.
        </p>
      </section>

      <section>
        <LegalH2>2. Who we are</LegalH2>
        <p className="mt-3">
          The data controller for personal information processed through this
          website and general business inquiries is{" "}
          <strong className="text-raka-onSurface">RAKA Marketing</strong>,
          operating from Sydney, Australia.
        </p>
        <p className="mt-3">
          <strong className="text-raka-onSurface">Contact:</strong>{" "}
          <span className="text-raka-primary">{CONTACT_EMAIL}</span>
        </p>
      </section>

      <section>
        <LegalH2>3. Information we collect</LegalH2>
        <p className="mt-3">
          We may collect the following categories of information, depending on
          how you interact with us:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-raka-onSurface">Identity and contact:</strong>{" "}
            name, brand or company name, job role (brand review form), email address, phone number,
            country or time zone, and similar details you provide via the brand
            or creator review request forms.
          </li>
          <li>
            <strong className="text-raka-onSurface">Review materials:</strong>{" "}
            website addresses, social media handles, and other public links you
            share so we can review your online presence and communication.
          </li>
          <li>
            <strong className="text-raka-onSurface">Communication content:</strong>{" "}
            messages, attachments, and notes you send in connection with
            inquiries, reviews, or engagements.
          </li>
          <li>
            <strong className="text-raka-onSurface">Technical and usage:</strong>{" "}
            IP address, browser type, device identifiers, general location
            derived from IP, pages viewed, referring URLs, and timestamps,
            collected through hosting, security, and (if you consent) analytics
            tools.
          </li>
        </ul>
      </section>

      <section>
        <LegalH2>4. Cookies and similar technologies</LegalH2>
        <p className="mt-3">
          We use cookies and similar technologies where necessary for the site
          to function and, if you allow, to understand how visitors use our
          pages. When you first visit, you can choose{" "}
          <strong className="text-raka-onSurface">Essential only</strong> or{" "}
          <strong className="text-raka-onSurface">Accept all</strong> via our
          cookie banner. You can change your choice at any time using{" "}
          <strong className="text-raka-onSurface">Cookie settings</strong> in the
          site footer.
        </p>
      </section>

      <section>
        <LegalH2>5. How we use information</LegalH2>
        <p className="mt-3">We use personal information to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Respond to inquiries and provide information about our services;</li>
          <li>
            Conduct brand and creator communication reviews based on the
            materials and links you submit;
          </li>
          <li>
            Send administrative messages, confirmations, and follow-up
            communications;
          </li>
          <li>
            Operate, secure, and improve our website and internal business
            processes;
          </li>
          <li>
            Comply with legal obligations and defend our legal rights where
            permitted.
          </li>
        </ul>
        <p className="mt-3">
          Where required by law, we rely on appropriate legal bases such as your
          consent (e.g. non-essential cookies), performance of a contract,
          legitimate interests (e.g. operating a professional services
          business, website security, and limited analytics compatible with
          your choices), or legal obligation.
        </p>
        <p className="mt-3">
          We do <strong className="text-raka-onSurface">not</strong> sell your
          personal information.
        </p>
      </section>

      <section>
        <LegalH2>6. Disclosure and third-party services</LegalH2>
        <p className="mt-3">
          We may share personal information with service providers that assist
          us, such as:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-raka-onSurface">Website hosting</strong> —{" "}
            e.g. Vercel (
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-raka-primary hover:underline"
            >
              privacy policy
            </a>
            );
          </li>
          <li>
            <strong className="text-raka-onSurface">Form storage</strong> —
            Google Workspace / Google Sheets (
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-raka-primary hover:underline"
            >
              privacy policy
            </a>
            ) where review request submissions are stored;
          </li>
          <li>
            <strong className="text-raka-onSurface">Email and productivity</strong>{" "}
            tools we use to communicate and run the business.
          </li>
        </ul>
        <p className="mt-3">
          These providers process data on our instructions or their own terms,
          as described in their policies. We may also disclose information if
          required by law, court order, or competent authority, or to protect
          the rights, safety, and security of RAKA, our clients, and others.
        </p>
      </section>

      <section>
        <LegalH2>7. International transfers</LegalH2>
        <p className="mt-3">
          We and our service providers may process information in Australia,
          the United States, the European Union, and other countries where
          providers maintain infrastructure. When personal information is
          transferred across borders, we take steps consistent with applicable
          law (such as appropriate contractual safeguards where required).
        </p>
      </section>

      <section>
        <LegalH2>8. Retention</LegalH2>
        <p className="mt-3">
          We retain personal information only as long as necessary for the
          purposes described in this policy, including to manage client
          relationships, meet legal, tax, and accounting requirements, and
          resolve disputes. Retention periods vary depending on the type of
          data and the nature of our relationship with you.
        </p>
      </section>

      <section>
        <LegalH2>9. Security</LegalH2>
        <p className="mt-3">
          We implement reasonable technical and organizational measures designed
          to protect personal information against unauthorized access, loss, or
          misuse. No method of transmission over the internet or electronic
          storage is completely secure; we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <LegalH2>10. Your rights</LegalH2>
        <p className="mt-3">
          Depending on your location, you may have rights to access, correct,
          update, or delete certain personal information; restrict or object to
          certain processing; withdraw consent where processing is based on
          consent; or request portability of information you provided. You may
          also have the right to lodge a complaint with a supervisory authority.
        </p>
        <p className="mt-3">
          To exercise these rights, contact us at{" "}
          <span className="text-raka-primary">{CONTACT_EMAIL}</span>. We may
          need to verify your request in line with applicable law.
        </p>
      </section>

      <section>
        <LegalH2>11. Children</LegalH2>
        <p className="mt-3">
          Our website and services are directed at business professionals,
          brands, and creators. We do not knowingly collect personal information
          from children. If you believe we have collected information from a
          child, please contact us and we will take appropriate steps to delete
          it.
        </p>
      </section>

      <section>
        <LegalH2>12. Changes to this policy</LegalH2>
        <p className="mt-3">
          We may update this Privacy Policy from time to time. When we do, we
          will revise the &quot;Last updated&quot; date at the top of this page.
          Material changes may be communicated through the website or by email
          where appropriate.
        </p>
      </section>

      <section>
        <LegalH2>13. Contact</LegalH2>
        <p className="mt-3">
          Questions about this Privacy Policy or our privacy practices:{" "}
          <span className="text-raka-primary">{CONTACT_EMAIL}</span>.
        </p>
        <p className="mt-3">
          Related:{" "}
          <Link href="/terms" className="text-raka-primary hover:underline">
            Terms of use
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
