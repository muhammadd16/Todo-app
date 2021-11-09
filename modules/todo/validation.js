const { body, check } = require('express-validator');
const model = require('./model');

module.exports = {
    createToDo: [
        body('user_id').notEmpty(),
        body('admin_id').notEmpty(),
        body('title').notEmpty(),
        body('description').notEmpty(),
    ],

};
