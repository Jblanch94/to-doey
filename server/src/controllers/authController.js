const validateBody = require('../utils/auth/validateBody');
const validateEmail = require('../utils/auth/validateEmail');
const validateName = require('../utils/auth/validateName');
const validatePassword = require('../utils/auth/validatePassword');
const hashPassword = require('../utils/auth/hashPassword');
const getUserByEmail = require('../utils/user/getUserByEmail');
const registerUser = require('../utils/auth/registerUser');
const generateJwt = require('../utils/auth/generateJwt');
const verifyPassword = require('../utils/auth/verifyPassword');
const getUserPasswordAndEmail = require('../utils/user/getUserPasswordAndEmail');

const authRegistration = async (req, res) => {
  //destructure body to get name, email and password
  const { email, name, password } = req.body;

  //check for missing information from body
  const isValidBody = validateBody(req.body, req);
  if (!isValidBody) {
    return res.send('Missing Registration Information!');
  }

  //validate email, name  and password
  const isValidEmail = validateEmail(email);
  if (!isValidEmail) {
    return res.send('Invalid Email!');
  }

  const isValidName = validateName(name);
  if (!isValidName) {
    return res.send('Invalid Name!');
  }

  const isValidPassword = validatePassword(password);
  if (!isValidPassword) {
    return res.send('Invalid Password!');
  }

  //query database for user information to make sure it is unique
  try {
    const uniqueUser = await getUserByEmail(email);

    //if not unique then send back error
    if (uniqueUser.rows.length) {
      return res.status(401).send('Email Already Exists');
    }

    //hash the password
    const hashedPassword = await hashPassword(password);

    //save the user information in database
    const newUser = await registerUser(email, name, hashedPassword);
    const data = newUser.rows[0];

    //send token back to user
    const token = generateJwt(data.user_id);

    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error!');
  }
};

const authLogin = async (req, res) => {
  //destructure the email and password from the request body
  const { email, password } = req.body;

  //return error if email and password were not provided
  const isValidBody = validateBody(req.body, req);
  if (!isValidBody) {
    return res.status(400).send('Missing login credentials.');
  }

  //query database for email provided
  try {
    const user = await getUserPasswordAndEmail(email);
    console.log(user);
    //if email was not found return error
    if (!user.rows.length) {
      return res.status(401).send('Error, login credentials were incorrect!');
    }
    const hashedPassword = user.rows[0].user_password;

    //compare the password provided to the password for that particular email
    const validPassword = await verifyPassword(password, hashedPassword);

    //return error if the password is incorrect
    if (!validPassword) {
      return res.status(401).send('Incorrect login credentials!');
    }

    console.log('userId', user.rows[0].user_id);

    //generate jwt token for user since credentials match
    const token = generateJwt(user.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const authIsAuthenticated = (req, res) => {
  if (!req.user) {
    return res.status(403).send('Not Authenticated');
  }

  res.json({ authenticated: true });
};

module.exports = { authRegistration, authLogin, authIsAuthenticated };
