import { REGISTER_USER } from "../actions/types";

const initialState = {
  token: null,
  isAuthenticated: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};
