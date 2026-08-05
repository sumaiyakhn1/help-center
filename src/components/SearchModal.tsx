import React, { useState, useEffect } from 'react';
import { Search, X, FileText, Clock, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/helpData';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Collect all articles across all 16 categories
  const allArticles: Article[] = CATEGORIES.flatMap(cat =>
    cat.subcategories.flatMap(sub => sub.articles)
  );

  const matchedArticles = searchTerm.trim()
    ? allArticles.filter(art =>
        art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        art.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        art.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : allArticles.slice(0, 5); // Show popular guides when empty

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : undefined;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn"
    >
      <div
        className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search all Okie Dokie help pdfs, categories, or tags..."
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results / Popular List */}
        <div className="p-4 overflow-y-auto flex-1 space-y-2 custom-scrollbar">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>{searchTerm.trim() ? `Matching PDF Guides (${matchedArticles.length})` : 'Popular PDF Guides'}</span>
            <span className="text-slate-400">Esc to close</span>
          </div>

          {matchedArticles.length > 0 ? (
            matchedArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className="group p-3.5 rounded-xl bg-white hover:bg-orange-50/60 border border-slate-200 hover:border-orange-300 cursor-pointer transition-colors flex items-start gap-3"
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
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {art.readTime}
                    </span>
                    {art.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all mt-2" />
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500 text-xs">
              No PDF guides found matching "{searchTerm}". Try searching for 'Counsellor', 'Admit Cards', 'Alumni', or 'Prospectus'.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
