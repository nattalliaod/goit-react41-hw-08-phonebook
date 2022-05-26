import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'redux/store';
import { App } from 'components/App/App';
import { Spinner } from 'components/Loader/Loader';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
      <BrowserRouter basename='/goit-react41-hw-08-phonebook/'>
        <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
