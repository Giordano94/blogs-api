const express = require('express');
const userRoute = require('../controller/user.controller');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const validateJWT = require('../middlewares/validateJWT');

const router = express.Router();

router.post(
  '/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  userRoute.insertUser,
);
router.get('/', validateJWT, userRoute.getUsers);
router.get('/:id', validateJWT, userRoute.getUserById);

module.exports = router;
