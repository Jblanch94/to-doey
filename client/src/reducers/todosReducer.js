import { FETCH_TODOS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
}
