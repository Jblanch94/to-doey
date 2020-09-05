const bcrypt = require('bcrypt');

module.exports = async function (password) {
  const saltRounds = 8;
  return await bcrypt.hash(password, saltRounds);
};
