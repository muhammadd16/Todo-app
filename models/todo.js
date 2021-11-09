const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const Admin = require('./admin');
const User_to_do = require('./user-todo');



const Todo = sequelize.define('Todo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    admin_id: {
        type: DataTypes.INTEGER,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
Todo.belongsTo(User_to_do, {
    foreignKey: 'to_do_id',
    as: 'todo',
});

Todo.belongsTo(Admin, {
    foreignKey: 'admin_id',
    as: 'admin',
});


/*Todo.sync({ force: true })
    .then((_) => {
        console.log('blog model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = Todo;