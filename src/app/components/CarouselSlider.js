/*
DESCRIPTION: Interactive carousel slider component for feature showcase
- Auto-scrolling animation that's faster than before
- Manual scroll control - users can swipe/drag to navigate
- Pauses animation in place on hover without recentering
- Hidden scrollbar for cleaner appearance
- Drag-to-scroll functionality for desktop

PSEUDOCODE:
- Create a horizontally scrollable container with auto-animation
- Pause animation in place when user hovers or touches (no repositioning)
- Resume animation when user interaction ends
- Implement drag-to-scroll for better desktop UX
- Allow wheel/trackpad scrolling
- Hide scrollbar while keeping scroll functionality
*/

'use client';

import { useRef, useState } from 'react';

export default function CarouselSlider({ children }) {
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Pause animation when user hovers
  const handleMouseEnter = (e) => {
    if (animationRef.current) {
      animationRef.current.style.animationPlayState = 'paused';
    }
  };
  
  const handleMouseLeave = (e) => {
    if (!isDragging && animationRef.current) {
      animationRef.current.style.animationPlayState = 'running';
    }
  };

  // Drag-to-scroll handlers for desktop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    if (animationRef.current) {
      animationRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume animation after 1 second of no interaction
    setTimeout(() => {
      if (animationRef.current && !isDragging) {
        animationRef.current.style.animationPlayState = 'running';
      }
    }, 1000);
  };

  // Touch handlers for mobile
  const handleTouchStart = () => {
    if (animationRef.current) {
      animationRef.current.style.animationPlayState = 'paused';
    }
  };
  
  const handleTouchEnd = () => {
    // Resume animation after 1 second
    setTimeout(() => {
      if (animationRef.current) {
        animationRef.current.style.animationPlayState = 'running';
      }
    }, 1000);
  };

  // Wheel/trackpad scroll handler
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      // Horizontal scroll detected
      if (animationRef.current) {
        animationRef.current.style.animationPlayState = 'paused';
        setTimeout(() => {
          if (animationRef.current) {
            animationRef.current.style.animationPlayState = 'running';
          }
        }, 1000);
      }
    }
  };

  return (
    <div className="mt-8 relative w-full max-w-full">
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div 
          ref={animationRef}
          className="flex animate-slide-right-to-left"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

