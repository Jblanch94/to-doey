import {
  REGISTER_USER,
  LOGIN_USER,
  AUTH_ERROR,
  IS_AUTHENTICATED,
  LOGOUT,
  FETCH_LISTS,
  FETCH_TODOS,
} from './types';
import axiosAuth from '../axios/axiosAuth';
import axiosList from '../axios/axiosList';
import axiosTodoItems from '../axios/axiosTodoItems';

export const registerUser = (formValues) => {
  return async (dispatch) => {
    try {
      const response = await axiosAuth.post('/register', formValues);
      const data = response.data;

      //set the token in session storage
      sessionStorage.setItem('token', data.token);
      return dispatch({
        type: REGISTER_USER,
        payload: data,
      });
    } catch (err) {
      return dispatch({
        type: AUTH_ERROR,
        payload: err.response,
      });
    }
  };
};

export const loginUser = (formValues) => {
  return async (dispatch) => {
    try {
      const response = await axiosAuth.post('/login', formValues);

      //set token in session storage
      sessionStorage.setItem('token', response.data.token);
      return dispatch({
        type: LOGIN_USER,
        payload: response.data,
      });
    } catch (err) {
      return dispatch({
        type: AUTH_ERROR,
        payload: err.response,
      });
    }
  };
};

export const checkAuthStatus = () => {
  return async (dispatch) => {
    try {
      const response = await axiosAuth.get('/is-authenticated', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      });
      return dispatch({
        type: IS_AUTHENTICATED,
        payload: response.data,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const logout = () => {
  //return object with designated type
  return {
    type: LOGOUT,
  };
};

export const fetchLists = () => {
  return async (dispatch) => {
    try {
      const response = await axiosList.get('/', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      });

      const data = response.data;

      return dispatch({
        type: FETCH_LISTS,
        payload: data,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const addList = (name) => {
  return async (dispatch) => {
    try {
      const response = await axiosList.post('/', name, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      });

      const data = response.data;

      return dispatch({
        type: FETCH_LISTS,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const fetchTodos = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosTodoItems.get(`/${id}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      });

      const data = response.data;
      return dispatch({
        type: FETCH_TODOS,
        payload: data,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};
