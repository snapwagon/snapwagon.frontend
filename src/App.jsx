import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import {organization} from './actions/organization';
import {serverOrg} from './reducers/org';

class App extends Component {
  componentDidMount() {
    this.props.fetchOrg();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.organization}
      </div>
    );
  }
}

App.propTypes = {
  organization: PropTypes.shape({
    id: PropTypes.string
  }),
  fetchOrg: PropTypes.func
};

App.defaultProps = {
  organization: undefined
};

export default connect(
  (state) => ({ organization: serverOrg(state) }),
  { fetchOrg: organization }
)(App);
