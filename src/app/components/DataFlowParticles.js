/*
DESCRIPTION: Animated particles component that creates subtle data flow visualization.
- Renders floating particles and connecting lines to represent data flow
- Uses CSS animations for smooth, slow movement
- Particles move in organic patterns to suggest data streaming
- Subtle opacity and size variations for depth
- Non-intrusive background element that doesn't interfere with content

PSEUDOCODE:
- Create container with absolute positioning to cover the background
- Generate multiple particle elements with random positions and sizes
- Add CSS animations for floating movement and opacity changes
- Include connecting lines between particles to show data flow
- Use subtle colors that complement the dark theme
- Ensure particles don't interfere with text readability
*/

'use client';

import { useEffect, useRef } from 'react';

export default function DataFlowParticles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const createParticle = (index) => {
      const particle = document.createElement('div');
      particle.className = `absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-${index % 4}`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animationDuration = `${15 + Math.random() * 10}s`;
      return particle;
    };

    // Create connecting lines
    const createLine = (index) => {
      const line = document.createElement('div');
      line.className = `absolute h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-line-${index % 3}`;
      line.style.left = `${Math.random() * 100}%`;
      line.style.top = `${Math.random() * 100}%`;
      line.style.width = `${50 + Math.random() * 100}px`;
      line.style.animationDelay = `${Math.random() * 8}s`;
      line.style.animationDuration = `${20 + Math.random() * 15}s`;
      return line;
    };

    // Add particles and lines
    for (let i = 0; i < 20; i++) {
      container.appendChild(createParticle(i));
    }
    
    for (let i = 0; i < 15; i++) {
      container.appendChild(createLine(i));
    }

    return () => {
      // Cleanup on unmount
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
