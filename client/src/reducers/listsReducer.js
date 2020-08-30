import { FETCH_LISTS, ADD_LIST } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return [].concat(state, action.payload);
    default:
      return state;
  }
};
