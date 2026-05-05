import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import {
  ABOUT_IMAGE_SRC,
  BRAND_REVIEW_HREF,
  CONTACT_EMAIL,
  CREATOR_REVIEW_HREF,
} from "@/lib/site";

export default function HomePage() {
  return (
    <div className="bg-raka-bg">
      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-raka-bg px-8 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24 lg:pt-28"
      >
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/3 opacity-10">
          <div className="clinical-gradient h-full w-full blur-[120px]" />
        </div>
        <div className="mx-auto max-w-screen-2xl">
          <div className="max-w-4xl">
            <span className="mb-6 block text-xs font-bold uppercase tracking-[0.4em] text-raka-primaryContainer">
              RAKA Marketing
            </span>
            <h1 className="mb-8 font-display text-5xl font-extrabold uppercase leading-[1.1] tracking-tighter text-white md:text-7xl lg:text-8xl">
              Turn online visibility into{" "}
              <span className="text-raka-primaryContainer">stronger response.</span>
            </h1>
            <p className="mb-12 max-w-2xl text-xl font-light leading-relaxed text-neutral-400 md:text-2xl">
              Clear messaging helps customers and audiences understand,
              connect, and take action.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href={BRAND_REVIEW_HREF} className="cta-btn">
                Request a brand review
              </Link>
              <Link href={CREATOR_REVIEW_HREF} className="cta-btn-outline">
                Request a creator review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-24 border-t border-white/5 bg-raka-surfaceLowest px-8 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-20 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-raka-primaryContainer">
                Our expertise
              </span>
              <h2 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tighter text-white md:text-8xl">
                Services
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-xl leading-relaxed text-neutral-300 md:text-2xl">
                Focused reviews and strategic guidance designed to improve how
                brands and creators communicate, connect, and encourage response
                online.
              </p>
            </div>
          </div>

          <div className="mb-16 border border-white/5 bg-raka-surfaceContainer p-10 md:p-16">
            <div className="mb-8">
              <Icon name="hub" className="raka-ms-icon raka-ms-icon--accent" />
            </div>
            <h3 className="mb-6 max-w-5xl font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-5xl">
              Focused reviews and strategic guidance designed to improve how
              brands and creators communicate, connect, and encourage response
              online.
            </h3>
            <p className="mb-12 max-w-3xl text-xl leading-relaxed text-neutral-400">
              The review looks at the parts of your communication that may be
              causing missed response opportunities.
            </p>

            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.3em] text-raka-primaryContainer md:text-base">
              Focus areas
            </h4>
            <ul className="grid grid-cols-1 gap-x-12 gap-y-5 text-base text-neutral-200 sm:grid-cols-2 md:text-lg lg:grid-cols-3">
              {[
                "Messaging clarity",
                "Online presence",
                "Content direction",
                "Customer or audience response",
                "Call-to-actions",
                "Positioning",
                "Missed conversion opportunities",
              ].map((focus) => (
                <li key={focus} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-raka-primaryContainer" />
                  <span>{focus}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href={BRAND_REVIEW_HREF} className="cta-btn">
                Request a brand review
              </Link>
              <Link href={CREATOR_REVIEW_HREF} className="cta-btn-outline">
                Request a creator review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Visibility */}
      <section
        id="about"
        className="scroll-mt-24 bg-raka-bg px-8 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-16 md:gap-24 lg:grid-cols-12">
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 lg:col-span-5">
            <Image
              src={ABOUT_IMAGE_SRC}
              alt="A black ceramic mug stamped with the RAKA monogram, sitting on a clean studio desk next to a Brand Strategy booklet"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
          <div className="lg:col-span-7">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-raka-primaryContainer">
              Beyond Visibility
            </span>
            <h2 className="mb-6 font-display text-4xl font-extrabold leading-none text-white md:text-7xl">
              RAKA Marketing
            </h2>
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-neutral-400">
              <p>
                Many people are visible online but still struggle to turn
                attention into meaningful response.
              </p>
              <p>
                Often, the issue is not reach, but how clearly the message is
                being understood.
              </p>
              <p>
                <strong className="text-white">RAKA Marketing</strong> focuses
                on communication clarity, structure, and response — helping
                brands and creators make their message easier to understand,
                connect with, and act on.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={BRAND_REVIEW_HREF} className="cta-btn">
                Request a brand review
              </Link>
              <Link href={CREATOR_REVIEW_HREF} className="cta-btn-outline">
                Request a creator review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        id="faqs"
        className="scroll-mt-24 border-t border-white/5 bg-raka-surfaceLowest px-8 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-raka-primaryContainer">
              How it works
            </span>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-tight text-white md:text-6xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {[
              {
                q: "Who is this for?",
                a: "Brands, companies, creators, educators, vloggers, and personal brands looking to improve communication and response online.",
              },
              {
                q: "Is this a marketing agency service?",
                a: "No. The focus is on communication clarity, customer or audience understanding, and response strategy.",
              },
              {
                q: "Do you manage social media accounts?",
                a: "The focus is on strategic review and communication direction rather than daily account management.",
              },
              {
                q: "How are reviews done?",
                a: "Reviews are conducted remotely using submitted websites, social media pages, content links, or shared materials.",
              },
              {
                q: "Is the review free?",
                a: "Limited complimentary reviews may be available for selected brands and creators.",
              },
              {
                q: "Which page should I choose?",
                a: "Choose Brands & Companies if you want to improve customer response. Choose Creators if you want to improve audience connection, content direction, or creator positioning.",
              },
            ].map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-white md:text-xl">
                    {item.q}
                  </h3>
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center text-raka-primaryContainer transition-transform group-open:rotate-45">
                    <Icon name="add" className="raka-ms-icon--compact" />
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href={BRAND_REVIEW_HREF} className="cta-btn">
              Request a brand review
            </Link>
            <Link href={CREATOR_REVIEW_HREF} className="cta-btn-outline">
              Request a creator review
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 bg-raka-bg px-8 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-raka-primaryContainer">
            Get in touch
          </span>
          <h2 className="mb-10 font-display text-4xl font-extrabold uppercase leading-tight text-white md:text-6xl">
            RAKA Marketing
          </h2>
          <p className="mb-2 text-lg text-neutral-300">
            Where clarity drives response.
          </p>
          <p className="mb-10 flex items-center justify-center gap-2 text-lg text-neutral-400">
            <Icon name="location_on" className="raka-ms-icon--compact text-raka-primaryContainer" />
            <span>Sydney, Australia</span>
          </p>
          <ul className="mx-auto inline-flex flex-col gap-4 text-base text-neutral-300 md:text-lg">
            <li>
              <span className="mr-2 text-xs font-bold uppercase tracking-[0.25em] text-raka-primaryContainer">
                Email:
              </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-neutral-300 transition-colors hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
