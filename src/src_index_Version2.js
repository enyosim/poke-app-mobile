import React from 'react';
import ReactDOM from 'react-dom/client';
// 👇 Importa los estilos de Tailwind (debe estar antes que App)
import './index.css';
import App from './App';

// Para React v18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si usas una versión antigua de React:
// ReactDOM.render(<App />, document.getElementById('root'));