import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  // Renderizamos a aplicação
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // Função para remover o loader de forma suave após a montagem
  const hideLoader = () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = '0';
      setTimeout(() => {
        if (loader.parentNode) loader.remove();
      }, 500);
    }
  };

  // Pequeno delay para garantir que o primeiro paint do React aconteceu
  setTimeout(hideLoader, 300);
  
} else {
  console.error("Erro crítico: Elemento #root não encontrado.");
}