import React, { Fragment } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './ui-components/Navbar';
import Register from './Register/Register';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

import './App.css';

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
            path="/dashboard"
            render={(routeProps) => <Dashboard {...routeProps} />}
          />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
