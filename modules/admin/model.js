const { sequelize } = require('../../services/sequelize');
const Blog = require('../../models/blog');
const Page = require('../../models/page');
const Admin = require('../../models/admin');


module.exports = {
    async createAdmin(body) {
        let admin = await Admin.create(body);
        return admin.dataValues;
    },
    async createBlog(body) {
        let blog = await Blog.create(body);
        return blog.dataValues;
    },
    async createPage(body) {
        let page = await Page.create(body);
        return page.dataValues;
    },
    async deleteBlog(id) {
        await Blog.destroy({
            where: {
                id,
            },
        });
    },
    async deletePage(id) {
        await Page.destroy({
            where: {
                id,
            },
        });
    },

    async updateBlog(blog, id) {
        await Blog.update(blog, { where: { id } });
    },
    async updatePage(page, id) {
        await Page.update(page, { where: { id } });
    },

    async getBlogs({ limit, offset }, filters = {}) {
        const data = await Blog.findAndCountAll({
            where: { ...filters },
            limit,
            offset,
        });
        return data;
    },
    async getPages({ limit, offset }, filters = {}) {
        const data = await Page.findAndCountAll({
            where: { ...filters },
            limit,
            offset,
        });
        return data;
    },
};

