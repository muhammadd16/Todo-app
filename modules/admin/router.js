const express = require('express');
const router = express.Router();
const controller = require('./controller');
const tokenParser = require('../../middlewares/token-parser');
const { roles, canAccess } = require('../../middlewares/permission');


router.post(
    '/',
    tokenParser,
    canAccess([roles.Manager]),
    controller.createAdmin,
);

module.exports = router;
