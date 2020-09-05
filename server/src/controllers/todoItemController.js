const addTodo = require('../utils/todos/addTodo');
const removeTodo = require('../utils/todos/removeTodo');
const getTodos = require('../utils/todos/getTodos');
const pool = require('../db/config');

const fetchTodos = async (req, res) => {
  const { id } = req.params;

  try {
    //get all the todos
    const todos = await getTodos(id);

    //send back data

    res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const addNewTodo = async (req, res) => {
  //destructure body for description, completed from request body and list id from params
  const { description } = req.body;
  let { completed } = req.body;
  const { id } = req.params;

  if (!description) {
    return res.send('Missing Information');
  }

  //insert new to do into database with the given id
  try {
    if (completed === undefined) {
      completed = false;
    }
    const newTodo = await addTodo(description, completed, id);
    const data = newTodo.rows[0];

    //send back newly created todo
    res.status(201).json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const deleteTodo = async (req, res) => {
  const { listId, todoId } = req.params;

  //delete record from specific table
  try {
    const deletedTodo = await removeTodo(todoId, listId);
    const data = deletedTodo.rows[0];

    if (!data) {
      return res.send('Not Found.');
    }
    res.json({ data });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const updateTodo = async (req, res) => {
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
        'UPDATE todos td SET todo_description = $1 FROM todo_lists tdl WHERE td.todo_id = $2 AND tdl.todo_list_id = $3 RETURNING *';
      updatedTodo = await pool.query(query, [description, todoId, listId]);
    }

    if (description === undefined && completed !== undefined) {
      query =
        'UPDATE todos td SET completed = $1 FROM todo_lists tdl WHERE td.todo_id = $2 AND  tdl.todo_list_id = $3 RETURNING *';
      updatedTodo = await pool.query(query, [completed, todoId, listId]);
    }

    const data = updatedTodo.rows[0];
    res.json(data);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
};

module.exports = {
  fetchTodos,
  addNewTodo,
  deleteTodo,
  updateTodo,
};
