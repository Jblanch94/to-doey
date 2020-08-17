import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Register from './Register/Register';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Navbar from './Navbar/Navbar';

const App = (props) => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/register"
            render={(routeProps) =>
              !props.auth.authenticated ? (
                <Register {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={(routeProps) =>
              !props.auth.authenticated ? (
                <Login {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/"
            render={(routeProps) =>
              props.auth.authenticated ? (
                <Dashboard {...routeProps} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(App);
