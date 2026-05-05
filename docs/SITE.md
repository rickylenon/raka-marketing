# RAKA Marketing Site (getraka.co)

This is the Next.js App Router site for **RAKA Marketing** — communication clarity, structure, and response strategy for brands and creators.

It is the main marketing site (`getraka.co`). The healthcare-marketing sub-site lives at `health.getraka.co` in the sibling folder `/Users/rickylenon/PROJECTX/raka/health.getraka.co/`.

## Tech Stack

- Next.js 15 with the App Router
- React 19
- Tailwind CSS 3.4
- TypeScript
- Vercel-ready deployment

## Run Locally (this Mac)

From `/Users/rickylenon/PROJECTX/raka/getraka.co/`:

```bash
npm install
npm run dev
```

If `npm` is not on PATH, the bundled `run-dev.sh` will install a portable Node 22 under `~/.local/share/raka-node/` and then run `npm install && npm run dev`:

```bash
bash run-dev.sh
```

The local site runs at `http://localhost:3000`.

## Main Routes

- `/` — Home page with hero (HL: "Turn online visibility into stronger response.", SH: "Clear messaging helps customers and audiences understand, connect, and take action."), audience split (Brands / Creators), services, Beyond Visibility / RAKA Marketing section, FAQs, and contact sections.
- `/brands` — Brand review request flow with a multi-step intake form (`/request-brand-review` → 301 redirects here).
- `/creators` — Creator review request flow with a multi-step intake form (`/request-creator-review` → 301 redirects here).
- `/privacy` — Privacy policy.
- `/terms` — Terms of use.
- `/disclaimer` — Disclaimer.

The main navigation is defined in `components/SiteHeader.tsx`. The home page sections are inline in `app/(site)/page.tsx`.

## Key Configuration

Site-wide links and business constants live in `lib/site.ts`:

- `CONTACT_EMAIL` — public inquiry email (`consult@getraka.co`).
- `BRAND_REVIEW_HREF` — brand review intake (`/brands`).
- `CREATOR_REVIEW_HREF` — creator review intake (`/creators`).
- `ABOUT_IMAGE_SRC` — about-section image (the RAKA monogram mug).
- `HEALTH_SITE_URL` — link to the healthcare sub-site.

## Forms And Data Flow

There is no backend database. Brand and creator review request forms are saved to Google Sheets through the server-side App Router route handler at `app/api/form-submissions/route.ts`.

- `components/BrandReviewWizard.tsx` collects brand review answers client-side, posts them to `/api/form-submissions` with `formType: "Brand Review request"`, and shows the auto-reply after the Google Sheets append succeeds.
- `components/CreatorReviewWizard.tsx` collects creator review answers client-side, posts them to `/api/form-submissions` with `formType: "Creator Review request"`, and shows the auto-reply after the Google Sheets append succeeds.
- `components/CookieConsentBanner.tsx` stores cookie consent in the browser.

The API route writes brand submissions to a `Brand Review Requests` tab and creator submissions to a `Creator Review Requests` tab. Missing tabs are auto-created. Headers are auto-synced. Each tab has its own column ordering, defined in `BRAND_HEADERS` / `CREATOR_HEADERS` in `app/api/form-submissions/route.ts`.

### Environment Variables

Google Sheets service account settings are server-only. Copy `.env.example` to `.env.local`, set the service account email/private key/spreadsheet id, enable the Google Sheets API in Google Cloud, and share the spreadsheet with the service account email.

```bash
GOOGLE_SHEETS_CLIENT_EMAIL=
GOOGLE_SHEETS_PRIVATE_KEY=
GOOGLE_SHEETS_SPREADSHEET_ID=
GOOGLE_SHEETS_BRAND_REVIEW_SHEET_NAME=Brand Review Requests
GOOGLE_SHEETS_CREATOR_REVIEW_SHEET_NAME=Creator Review Requests
GOOGLE_SHEETS_DEFAULT_SHEET_NAME=Website Submissions
```

Console / `print` logs around form submission are kept in the wizard components and the API route so data movement can be traced.

## Assets Used By The Live Site

Deploy-served static assets live in `public/assets/`. Current live references are:

- `/assets/logo-white.png` — wordmark mark used by `components/BrandLockup.tsx`.
- `/assets/raka-mug.png` — about-section image of the black ceramic mug with the RAKA monogram. Referenced by `lib/site.ts` (`ABOUT_IMAGE_SRC`). The original is at `files/profile image.png`.

## The `files/` Folder

The `files/` folder holds source material that is *not* served at runtime: original PDFs, raw images, and design references.

`.vercelignore` excludes `files/` from deployment to keep upload size small. Do not exclude `public/assets/`.

## Deployment Notes

- Vercel should build with `npm run build`.
- `next.config.ts` pins the Turbopack root and adds redirects:
  - `/request-brand-review` → `/brands`
  - `/request-creator-review` → `/creators`
- Form submissions are stored in Google Sheets using `GOOGLE_SHEETS_SPREADSHEET_ID`.

## Content Source

Copy on this site is taken from `files/Raka Marketing Website Content (Brands & Creators).pdf` (sections HOME, REQUEST A BRAND REVIEW, REQUEST A CREATOR REVIEW, SERVICES, ABOUT, FAQS, CONTACT). The "remove linkedin" directive from that document has been honoured — there are no LinkedIn links in the contact section.
