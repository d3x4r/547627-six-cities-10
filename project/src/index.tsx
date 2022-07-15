import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/';
import { offers } from './mocks/offers';
import { favorites } from './mocks/favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App places={offers} favorites={favorites} />
  </React.StrictMode>,
);
