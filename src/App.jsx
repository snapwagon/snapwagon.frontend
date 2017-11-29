import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';
import Dashboard from './containers/Dashboard/Dashboard';
import Home from './containers/Home/Home';
import { Container } from 'reactstrap';

import Header from './containers/Header/Header';
import ErrorBoundary from './containers/ErrorBoundary';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <Switch>
          <Route exact path="/login/" component={Login} />
          <PrivateRoute path="/dashboard/" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {

};

App.defaultProps = {

};

export default App;
