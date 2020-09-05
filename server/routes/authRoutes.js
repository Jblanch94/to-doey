const express = require('express');

const {
  authRegistration,
  authLogin,
  authIsAuthenticated,
} = require('../controllers/authController');
const authorization = require('../middlewares/authorization');

const router = express.Router();

router.post('/register', authRegistration);

router.post('/login', authLogin);

router.get('/is-authenticated', authorization, authIsAuthenticated);

module.exports = router;
