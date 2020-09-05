import { FETCH_TODOS, UPDATE_TODO, ADD_TODO } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.todo_id === action.payload.todo_id) {
          return {
            ...todo,
            completed: action.payload.completed,
            description: action.payload.todo_description,
          };
        }
        return todo;
      });
    case ADD_TODO:
      return [].concat(state, action.payload);
    default:
      return [].concat(state);
  }
}
