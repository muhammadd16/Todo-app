const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const Car = require('./car');
const GearBox = require('./gear-box');
const BrandCar = require('./car-brand');
const Features = require('./features');





const Specification = sequelize.define('specifications', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    gear_type_id: {
        type: DataTypes.INTEGER,
    },
    feature_id: {
        type: DataTypes.INTEGER,
    },
    car_brand_id: {
        type: DataTypes.INTEGER,

    },

    doors: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    interior_color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    exterior_color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number_of_seats: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gear_type_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },


});

Specification.belongsTo(BrandCar, {
    foreignKey: 'car_brand_id',
    as: 'brand',
});
Specification.belongsTo(Features, {
    foreignKey: 'feature_id',
    as: 'features',
});
Specification.belongsTo(GearBox, {
    foreignKey: 'gear_type_id',
    as: 'gear_box',
});
//Specification.hasMany(GearBox, { foreignKey: 'gear_type_id', as: "gear_box" });


/*Specification.sync({ force: true })
    .then((_) => {
        console.log('car model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = Specification;