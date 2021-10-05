const { ErrorHandler } = require('../../utils/error');
const { validationResult, body } = require('express-validator');
const { StatusCodes } = require('http-status-codes');

const model = require('./model');
require('../../utils/__send');

module.exports = {
    async createBookin(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                await model.createBookin(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },
};