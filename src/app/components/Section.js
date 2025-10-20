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

export default function Section({ children, className, id, variant = "default" }) {
  // Define spacing variants for different section types (reduced to half)
  const spacingVariants = {
    default: "px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12",
    hero: "px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16",
    compact: "px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10",
    footer: "px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
  };

  return (
    <section 
      id={id} 
      className={clsx(
        "max-w-6xl mx-auto",
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