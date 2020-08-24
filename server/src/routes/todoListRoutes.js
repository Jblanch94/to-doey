const express = require('express');

const authorization = require('../middlewares/authorization');
const {
  createNewList,
  fetchLists,
  updateTodoList,
} = require('../controllers/todoListController');

const router = express.Router();

router.post('/', authorization, createNewList);

//get all lists of todos for authorized user
router.get('/', authorization, fetchLists);

router.patch('/:id', authorization, updateTodoList);

module.exports = router;
