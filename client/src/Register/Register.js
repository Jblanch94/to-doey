import React, { Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { registerUser } from "../actions";

import "./Register.css";

const Register = (props) => {
  function renderInput({ input, type, placeholder, id, meta }) {
    return (
      <Fragment>
        <input
          {...input}
          type={type}
          className="form-control  input-rounded center input-bg"
          placeholder={placeholder}
          id={id}
        />
        {meta.touched && meta.error && (
          <span className="text-danger">{meta.error}</span>
        )}
      </Fragment>
    );
  }

  //call action to register user and authentication
  function onSubmit(values) {
    props.registerUser(values);
  }

  return (
    <Fragment>
      <section className="background-container">
        <div className="container-sm mt-5 register-container">
          {props.auth.error && (
            <div className="mt-3  text-center">
              <h1 className="text-bold text-danger">{props.auth.error.data}</h1>
            </div>
          )}
          <h1 className="title mt-5">Register</h1>
          <form onSubmit={props.handleSubmit(onSubmit)}>
            <div className="form-group form-group-lg mx-5">
              <label htmlFor="email">Email address:</label>
              <Field
                name="email"
                component={renderInput}
                props={{
                  id: "email",
                  type: "email",
                  placeholder: "Enter email...",
                }}
              />
            </div>
            <div className="form-group form-group-lg mx-5">
              <label htmlFor="name">Name: </label>

              <Field
                name="name"
                component={renderInput}
                props={{
                  id: "name",
                  type: "text",
                  placeholder: "Enter name...",
                }}
              />
            </div>
            <div className="form-group form-group-lg mx-5">
              <label htmlFor="password">Password:</label>
              <Field
                name="password"
                component={renderInput}
                props={{
                  id: "password",
                  type: "password",
                  placeholder: "Enter password...",
                }}
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
            <div className=" font-italic">
              <p style={{ color: "#2C9057 " }} className="text-center">
                * Password must be at least 8 characters long. It must contain
                at least one special character, one number, one uppercase and
                lowercase letter.
              </p>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

const validate = (formValues) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
  const errors = {};

  //validation for email field
  if (!formValues.email) {
    errors.email = "Email is required!";
  } else if (!emailRegex.test(formValues.email)) {
    errors.email = "Invalid email!";
  }

  //validation for name field
  if (!formValues.name) {
    errors.name = "Name is required!";
  } else if (formValues.name.length < 5) {
    errors.name = "Name is too short!";
  }

  //validation for password field
  if (!passwordRegex.test(formValues.password)) {
    errors.password = "Invalid password!";
  }

  return errors;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const formWrapper = reduxForm({ form: "register", validate })(Register);

export default connect(mapStateToProps, { registerUser })(formWrapper);
