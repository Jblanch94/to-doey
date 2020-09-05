const bcrypt = require('bcrypt');

module.exports = async function (providedPassword, userPassword) {
  try {
    const valid = await bcrypt.compare(providedPassword, userPassword);
    return valid;
  } catch (err) {
    console.error(err.message);
  }
};
