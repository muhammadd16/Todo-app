const formidable = require('formidable');
const env = process.env;
const path = require('path');
const { copyFile } = require('fs/promises');
const { ErrorHandler } = require('../utils/error');
const { StatusCodes } = require('http-status-codes');

module.exports =
    (uploadPath = 'public/images') =>
        (req, res, next) => {
            var form = formidable();
            form.parse(req, function (err, fields, files) {
                if (err) {
                    next(err);
                } else {
                    req.body = { ...req.body, ...fields };
                    Promise.all(
                        Object.keys(files).map((file) => {
                            let acceptedExt = ['.png', '.jpg', '.jpeg'];
                            if (
                                !acceptedExt.some((ext) => ext == path.extname(files[file].name).toLowerCase())
                            ) {
                                return Promise.reject('Unaccepted file ext');
                            }
                            const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                            var oldPath = files[file].path;
                            var newPath =
                                __dirname +
                                '/../' +
                                uploadPath +
                                '/' +
                                uniquePrefix +
                                path.extname(files[file].name);
                            newPath = path.normalize(newPath);
                            let staticPath =
                                env.BASE_URL +
                                '/' +
                                path.normalize(
                                    uploadPath + '/' + uniquePrefix + path.extname(files[file].name),
                                );
                            req.body[file] = staticPath;
                            return copyFile(oldPath, newPath);
                        }),
                    )
                        .then((_) => {
                            next();
                        })
                        .catch((err) => {
                            console.log('err', err);
                            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Unaccepted file ext'));
                        });
                }
            });
        };
