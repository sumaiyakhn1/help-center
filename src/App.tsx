import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { CategoryDetail } from './components/CategoryDetail';
import { ArticleView } from './components/ArticleView';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { Category, Article } from './types';
import { WelcomeView } from './components/WelcomeView';
import { useHelpData } from './contexts/HelpDataContext';

export const App: React.FC = () => {
  const { categories } = useHelpData();
  const [currentView, setCurrentView] = useState<'welcome' | 'home' | 'category' | 'article'>('welcome');
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSelectCategory = (cat: Category) => {
    setActiveCategory(cat);
    setCurrentView('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (art: Article) => {
    setActiveArticle(art);
    // Also update active category if needed
    const cat = categories.find(c => c.id === art.categoryId);
    if (cat) setActiveCategory(cat);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActiveCategory(null);
    setActiveArticle(null);
    setCurrentView('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Inter',sans-serif]">
      
      {/* Top Sticky Header */}
      <Navbar
        onGoHome={handleGoHome}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        showSidebarToggle={currentView !== 'welcome'}
      />

      {/* Main Layout with Persistent Sidebar */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto relative">
        
        {/* Sidebar Component */}
        {currentView !== 'welcome' && (
          <Sidebar
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            isOpen={isSidebarOpen}
            onCloseMobile={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Dynamic Main View Area */}
        <main className={`flex-1 min-w-0 transition-all duration-300 ${currentView === 'welcome' ? 'flex flex-col' : ''}`}>
          {currentView === 'welcome' && (
            <WelcomeView onEnterHelpCenter={() => setCurrentView('home')} />
          )}

          {currentView === 'home' && (
            <div className="space-y-4">
              {/* Hero Banner with Live Search */}
              <Hero
                onSelectArticle={handleSelectArticle}
                onOpenSearch={() => setIsSearchOpen(true)}
              />

              {/* 16 Categories Grid */}
              <CategoryGrid onSelectCategory={handleSelectCategory} />
            </div>
          )}

          {currentView === 'category' && activeCategory && (
            <CategoryDetail
              category={activeCategory}
              onSelectArticle={handleSelectArticle}
              onGoHome={() => setCurrentView('home')}
            />
          )}

          {currentView === 'article' && activeArticle && (
            <ArticleView
              article={activeArticle}
              onGoHome={() => setCurrentView('home')}
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
