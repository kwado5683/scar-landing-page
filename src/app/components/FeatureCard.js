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

export function FeatureCard({ title, children, icon }) {
  return (
    <div className="rounded-xl glassmorphic-feature-card p-6 hover:shadow-lg transition-all duration-300">
      {icon && <div className="mb-3 text-blue-400">{icon}</div>}
      <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-sm text-secondary">{children}</p>
    </div>
  );
}