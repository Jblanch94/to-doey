module.exports = function (email) {
  if (!email) {
    return false;
  }
  const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validEmail = regex.test(email);
  console.log(validEmail);
  if (!validEmail) {
    return false;
  }
  return true;
};
