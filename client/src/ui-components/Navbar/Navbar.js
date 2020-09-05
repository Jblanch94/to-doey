import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions';

import './Navbar.css';

const Navbar = (props) => {
  function handleClick() {
    props.logout();

    //remove token from session storage
    sessionStorage.removeItem('token');
  }

  return !props.auth.isAuthenticated ? (
    <header className="header">
      <nav className="navbar navbar-expand-lg  justify-content-between background">
        <Link className="navbar-brand brand-text" to="/">
          Todoey
        </Link>
        <div className="d-flex">
          <Link className="nav-link justify-content-end link-text" to="/">
            Home
          </Link>
          <Link className="nav-link link-text" to="/login">
            Login
          </Link>
        </div>
      </nav>
    </header>
  ) : (
    <header>
      <nav className="navbar navbar-expand-lg justify-content-between background">
        <Link className="navbar-brand brand-text" to="/">
          Todoey
        </Link>
        <div className="d-flex">
          <Link className="nav-link justify-content-end link-text mr-5" to="/">
            Home
          </Link>
          <form className="form-inline mr-3">
            <button
              className="btn btn-lg button-logout"
              type="button"
              onClick={handleClick}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
