const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');

const Bookin = sequelize.define('bookins', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,

        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: true,
        },
    },
    message: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    drop_off_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    pick_up_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },

});

/*Bookin.sync({ force: true })
    .then((_) => {
        console.log('Booken model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = Bookin;
