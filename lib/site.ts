/** Canonical site origin for metadata and Open Graph (override in env for previews). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://getraka.co"
).replace(/\/$/, "");

/** Brand review intake form. */
export const BRAND_REVIEW_HREF = "/brands";

/** Creator review intake form. */
export const CREATOR_REVIEW_HREF = "/creators";

/** Public inquiries and review follow-up. */
export const CONTACT_EMAIL = "consult@getraka.co";

/** Healthcare sub-site link (optional cross-promotion). */
export const HEALTH_SITE_URL = "https://health.getraka.co";

/** About-section portrait — black mug with the RAKA monogram. */
export const ABOUT_IMAGE_SRC = "/assets/raka-mug.png";
