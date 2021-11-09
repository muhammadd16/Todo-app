const { sequelize } = require('../../services/sequelize');
const ToDo = require('../../models/todo');
module.exports = {
    async createToDo(body) {
        let toDo = await ToDo.create(body);
        return toDo.dataValues;
    },
    async updateToDo(toDo, id) {
        await ToDo.update(toDo, { where: { id } });
    },
    async deleteToDo(id) {
        await ToDo.destroy({
            where: {
                id,
            },
        });
    },
    async getToDo(id) {
        const data = await ToDo.findOne({
            where: { id },
        });
        return data;
    },
    async getToDo(id) {
        const data = await ToDo.findOne({
            where: { id },
        });
        return data;
    },
    async getAllToDo() {
        const data = await ToDo.findAll({attributes: ['state', 'title']
    });
        return data;
    },
};

