require('dotenv').config()

const env = process.env;
const config = {
    db: {

        host: env.DB_HOST,
        port: env.DB_PORT,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
        waitForConnections: true,
        connectionLimit: env.DB_CONN_LIMIT || 2,
        queueLimit: 1,
        debug: env.DB_DEBUG || false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
    defaults: {
        limit: 10,
        offset: 0,
    },

};

module.exports = config;
