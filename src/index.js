import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduserStore from './reduser'



const root = ReactDOM.createRoot(document.getElementById('root'));
let appStore = createStore(reduserStore)

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
    <App />
    </Provider>
  </React.StrictMode>
);


