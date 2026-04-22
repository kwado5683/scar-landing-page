'use client';

import { SECTION_INLINE_PAD_CLASS } from "../lib/sectionInlinePad";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHome = pathname === "/";

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "glassmorphic-navbar-scrolled shadow-lg"
            : "glassmorphic-navbar"
        }
      `}
    >
      <div className={`max-w-full mx-auto ${SECTION_INLINE_PAD_CLASS}`}>
        <div className="flex items-center justify-between h-18 sm:h-21 md:h-24">
          <div className="flex-shrink-0 min-w-0">
            {isHome ? (
              <button
                type="button"
                onClick={scrollToTop}
                className="text-left focus:outline-none rounded-lg transition-all duration-300 hover:opacity-90"
                aria-label="Zayn Group home — scroll to top"
              >
                <span className="block text-lg sm:text-xl md:text-2xl font-bold text-primary tracking-tight truncate">
                  Zayn Group
                </span>
                <span className="block text-[10px] sm:text-xs text-muted leading-tight mt-0.5">
                  Recruitment &amp; Software Solutions
                </span>
              </button>
            ) : (
              <Link
                href="/"
                className="text-left focus:outline-none rounded-lg transition-all duration-300 hover:opacity-90 block"
                aria-label="Zayn Group home"
              >
                <span className="block text-lg sm:text-xl md:text-2xl font-bold text-primary tracking-tight truncate">
                  Zayn Group
                </span>
                <span className="block text-[10px] sm:text-xs text-muted leading-tight mt-0.5">
                  Recruitment &amp; Software Solutions
                </span>
              </Link>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <Link
              href="/"
              className={`text-sm transition-colors duration-200 ${
                pathname === "/"
                  ? "text-primary font-medium"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className={`text-sm transition-colors duration-200 ${
                pathname === "/contact"
                  ? "text-primary font-medium"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
