import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f96424] text-white py-5 px-4 text-center text-xs font-medium shadow-md">
      <div className="flex items-center justify-center gap-1.5">
        <span>Crafted with</span>
        <Heart className="w-4 h-4 text-pink-700 fill-pink-700" />
        <span>by <strong className="text-amber-200 font-extrabold tracking-wide">Okie Dokie</strong></span>
      </div>
    </footer>
  );
};
