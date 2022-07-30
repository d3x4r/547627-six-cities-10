import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App, ErrorMessage } from './components/';
import { favorites } from './mocks/favorites';
import { store } from './store';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App favorites={favorites} />
      <ErrorMessage />
    </Provider>
  </React.StrictMode>,
);
