const express = require('express');
const AuthModel = require('./model');
const { ErrorHandler } = require('../../utils/error');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { StatusCodes } = require('http-status-codes');
module.exports = {
    async login(req, res, next) {
        try {
            const user = await AuthModel.findByEmail(req.body.email);
            if (user && user.password == req.body.password) {
                delete user.password;
                var token = jwt.sign({ ...user }, process.env.TOKEN_SECRET, {
                    expiresIn: '2d',
                });
                res.__send(StatusCodes.OK, { token, user });
            } else {
                next(new ErrorHandler(StatusCodes.NOT_FOUND, 'Invalid Email Or Password'));
            }
        } catch (err) {
            next(err);
        }
    },
   
};
