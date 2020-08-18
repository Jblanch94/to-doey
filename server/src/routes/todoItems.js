const express = require('express');

const {
  addNewTodo,
  deleteTodo,
  updateTodo,
} = require('../controllers/todoItemController');
const authorization = require('../middlewares/authorization');

const router = express.Router();

//add a new todo to a specific list
router.post('/:id', authorization, addNewTodo);

//delete a todo from a specific list
router.delete('/:listId/:todoId', authorization, deleteTodo);

//update a certain todo on a certain list
router.patch('/:listId/:todoId', authorization, updateTodo);

module.exports = router;
