const express = require('express');
const bcrypt = require('bcrypt');

const pool = require('../db/config');
const authorization = require('../middlewares/authorization');

const router = express.Router();

router.get('/current-user', authorization, async (req, res) => {
  //destrucutre id of user off req object from authorization middleware
  const { userId } = req.user;

  //query database for specific user and send back the current user with expiration times
  try {
    const current_user = await pool.query(
      'SELECT user_id, user_email FROM users WHERE user_id = $1',
      [userId]
    );

    const user_data = current_user.rows[0];
    const resObj = { ...user_data };
    res.json(resObj);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

router.get('/is-authenticated', authorization, (req, res) => {
  if (!req.user) {
    return res.status(403).json('Not Authenticated');
  }
  res.json(true);
});

module.exports = router;
