/*
DESCRIPTION: Feature card component with glassmorphic styling matching the safety app.
- Displays feature title, icon, and description
- Uses glassmorphic design with backdrop blur and transparency
- Matches the color scheme and styling of the safety application

PSEUDOCODE:
- Create glassmorphic card container with backdrop blur
- Display icon if provided
- Show feature title with proper typography
- Display feature description with muted text color
- Apply hover effects for better user interaction
*/

function linkPropsForHref(href) {
  if (!href || href === "#") {
    return { href: href ?? "#" };
  }
  if (/^https?:\/\//i.test(href)) {
    return { href, target: "_blank", rel: "noopener noreferrer" };
  }
  return { href };
}

export function FeatureCard({
  title,
  children,
  icon,
  highlightColor = "blue",
  ctaLabel,
  ctaHref,
  /** Public URL path (e.g. /images/foo.jpg). When set, image is always visible behind content at low opacity. */
  cardBackgroundImage,
  /** `stacked`: full-opacity media on top, copy below, single card link (companies grid). */
  variant = "default",
}) {
  const colorMap = {
    blue: {
      highlight: "bg-blue-500",
      icon: "text-blue-400",
      hoverIcon: "group-hover:text-blue-300",
      glow: "hover:shadow-blue-500/20",
      placeholderGradient:
        "bg-gradient-to-br from-blue-600/95 via-slate-900/90 to-slate-950",
    },
    yellow: {
      highlight: "bg-yellow-500",
      icon: "text-yellow-400",
      hoverIcon: "group-hover:text-yellow-300",
      glow: "hover:shadow-yellow-500/20",
      placeholderGradient:
        "bg-gradient-to-br from-yellow-600/95 via-slate-900/90 to-slate-950",
    },
    green: {
      highlight: "bg-green-500",
      icon: "text-green-400",
      hoverIcon: "group-hover:text-green-300",
      glow: "hover:shadow-green-500/20",
      placeholderGradient:
        "bg-gradient-to-br from-green-600/95 via-slate-900/90 to-slate-950",
    },
    purple: {
      highlight: "bg-purple-500",
      icon: "text-purple-400",
      hoverIcon: "group-hover:text-purple-300",
      glow: "hover:shadow-purple-500/20",
      placeholderGradient:
        "bg-gradient-to-br from-purple-600/95 via-slate-900/90 to-slate-950",
    },
  };

  const colors = colorMap[highlightColor] || colorMap.blue;

  if (variant === "stacked") {
    const anchorProps = linkPropsForHref(ctaHref);
    const ariaLabel =
      ctaLabel && title ? `${title} — ${ctaLabel}` : title || undefined;

    return (
      <div
        className={`rounded-xl glassmorphic-feature-card touch-manipulation relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${colors.glow} flex min-h-[200px] flex-col p-4 sm:p-5`}
      >
        <a
          {...anchorProps}
          aria-label={ariaLabel}
          className="flex min-h-0 flex-1 flex-col gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] rounded-lg"
        >
          {/* Picture + text: two sibling regions inside one card */}
          <div className="relative isolate h-52 w-full shrink-0 overflow-hidden rounded-lg border border-slate-400/25 bg-slate-950 shadow-inner sm:h-56">
            {cardBackgroundImage ? (
              <>
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-[filter,transform] duration-300 ease-out brightness-[1.06] contrast-[1.07] saturate-[1.06] group-hover:scale-[1.03] group-hover:brightness-[1.12] group-hover:contrast-[1.12] group-hover:saturate-[1.12]"
                  style={{ backgroundImage: `url("${cardBackgroundImage}")` }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent"
                  aria-hidden
                />
              </>
            ) : (
              <div
                className={`absolute inset-0 transition-[filter] duration-300 ease-out brightness-[1.03] contrast-[1.05] group-hover:brightness-[1.14] group-hover:contrast-[1.1] group-hover:saturate-110 ${colors.placeholderGradient}`}
                aria-hidden
              />
            )}
          </div>

          <div className="relative z-10 flex min-h-0 flex-1 flex-col">
            <h3 className="mb-3 text-lg font-semibold leading-tight text-primary transition-colors duration-300 group-hover:text-white">
              {title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-secondary transition-colors duration-300 group-hover:text-slate-200">
              {children}
            </p>
            {ctaLabel ? (
              <span className="mt-4 inline-block w-full rounded-md glassmorphic-button px-3 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 group-hover:shadow-lg">
                {ctaLabel}
              </span>
            ) : null}
          </div>
        </a>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl glassmorphic-feature-card p-6 min-h-[200px] touch-manipulation relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${colors.glow} flex flex-col`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${colors.highlight} rounded-t-xl z-20`}
      />

      {cardBackgroundImage ? (
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-xl bg-cover bg-center bg-no-repeat opacity-[0.22]"
          style={{ backgroundImage: `url("${cardBackgroundImage}")` }}
          aria-hidden
        />
      ) : (
        <div
          className={`pointer-events-none absolute inset-0 z-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${colors.highlight}`}
          aria-hidden
        />
      )}

      <div className="relative z-10 flex flex-col flex-1">
        {icon && (
          <div
            className={`mb-3 text-2xl ${colors.icon} ${colors.hoverIcon} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 animate-pulse-slow`}
          >
            {icon}
          </div>
        )}

        <h3 className="text-lg font-semibold mb-3 text-primary leading-tight group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-secondary leading-relaxed group-hover:text-slate-200 transition-colors duration-300 flex-1">
          {children}
        </p>

        {ctaLabel && ctaHref ? (
          <div className="mt-4 pt-2">
            <a
              {...linkPropsForHref(ctaHref)}
              className="inline-block w-full text-center rounded-md glassmorphic-button text-white text-sm font-medium py-2.5 px-3 hover:shadow-lg transition-all duration-300 focus:outline-none"
            >
              {ctaLabel}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
