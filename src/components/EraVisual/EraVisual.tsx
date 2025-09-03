'use client'

interface EraVisualProps {
  icon: string;
  gradient: string[];
  accentColor: string;
  alt: string;
  className?: string;
}

export function EraVisual({ 
  icon, 
  gradient, 
  accentColor, 
  alt, 
  className = '' 
}: EraVisualProps) {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`
  };

  return (
    <div 
      className={`${className} flex items-center justify-center relative overflow-hidden`}
      style={gradientStyle}
      role="img"
      aria-label={alt}
    >
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${accentColor} 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      {/* Central icon */}
      <div 
        className="text-6xl md:text-7xl text-white relative z-10 drop-shadow-lg"
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
      >
        {icon}
      </div>
      
      {/* Subtle highlight overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
    </div>
  );
}

export default EraVisual;