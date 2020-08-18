const pool = require('../../db/config');

module.exports = function (todoId, listId) {
  const query =
    'DELETE FROM todos td USING todo_lists tdl WHERE td.todo_id = $1 AND tdl.todo_list_id = $2 RETURNING *';
  return pool.query(query, [todoId, listId]);
};
