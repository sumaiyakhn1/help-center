import React from 'react';
import { Article, Category } from '../types';
import { useHelpData } from '../contexts/HelpDataContext';
import { ChevronRight, Home, Download, ArrowLeft, FileText, ExternalLink } from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  onGoHome: () => void;
  onSelectCategory: (category: Category) => void;
  onSelectArticle: (article: Article) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onGoHome,
  onSelectCategory
}) => {
  const { categories } = useHelpData();
  
  // Find parent category
  const parentCategory = categories.find(c => c.id === article.categoryId);

  // PDF or Canva link
  let pdfUrl = article.pdfUrl || '/pdf/How_To_Assign_Counsellor_and_Tags.pdf';
  const pdfFileName = article.pdfFileName || 'How_To_Assign_Counsellor_and_Tags.pdf';
  const isCanvaLink = pdfUrl.includes('canva.com');
  
  // Cleanly format Canva links for embedding
  if (isCanvaLink && !pdfUrl.includes('embed')) {
    const separator = pdfUrl.includes('?') ? '&' : '?';
    pdfUrl = `${pdfUrl}${separator}embed`;
  }

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6">
      
      {/* Top Navigation & Breadcrumbs Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={onGoHome} className="hover:text-orange-600 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          {parentCategory && (
            <>
              <button
                onClick={() => onSelectCategory(parentCategory)}
                className="hover:text-orange-600"
              >
                {parentCategory.title}
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </>
          )}
          <span className="text-slate-900 font-semibold truncate max-w-xs">{article.title}</span>
        </div>

        <button
          onClick={() => parentCategory && onSelectCategory(parentCategory)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {parentCategory?.title || 'Category'}</span>
        </button>
      </div>

      {/* Top Header Card with Download/Open Button */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[11px] font-bold flex items-center gap-1">
              <FileText className="w-3 h-3" />
              <span>{isCanvaLink ? 'Canva Guide' : 'Official PDF Document'}</span>
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500">{article.pdfSize || '1.4 MB'}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Download PDF / Open Link Button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {isCanvaLink ? (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer hover:shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in Canva</span>
            </a>
          ) : (
            <a
              href={pdfUrl}
              download={pdfFileName}
              className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          )}
        </div>
      </div>

      {/* VIEWER CONTAINER */}
      <div className="bg-white rounded-2xl border border-slate-300 shadow-xl overflow-hidden min-h-[850px]">
        {isCanvaLink ? (
          <iframe
            src={pdfUrl}
            title={article.title}
            className="w-full h-[850px] rounded-2xl border-none"
            allowFullScreen
          />
        ) : (
          <object
            data={`${pdfUrl}#toolbar=1`}
            type="application/pdf"
            className="w-full h-[850px] rounded-2xl"
          >
            <iframe
              src={`${pdfUrl}#toolbar=1`}
              title={article.title}
              className="w-full h-[850px] rounded-2xl border-none"
            >
              <div className="p-8 text-center space-y-4">
                <FileText className="w-12 h-12 text-slate-400 mx-auto" />
                <p className="text-sm font-semibold text-slate-700">Your browser does not support inline PDF viewing.</p>
                <a
                  href={pdfUrl}
                  download={pdfFileName}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 text-white text-xs font-bold shadow-md hover:bg-orange-700"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF File ({pdfFileName})</span>
                </a>
              </div>
            </iframe>
          </object>
        )}
      </div>

      {/* Floating Bottom Download Action Bar */}
      {!isCanvaLink && (
        <div className="sticky bottom-6 z-20 flex justify-center">
          <a
            href={pdfUrl}
            download={pdfFileName}
            className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-orange-600 text-white font-bold text-sm shadow-2xl flex items-center gap-3 transition-all cursor-pointer hover:scale-105"
          >
            <Download className="w-5 h-5 text-orange-400" />
            <span>Download Official PDF ({pdfFileName})</span>
          </a>
        </div>
      )}

    </div>
  );
};
