import Image from "next/image";

type Variant = "hero" | "header";

export function BrandLockup({
  variant = "hero",
  compact,
}: {
  variant?: Variant;
  /** Narrow header row (e.g. mobile + menu button). */
  compact?: boolean;
}) {
  const isHero = variant === "hero";
  const isCompact = !isHero && compact;
  /** Desktop header: aligned to two-line wordmark. */
  const headerMarkPx = 50;
  /**
   * Narrow header: sized to the two-line wordmark. `text-lg` defaults to a tall line-height;
   * compact uses leading-none so the stack height matches the glyphs, then the mark matches that.
   */
  const compactMarkMaxPx = 27;

  return (
    <div
      className={`flex items-start ${isHero ? "mb-8 gap-4" : isCompact ? "gap-2" : "gap-3"}`}
    >
      <Image
        src="/assets/logo-white.png"
        alt="Raka"
        width={isHero ? 56 : isCompact ? compactMarkMaxPx : headerMarkPx}
        height={isHero ? 56 : isCompact ? compactMarkMaxPx : headerMarkPx}
        className={`shrink-0 object-contain ${
          isHero
            ? "h-14 w-14 md:h-16 md:w-16"
            : isCompact
              ? "h-[25px] w-[25px] min-[400px]:h-[27px] min-[400px]:w-[27px]"
              : "h-[50px] w-[50px]"
        }`}
        sizes={
          isHero
            ? "(min-width: 768px) 64px, 56px"
            : isCompact
              ? "(min-width: 400px) 27px, 25px"
              : "50px"
        }
      />
      <div>
        <p
          className={`font-display font-black tracking-tighter text-white ${
            isHero
              ? "text-4xl md:text-5xl"
              : isCompact
                ? "text-lg leading-none"
                : "text-xl md:text-2xl"
          }`}
        >
          RAKA
        </p>
        <p
          className={`font-helvetica font-normal uppercase tracking-[0.4em] text-neutral-400 ${
            isHero
              ? "mt-0.5 text-[10px] md:text-[11px]"
              : isCompact
                ? "mt-px text-[7px] leading-none"
                : "mt-0.5 text-[8px] md:text-[9px]"
          }`}
        >
          Marketing
        </p>
      </div>
    </div>
  );
}
