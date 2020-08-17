module.exports = function (name) {
  const length = name.length;
  if (length < 5) {
    return false;
  }
  return true;
};
