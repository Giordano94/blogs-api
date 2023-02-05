const { Category } = require('../models');

const insertCategory = async (newCategory) => {
  const { name } = newCategory;

  const createCategory = await Category.create({ name });
  return { type: null, message: createCategory };
};

module.exports = {
  insertCategory,
};
