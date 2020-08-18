const pool = require('../../db/config');

module.exports = function (name, id) {
  const query =
    'UPDATE todo_lists SET todo_list_name = $1 WHERE todo_list_id = $2 RETURNING *';
  return pool.query(query, [name, id]);
};
