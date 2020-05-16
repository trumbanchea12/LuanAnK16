import React from 'react';
import { View } from 'react-native';

import { createStore, applyMiddleware } from 'redux';

import App from './src/component/App';
import appReducers from './src/reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
  appReducers,
  applyMiddleware(thunk)
);


export default function Main() {
  return (
    <Provider store = {store} >
      <App />
    </Provider>
  );
}
