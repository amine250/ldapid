var express = require('express');
var router = express.Router();

var LoginController = require('../controllers/LoginController');

// 
router.post('/auth/login', LoginController.login);

module.exports = router;