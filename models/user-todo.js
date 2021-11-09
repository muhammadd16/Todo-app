const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const User = require('./user');
const ToDo = require('./todo');



const UserToDo = sequelize.define('User_to_do', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    to_do_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },


});

//ToDo.hasMany(UserToDo, { foreignKey: 'user_id', as: 'user' });

/*UserToDo.sync({ force: true })
    .then((_) => {
        console.log('user_to_do model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = UserToDo;