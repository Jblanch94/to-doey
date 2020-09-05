const pool = require('../../db/config');

module.exports = async function (email, name, password) {
  const query =
    'INSERT INTO users (user_email, user_name, user_password) VALUES($1, $2, $3) RETURNING * ';
  try {
    return await pool.query(query, [email, name, password]);
  } catch (err) {
    console.error(err.message);
  }
};
