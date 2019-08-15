import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { carReducer } from './reducers';
import { Provider } from 'react-redux';

import logger from 'redux-logger'

import 'bulma/css/bulma.css';
import './styles.scss';

export const store = createStore(carReducer, applyMiddleware(logger));

const rootElement = document.getElementById('root');
ReactDOM.render( <Provider store={store}> <App /></Provider>, rootElement);
