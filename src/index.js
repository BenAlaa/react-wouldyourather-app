import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { Provider } from 'react-redux';
import createStore from './Store';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


