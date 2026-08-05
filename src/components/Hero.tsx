import React, { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, ArrowRight, FileText } from 'lucide-react';
import { CATEGORIES } from '../data/helpData';
import { Article } from '../types';
import { OkieDokieLogo } from './OkieDokieLogo';

interface HeroProps {
  onSelectArticle: (article: Article) => void;
  onOpenSearch: () => void;
  onSelectCategoryById?: (categoryId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectArticle,
  onOpenSearch
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Collect all articles across all 16 categories
  const allArticles: Article[] = CATEGORIES.flatMap(cat =>
    cat.subcategories.flatMap(sub => sub.articles)
  );

  const matchedArticles = query.trim()
    ? allArticles.filter(art =>
        art.title.toLowerCase().includes(query.toLowerCase()) ||
        art.description.toLowerCase().includes(query.toLowerCase()) ||
        art.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative pt-8 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto text-center relative z-20 space-y-5">
        
        {/* Official Brand Logo */}
        <div className="flex justify-center pt-2 pb-1">
          <OkieDokieLogo className="h-16 sm:h-20" />
        </div>

        {/* Main Hero Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          How can we help you?
        </h1>
        
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
          Search help pdfs and step-by-step guides for using Okie Dokie's campus management platform.
        </p>

        {/* Main Search Input */}
        <div className="relative max-w-2xl mx-auto pt-2 z-30" ref={dropdownRef}>
          <div
            className={`relative flex items-center bg-white border rounded-2xl transition-all duration-300 shadow-sm ${
              isFocused
                ? 'border-orange-500 ring-4 ring-orange-500/10 shadow-md'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <Search className="w-5 h-5 text-slate-400 ml-4 flex-shrink-0" />
            
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              placeholder="Quick search your doubts using keywords..."
              className="w-full bg-transparent px-4 py-3.5 text-sm sm:text-base text-slate-800 placeholder-slate-400 outline-none pr-4"
            />
          </div>

          {/* Instant Search Suggestions Dropdown */}
          {isFocused && query.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden text-left divide-y divide-slate-100 animate-fadeIn">
              <div className="p-3 bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                <span>Matching PDF Guides ({matchedArticles.length})</span>
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              </div>

              {matchedArticles.length > 0 ? (
                <div>
                  {matchedArticles.map((art) => (
                    <button
                      key={art.id}
                      onClick={() => {
                        onSelectArticle(art);
                        setIsFocused(false);
                      }}
                      className="w-full p-3.5 hover:bg-orange-50/60 flex items-start gap-3 transition-colors text-left group cursor-pointer"
                    >
                      <div className="p-2 rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors truncate">
                          {art.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {art.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all mt-1" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-slate-500 text-xs">
                  No matching PDF guides found for "{query}". Try checking our categories below.
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
