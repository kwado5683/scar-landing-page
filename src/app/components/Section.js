/*
DESCRIPTION: Section component with glassmorphic styling matching the safety app.
- Provides consistent spacing and layout for page sections
- Uses glassmorphic design principles with proper spacing
- Matches the color scheme and styling of the safety application

PSEUDOCODE:
- Create section container with proper spacing
- Apply glassmorphic styling if needed
- Render children content with consistent layout
*/

import clsx from "clsx";

export default function Section({ children, className }) {
  return (
    <section className={clsx("px-4 py-12 md:py-20 max-w-6xl mx-auto", className)}>
      {children}
    </section>
  );
}