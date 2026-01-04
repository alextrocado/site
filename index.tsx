import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

declare global {
  interface Window {
    siteLoaded?: () => void;
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Remove o loader após o React montar
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 500);
    }
  }, 500);
}