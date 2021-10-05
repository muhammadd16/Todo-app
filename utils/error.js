const { getReasonPhrase } = require('http-status-codes');


class ErrorHandler extends Error {
    constructor(statusCode, message, errors = []) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
    }
}

const handleError = (err, res) => {
    if (!err.statusCode) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            statusCode: 500,
            statusMessage: getReasonPhrase(500),
        });
        return;
    }
    const { statusCode, message, errors } = err;
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
        statusMessage: getReasonPhrase(statusCode),
        errors,
    });
};

module.exports = {
    ErrorHandler,
    handleError,
};
