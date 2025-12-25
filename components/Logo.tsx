import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="5" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Room 254 Logo"
    >
      <title>Room 254 Logo</title>
      
      {/* Top Frame */}
      <path d="M50 82 V30 H150 V82" strokeLinecap="square" />
      
      {/* Top Inner Details: Lines dropping and turning inwards */}
      <path d="M80 30 V70 H90" strokeLinecap="square" />
      <path d="M120 30 V70 H110" strokeLinecap="square" />

      {/* Text Centered */}
      <text 
        x="100" 
        y="110" 
        textAnchor="middle" 
        fontFamily="Oswald, sans-serif" 
        fontWeight="700" 
        fontSize="26" 
        fill="currentColor" 
        stroke="none"
        letterSpacing="2"
      >
        ROOM 254
      </text>

      {/* Bottom Frame */}
      <path d="M50 118 V170 H150 V118" strokeLinecap="square" />

      {/* Bottom Inner Details: Vertical Rectangles */}
      <rect x="75" y="128" width="18" height="32" strokeWidth="4" />
      <rect x="107" y="128" width="18" height="32" strokeWidth="4" />
    </svg>
  );
};

export default Logo;