import React from 'react';
import ReactDOM from 'react-dom/client';

import Providers from './providers';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
