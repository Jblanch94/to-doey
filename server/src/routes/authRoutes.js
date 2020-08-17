const express = require('express');
const bcrypt = require('bcrypt');

const {
  authRegistration,
  authLogin,
} = require('../controllers/authController');

const pool = require('../db/config');
const generateJwt = require('../utils/auth/generateJwt');

const router = express.Router();

/*
 * @function sends a response for incorrect information or sends back jwt token to authenticate.
 * @param {object} req - Request object from the client that contains information for a new user.
 * @param {object} res - Response object sent back to the client containing the jwt token or error information.
 */
router.post('/register', authRegistration);

router.post('/login', authLogin);

module.exports = router;
