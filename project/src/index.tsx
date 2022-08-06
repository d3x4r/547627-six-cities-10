import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components';
import { favorites } from './mocks/favorites';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App favorites={favorites} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);
