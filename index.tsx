import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("React: A iniciar montagem da aplicação...");

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("React: Renderização solicitada com sucesso.");

    const hideLoader = () => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.transition = 'opacity 0.5s ease';
        loader.style.opacity = '0';
        setTimeout(() => {
          if (loader.parentNode) loader.remove();
          console.log("UI: Loader removido.");
        }, 500);
      }
    };

    // Remove o loader após um curto espaço de tempo
    setTimeout(hideLoader, 500);
  } catch (err) {
    console.error("Erro fatal durante o render:", err);
    throw err;
  }
} else {
  console.error("Erro crítico: Elemento #root não encontrado no DOM.");
}