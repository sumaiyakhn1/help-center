import React from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { OkieDokieLogo } from './OkieDokieLogo';

interface NavbarProps {
  onGoHome: () => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  showSidebarToggle?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onGoHome,
  onToggleSidebar,
  isSidebarOpen,
  showSidebarToggle = true
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#f96424] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left Section: Back Button + Mobile Toggle + Okie Dokie Logo */}
        <div className="flex items-center gap-3">
          {showSidebarToggle && (
            <button
              onClick={onGoHome}
              className="p-2 -ml-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer flex items-center gap-1 mr-1"
              title="Back to Hub"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium mr-1">Back</span>
            </button>
          )}

          {showSidebarToggle && (
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer mr-2"
              title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}

          <button
            onClick={onGoHome}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          >
            <OkieDokieLogo variant="header" />

            <span className="hidden sm:inline font-extrabold text-base tracking-tight text-white border-l border-white/30 pl-3">
              Help Center
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
