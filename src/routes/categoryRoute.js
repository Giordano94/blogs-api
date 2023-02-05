const express = require('express');
const categoryRoute = require('../controller/category.controller');
const validateCategoryName = require('../middlewares/validateCategoryName');
const validateJWT = require('../middlewares/validateJWT');

const router = express.Router();

router.post(
  '/',
  validateJWT,
  validateCategoryName,
  categoryRoute.insertCategory,
);
router.get('/', validateJWT, categoryRoute.getCategories);

module.exports = router;
