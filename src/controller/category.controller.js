const categoryService = require('../service/category.service');

const insertCategory = async (req, res) => {
  const { type, message } = await categoryService.insertCategory(req.body);
  if (type) return res.status(400).json({ message });
  return res.status(201).json(message);
};

module.exports = {
  insertCategory,
};
