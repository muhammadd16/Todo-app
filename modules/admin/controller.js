const { ErrorHandler } = require('../../utils/error');
const { validationResult, body } = require('express-validator');
const { StatusCodes } = require('http-status-codes');
const { defaults } = require('../../utils/config');


const model = require('./model');
require('../../utils/__send');

module.exports = {
    
    async createAdmin(req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                await model.createAdmin(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },


};