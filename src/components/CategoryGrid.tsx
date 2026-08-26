import React from 'react';
import { Category } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ArrowRight, FileText, Layers } from 'lucide-react';
import { useHelpData } from '../contexts/HelpDataContext';

interface CategoryGridProps {
  onSelectCategory: (category: Category) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const { categories } = useHelpData();
  
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Explore Campus Systems</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Help Center
          </h2>
        </div>
      </div>

      {/* 16 Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat)}
            className="group relative cursor-pointer bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-lg hover:border-orange-300 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
          >
            {/* Card Content */}
            <div className="space-y-4">
              {/* Header: Icon + PDF Count Badge */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                  <DynamicIcon name={cat.iconName} size={20} />
                </div>
                
                {/* 0 PDFs Badge */}
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-700 transition-colors">
                  <FileText className="w-3.5 h-3.5 text-orange-500" />
                  <span>{cat.pdfCount ?? 0} PDFs</span>
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors flex items-center justify-between">
                  <span>{cat.title}</span>
                </h3>
              </div>
            </div>

            {/* Footer Action Link */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-orange-600 transition-colors">
              <span>View PDF Guides</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
