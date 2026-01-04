import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // Esconder o loader assim que o React começar a desenhar
    const hideLoader = () => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.transition = 'opacity 0.5s ease';
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }
    };
    
    // Pequeno delay para garantir que o primeiro frame foi renderizado
    setTimeout(hideLoader, 200);
  } catch (e) {
    console.error("Erro ao iniciar React:", e);
    const errText = document.getElementById('error-text');
    if (errText) errText.innerText = e.message;
    const errDisp = document.getElementById('error-display');
    if (errDisp) errDisp.style.display = 'flex';
  }
}