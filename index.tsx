
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Componente para garantir que o Facebook Pixel seja carregado (apenas fallback)
// O pixel principal já está no HTML, este é apenas um backup
const PixelLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Verificar se o pixel já foi carregado (do HTML)
    // Se já estiver carregado, não fazer nada para evitar duplicação
    if (typeof window !== 'undefined' && (window as any).fbq && (window as any).fbq.loaded) {
      return; // Pixel já está carregado e inicializado no HTML
    }

    // Fallback: Se o pixel não estiver carregado (caso raro), carregar via JavaScript
    if (typeof window !== 'undefined' && !(window as any).fbq) {
      (function(f: any, b: any, e: string, v: string, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      
      // Aguardar carregamento e inicializar (SEM disparar PageView novamente - já está no HTML)
      setTimeout(() => {
        if ((window as any).fbq && !(window as any).fbq.loaded) {
          (window as any).fbq('init', '261385193466095');
          // NÃO disparar PageView aqui - já foi disparado no HTML
        }
      }, 100);
    }

    // Configurar Meta API Key se disponível
    if (typeof window !== 'undefined' && !(window as any).META_API_KEY) {
      (window as any).META_API_KEY = 'EAAoC1bVk0HUBQSZCNbKj90evIXZAo3eTVLK4UkliGEZCZAu3xbwJpswUnIC0f7C7jDZBaM7a20trqLdcirP3ZCn4A3sfZA72ZBJZAuDnHRfWVR1Qvcgyr9AJeT0MBBVh04aG89ccnpdlfO7FxkbmNZALQXmMistPAPqjTZBZB7aLJfbz3kgI1lsYVGvLWTW73rGGmAZDZD';
    }
  }, []);

  return <>{children}</>;
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PixelLoader>
    <App />
    </PixelLoader>
  </React.StrictMode>
);
