const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: 'server / src / config / config.env' });

module.exports = async function (req, res, next) {
  //get token from the header
  const bearerToken = req.headers['authorization'];
  console.log('headers', req.headers);
  console.log('token', bearerToken);

  //get jwt from the bearer header
  const token = bearerToken.split(' ')[1];

  //if no token is found then send unauthorized user
  if (!token) {
    return res.status(403).send('Unauthorized');
  }

  //decode the jwt to get the user id from the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    console.error(err.message);
  }
  next();
};
