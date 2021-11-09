const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const User_to_do = require('./user-todo');


const User = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
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

    },

   gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
});
User.belongsTo(User_to_do, {
    foreignKey: 'user_id',
    as: 'user',
});

/*User.sync({ force: true })
    .then((_) => {
        console.log('user model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = User;