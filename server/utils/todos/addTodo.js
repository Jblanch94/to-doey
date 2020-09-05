const pool = require('../../db/config');

module.exports = function (description, completed, id) {
  const query =
    'INSERT INTO todos (todo_description, completed, fk_todo_list_id) VALUES($1, $2, $3)  RETURNING *';
  return pool.query(query, [description, completed, id]);
};
