const pool = require('../../db/config');

module.exports = function (userId) {
  const query =
    'SELECT tdl.todo_list_id, tdl.todo_list_name, u.user_id, user_name FROM todo_lists tdl LEFT JOIN users u ON u.user_id = tdl.fk_user_id WHERE u.user_id = $1';
  return pool.query(query, [userId]);
};
