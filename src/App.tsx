import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { CategoryDetail } from './components/CategoryDetail';
import { ArticleView } from './components/ArticleView';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { CATEGORIES, TOP_FAQS } from './data/helpData';
import { Category, Article } from './types';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'category' | 'article'>('home');
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  const handleSelectCategory = (cat: Category) => {
    setActiveCategory(cat);
    setCurrentView('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (art: Article) => {
    setActiveArticle(art);
    // Also update active category if needed
    const cat = CATEGORIES.find(c => c.id === art.categoryId);
    if (cat) setActiveCategory(cat);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActiveCategory(null);
    setActiveArticle(null);
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Inter',sans-serif]">
      
      {/* Top Sticky Header */}
      <Navbar
        onGoHome={handleGoHome}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Layout with Persistent Sidebar */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto relative">
        
        {/* Sidebar Component */}
        <Sidebar
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          isOpen={isSidebarOpen}
          onCloseMobile={() => setIsSidebarOpen(false)}
        />

        {/* Dynamic Main View Area */}
        <main className="flex-1 min-w-0 transition-all duration-300">
          {currentView === 'home' && (
            <div className="space-y-4">
              {/* Hero Banner with Live Search */}
              <Hero
                onSelectArticle={handleSelectArticle}
                onOpenSearch={() => setIsSearchOpen(true)}
              />

              {/* 16 Categories Grid */}
              <CategoryGrid onSelectCategory={handleSelectCategory} />

              {/* Top FAQs Section */}
              <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
                    <HelpCircle className="w-4 h-4" />
                    <span>Quick Answers</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Got quick questions about Okie Dokie? Read through common campus answers.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {TOP_FAQS.map((faq, idx) => {
                    const isExpanded = expandedFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
                      >
                        <button
                          onClick={() => setExpandedFaqIndex(isExpanded ? null : idx)}
                          className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-semibold text-sm sm:text-base text-slate-800 hover:text-orange-600 transition-colors"
                        >
                          <span className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center">
                              ?
                            </span>
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform ${
                              isExpanded ? 'rotate-180 text-orange-600' : ''
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          )}

          {currentView === 'category' && activeCategory && (
            <CategoryDetail
              category={activeCategory}
              onSelectArticle={handleSelectArticle}
              onGoHome={handleGoHome}
            />
          )}

          {currentView === 'article' && activeArticle && (
            <ArticleView
              article={activeArticle}
              onGoHome={handleGoHome}
              onSelectCategory={handleSelectCategory}
              onSelectArticle={handleSelectArticle}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={handleSelectArticle}
      />
    </div>
  );
};

export default App;
