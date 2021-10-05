const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');

const Admin = sequelize.define('admins', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },


});

/*Admin.sync({ force: true })
    .then((_) => {
        console.log('Admin model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = Admin;