import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions';

const Navbar = ({ auth, logout }) => {
  function renderAuthContent() {
    if (!auth.authenticated) {
      return (
        <Fragment>
          <Link to="/register" className="button is-primary">
            Register
          </Link>
          <Link to="/login" className="button is-primary">
            Login
          </Link>
        </Fragment>
      );
    }
    return (
      <button className="button is-primary" onClick={logOut}>
        Logout
      </button>
    );
  }

  function logOut() {
    logout();
  }

  return (
    <nav className="navbar is-primary">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <i className="fa fa-check ml-3 fa-2x " />
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link to="/profile" className="navbar-item">
            Profile
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">{renderAuthContent()}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
