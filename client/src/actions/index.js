import { REGISTER, LOGIN, LOGOUT } from './types';

export const registerUser = (formData) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      localStorage.setItem('token', data.token);

      dispatch({
        type: REGISTER,
        payload: data.token,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const loginUser = (formData) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      localStorage.setItem('token', data.token);

      dispatch({
        type: LOGIN,
        payload: data.token,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const logout = () => {
  //clear local storage
  localStorage.removeItem('token');
  return {
    type: LOGOUT,
  };
};
