module.exports = function (password) {
  const length = password.length;
  let upperCaseCount = 0;
  //check that the password is at least 8 characters
  if (length < 8) {
    return false;
  }

  //contains at least one uppercase letter
  for (let i = 0; i < length; i++) {
    if (password[i] == password[i].toUpperCase()) {
      upperCaseCount++;
    }
    console.log(upperCaseCount);
  }

  if (upperCaseCount < 1) {
    return false;
  }

  //contains at least one special character
  const regexSymbols = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;
  const containsSpecialChar = regexSymbols.test(password);
  console.log(containsSpecialChar);
  if (!containsSpecialChar) {
    return false;
  }
  return true;
};
