const express = require('express');

const {
  addNewTodo,
  deleteTodo,
  updateTodo,
  fetchTodos,
} = require('../controllers/todoItemController');
const authorization = require('../middlewares/authorization');

const router = express.Router();

//fetch todos from a specific list
router.get('/:id', authorization, fetchTodos);

//add a new todo to a specific list
router.post('/:id', authorization, addNewTodo);

//delete a todo from a specific list
router.delete('/:listId/:todoId', authorization, deleteTodo);

//update a certain todo on a certain list
router.patch('/:listId/:todoId', authorization, updateTodo);

module.exports = router;
