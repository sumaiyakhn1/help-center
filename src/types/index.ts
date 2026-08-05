export interface ArticleStep {
  title: string;
  description: string;
  imageOrNote?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryId: string;
  subcategoryId?: string;
  readTime: string;
  updatedAt: string;
  author: string;
  tags: string[];
  summary?: string;
  steps?: ArticleStep[];
  faqList?: { q: string; a: string }[];
  importantNotes?: string[];
  helpfulVotes?: { yes: number; no: number };
  pdfUrl?: string;
  pdfFileName?: string;
  pdfSize?: string;
}

export interface SubCategory {
  id: string;
  title: string;
  description: string;
  articleCount: number;
  pdfCount?: number;
  articles: Article[];
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  articleCount: number;
  pdfCount: number;
  badgeColor?: string;
  subcategories: SubCategory[];
}
