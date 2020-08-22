import React, { Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { loginUser } from "../actions";
import "./Login.css";

const Login = (props) => {
  console.log(props.auth);
  function renderInput({ input, meta, placeholder, id, type }) {
    return (
      <Fragment>
        <input
          {...input}
          placeholder={placeholder}
          type={type}
          id={id}
          className="form-control input-rounded input-bg"
        />
        {meta.touched && meta.error && (
          <span className="text-danger">{meta.error}</span>
        )}
      </Fragment>
    );
  }

  function onSubmitForm(formValues) {
    props.loginUser(formValues);
  }

  return (
    <Fragment>
      <section className="background-container">
        <div className="container-small mt-5 login-container">
          {props.auth.error && (
            <div className="text-danger text-bold text-center mt-3">
              <h3>{props.auth.error.data}</h3>
            </div>
          )}
          <h1 className="title mt-5">Login</h1>
          <form onSubmit={props.handleSubmit(onSubmitForm)}>
            <div className="form form-group mx-5">
              <label htmlFor="email">Email Address:</label>
              <Field
                component={renderInput}
                name="email"
                props={{
                  id: "email",
                  placeholder: "Enter email...",
                  type: "email",
                }}
              />
            </div>
            <div className="form form-group mx-5">
              <label htmlFor="password">Password:</label>
              <Field
                component={renderInput}
                name="password"
                props={{
                  id: "password",
                  type: "password",
                  placeholder: "Enter password...",
                }}
              />
            </div>
            <div className="ml-5">
              <button className="btn font-weight-bold text-uppercase button-login">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email required!";
  }

  if (!values.password) {
    errors.password = "Password required!";
  }
  return errors;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const formWrapper = reduxForm({ form: "login", validate })(Login);

export default connect(mapStateToProps, { loginUser })(formWrapper);
