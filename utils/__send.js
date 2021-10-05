const { getReasonPhrase } = require('http-status-codes');

module.exports = (_, res, next) => {
    res.__send = (statusCode, data) => {
        res.status(statusCode).json({
            statusCode,
            statusMessage: statusCode == 200 ? undefined : getReasonPhrase(statusCode),
            data,
        });
    };
    next();
};
