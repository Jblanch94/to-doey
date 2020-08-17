import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import InputField from '../shared-ui/InputField';
import FormButton from '../shared-ui/FormButton';
import '../Register/Register.css';
import { loginUser } from '../../actions';

const Login = (props) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  function onInputChange(evt) {
    setInputs({ ...inputs, [evt.target.name]: evt.target.value });
  }

  function onFormSubmit(evt) {
    evt.preventDefault();

    //call action creator to login
    props.loginUser(inputs);
  }

  return (
    <Fragment>
      <h3 className="mt-5 title is-1 text-center">Login</h3>
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
          label="Password"
          inputName="password"
          inputType="password"
          placeholder="enter your password..."
          value={password}
          onChange={onInputChange}
        />
        <FormButton buttonName="Login" />
      </form>
    </Fragment>
  );
};

export default connect(null, { loginUser })(Login);
