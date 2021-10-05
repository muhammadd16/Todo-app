const express = require('express');
const router = express.Router();

const AuthController = require('./controller');

router.post('/login', AuthController.login);
router.post('/reset-password', AuthController.resetPassword);


module.exports = router;
