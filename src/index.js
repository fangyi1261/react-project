import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import './index.css';
import reportWebVitals from './reportWebVitals';

import RouterConfig from './router/index';

ReactDOM.render(
  <React.StrictMode>
    <RouterConfig />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { Provider } from 'react-redux';
// import store from './redux/store/index';

// ReactDOM.render(
//   <Provider store={store}></Provider>,
//   document.getElementById('root')
// );