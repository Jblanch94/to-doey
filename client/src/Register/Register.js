import React, { Fragment, useState, useEffect } from 'react';

import './Register.css';

const Register = (props) => {
  return (
    <Fragment>
      <section className="background-container">
        <div className="container mt-5 register-container">
          <h1 className="title mt-5">Register</h1>
          <form>
            <div className="form-group form-group-lg mx-5">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                className="form-control  input-rounded center input-bg"
                placeholder="Enter email..."
                id="email"
              />
            </div>
            <div className="form-group form-group-lg mx-5">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                className="form-control  input-rounded center input-bg"
                placeholder="Enter name..."
              />
            </div>
            <div className="form-group form-group-lg mx-5">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control  input-rounded center input-bg"
                placeholder="Enter password..."
                id="password"
              />
            </div>
            <div className="ml-5">
              <button
                type="submit"
                className="btn button-register font-weight-bold text-uppercase"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Register;
