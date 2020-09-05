const express = require('express');

const authorization = require('../middlewares/authorization');
const { getCurrentUser } = require('../controllers/userController');

const router = express.Router();

router.get('/current-user', authorization, getCurrentUser);

module.exports = router;
