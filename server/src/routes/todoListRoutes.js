const express = require('express');

const authorization = require('../middlewares/authorization');
const pool = require('../db/config');

const router = express.Router();

router.post('/', authorization, async (req, res) => {
  //destructure request body for name of the list and user id from req.user
  const { listName } = req.body;
  const { userId } = req.user;

  if (!listName) {
    return res.status(400).send('Missing list information');
  }

  if (!userId) {
    return res.status(403).send('Authorization error');
  }

  try {
    //insert new list into database for particular user
    const newList = await pool.query(
      'INSERT INTO todo_lists (todo_list_name, fk_user_id) VALUES($1, $2) RETURNING *',
      [listName, userId]
    );

    const data = newList.rows[0];

    //send back list just created
    res.status(201).json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//get all lists of todos for authorized user
router.get('/', authorization, async (req, res) => {
  //destructure user id from req.user
  const { userId } = req.user;

  if (!userId) {
    res.status(403).json('Authorization Error');
  }

  //query database to get list(s) for the autorized user
  try {
    const query =
      'SELECT tdl.todo_list_id, tdl.todo_list_name, u.user_id, user_name FROM todo_lists tdl LEFT JOIN users u ON u.user_id = tdl.fk_user_id WHERE u.user_id = $1';
    const lists = await pool.query(query, [userId]);

    //send back all lists to user with user information
    res.json(lists.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

router.patch('/:id', authorization, async (req, res) => {
  const { id } = req.params;
  const { listName } = req.body;

  if (!listName) {
    return res.send('Missing Information.');
  }

  try {
    const query =
      'UPDATE todo_lists SET todo_list_name = $1 WHERE todo_list_id = $2 RETURNING *';
    const updatedListName = await pool.query(query, [listName, id]);
    const data = updatedListName.rows[0];
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
