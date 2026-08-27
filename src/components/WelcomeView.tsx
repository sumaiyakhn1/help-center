import React from 'react';
import { BookOpen, Baby, Car, TrendingUp, PenTool, Settings, HelpCircle, ClipboardList, Plane, ArrowRight } from 'lucide-react';

interface WelcomeViewProps {
  onEnterHelpCenter: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onEnterHelpCenter }) => {
  
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
      id: 'help-center',
      title: 'Help & Support',
      description: 'Access step-by-step guides, FAQs, and instant support for all your needs.',
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
      title: 'Transport Booking',
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
      id: 'onboarding-handbook',
      title: 'New Staff Guide',
      description: 'Welcome to the team! Find everything you need to know about your new workplace.',
      icon: <BookOpen className={`w-8 h-8 ${themeBlue.iconColor}`} />,
      url: '/Employee_Onboarding_Handbook.pdf',
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
    </div>
  );
};
