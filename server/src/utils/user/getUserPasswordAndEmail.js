const pool = require('../../db/config');

module.exports = async (email) => {
  const query =
    'SELECT user_email, user_password FROM users WHERE user_email = $1';
  try {
    return await pool.query(query, [email]);
  } catch (err) {
    console.error(err.message);
  }
};
