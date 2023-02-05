const { Category } = require('../models');

const insertCategory = async (newCategory) => {
  const { name } = newCategory;

  const createCategory = await Category.create({ name });
  return { type: null, message: createCategory };
};

const getCategories = async () => {
  const allCategories = await Category.findAll();
  return { type: null, message: allCategories };
};

module.exports = {
  insertCategory,
  getCategories,
};
