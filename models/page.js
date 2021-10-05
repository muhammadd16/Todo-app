const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const Admin = require('./admin');


const Page = sequelize.define('pages', {
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
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },

});

Page.belongsTo(Admin, {
    foreignKey: 'admin_id',
    as: 'admin',
});

/*Page.sync({ force: true })
    .then((_) => {
        console.log('page model was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = Page;