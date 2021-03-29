import '../whyr'; // <--- first importimport ReactDOM from 'react-dom';
import './style.scss';
/// <reference types="@welldone-software/why-did-you-render" />

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app-wrapper')
);
 