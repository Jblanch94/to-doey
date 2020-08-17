import React, { Fragment, useState } from 'react';
import './Register.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { registerUser } from '../../actions';
import FormButton from '../shared-ui/FormButton';
import InputField from '../shared-ui/InputField';

const Register = (props) => {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    password: '',
  });

  const { email, password, name } = inputs;

  function onInputChange(evt) {
    setInputs({ ...inputs, [evt.target.name]: evt.target.value });
  }

  async function onFormSubmit(evt) {
    evt.preventDefault();
    props.registerUser(inputs);
  }

  function renderContent() {
    if (!props.auth.authenticated) {
      return (
        <Fragment>
          <h3 className="mt-5 title is-1 text-center">Register</h3>
          <form onSubmit={onFormSubmit}>
            <InputField
              label="Email"
              inputName="email"
              inputType="email"
              placeholder="enter your email..."
              value={email}
              onChange={onInputChange}
            />

            <InputField
              label="Name"
              inputName="name"
              inputType="text"
              placeholder="enter your name..."
              value={name}
              onChange={onInputChange}
            />

            <InputField
              label="Password"
              inputName="password"
              inputType="password"
              placeholder="enter your password..."
              value={password}
              onChange={onInputChange}
            />
            <FormButton buttonName="Register" />
          </form>
        </Fragment>
      );
    }
    return <Redirect to="/" />;
  }

  return <div>{renderContent()}</div>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { registerUser })(Register);
