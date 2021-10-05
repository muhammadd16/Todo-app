const { ErrorHandler } = require('../../utils/error');
const { validationResult, body } = require('express-validator');
const { StatusCodes } = require('http-status-codes');
const { defaults } = require('../../utils/config');


const model = require('./model');
require('../../utils/__send');

module.exports = {
    async createBlog(req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                await model.createBlog(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },
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

    async createPage(req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                await model.createPage(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },

    async deleteBlog(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let id = +req.params['id'];

                await model.deleteBlog(id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },

    async deletePage(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let id = +req.params['id'];

                await model.deletePage(id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },
    async updateBlog(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let blog = req.body;
                let id = +req.params['id'];

                await model.updateBlog(blog, id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },

    async updatePage(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let page = req.body;
                let id = +req.params['id'];

                await model.updatePage(page, id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },

    async getBlogs(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {

                let limit = +req.query['limit'] || defaults.limit;
                let offset = +req.query['offset'] || defaults.offset;
                let filters = {};
                let data = await model.getBlogs({ limit, offset }, filters);
                res.__send(StatusCodes.OK, data);
            } catch (err) {
                next(err);
            }
        }
    },

    async getPages(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {

                let limit = +req.query['limit'] || defaults.limit;
                let offset = +req.query['offset'] || defaults.offset;
                let filters = {};
                let data = await model.getPages({ limit, offset }, filters);
                res.__send(StatusCodes.OK, data);
            } catch (err) {
                next(err);
            }
        }
    },


};