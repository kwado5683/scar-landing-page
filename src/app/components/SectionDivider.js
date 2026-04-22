/*
DESCRIPTION: Visual divider between page sections.
- Provides a clear demarcation so each section is perceived as its own band
- Uses a thin gradient rule with a centered glowing accent badge
- Matches the dark / glassmorphic theme used site-wide
- Purely decorative; hidden from assistive tech

PSEUDOCODE:
- Render a full-width wrapper with vertical breathing room
- Draw a horizontal gradient line fading in/out at the edges
- Overlay a centered small diamond/dot with a soft glow as an accent
*/

import clsx from "clsx";

export default function SectionDivider({ className, variant = "line" }) {
  if (variant === "wave") {
    return (
      <div
        className={clsx("relative w-full overflow-hidden", className)}
        aria-hidden
      >
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="block w-full h-[40px] sm:h-[60px]"
        >
          <defs>
            <linearGradient id="sd-wave-gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30"
            fill="none"
            stroke="url(#sd-wave-gradient)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "relative w-full py-10 sm:py-14",
        className
      )}
      aria-hidden
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="block h-2 w-2 rotate-45 rounded-[2px] bg-blue-400/80 shadow-[0_0_14px_2px_rgba(96,165,250,0.55)]" />
        </div>
      </div>
    </div>
  );
}
