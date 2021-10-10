const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const Specification = require('./specification');


const GearBox = sequelize.define('gear_box', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },


});

//GearBox.hasMany(Specification, { foreignKey: 'gear_type_id', as: "gear_box" });



/*GearBox.sync({ force: true })
    .then((_) => {
        console.log('gear box was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
    */

module.exports = GearBox;