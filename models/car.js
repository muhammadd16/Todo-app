const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const Admin = require('./admin');
const CarImages = require('./car-images');
const carImages = require('./car-images');
const Specification = require('./specification');
const CarCategory = require('./carCategory');




const Car = sequelize.define('cars', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    specification_id: {
        type: DataTypes.INTEGER,

    },
    admin_id: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },


});

Car.belongsTo(Admin, {
    foreignKey: 'admin_id',
    as: 'admin',
});
Car.belongsTo(Specification, {
    foreignKey: 'specification_id',
    as: 'specification',
});
Car.hasMany(CarImages, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE',
    as: 'images',
});
Car.hasMany(CarCategory, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE',
    as: 'categories',
});

/*Car.belongsTo(CarCategory, {
    foreignKey: 'car_id',
    as: 'categories',
});
*/



/*Car.sync({ force: true })
    .then((_) => {
        console.log('carrr model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = Car;