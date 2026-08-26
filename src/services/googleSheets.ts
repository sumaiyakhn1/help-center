import Papa from 'papaparse';
import { Category, Article } from '../types';
import { CATEGORIES as INITIAL_CATEGORIES } from '../data/helpData';

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1TQxhOwS85fIAgqZMjF_HG44JSje8NUIZfq24hmXUbmw/export?format=csv';

interface SheetRow {
  name: string;
  category: string;
  'canva link': string;
}

export const fetchGoogleSheetData = async (): Promise<Category[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(SHEET_CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const rows = results.data as SheetRow[];
          const mergedCategories = mergeDataWithCategories(rows);
          resolve(mergedCategories);
        } catch (error) {
          reject(error);
        }
      },
      error: (error: Error) => {
        reject(error);
      },
    });
  });
};

const mergeDataWithCategories = (rows: SheetRow[]): Category[] => {
  // Deep clone to avoid mutating the original data
  const updatedCategories: Category[] = JSON.parse(JSON.stringify(INITIAL_CATEGORIES));

  rows.forEach((row, index) => {
    if (!row.name || !row.category || !row['canva link']) return;

    const categoryName = row.category.trim();
    const articleTitle = row.name.trim();
    const canvaLink = row['canva link'].trim();
    const slug = articleTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    // Find if category exists
    let category = updatedCategories.find(
      (c) => c.title.toLowerCase() === categoryName.toLowerCase()
    );

    // If category doesn't exist, create a new one
    if (!category) {
      category = {
        id: `cat-${slug}-${index}`,
        slug: categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title: categoryName,
        description: `Articles and guides for ${categoryName}`,
        iconName: 'FileText', // Default icon
        articleCount: 0,
        pdfCount: 0,
        subcategories: [
          {
            id: `sub-${slug}-${index}`,
            title: `General ${categoryName} Guides`,
            description: `All guides for ${categoryName}`,
            articleCount: 0,
            pdfCount: 0,
            articles: [],
          },
        ],
      };
      updatedCategories.push(category);
    }

    // Default to the first subcategory
    const subcategory = category.subcategories[0];

    // Create the new article
    const newArticle: Article = {
      id: `art-sheet-${index}`,
      slug: slug,
      title: articleTitle,
      description: `Canva Guide for ${articleTitle}`,
      categoryId: category.id,
      subcategoryId: subcategory.id,
      readTime: '2 min read',
      updatedAt: new Date().toISOString().split('T')[0],
      author: 'Live Data',
      tags: [categoryName, 'Canva', 'Guide'],
      pdfUrl: canvaLink, // We store the canva link as the pdfUrl
      pdfFileName: `${articleTitle}.pdf`,
      pdfSize: 'Live Link',
    };

    // Add article to subcategory
    subcategory.articles.push(newArticle);
    subcategory.articleCount = subcategory.articles.length;
    subcategory.pdfCount = subcategory.articles.length;

    // Update category counts
    category.articleCount = category.subcategories.reduce((sum, sub) => sum + sub.articleCount, 0);
    category.pdfCount = category.subcategories.reduce((sum, sub) => sum + (sub.pdfCount || 0), 0);
  });

  return updatedCategories;
};
