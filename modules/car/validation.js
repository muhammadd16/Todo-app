const { body, check } = require('express-validator');
const model = require('./model');

module.exports = {
    createCar: [
        body('name').notEmpty(),
        body('image').notEmpty(),
        body('description').notEmpty(),
    ],
    createCarCategory: [
        body('name').notEmpty(),
        body('icon').notEmpty(),
        body('slug').notEmpty(),
        body('description').notEmpty(),

    ],

};
