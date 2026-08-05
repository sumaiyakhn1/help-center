import React from 'react';

interface OkieDokieLogoProps {
  className?: string;
  variant?: 'full' | 'header';
}

export const OkieDokieLogo: React.FC<OkieDokieLogoProps> = ({ className = '', variant = 'full' }) => {
  if (variant === 'header') {
    return (
      <div className={`flex items-center ${className}`}>
        {/* Real Official Okie Dokie Logo in crisp white for Orange Header */}
        <img
          src="/logo.png"
          alt="Okie Dokie"
          className="h-10 sm:h-11 w-auto object-contain brightness-0 invert"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      {/* Real Official Okie Dokie Logo Artwork */}
      <img
        src="/logo.png"
        alt="Okie Dokie - Campus Automation Partner"
        className="h-16 sm:h-22 w-auto object-contain"
      />
    </div>
  );
};
