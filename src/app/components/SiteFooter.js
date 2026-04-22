import Link from "next/link";
import { Mail } from "lucide-react";
import { SECTION_INLINE_PAD_CLASS } from "../lib/sectionInlinePad";
import Section from "./Section";
import DataFlowParticles from "./DataFlowParticles";

const footerLinkClass =
  "text-sm text-muted hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10182F] rounded-sm";

const dotClass =
  "w-1 h-1 rounded-full shrink-0 bg-indigo-400/0 group-hover:bg-indigo-400 transition-colors duration-300";

const columnHeadingClass =
  "text-sm font-semibold text-primary mb-4 uppercase tracking-wider";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <Section
      variant="footer"
      className="pt-0 bg-gradient-to-b from-[#0B1221] via-[#10182F] to-[#182041] relative border-t border-white/[0.06]"
    >
      <DataFlowParticles />
      <div
        className={`relative z-10 max-w-7xl mx-auto ${SECTION_INLINE_PAD_CLASS} py-8 sm:py-10 lg:py-12`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10">
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10182F] rounded-sm">
              <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">
                Zayn Group
              </h3>
            </Link>
            <p className="text-sm text-secondary mb-4 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Recruitment and software solutions built for real-world operations
            </p>
            <div className="inline-flex flex-col items-center sm:items-start gap-1">
              <div className="inline-flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-r from-indigo-400 to-purple-400"
                  aria-hidden
                />
                <span className="text-xs text-muted">Zayn Group</span>
              </div>
              <span className="text-xs text-muted text-center sm:text-left">
                Companies House no. 16911631
              </span>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className={columnHeadingClass}>Quick links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className={footerLinkClass}>
                  <span className={dotClass} aria-hidden />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClass}>
                  <span className={dotClass} aria-hidden />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className={columnHeadingClass}>Explore</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#what-we-do" className={footerLinkClass}>
                  <span className={dotClass} aria-hidden />
                  What we do
                </Link>
              </li>
              <li>
                <Link href="/#products-and-services" className={footerLinkClass}>
                  <span className={dotClass} aria-hidden />
                  Products and Services
                </Link>
              </li>
              <li>
                <Link href="/#work-with-us" className={footerLinkClass}>
                  <span className={dotClass} aria-hidden />
                  Work with us
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className={columnHeadingClass}>Get in touch</h4>
            <Link
              href="/contact"
              className="text-sm text-muted hover:text-primary transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2 group py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10182F] rounded-sm"
            >
              <Mail
                className="w-4 h-4 text-indigo-400 shrink-0"
                aria-hidden
              />
              Contact form
            </Link>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6 sm:mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-xs text-muted text-center sm:text-left order-2 sm:order-1">
            © {year} Zayn Group. All rights reserved. | Built for real-world
            operations.
          </p>
          <nav
            className="flex flex-wrap justify-center gap-4 sm:gap-5 order-1 sm:order-2"
            aria-label="Legal"
          >
            {[
              ["Privacy Policy", "#"],
              ["Terms of Service", "#"],
              ["Cookie Policy", "#"],
              ["Data protection", "#"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="relative text-xs text-muted hover:text-primary py-1 transition-colors duration-300 group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10182F] rounded-sm"
              >
                {label}
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  aria-hidden
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </Section>
  );
}
