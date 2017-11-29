/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import ErrorBoundary from './containers/ErrorBoundary';

const history = createHistory();
const store = configureStore(history);


ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root')
);
registerServiceWorker();
