const { sequelize } = require('../../services/sequelize');
const Admin = require('../../models/admin');


module.exports = {
    async createAdmin(body) {
        let admin = await Admin.create(body);
        return admin.dataValues;
    },
};

