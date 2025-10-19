/*
DESCRIPTION: Smooth scroll button component for better user experience.
- Handles smooth scrolling to target sections
- Provides visual feedback and accessibility features
- Uses client-side JavaScript for smooth scroll behavior

PSEUDOCODE:
- Create button component with smooth scroll functionality
- Handle click events to scroll to target element
- Provide visual feedback and accessibility features
*/

'use client';

export default function SmoothScrollButton({ href, children, className }) {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <a 
      className={className}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
