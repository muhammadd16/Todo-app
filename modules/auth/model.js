
const Admin = require('../../models/admin');


module.exports = {
    async findByEmail(email) {

        let user = null;
        user = await Admin.findOne({
            where: { email },
        });
        if (user) {
            user = user.dataValues;

        }
        return user;
    },
    async updatePassword(email, password) {

        await Admin.update({ password }, { where: { email } });

    },

};
