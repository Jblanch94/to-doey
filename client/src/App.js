import React, { Fragment, useEffect } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { checkAuthStatus } from './actions/';

import Navbar from './ui-components/Navbar/Navbar';
import Register from './Register/Register';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

import './App.css';

const App = ({ auth, checkAuthStatus }) => {
  const { isAuthenticated } = auth;

  useEffect(() => {
    //only call if there is a token in session storage, need to verify authentication
    if (sessionStorage.getItem('token')) {
      checkAuthStatus();
    }
  }, [auth.token, checkAuthStatus]);
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route
            render={(routeProps) =>
              !isAuthenticated ? (
                <Register {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
            }
            path="/register"
          />
          <Route
            path="/login"
            render={(routeProps) =>
              !isAuthenticated ? <Login {...routeProps} /> : <Redirect to="/" />
            }
          />
          <Route
            path="/"
            render={(routeProps) =>
              isAuthenticated ? (
                <Dashboard {...routeProps} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </Router>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { checkAuthStatus })(App);
