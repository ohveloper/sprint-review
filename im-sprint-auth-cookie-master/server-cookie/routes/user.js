var express = require('express');
var router = express.Router();

const { usersController } = require('../controller');

// * POST /users/login
router.post('/login', usersController.signin.post);

// * POST /users/logout
router.post('/logout', usersController.signout.post);

// * GET /users/userinfo
router.get('/userinfo', usersController.userinfo.get);

module.exports = router;
