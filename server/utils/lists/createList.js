const pool = require('../../db/config');

module.exports = function (name, id) {
  const query =
    'INSERT INTO todo_lists (todo_list_name, fk_user_id) VALUES($1, $2) RETURNING *';
  return pool.query(query, [name, id]);
};
