import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import App from './App';

let store = createStore(reducer, applyMiddleware(thunk))



ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

