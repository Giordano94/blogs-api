const categoryService = require('../service/category.service');

const insertCategory = async (req, res) => {
  const { type, message } = await categoryService.insertCategory(req.body);
  if (type) return res.status(400).json({ message });
  return res.status(201).json(message);
};

const getCategories = async (_req, res) => {
  const { type, message } = await categoryService.getCategories();
  if (type) return res.status(400).json({ message });
  res.status(200).json(message);
};

module.exports = {
  insertCategory,
  getCategories,
};
