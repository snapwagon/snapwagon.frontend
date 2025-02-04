import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as reducers from '../reducers';

import ErrorBoundary from './ErrorBoundary';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
    isAuthenticated ? (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}
      />
    )
  )}
  />
);
const mapStateToProps = (state) => ({
  isAuthenticated: reducers.isAuthenticated(state)
});
export default connect(mapStateToProps, null)(PrivateRoute);
