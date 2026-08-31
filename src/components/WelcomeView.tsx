import React, { useState } from 'react';
import { BookOpen, Baby, Car, TrendingUp, PenTool, Settings, HelpCircle, ClipboardList, Plane, ArrowRight, HeartPulse, X, PhoneCall, Users } from 'lucide-react';

interface WelcomeViewProps {
  onEnterHelpCenter: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onEnterHelpCenter }) => {
  const [showHandbookModal, setShowHandbookModal] = useState(false);
  const [showInsuranceModal, setShowInsuranceModal] = useState(false);
  const [showFormsModal, setShowFormsModal] = useState(false);

  // Duo-tone pastel theme configuration
  const themeOrange = {
    bg: 'bg-[#FFF5F0]',
    hover: 'hover:bg-[#FFE6D5]',
    border: 'border-[#FFE6D5]',
    iconColor: 'text-[#E07040]',
    iconBg: 'bg-[#FFE6D5]',
    arrowColor: 'text-[#E07040]'
  };

  const themeBlue = {
    bg: 'bg-[#F2F7FD]',
    hover: 'hover:bg-[#E1EDFA]',
    border: 'border-[#E1EDFA]',
    iconColor: 'text-[#5A8BB8]',
    iconBg: 'bg-[#E1EDFA]',
    arrowColor: 'text-[#5A8BB8]'
  };

  const links = [
    {
      id: 'onboarding-handbook',
      title: 'New Staff Guide',
      description: 'Welcome to the team! Find everything you need to know about your new workplace.',
      icon: <BookOpen className={`w-8 h-8 ${themeBlue.iconColor}`} />,
      url: '#',
      onClick: () => setShowHandbookModal(true),
      theme: themeBlue
    },
    {
      id: 'help-center',
      title: 'Modules',
      description: 'ERP modules step-by-step guide and FAQs.',
      icon: <HelpCircle className={`w-8 h-8 ${themeOrange.iconColor}`} />,
      url: '#',
      onClick: onEnterHelpCenter,
      theme: themeOrange
    },
    {
      id: 'module-learn',
      title: 'Learning Portal',
      description: 'Dive into your digital classroom. Access video modules and study materials.',
      icon: <BookOpen className={`w-8 h-8 ${themeBlue.iconColor}`} />,
      url: 'https://odted.vercel.app/learn',
      theme: themeBlue
    },
    {
      id: 'travel',
      title: 'Travel & Expenses',
      description: 'Submit travel requests, manage expenses, and track your reimbursements.',
      icon: <Plane className={`w-8 h-8 ${themeBlue.iconColor}`} />,
      url: 'https://people.zoho.in/60034133438/zp#travel/travelexpenses/listview',
      theme: themeBlue
    },
    {
      id: 'module-mom',
      title: 'MOM Maker',
      description: 'Easily create and manage official Minutes of Meeting and key action items.',
      icon: <ClipboardList className={`w-8 h-8 ${themeOrange.iconColor}`} />,
      url: 'https://odmom.lovable.app/',
      theme: themeOrange
    },
    {
      id: 'module-cab',
      title: 'Cab Booking',
      description: 'Plan your daily commute effortlessly. Book rides and track your vehicle.',
      icon: <Car className={`w-8 h-8 ${themeBlue.iconColor}`} />,
      url: 'https://odcab.lovable.app/',
      theme: themeBlue
    },
    {
      id: 'utility-1',
      title: 'Utility',
      description: 'Helpful apps and tools that reduce your daily workload.',
      icon: <PenTool className={`w-8 h-8 ${themeOrange.iconColor}`} />,
      url: 'https://okiedokie-utilities.vercel.app/',
      theme: themeOrange
    },
    {
      id: 'cs-team-kpi',
      title: 'CS Team KPI',
      description: 'Track and manage Customer Success team Key Performance Indicators.',
      icon: <TrendingUp className={`w-8 h-8 ${themeOrange.iconColor}`} />,
      url: 'https://cskpi.odpay.in/',
      theme: themeOrange
    },
    {
      id: 'team-forms',
      title: 'Calls & Meetings',
      description: 'Update client-related and internal calls, meetings, and discussions.',
      icon: <PhoneCall className={`w-8 h-8 ${themeOrange.iconColor}`} />,
      url: '#',
      onClick: () => setShowFormsModal(true),
      theme: themeOrange
    },
    {
      id: 'health-insurance',
      title: 'Health Insurance',
      description: 'Access and download your ICICI Lombard Health Insurance Card.',
      icon: <HeartPulse className={`w-8 h-8 ${themeBlue.iconColor}`} />,
      url: '#',
      onClick: () => setShowInsuranceModal(true),
      theme: themeBlue
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFCFA]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block px-5 py-2 rounded-full bg-[#FFF5F0] text-[#E07040] font-bold text-sm tracking-widest uppercase mb-6 border border-[#FFE6D5]">
          Campus Automation Partner
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight mb-5">
          Welcome to Your Hub
        </h1>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Your central portal to manage daily campus activities, access resources, and stay connected.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mx-auto">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            onClick={(e) => {
              if (link.onClick) {
                e.preventDefault();
                link.onClick();
              }
            }}
            target={link.url !== '#' ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={`group relative rounded-[2rem] p-8 border ${link.theme.bg} ${link.theme.border} ${link.theme.hover} transition-all duration-300 hover:-translate-y-1.5 flex flex-col text-left overflow-hidden shadow-sm hover:shadow-md`}
          >
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${link.theme.iconBg} transition-transform duration-300 group-hover:scale-105`}>
                {link.icon}
              </div>
              <ArrowRight className={`w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${link.theme.arrowColor}`} />
            </div>

            <div className="relative z-10 flex-1 flex flex-col mt-2">
              <h3 className="font-bold text-slate-800 text-xl mb-3 transition-colors group-hover:text-slate-900">
                {link.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                {link.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {showInsuranceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowInsuranceModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mb-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Health Insurance Card</h2>
            </div>
            
            <div className="space-y-4 text-slate-600 text-sm">
              <p>You can access and download your ICICI Lombard Health Insurance Card by following the steps below:</p>
              
              <ol className="list-decimal list-inside space-y-2 ml-1 text-slate-700 font-medium">
                <li>Visit: <a href="https://ilhc.icicilombard.com/Customer/iCard?" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">click here to access</a></li>
                <li>Select <strong>Corporate</strong>.</li>
                <li>Enter the Company Name: <strong>OKIE DOKIE SOLUTIONS LLP</strong></li>
                <li>Enter your Employee ID (available in your Zoho email, e.g., OD1010).</li>
                <li>Enter either your Date of Birth or Age.</li>
                <li>Click <strong>Search</strong> to view and download your health insurance card.</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {showFormsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowFormsModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mb-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Calls & Meetings Forms</h2>
            </div>
            
            <div className="space-y-4 text-slate-600 text-sm">
              <p>Please select the appropriate form to update your meeting details:</p>
              
              <div className="space-y-3 mt-4">
                <a 
                  href="https://form.asana.com/?k=_HIXIsI_axiC-kEAZSib9g&d=480944584143449&utm_source=chatgpt.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-orange-100 hover:border-orange-300 hover:bg-orange-50 transition-all group"
                >
                  <div>
                    <h3 className="font-semibold text-slate-800 group-hover:text-orange-700">Client Calls/Meetings Form</h3>
                    <p className="text-xs text-slate-500 mt-1">Update all client-related calls and discussions.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://form.asana.com/?k=Ae8pwXteUEEk1hlh77jm2w&d=480944584143449" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <div>
                    <h3 className="font-semibold text-slate-800 group-hover:text-blue-700">Internal Meetings Form</h3>
                    <p className="text-xs text-slate-500 mt-1">Update internal calls and team support activities.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PDF/Canva Preview Modal */}
      {showHandbookModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-800">New Staff Guide</h2>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="/Employee_Onboarding_Handbook.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100"
                >
                  Open in New Tab
                </a>
                <button 
                  onClick={() => setShowHandbookModal(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 w-full bg-slate-100 rounded-b-2xl overflow-hidden p-2">
              {/* If you have a live Canva embed link, you can replace the src below with the Canva URL */}
              <iframe 
                src="/Employee_Onboarding_Handbook.pdf#toolbar=0" 
                className="w-full h-full rounded-xl border-0 shadow-inner bg-white"
                title="Employee Onboarding Handbook"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
