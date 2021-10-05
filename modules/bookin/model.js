const { sequelize } = require('../../services/sequelize');
const Bookin = require('../../models/bookin');
module.exports = {
    async createBookin(body) {
        let bookin = await Bookin.create(body);
        return bookin.dataValues;
    },
};

