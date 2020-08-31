const pool = require('../../db/config');

module.exports = function (id) {
  const query =
    'SELECT td.todo_description, td.completed, td.todo_id FROM todos td JOIN todo_lists tdl ON tdl.todo_list_id = td.fk_todo_list_id WHERE fk_todo_list_id = $1';
  return pool.query(query, [id]);
};
