import React, { useState } from 'react';
import { BookOpen, Baby, Car, TrendingUp, PenTool, Settings, HelpCircle, ClipboardList, Plane, ArrowRight, HeartPulse, X, PhoneCall, Users, Gift, Play, Calendar, MonitorPlay } from 'lucide-react';

interface WelcomeViewProps {
  onEnterHelpCenter: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onEnterHelpCenter }) => {
  const [showHandbookModal, setShowHandbookModal] = useState(false);
  const [showInsuranceModal, setShowInsuranceModal] = useState(false);
  const [showFormsModal, setShowFormsModal] = useState(false);
  const [showCelebrationsModal, setShowCelebrationsModal] = useState(false);
  const [celebrationView, setCelebrationView] = useState<'choice' | 'videos'>('choice');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const celebrations = [
    { date: '22/7/2026', name: 'Palak', type: 'Birthday', year: '2026', link: 'https://drive.google.com/file/d/1MV-ITKAy-ySMeeKGFHF71cOPmp_85s5J/preview' },
    { date: '8/6/2026', name: 'Gobind', type: 'Birthday', year: '2026', link: 'https://drive.google.com/file/d/1l5jocDBNgqUu2Vg4sEp9hi5au3WdqLVN/preview' },
    { date: '15/5/2026', name: 'Sultan', type: 'Birthday', year: '2026', link: 'https://drive.google.com/file/d/1Spx7_tCfcNWH_1T83pv8NLzh47GSWxGr/preview' },
    { date: '13/3/2026', name: 'Sukhmeet & Shobhit', type: 'Anniversary', year: '2026', link: 'https://drive.google.com/file/d/164pmVd1v8-TESSbEQoJLEN_P9Pj8-9yI/preview' },
    { date: '10/12/2025', name: 'Rahul', type: 'Birthday', year: '2025', link: 'https://drive.google.com/file/d/15SJJYOmaLgvk9SxcTR4wO4fX_pvSVF9v/preview' },
    { date: '28/10/2025', name: 'Sumaiya', type: 'Birthday', year: '2025', link: 'https://drive.google.com/file/d/1A54vLjkUO2C1Vxux2e-oGhNm3nj-qqT7/preview' },
    { date: '9/7/2025', name: 'Shobhit', type: 'Birthday', year: '2025', link: 'https://drive.google.com/file/d/1ai66vumn3VZUZx5NEBlo_dkFo-yyUjrj/preview' },
  ];

  const gradients = [
    'bg-gradient-to-br from-pink-500 to-orange-400',
    'bg-gradient-to-br from-blue-500 to-cyan-400',
    'bg-gradient-to-br from-purple-500 to-indigo-400',
    'bg-gradient-to-br from-emerald-500 to-teal-400',
    'bg-gradient-to-br from-amber-500 to-orange-400',
  ];

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
      title: 'ERP User Manual',
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
    },
    {
      id: 'celebrations',
      title: 'Celebrations',
      description: 'Watch birthday and anniversary celebration videos of our team members.',
      icon: <Gift className={`w-8 h-8 ${themeOrange.iconColor}`} />,
      url: '#',
      onClick: () => setShowCelebrationsModal(true),
      theme: themeOrange
    },
    {
      id: 'webinars',
      title: 'Webinars',
      description: 'Watch and access recorded webinar sessions.',
      icon: <MonitorPlay className={`w-8 h-8 ${themeBlue.iconColor}`} />,
      url: 'https://ted.oderp.in/webinar',
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

      {/* Celebrations Modal */}
      {showCelebrationsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Team Celebrations</h2>
                  <p className="text-sm text-slate-500">Birthdays, anniversaries and special moments.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {celebrationView === 'videos' && (
                  <button 
                    onClick={() => {
                      if (selectedVideo) setSelectedVideo(null);
                      else setCelebrationView('choice');
                    }}
                    className="text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl transition-colors"
                  >
                    {selectedVideo ? 'Back to Gallery' : 'Back to Options'}
                  </button>
                )}
                <button 
                  onClick={() => { setShowCelebrationsModal(false); setSelectedVideo(null); setCelebrationView('choice'); }}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className={`flex-1 overflow-y-auto bg-slate-50/50 p-6 ${celebrationView === 'choice' ? 'flex items-center justify-center' : ''}`}>
              {celebrationView === 'choice' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto w-full">
                  <a
                    href="https://okie-dokie-birthday-wall.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center text-center p-10 bg-white rounded-[2rem] shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mb-5 group-hover:scale-110 transition-transform">
                      <PenTool className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-800 mb-3">Add a Wish</h3>
                    <p className="text-slate-500 text-sm max-w-[16rem]">Write a beautiful message for your colleagues on their special day.</p>
                  </a>
                  
                  <button
                    onClick={() => setCelebrationView('videos')}
                    className="group flex flex-col items-center justify-center text-center p-10 bg-white rounded-[2rem] shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 focus:outline-none"
                  >
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mb-5 group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-800 mb-3">Watch Videos</h3>
                    <p className="text-slate-500 text-sm max-w-[16rem]">Relive the wonderful moments from past birthday and anniversary celebrations.</p>
                  </button>
                </div>
              ) : selectedVideo ? (
                <iframe 
                  src={selectedVideo} 
                  className="w-full h-full rounded-2xl border border-slate-200 shadow-sm bg-white"
                  allow="autoplay"
                  allowFullScreen
                />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {celebrations.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVideo(c.link)}
                      className="group text-left bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    >
                      <div className={`h-48 w-full relative flex flex-col items-center justify-center text-white ${gradients[i % gradients.length]}`}>
                         <Gift className="w-12 h-12 mb-3 opacity-90" />
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                           <div className="w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                              <Play className="w-6 h-6 text-slate-800 ml-1" />
                           </div>
                         </div>
                      </div>
                      <div className="p-5">
                         <div className="flex items-center justify-between mb-2">
                           <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${c.type === 'Birthday' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                             {c.type}
                           </span>
                           <span className="text-sm font-semibold text-slate-500">{c.year}</span>
                         </div>
                         <h3 className="font-bold text-lg text-slate-800 group-hover:text-orange-600 transition-colors mb-1">{c.name}</h3>
                         <p className="text-sm text-slate-500 flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> {c.date}
                         </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
