/*
DESCRIPTION: Scroll animation component that triggers animations when elements come into view.
- Uses Intersection Observer API for performance
- Adds 'visible' class to elements when they enter viewport
- Handles parallax scroll effects for background elements
- Optimized for smooth 60fps animations

PSEUDOCODE:
- Create intersection observer to watch for elements entering viewport
- Add 'visible' class to trigger CSS animations
- Handle parallax scroll effects for background elements
- Clean up observers on component unmount
*/

'use client';

import { useEffect, useRef } from 'react';

export function ScrollAnimation({ children, className = '', parallax = false }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    // Parallax scroll effect
    if (parallax) {
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        element.style.setProperty('--scroll-offset', `${rate}px`);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        observer.unobserve(element);
        window.removeEventListener('scroll', handleScroll);
      };
    }

    return () => {
      observer.unobserve(element);
    };
  }, [parallax]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Hook for parallax background effect
export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-fast');
      
      parallaxElements.forEach((element) => {
        const rate = element.classList.contains('parallax-slow') ? scrolled * -0.3 : scrolled * -0.5;
        element.style.setProperty('--scroll-offset', `${rate}px`);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
