const express = require('express');
const pool = require('../db/config');
const authorization = require('../middlewares/authorization');

const router = express.Router();

//add a new todo to a specific list
router.post('/:id', authorization, async (req, res) => {
  //destructure body for description, completed from request body and list id from params
  const { description, completed } = req.body;
  const { id } = req.params;

  if (!description) {
    return res.send('Missing Information');
  }

  //insert new to do into database with the given id
  try {
    const query =
      'INSERT INTO todos (todo_description, completed, fk_todo_list_id) VALUES($1, $2, $3)  RETURNING *';
    const newTodo = await pool.query(query, [
      description,
      completed || false,
      id,
    ]);
    const data = newTodo.rows[0];

    //send back newly created todo
    res.status(201).json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//delete a todo from a specific list
router.delete('/:listId/:todoId', authorization, async (req, res) => {
  const { listId, todoId } = req.params;

  //delete record from specific table
  try {
    const query =
      'DELETE FROM todos td USING todo_lists tdl WHERE td.todo_id = $1 AND tdl.todo_list_id = $2 RETURNING *';
    const deletedTodo = await pool.query(query, [todoId, listId]);
    const data = deletedTodo.rows[0];

    if (!data) {
      return res.send('Not Found.');
    }
    res.json({ data });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//update a certain todo on a certain list
router.patch('/:listId/:todoId', authorization, async (req, res) => {
  const { listId, todoId } = req.params;
  const { description, completed } = req.body;

  if (description === undefined && completed === undefined) {
    return res.send('No update values provided.');
  }

  //query database to update data

  try {
    let query;
    let updatedTodo;
    if (description !== undefined && completed !== undefined) {
      query =
        'UPDATE todos td SET todo_description = $1, completed = $2 FROM todo_lists tdl WHERE td.todo_id = $3 AND tdl.todo_list_id = $4 RETURNING *';
      updatedTodo = await pool.query(query, [
        description,
        completed,
        todoId,
        listId,
      ]);
    }

    if (description !== undefined && completed === undefined) {
      query =
        'UPDATE todos td SET todo_description = $1 FROM todo_lists tdl WHERE td.todo_id = $2 AND tdl.todo_list_id = $4 RETURNING *';
      updatedTodo = await pool.query(query, [description, todoId, listId]);
    }

    if (description === undefined && completed !== undefined) {
      query =
        'UPDATE todos td SET completed = $1 FROM todo_lists tdl WHERE td.todo_id = $2 AND  tdl.todo_list_id = $4 RETURNING *';
      updatedTodo = await pool.query(query, [completed, todoId, listId]);
    }

    const data = updatedTodo.rows[0];
    res.json(data);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
