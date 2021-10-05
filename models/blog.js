const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const Admin = require('./admin');


const Blog = sequelize.define('blogs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    admin_id: {
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
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },

});

Blog.belongsTo(Admin, {
    foreignKey: 'admin_id',
    as: 'admin',
});

/*Blog.sync({ force: true })
    .then((_) => {
        console.log('blog model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = Blog;