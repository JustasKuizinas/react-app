import './style.scss';

import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/App/App';
import allReducers from './redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window['__REDUX_DEVTOOLS_EXTENSION__'] &&
    window['__REDUX_DEVTOOLS_EXTENSION__']()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app-wrapper')
);
