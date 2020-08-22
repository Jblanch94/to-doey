import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./ui-components/Navbar/Navbar";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";

import "./App.css";

const App = (props) => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route
            render={(routeProps) => <Register {...routeProps} />}
            path="/register"
          />
          <Route
            path="/login"
            render={(routeProps) => <Login {...routeProps} />}
          />
          <Route
            path="/"
            render={(routeProps) => <Dashboard {...routeProps} />}
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

export default connect(mapStateToProps)(App);
