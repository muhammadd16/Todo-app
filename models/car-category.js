const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');

const CarCategory = sequelize.define('car_categories', {
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
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },


});

/*CarCategory.sync({ force: true })
    .then((_) => {
        console.log('car-category model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = CarCategory;