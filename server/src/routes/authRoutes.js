const express = require('express');

const {
  authRegistration,
  authLogin,
  authIsAuthenticated,
} = require('../controllers/authController');
const authorization = require('../middlewares/authorization');

const router = express.Router();

/*
 * @function sends a response for incorrect information or sends back jwt token to authenticate.
 * @param {object} req - Request object from the client that contains information for a new user.
 * @param {object} res - Response object sent back to the client containing the jwt token or error information.
 */
router.post('/register', authRegistration);

router.post('/login', authLogin);

router.get('/is-authenticated', authorization, authIsAuthenticated);

module.exports = router;
