import React, { createContext, useContext, useState, useEffect } from 'react';
import { Category } from '../types';
import { CATEGORIES as INITIAL_CATEGORIES } from '../data/helpData';
import { fetchGoogleSheetData } from '../services/googleSheets';

interface HelpDataContextType {
  categories: Category[];
  loading: boolean;
  error: Error | null;
}

const HelpDataContext = createContext<HelpDataContextType>({
  categories: INITIAL_CATEGORIES,
  loading: false,
  error: null,
});

export const useHelpData = () => useContext(HelpDataContext);

export const HelpDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchGoogleSheetData()
      .then((data) => {
        if (mounted) {
          setCategories(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          console.error('Failed to fetch from Google Sheets:', err);
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <HelpDataContext.Provider value={{ categories, loading, error }}>
      {children}
    </HelpDataContext.Provider>
  );
};
