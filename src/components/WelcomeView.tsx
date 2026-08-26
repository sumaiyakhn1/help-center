import React from 'react';
import { BookOpen, Baby, Car, TrendingUp, PenTool, Settings, HelpCircle } from 'lucide-react';

interface WelcomeViewProps {
  onEnterHelpCenter: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onEnterHelpCenter }) => {
  const links = [
    {
      id: 'help-center',
      title: 'Help Center',
      description: 'Access guides, FAQs, and support documents',
      icon: <HelpCircle className="w-8 h-8 text-orange-500" />,
      url: '#',
      onClick: onEnterHelpCenter,
      bgClass: 'bg-orange-50',
      borderClass: 'border-orange-200 hover:border-orange-400',
    },
    {
      id: 'module-learn',
      title: 'Learn Module',
      description: 'Educational resources and learning platform',
      icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
      url: 'https://odted.vercel.app/learn',
      bgClass: 'bg-indigo-50',
      borderClass: 'border-slate-200 hover:border-indigo-400',
    },
    {
      id: 'module-mom',
      title: 'Mom Portal',
      description: 'Parenting and family support systems',
      icon: <Baby className="w-8 h-8 text-pink-500" />,
      url: 'https://odmom.lovable.app/',
      bgClass: 'bg-pink-50',
      borderClass: 'border-slate-200 hover:border-pink-400',
    },
    {
      id: 'module-cab',
      title: 'Cab Booking',
      description: 'Book your ride quickly and easily',
      icon: <Car className="w-8 h-8 text-yellow-500" />,
      url: 'https://odcab.lovable.app/',
      bgClass: 'bg-yellow-50',
      borderClass: 'border-slate-200 hover:border-yellow-400',
    },
    {
      id: 'kpi',
      title: 'KPI Dashboard',
      description: 'Key performance metrics and analytics',
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      url: '#',
      bgClass: 'bg-green-50',
      borderClass: 'border-slate-200 hover:border-green-400',
    },
    {
      id: 'utility-1',
      title: 'Utilities',
      description: 'Access system tools and configurations',
      icon: <PenTool className="w-8 h-8 text-blue-500" />,
      url: 'https://okiedokie-utilities.vercel.app/',
      bgClass: 'bg-blue-50',
      borderClass: 'border-slate-200 hover:border-blue-400',
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Welcome to Campus Automation Partner
        </h1>
        <p className="text-lg text-slate-600">
          Select a portal below to access your integrated modules, utilities, and support resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
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
            className={`group relative bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center ${link.borderClass}`}
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${link.bgClass} transition-transform duration-300 group-hover:scale-110 mb-6`}>
              {link.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
              {link.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {link.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
