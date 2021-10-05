const { body } = require('express-validator');
const model = require('./model');
module.exports = {
    createAdmin: [
        body('email').isEmail(),
        body('password').isLength({ min: 8 }),
        body('user_name').notEmpty(),
        body('role').notEmpty(),
    ],
};
