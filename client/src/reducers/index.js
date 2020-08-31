import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import listsReducer from './listsReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  lists: listsReducer,
  todos: todosReducer,
});
