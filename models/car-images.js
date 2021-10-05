const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const Car = require('./car');



const CarImages = sequelize.define('car_images', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    image: {
        type: DataTypes.STRING,
    },


});



/*CarImages.sync({ force: true })
    .then((_) => {
        console.log('car-images model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = CarImages;