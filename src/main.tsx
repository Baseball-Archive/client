import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { worker } from './mock/browser.ts';

const mountApp = async () => {
  if (process.env.NODE_ENV === 'development') {
    await worker.start();
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

mountApp();
