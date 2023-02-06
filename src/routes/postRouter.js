const express = require('express');
const postRoute = require('../controller/post.controller');
const validateJWT = require('../middlewares/validateJWT');

const router = express.Router();

router.get('/', validateJWT, postRoute.getPosts);

module.exports = router;
