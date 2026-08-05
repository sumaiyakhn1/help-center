import React, { useState } from 'react';
import { CATEGORIES } from '../data/helpData';
import { Category } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { Search, ChevronRight, X, FileText } from 'lucide-react';

interface SidebarProps {
  activeCategory: Category | null;
  onSelectCategory: (category: Category) => void;
  isOpen: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeCategory,
  onSelectCategory,
  isOpen,
  onCloseMobile
}) => {
  const [sidebarSearch, setSidebarSearch] = useState('');

  const filteredCategories = CATEGORIES.filter(cat =>
    cat.title.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
    cat.description.toLowerCase().includes(sidebarSearch.toLowerCase())
  );

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 top-16 bg-slate-900/30 backdrop-blur-xs z-20 lg:hidden transition-opacity"
        />
      )}

      <aside
        className={`fixed lg:sticky top-16 left-0 z-30 h-[calc(100vh-4rem)] bg-white border-r border-slate-200/80 transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden shadow-xl lg:shadow-none ${
          isOpen
            ? 'w-72 translate-x-0 opacity-100'
            : '-translate-x-full w-0 lg:w-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Top Search & Categories Navigation */}
        <div className="p-4 space-y-4 overflow-y-auto flex-1 custom-scrollbar w-72">
          {/* Quick Filter Box */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              placeholder="Filter 16 categories..."
              className="w-full bg-slate-100/80 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 outline-none transition-colors"
            />
          </div>

          {/* Categories List Header */}
          <div>
            <div className="flex items-center justify-between px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              <span>Categories ({filteredCategories.length})</span>
              {onCloseMobile && (
                <button
                  onClick={onCloseMobile}
                  className="lg:hidden p-1 rounded hover:bg-slate-100 text-slate-500"
                  title="Close Menu"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="space-y-1">
              {filteredCategories.map((cat) => {
                const isActive = activeCategory?.id === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat);
                      if (onCloseMobile) onCloseMobile();
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all group ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-sm'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`p-1.5 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-100 text-slate-500 group-hover:text-orange-600 group-hover:bg-orange-50'
                        }`}
                      >
                        <DynamicIcon name={cat.iconName} size={15} />
                      </div>
                      <span className="truncate">{cat.title}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium flex items-center gap-1 ${
                          isActive
                            ? 'bg-black/10 text-white'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                        }`}
                      >
                        <FileText className="w-2.5 h-2.5" />
                        {cat.pdfCount ?? 0}
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isActive ? 'text-white translate-x-0.5' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
