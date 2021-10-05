const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const Specification = require('./specification');


const CarBrand = sequelize.define('car_brand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    landing_page: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },


});

/*CarBrand.hasOne(Specification, {
    foreignKey: 'car_brand_id',
    as: 'car_brand',
});
*/

/*CarBrand.sync({ force: true })
    .then((_) => {
        console.log('car-brand model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = CarBrand;