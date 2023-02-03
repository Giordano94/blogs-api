const userService = require('../service/user.service');

const insertUser = async (req, res) => {
  const { type, message } = await userService.insertUser(req.body);
  if (type) return res.status(409).json({ message });
  return res.status(201).json({ token: message });
};

module.exports = { insertUser };
