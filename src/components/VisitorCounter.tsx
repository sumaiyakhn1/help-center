import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import { ref, onValue, runTransaction } from 'firebase/database';
import { db } from '../firebase';

export const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const counterRef = ref(db, 'help_center_visitor_count');

    // 1. Session tracking to ensure each visitor increments global count once per session
    const SESSION_KEY = 'okie_dokie_help_center_visited';
    const hasVisitedThisSession = sessionStorage.getItem(SESSION_KEY);

    const START_COUNT = 15;

    if (!hasVisitedThisSession) {
      // Increment global counter in Firebase Realtime Database atomically starting from baseline 15
      runTransaction(counterRef, (currentCount: any) => {
        const base = (typeof currentCount === 'number' && currentCount >= START_COUNT) ? currentCount : (START_COUNT - 1);
        return base + 1;
      }).then(() => {
        sessionStorage.setItem(SESSION_KEY, 'true');
      }).catch((err: any) => {
        console.error('Failed to increment visitor count:', err);
      });
    }

    // 2. Real-time subscription to global count changes across all users
    const unsubscribe = onValue(counterRef, (snapshot: any) => {
      if (snapshot.exists()) {
        const val = snapshot.val();
        if (typeof val === 'number') {
          setCount(Math.max(val, START_COUNT));
        } else {
          setCount(START_COUNT);
        }
      } else {
        setCount(START_COUNT);
      }
    }, (error: any) => {
      console.error('Error reading visitor count from Firebase:', error);
    });

    return () => unsubscribe();
  }, []);

  if (count === null) return null;

  return (
    <div 
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700/60 px-3.5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group select-none"
      title="Total Page Visitors"
    >
      <div className="relative flex items-center justify-center">
        <Users className="w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-colors" />
        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-xs">
        <span className="text-slate-400 font-medium">Visitors:</span>
        <span className="font-bold text-white tracking-wide font-mono bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50">
          {count.toLocaleString()}
        </span>
      </div>
    </div>
  );
};
