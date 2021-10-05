const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const CarCategory = require('./car-category');
const Car = require('./car');



const categoryCar = sequelize.define('_car_category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },


});

//Car.hasMany(categoryCar, { foreignKey: 'car_id', as: 'car_catagory' });
CarCategory.hasMany(categoryCar, { foreignKey: 'category_id', as: 'car' });

/*categoryCar.sync({ force: true })
    .then((_) => {
        console.log('car-category model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = categoryCar;