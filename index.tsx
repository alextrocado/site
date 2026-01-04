
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Fix: Declaring siteLoaded on the global Window interface to resolve TypeScript property access errors
declare global {
  interface Window {
    siteLoaded?: () => void;
  }
}

console.log("REACT: A montar componentes...");

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // Notifica o watchdog no index.html que correu tudo bem
    if (window.siteLoaded) window.siteLoaded();

    const hideLoader = () => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
          console.log("UI: Ecrã de carregamento removido.");
        }, 500);
      }
    };

    // Pequeno delay para garantir que o render inicial terminou
    setTimeout(hideLoader, 300);
  } catch (err) {
    console.error("REACT: Erro fatal durante a montagem:", err);
    throw err;
  }
} else {
    console.error("DOM: Contentor #root não encontrado.");
}
