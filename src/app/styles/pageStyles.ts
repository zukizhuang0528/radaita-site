/**
 * Shared hero section styles — applied to the first-screen hero of all sub-pages.
 * Reference: PlatformArchitecture first-screen layout.
 */

/** Outer section wrapper: spacing, overflow, bottom border.
 *  All pages share the `page-hero` class; use unique `id` per page for individual targeting. */
export const heroSection =
  "page-hero relative pt-[80px] lg:pt-[128px] pb-[80px] lg:pb-[128px] overflow-hidden border-b border-[#E8E7EF]/10";

/** Inner max-width container: two-column layout. Fixed height on desktop = right panel height. */
export const heroContainer =
  "w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[48px] items-center lg:h-[600px]";

/** Left text column — stretches to full container height on desktop so mt-auto CTA row pins to bottom */
export const heroLeftCol = "lg:w-[60%] flex flex-col justify-start lg:self-stretch z-10";

/** Right visual panel: fixed height, rounded card with purple glow */
export const heroRightPanel =
  "lg:w-1/2 w-full relative z-10 h-[450px] lg:h-[600px] rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 bg-[#161616] shadow-[0_0_40px_rgba(139,92,246,0.15)]";

/** CTA button row — always horizontal, never wraps, pinned to bottom of left col */
export const heroCTARow = "flex flex-row flex-nowrap gap-[16px] items-center mt-auto";

/** Hero background image — 450×648 crop, fills right panel, subtle overlay blend */
export const heroImage =
  "absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-50 mix-blend-screen";
