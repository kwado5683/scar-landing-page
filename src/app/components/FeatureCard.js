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

export function FeatureCard({ title, children, icon, highlightColor = "blue" }) {
  // Define color mappings for different feature types
  const colorMap = {
    blue: {
      highlight: "bg-blue-500",
      icon: "text-blue-400",
      hoverIcon: "text-blue-300",
      glow: "shadow-blue-500/20"
    },
    yellow: {
      highlight: "bg-yellow-500", 
      icon: "text-yellow-400",
      hoverIcon: "text-yellow-300",
      glow: "shadow-yellow-500/20"
    },
    green: {
      highlight: "bg-green-500",
      icon: "text-green-400", 
      hoverIcon: "text-green-300",
      glow: "shadow-green-500/20"
    },
    purple: {
      highlight: "bg-purple-500",
      icon: "text-purple-400",
      hoverIcon: "text-purple-300", 
      glow: "shadow-purple-500/20"
    }
  };

  const colors = colorMap[highlightColor] || colorMap.blue;

  return (
    <div className={`rounded-xl glassmorphic-feature-card p-6 min-h-[200px] touch-manipulation relative overflow-hidden group transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:${colors.glow}`}>
      {/* Colored highlight bar at top */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${colors.highlight} rounded-t-xl`}></div>
      
      {/* Icon with animation */}
      {icon && (
        <div className={`mb-3 text-2xl ${colors.icon} group-hover:${colors.hoverIcon} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 animate-pulse-slow`}>
          {icon}
        </div>
      )}
      
      {/* Title */}
      <h3 className="text-lg font-semibold mb-3 text-primary leading-tight group-hover:text-white transition-colors duration-300">{title}</h3>
      
      {/* Description */}
      <p className="text-sm text-secondary leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{children}</p>
      
      {/* Subtle background glow effect on hover */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${colors.highlight}`}></div>
    </div>
  );
}