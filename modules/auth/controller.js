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
    async resetPassword(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Validation Error', errors.array()));
        }
        try {
            let token = req.body.token;
            jwt.verify(token, process.env.TOKEN_SECRET, async (err, data) => {
                if (err) {
                    next(
                        new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Validation Error', [
                            'Token Expired',
                        ]),
                    );
                } else {
                    let password = req.body.password;
                    let email = data.email;
                    let user = await AuthModel.findByEmail(email);
                    if (!user) {
                        throw new ErrorHandler(StatusCodes.NOT_FOUND, 'Validation Error');
                    }
                    await AuthModel.updatePassword(email, password);
                    res.__send(StatusCodes.OK);
                }
            });
        } catch (err) {
            next(err);
        }
    },


};
