const { ErrorHandler } = require('../../utils/error');
const { validationResult, body } = require('express-validator');
const { StatusCodes } = require('http-status-codes');

const todo = require('./model');
require('../../utils/__send');

module.exports = {
    async createTodo(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                await model.createTodo(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },

    async updateToDo(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let toDo = req.body;
                let toDoId = +req.params['id'];
                await model.updateToDo(toDo, toDoId);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },

    async deleteToDo(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let id = +req.params['id'];
                await model.deleteToDo(id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },

    async getToDo(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {

                let id = +req.params['id'];
                let data = await model.getToDo(id);
                res.__send(StatusCodes.OK, data);
            } catch (err) {
                next(err);
            }
        }
    },
    async getAllToDo(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {

                let data = await model.getAllToDo();
                res.__send(StatusCodes.OK, data);
            } catch (err) {
                next(err);
            }
        }
    },
};