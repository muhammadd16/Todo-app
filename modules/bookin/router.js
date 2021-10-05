const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validation = require('./validation');
//const formDataParser = require('../../middlewares/form-data-parser');

router.post(
    '/',
    // validation.createBookin,
    controller.createBookin,
);






module.exports = router;
