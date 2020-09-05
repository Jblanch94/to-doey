module.exports = function ({ email, name, password }, req) {
  if ((!email || !name || !password) && req.path === '/register') {
    return false;
  }

  if ((!email || !password) && req.path === '/login') {
    return false;
  }
  return true;
};
