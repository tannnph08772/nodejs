var express = require('express');
var app = express();
const router = express.Router();
const authController = require('../app/controllers/AuthController');

router.post('/register', authController.register);
router.get('/regist', authController.regist)
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;