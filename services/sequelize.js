const config = require('../utils/config');
const dbConfig = config.db;
//console.log(dbConfig);
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'mysql',
    pool: dbConfig.pool,
});

module.exports = { sequelize };
