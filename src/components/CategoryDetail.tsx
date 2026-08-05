import React, { useState } from 'react';
import { Category, Article } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ChevronRight, Home, Search, BookOpen, Clock, Tag, ArrowRight, FileText } from 'lucide-react';

interface CategoryDetailProps {
  category: Category;
  onSelectArticle: (article: Article) => void;
  onGoHome: () => void;
}

export const CategoryDetail: React.FC<CategoryDetailProps> = ({
  category,
  onSelectArticle,
  onGoHome
}) => {
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState('');

  // Collect all articles in this category
  const allCategoryArticles = category.subcategories.flatMap(sub => sub.articles);

  const filteredArticles = allCategoryArticles.filter(art => {
    const matchesSubcategory = selectedSubcategoryId === 'all' || art.subcategoryId === selectedSubcategoryId;
    const matchesSearch = searchFilter.trim() === '' ||
      art.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      art.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      art.tags.some(t => t.toLowerCase().includes(searchFilter.toLowerCase()));
    
    return matchesSubcategory && matchesSearch;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
      
      {/* Breadcrumbs Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <button onClick={onGoHome} className="hover:text-orange-600 flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span>Categories</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold">{category.title}</span>
      </nav>

      {/* Category Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
              <DynamicIcon name={category.iconName} size={24} />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Okie Dokie Category
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                {category.title}
              </h1>
            </div>
          </div>

          {/* Stats Badges */}
          <div className="flex items-center gap-3 bg-orange-50/80 border border-orange-200 p-4 rounded-xl self-start md:self-auto">
            <FileText className="w-5 h-5 text-orange-600" />
            <div className="text-left">
              <div className="text-sm font-bold text-slate-900">{category.pdfCount ?? 0} PDF Documents</div>
              <div className="text-[11px] text-slate-500">Official procedure guides</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar & Subcategory Tabs (if subcategories exist) */}
      {category.subcategories.length > 0 && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Subcategory Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 custom-scrollbar">
              <button
                onClick={() => setSelectedSubcategoryId('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSubcategoryId === 'all'
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Topics ({allCategoryArticles.length})
              </button>

              {category.subcategories.map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubcategoryId(sub.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedSubcategoryId === sub.id
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {sub.title} ({sub.articles.length})
                </button>
              ))}
            </div>

            {/* Search inside category */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={`Search in ${category.title}...`}
                className="w-full bg-white border border-slate-200 focus:border-orange-500 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 outline-none"
              />
            </div>

          </div>
        </div>
      )}

      {/* Articles List */}
      <div className="space-y-4">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-orange-400 shadow-2xs hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 flex items-center gap-1">
                    <FileText className="w-3 h-3 text-orange-600" />
                    <span>PDF Guide</span>
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {art.readTime}
                  </span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="text-xs text-slate-500">Updated {art.updatedAt}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {art.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {art.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 flex items-center gap-1"
                    >
                      <Tag className="w-2.5 h-2.5 text-slate-400" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 sm:self-center">
                <span>View PDF Guide</span>
                <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-12 rounded-2xl text-center space-y-3 border border-slate-200">
            <FileText className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No PDF documents available yet</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              PDF guides for {category.title} will be uploaded here soon.
            </p>
          </div>
        )}
      </div>

    </div>
  );
};
