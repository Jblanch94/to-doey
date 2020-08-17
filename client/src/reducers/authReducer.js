import { REGISTER, LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  token: null,
  authenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, token: action.payload, authenticated: true };
    case LOGIN:
      return { ...state, token: action.payload, authenticated: true };
    case LOGOUT:
      return { ...state, token: null, authenticated: false };
    default:
      return state;
  }
};
