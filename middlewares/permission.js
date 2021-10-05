const { ErrorHandler } = require('../utils/error');
const { StatusCodes } = require('http-status-codes');

const roles = {
    carAdmin: 'CAR_ADMIN',
    BlogAdmin: 'BLOG_ADMIN',
    manager: 'MANAGER',

};

const canAccess =
    (acceptedRoles = [roles.manager]) =>
        (req, res, next) => {
            if (!Array.isArray(acceptedRoles)) {
                acceptedRoles = [acceptedRoles];
            }
            let role = req.body.__user.role;
            if (!role) {
                throw new ErrorHandler(StatusCodes.FORBIDDEN);
            }
            if (!acceptedRoles.some((acRole) => acRole === role)) {
                throw new ErrorHandler(StatusCodes.FORBIDDEN);
            }
            next();
        };

module.exports = {
    roles,
    canAccess,
};
