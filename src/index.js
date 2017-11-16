/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import App from './App';
import configureStore from './store';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';

const history = createHistory();
const store = configureStore(history);
ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/login/" component={Login} />
          <PrivateRoute path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root')
);
registerServiceWorker();
