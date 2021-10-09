const { ErrorHandler } = require('../../utils/error');
const { validationResult, body } = require('express-validator');
const { StatusCodes } = require('http-status-codes');
const model = require('./model');
require('../../utils/__send');
const { createCarCategory, deleteCarCategory, createCarSpecifications, deleteCarSpecification, createCarFeature, createCarGearBox, deleteCarFeature, updateGearBox, updateCarFeature, updateCarCategory, getCarBrands, getCarFeatures } = require('./model');

module.exports = {
    async createCar(req, res, next) {



        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                await model.createCar(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },

    async createCarCategory(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {

                await model.createCarCategory(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },
    async createCarBrand(req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                await model.createCarBrand(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },
    async createCarSpecifications(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                await model.createCarSpecifications(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },
    async createCarFeature(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                await model.createCarFeature(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },
    async createCarGearBox(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                await model.createCarGearBox(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },
    async createCarImages(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                await model.creat(req.body);
                res.__send(StatusCodes.CREATED);
            } catch (err) {
                next(err);
            }
        }
    },
    async deleteCar(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let id = +req.params['id'];

                await model.deleteCar(id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },
    async deleteCarCategory(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let id = +req.params['id'];

                await model.deleteCarCategory(id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },

    async deleteCarBrand(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let id = +req.params['id'];

                await model.deleteCarBrand(id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },

    async deleteCarSpecification(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let id = +req.params['id'];

                await model.deleteCarSpecification(id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },


    async deleteCarFeature(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let id = +req.params['id'];

                await model.deleteCarFeature(id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },

    async getAllInfo(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let carId = +req.params['id'];
                const data = await model.getAllCarInfo(carId);
                if (data) res.__send(StatusCodes.OK, data);
                else next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Invalid Data'));
            } catch (err) {
                next(err);
            }
        }
    },

    async updateCar(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let car = req.body;
                let carId = +req.params['id'];
                await model.updateCar(car, carId);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },
    async updateCarFeature(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let carFeature = req.body;
                let id = +req.params['id'];
                await model.updateCarFeature(carFeature, id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },
    async updateCarBrand(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let carBrand = req.body;
                let id = +req.params['id'];
                await model.updateCarBrand(carBrand, id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },
    async updateCarCategory(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let carCatagory = req.body;
                let id = +req.params['id'];
                await model.updateCarCategory(carCatagory, id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },

    async updateCarSpecification(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let carSpecification = req.body;
                let id = +req.params['id'];
                await model.updateCarSpecification(carSpecification, id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },


    async updateCarImages(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let carImage = req.body;
                let id = +req.params['id'];
                await model.updateCarImages(carImage, id);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },


    async updateGearBox(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                let gearbox = req.body;
                let gearBoxId = +req.params['id'];


                await model.updateGearBox(gearbox, gearBoxId);
                res.__send(StatusCodes.OK);
            } catch (err) {
                next(err);
            }
        }
    },
    async getGearBoxes(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {

                let filters = {};
                let data = await model.getGearBoxes(filters);
                res.__send(StatusCodes.OK, data);
            } catch (err) {
                next(err);
            }
        }
    },
    async getCarBrands(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {

                let filters = {};
                let data = await model.getCarBrands(filters);
                res.__send(StatusCodes.OK, data);
            } catch (err) {
                next(err);
            }
        }
    },
    async getCarFeatures(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {

                let filters = {};
                let data = await model.getCarFeatures(filters);
                res.__send(StatusCodes.OK, data);
            } catch (err) {
                next(err);
            }
        }
    },

    async getCarCategories(req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {



                let filters = {};
                let data = await model.getCarCategories(filters);
                res.__send(StatusCodes.OK, data);
            } catch (err) {
                next(err);
            }
        }
    },

    async getCar(req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {



                let filters = {};
                let data = await model.getCar(filters);
                res.__send(StatusCodes.OK, data);
            } catch (err) {
                next(err);
            }
        }
    },

    async getSpecification(req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(StatusCodes.NOT_ACCEPTABLE, 'Input Error', errors.array()));
        } else {
            try {
                console.log("d");
                let filters = {};
                let data = await model.getSpecification(filters);
                res.__send(StatusCodes.OK, data);
            } catch (err) {
                next(err);
            }
        }
    },
};