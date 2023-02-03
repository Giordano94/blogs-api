const express = require('express');
const authController = require('../controller/login.controller');
const validateLogin = require('../middlewares/validateLogin');

const routers = express.Router();

routers.post('/', validateLogin, authController.login);

module.exports = routers;
