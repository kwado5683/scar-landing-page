/*
DESCRIPTION: Enhanced Section component with consistent spacing and mobile optimization.
- Provides uniform spacing across all sections for better visual hierarchy
- Optimized for mobile with proper touch targets and responsive spacing
- Includes accessibility features and smooth transitions
- Matches the glassmorphic design system

PSEUDOCODE:
- Create section container with consistent padding and margins
- Apply responsive spacing that works on all devices
- Add proper focus management for accessibility
- Include smooth transitions for better user experience
*/

import clsx from "clsx";
import { SECTION_INLINE_PAD_CLASS } from "../lib/sectionInlinePad";

export default function Section({
  children,
  className,
  id,
  variant = "default",
  /** When true, cap section width at max-w-6xl (e.g. contact page). Default full viewport width like the navbar. */
  constrained = false,
}) {
  // Define spacing variants for different section types (reduced to half)
  const spacingVariants = {
    default: `${SECTION_INLINE_PAD_CLASS} py-8 sm:py-10 lg:py-12`,
    /** Taller vertical padding for key bands (e.g. #what-we-do); set min-height on the page as needed. */
    tall: `${SECTION_INLINE_PAD_CLASS} py-16 sm:py-20 lg:py-28`,
    hero: `${SECTION_INLINE_PAD_CLASS} py-10 sm:py-12 lg:py-16`,
    compact: `${SECTION_INLINE_PAD_CLASS} py-6 sm:py-8 lg:py-10`,
    // Footer: no section padding — full-bleed background; inner max-w-7xl in SiteFooter supplies px/py.
    footer: "px-0 py-0"
  };

  const widthClass =
    variant === "footer"
      ? "w-full"
      : constrained
        ? "max-w-6xl mx-auto w-full"
        : "w-full max-w-full";

  return (
    <section 
      id={id} 
      className={clsx(
        widthClass,
        spacingVariants[variant],
        "transition-all duration-300 ease-in-out",
        className
      )}
      // Add proper focus management for accessibility
      tabIndex={-1}
    >
      {children}
    </section>
  );
}