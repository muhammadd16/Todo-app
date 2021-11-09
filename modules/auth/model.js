
const Admin = require('../../models/admin');
const User = require('../../models/user');

module.exports = {
    async findByEmail(email) {

        let user = null;
        user = await Admin.findOne({
            where: { email },
        });
        if (user) {
            user = user.dataValues;
        }
        else
        {
            user = await user.findOne({
                where: { email },
            });
        }
        if (user) {
            user = user.dataValues;
        }
        return user;
    },
    
};
