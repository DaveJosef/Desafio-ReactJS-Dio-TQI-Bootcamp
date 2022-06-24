import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ResetCSS } from './global/ResetCSS';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ResetCSS />
    <App />
  </React.StrictMode>
);
