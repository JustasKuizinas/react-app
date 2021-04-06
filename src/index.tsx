// import '../whyr'; // <--- first importimport ReactDOM from 'react-dom';
/// //<reference types="@welldone-software/why-did-you-render" />

import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import allReducers from './redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app-wrapper')
);
