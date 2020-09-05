const pool = require('../../db/config');

module.exports = function (userId) {
  const query = 'SELECT user_id, user_email FROM users WHERE user_id = $1';

  return pool.query(query, userId);
};
