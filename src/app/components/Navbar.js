/*
DESCRIPTION: Navbar component that displays the SCAR logo and persists on scroll
- Full-width navbar that spans the entire horizontal width
- Logo positioned at the far left
- Sticky positioning to stay visible during scrolling
- Mobile-optimized with responsive design
- Smooth scroll to top on logo click

PSEUDOCODE:
- Create a sticky navbar container that stays at the top on scroll
- Position the logo at the far left with proper spacing
- Add smooth transitions and glassmorphic styling
- Optimize touch targets for mobile devices
- Add scroll-to-top functionality when logo is clicked
*/

'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  // Track if the page has been scrolled to add background effect
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener to detect when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top when logo is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'glassmorphic-navbar-scrolled shadow-lg' 
          : 'glassmorphic-navbar'
        }
      `}
    >
      {/* Container for navbar content with responsive padding */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-21 md:h-24">
          
          {/* Logo section - positioned at far left */}
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="flex items-center focus:outline-none rounded-lg transition-all duration-300 hover:scale-105"
              aria-label="SCAR Home - Scroll to top"
            >
              <Image 
                src="/scarlogo.png?v=2" 
                alt="SCAR Logo" 
                width={240}
                height={240}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain navbar-logo"
                priority
              />
            </button>
          </div>

          {/* Right side navigation items */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Navigation links - hidden on very small screens */}
            <a 
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('how-it-works');
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="hidden md:inline-block text-sm text-secondary hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              Features
            </a>
            
            {/* Demo link */}
            <a 
              href="https://safety-mgt.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-secondary hover:text-primary transition-colors duration-200"
            >
              Live Demo
              <span className="text-xs">↗</span>
            </a>
            
            {/* Early Access CTA - optimized for mobile touch targets */}
            <a
              href="#early-access"
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('early-access');
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-xs sm:text-sm glassmorphic-button px-3 py-2 sm:px-4 sm:py-2 rounded-md text-white font-medium hover:shadow-lg transition-all duration-300 focus:outline-none min-h-[44px] flex items-center cursor-pointer"
            >
              <span className="hidden sm:inline">Get Access</span>
              <span className="sm:hidden">Access</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

