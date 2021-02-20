import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import makeServer from './server/server';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer/reducer';
import thunk from 'redux-thunk';
import withErrorBoundary from './containers/with-error-boundary';

const initialState = {
  tasks: [],
  loading: true,
  searchKeyword: ``,
  filter: `All`,
  hasError: false,
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

makeServer();

const AppWrapped = withErrorBoundary(App);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppWrapped />
      </Provider>
    </React.StrictMode>,
    document.getElementById(`root`)
);
