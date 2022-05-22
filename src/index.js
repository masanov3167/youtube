import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TokenProvider } from './assets/Components/Context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
      <App />
      </TokenProvider>
   </BrowserRouter >
  </React.StrictMode>
);