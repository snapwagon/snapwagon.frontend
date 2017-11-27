import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Container, Navbar, NavbarBrand, Button,
  Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';
import * as reducers from '../../reducers';


class HeaderContainer extends React.Component {
  constructor(props) {
   super(props);

   this.toggleNavbar = this.toggleNavbar.bind(this);
   this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Navbar className="header" color="faded" light expand="md">
        <Container>
        <NavbarBrand tag={Link} to="/">snapwagon</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={this.state.collapsed} navbar>
          { this.props.isAuthenticated ?
            (
              <Nav className="nav navbar-nav float-xs-right ml-auto" navbar>
                <NavItem className="border-left-1">
                  <NavLink tag={Link} className="nav-link" to="/dashboard/" activeClassName="active">Dashboard</NavLink>
                </NavItem>
              </Nav>
            ) :
            (
              <Nav className="nav navbar-nav float-xs-right ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} className="nav-link" to="/features/" activeClassName="active">Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="nav-link" to="/pricing/" activeClassName="active">Pricing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="nav-link" to="/customers/" activeClassName="active">Customers</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="nav-link" to="/resources/" activeClassName="active">Resources</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="nav-link" to="/support/" activeClassName="active">Support</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="nav-link" to="/login/" activeClassName="active">Login</NavLink>
                </NavItem>
                <Button
                  tag={Link}
                  to="/pricing/"
                  color="primary"
                  size="md"
                >
                  Sign Up
                </Button>
              </Nav>

            )
          }
        </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const {
  string
} = PropTypes;

HeaderContainer.propTypes = {
  componentName: string
};

HeaderContainer.defaultProps = {
  componentName: 'Header'
};

const mapStateToProps = (state) => ({
  isAuthenticated: reducers.isAuthenticated(state)
});

const Header = withRouter(
  connect(mapStateToProps, null)(HeaderContainer)
);

export default Header
