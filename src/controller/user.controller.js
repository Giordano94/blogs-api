const userService = require('../service/user.service');

const insertUser = async (req, res) => {
  const { type, message } = await userService.insertUser(req.body);
  if (type) return res.status(409).json({ message });
  return res.status(201).json({ token: message });
};

const getUsers = async (_req, res) => {
  const { type, message } = await userService.getUsers();
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await userService.getUserById(id);

  if (type !== null) {
    return res.status(404).json({ message });
  }

  return res.status(200).json(message);
};

module.exports = { insertUser, getUsers, getUserById };
