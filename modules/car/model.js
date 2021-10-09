// const { sequelize } = require('../../services/sequelize');
const Car = require('../../models/car');
const CarCategory = require('../../models/car-category');
const CarBrand = require('../../models/car-brand');
const CarSpecifications = require('../../models/specification');
const CarFeature = require('../../models/features');
const CarGearBox = require('../../models/gear-box');
const Specification = require('../../models/specification');
const CarImages = require('../../models/car-images');
const GearBox = require('../../models/gear-box');
const Admin = require('../../models/admin');
const Features = require('../../models/features');
const Categories = require('../../models/carCategory');







module.exports = {
    async createCar(body) {

        body.categories = JSON.parse(body.categories).map((id) => {
            return { category_id: id };
        });
        let car = await Car.create(body, {
            include: [
                {
                    model: Categories,
                    as: 'categories',
                },
            ],
        });
        return car.dataValues;
    },
    async createCarCategory(body) {
        let carCategory = await CarCategory.create(body);
        return carCategory.dataValues;
    },
    async createCarBrand(body) {
        let carBrand = await CarBrand.create(body);
        return carBrand.dataValues;
    },
    async createCarSpecifications(body) {
        let carSpecifications = await CarSpecifications.create(body);
        return carSpecifications.dataValues;
    },
    async createCarFeature(body) {
        let carFeature = await CarFeature.create(body);
        return carFeature.dataValues;
    },
    async createCarGearBox(body) {
        let carGearBox = await CarGearBox.create(body);
        return carGearBox.dataValues;
    },
    async createCarImages(body) {
        let carImages = await CarImages.create(body);
        return carImages.dataValues;
    },
    async deleteCar(id) {
        await Car.destroy({
            where: {
                id,
            },
        });
    },
    async deleteCarCategory(id) {
        await CarCategory.destroy({
            where: {
                id,
            },
        });
    },

    async deleteCarBrand(id) {
        await CarBrand.destroy({
            where: {
                id,
            },
        });
    },

    async deleteCarSpecification(id) {
        await CarSpecifications.destroy({
            where: {
                id,
            },
        });
    },

    async deleteCarFeature(id) {
        await CarFeature.destroy({
            where: {
                id,
            },
        });
    },

    async deleteCarGearBox(id) {
        await CarGearBox.destroy({
            where: {
                id,
            },
        });
    },
    async updateCar(car, id) {
        await Car.update(car, { where: { id } });
    },

    async updateCarFeature(carFeatures, id) {
        await CarFeature.update(carFeatures, { where: { id } });
    },
    async updateCarBrand(carBrand, id) {
        await CarBrand.update(carBrand, { where: { id } });
    },
    async updateCarCategory(carCatagory, id) {
        await CarCategory.update(carCatagory, { where: { id } });
    },
    async updateCarImages(carImage, id) {
        await CarImages.update(carImage, { where: { id } });
    },

    async updateGearBox(gearBox, id) {
        await GearBox.update(
            { type: gearBox.type },
            {
                where: {
                    id: id,
                },
            },
        );
    },
    async updateCarSpecification(carSpecification, id) {
        await CarSpecifications.update(carSpecification, { where: { id } });
    },

    async getGearBoxes(filters = {}) {
        const data = await GearBox.findAndCountAll({
            where: { ...filters },
        });
        return data;
    },

    async getCarBrands(filters = {}) {
        const data = await CarBrand.findAndCountAll({
            where: { ...filters },
        });
        return data;
    },
    async getCarFeatures(filters = {}) {
        const data = await Features.findAndCountAll({
            where: { ...filters },
        });
        return data;
    },

    async getCarCategories(filters = {}) {
        const data = await CarCategory.findAndCountAll({
            where: { ...filters },
        });
        return data;
    },

    async getCar(filters = {}) {
        const data = await Car.findAndCountAll({
            where: { ...filters },

            include: [{
                model: Specification,
                as: 'specification',
                include: [
                    {
                        model: CarBrand,
                        as: 'brand',
                    },
                    {
                        model: Features,
                        as: 'features',
                    },

                ],

            },

            {
                model: CarImages,
                as: 'images',

            },
            {
                model: Admin,
                as: 'admin',
            },
            {
                model: Categories,
                as: 'categories',
            },

            ]
        });

        return data;
    },

    async getSpecification(filters = {}) {
        const data = await Specification.findAndCountAll({
            where: { ...filters },

            include: [{
                model: CarBrand,
                as: 'brand',
            },

            {
                model: CarFeature,
                as: 'features',

            },
            ]
        });

        return data;
    },


};

