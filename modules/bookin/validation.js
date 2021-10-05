const { body, check } = require('express-validator');
const model = require('./model');

module.exports = {
    createBookin: [
        body('name').notEmpty(),
        body('phone').notEmpty(),
        body('email').notEmpty(),
        body('dropOffDate').notEmpty(),
        body('pickUpDate').notEmpty(),
    ],

};
