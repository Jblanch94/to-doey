import { FETCH_LISTS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return action.payload;
    default:
      return state;
  }
};
