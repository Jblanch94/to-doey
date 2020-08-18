const express = require('express');

const authorization = require('../middlewares/authorization');
const {
  createNewList,
  fetchLists,
  updateList,
} = require('../controllers/todoListController');

const router = express.Router();

router.post('/', authorization, createNewList);

//get all lists of todos for authorized user
router.get('/', authorization, fetchLists);

router.patch('/:id', authorization, updateList);

module.exports = router;
