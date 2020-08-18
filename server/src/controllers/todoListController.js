const createList = require('../utils/lists/createList');
const getAllLists = require('../utils/lists/getAllLists');
const updateList = require('../utils/lists/updateList');

const createNewList = async (req, res) => {
  //destructure request body for name of the list and user id from req.user
  const { listName } = req.body;
  const { userId } = req.user;

  //send error if missing any information
  if (!listName) {
    return res.status(400).send('Missing list information');
  }

  if (!userId) {
    return res.status(403).send('Authorization error');
  }

  try {
    //insert new list into database for particular user
    const newList = await createList(listName, userId);

    const data = newList.rows[0];

    //send back list just created
    res.status(201).json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const fetchLists = async (req, res) => {
  //destructure user id from req.user
  const { userId } = req.user;

  if (!userId) {
    res.status(403).json('Authorization Error');
  }

  //query database to get list(s) for the autorized user
  try {
    const lists = await getAllLists(userId);

    //send back all lists to user with user information
    res.json(lists.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
};

const updateList = async (req, res) => {
  const { id } = req.params;
  const { listName } = req.body;

  if (!listName) {
    return res.send('Missing Information.');
  }

  try {
    const updatedListName = await updateList(listName, id);
    const data = updatedListName.rows[0];
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  createNewList,
  fetchLists,
  updateList,
};
