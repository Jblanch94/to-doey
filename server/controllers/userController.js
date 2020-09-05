const getUserIdAndEmail = require('../utils/user/getUserIdAndEmail');

const getCurrentUser = async (req, res) => {
  const { userId } = req.user;

  //get the user data from database given the user id
  try {
    const currentUser = await getUserIdAndEmail(userId);
    const data = currentUser.rows[0];
    res.json({ ...data });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
};

module.exports = {
  getCurrentUser,
};
