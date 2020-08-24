import {
  REGISTER_USER,
  LOGIN_USER,
  AUTH_ERROR,
  IS_AUTHENTICATED,
  LOGOUT,
} from '../actions/types';

const initialState = {
  token: null,
  isAuthenticated: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        token: action.payload.token,
        error: null,
      };
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        error: null,
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
        token: sessionStorage.getItem('token'),
      };
    case LOGOUT:
      return { ...state, isAuthenticated: false, error: null };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
