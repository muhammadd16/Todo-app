const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/sequelize');
const Specification = require('./specification');


const Features = sequelize.define('features', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    air_conditioner: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    audio_input: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    usp_input: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    gps: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    bluetooth: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },



});

/*Features.hasOne(Specification, {
    foreignKey: 'feature_id',
    as: 'feature',
});
*/

/*Features.sync({ force: true })
    .then((_) => {
        console.log('feature was synchronized successfully');
    })
    .catch((err) => {
        console.log(err);
    });
*/

module.exports = Features;