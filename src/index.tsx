import './style.scss';

import ReactDOM from 'react-dom';
import React from 'react';
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
