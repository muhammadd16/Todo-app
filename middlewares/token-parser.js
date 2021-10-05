const jwt = require('jsonwebtoken');
const { ErrorHandler } = require('../utils/error');
const { StatusCodes } = require('http-status-codes');

module.exports = (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token) {
        throw new ErrorHandler(StatusCodes.UNAUTHORIZED);
    } else {
        token = token.replace('Bearer ', '');
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
        if (err) {
            throw new ErrorHandler(StatusCodes.UNAUTHORIZED);
        } else {
            req.body.__user = data;
            next();
        }
    });
};
