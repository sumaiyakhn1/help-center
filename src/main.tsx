import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { HelpDataProvider } from './contexts/HelpDataContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelpDataProvider>
      <App />
    </HelpDataProvider>
  </StrictMode>
);
