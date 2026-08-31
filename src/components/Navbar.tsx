import React, { useState } from 'react';
import { Menu, X, ArrowLeft, HelpCircle } from 'lucide-react';
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
  const [showHowToUseModal, setShowHowToUseModal] = useState(false);

  const howToUseItems = [
    { intent: 'Learn about the company and how we work', goto: 'New Staff Guide' },
    { intent: 'Learn how to use an ERP module', goto: 'Modules' },
    { intent: 'Complete training or watch learning material', goto: 'Learning Portal' },
    { intent: 'Submit or track expenses', goto: 'Travel & Expenses' },
    { intent: 'Create Minutes of Meeting', goto: 'MOM Maker' },
    { intent: 'Create a meeting action-item record', goto: 'MOM Maker' },
    { intent: 'Book transportation', goto: 'Cab Booking' },
    { intent: 'Find an internal productivity tool', goto: 'Utility' },
    { intent: 'Check Customer Success KPIs', goto: 'CS Team KPI' },
    { intent: 'Record a client call or meeting', goto: 'Calls & Meetings' },
    { intent: 'Record internal meetings/support', goto: 'Calls & Meetings' },
    { intent: 'Access health insurance card', goto: 'Health Insurance' }
  ];

  return (
    <>
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

        {/* Right Section: Help / How to Use */}
        <div className="flex items-center">
          <button
            onClick={() => setShowHowToUseModal(true)}
            className="p-2 rounded-full text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
            title="How to Use"
          >
            <HelpCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>

    {/* How to Use Modal */}
    {showHowToUseModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto text-slate-800">
          <button 
            onClick={() => setShowHowToUseModal(false)}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="mb-10 text-left">
            <h2 className="text-[28px] font-bold text-[#0F2942] mb-5">Not sure where to start?</h2>
            <p className="text-[#1A3A5A] text-[17px] mb-4 tracking-wide font-medium">You do not need to remember every system.</p>
            <p className="text-[#1A3A5A] text-[17px] tracking-wide font-medium">Use the following quick reference:</p>
          </div>
          
          <div className="bg-white text-left">
            <div className="grid grid-cols-12 gap-6 pb-5 font-bold text-[#0F2942] text-lg mb-3">
              <div className="col-span-8">I need to...</div>
              <div className="col-span-4">Go to</div>
            </div>
            <div className="space-y-6">
              {howToUseItems.map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-8 text-[#1A3A5A] text-[17px] leading-relaxed">{item.intent}</div>
                  <div className="col-span-4 font-bold text-[#0F2942] text-[17px] leading-relaxed">{item.goto}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};
