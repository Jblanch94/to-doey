import { REGISTER_USER, LOGIN_USER, AUTH_ERROR } from "./types";
import axiosAuth from "../axios/axiosAuth";

export const registerUser = (formValues) => {
  return async (dispatch) => {
    try {
      const response = await axiosAuth.post("/register", formValues);
      const data = response.data;

      //set the token in session storage
      sessionStorage.setItem("token", data.token);
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
      const response = await axiosAuth.post("/login", formValues);

      //set token in session storage
      sessionStorage.setItem("token", response.data.token);
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
