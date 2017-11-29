import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {organization} from '../../actions/organization';
import {serverOrg} from '../../reducers';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this.props.fetchOrg();
  }

  render() {
    return (
      <div className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        { this.props.organization &&
          this.props.organization.map((org) => {
            return (
              <p key={org.id}>{org.name}</p>
            );
          })
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  organization: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string
  })),
  fetchOrg: PropTypes.func
};

Dashboard.defaultProps = {
  organization: undefined
};

export default connect(
  (state) => ({ organization: serverOrg(state) }),
  { fetchOrg: organization }
)(Dashboard);
