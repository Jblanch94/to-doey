const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'src/config/config.env' });

module.exports = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  });
};
