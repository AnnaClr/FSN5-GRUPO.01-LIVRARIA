// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';
import GlobalStyles from './Styles/GlobalStyles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <GlobalStyles />
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);