import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer/reducer';
import thunk from 'redux-thunk';

const initialState = {
  tasks: [],
  loading: true,
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById(`root`)
);
