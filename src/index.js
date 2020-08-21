import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducers from './store/Reducers';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
// Note: this API requires redux@>=3.1.0
const store = createStore(Reducers,
  applyMiddleware(thunk)
);


ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
    <App />
    </Provider>
    </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bi
