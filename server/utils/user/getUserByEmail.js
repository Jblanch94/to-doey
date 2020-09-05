const pool = require('../../db/config');

module.exports = async function (email) {
  const query = 'SELECT user_email FROM users WHERE user_email = $1';
  try {
    return await pool.query(query, [email]);
  } catch (err) {
    console.error(err.message);
  }
};
