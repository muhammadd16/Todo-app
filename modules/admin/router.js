const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validation = require('./validation');
//const tokenParser = require('../../../middlewares/token-parser');
const formDataParser = require('../../middlewares/form-data-parser');
const tokenParser = require('../../middlewares/token-parser');
const { roles, canAccess } = require('../../middlewares/permission');


router.post(
    '/',
    tokenParser,
    canAccess([roles.manager]),
    //formDataParser('public/images'),
    validation.createAdmin,
    controller.createAdmin,
);

router.post(
    '/blog',
    tokenParser,
    canAccess([roles.manager, roles.BlogAdmin]),
    formDataParser('public/images'),
    controller.createBlog,
);


router.post(
    '/page',
    tokenParser,
    canAccess([roles.manager, roles.BlogAdmin]),
    formDataParser('public/images'),
    // validation.createBookin,
    controller.createPage,
);

router.delete('/blog/:id',
    tokenParser,
    canAccess([roles.manager, roles.BlogAdmin]),
    controller.deleteBlog);

router.delete('/page/:id',
    tokenParser,
    canAccess([roles.manager, roles.BlogAdmin]),
    controller.deletePage);

router.put('/blog/:id',
    tokenParser,
    canAccess([roles.manager, roles.BlogAdmin]),
    formDataParser('public/images'),
    controller.updateBlog);


router.put('/page/:id',
    tokenParser,
    canAccess([roles.manager, roles.BlogAdmin]),
    formDataParser('public/images'),
    controller.updatePage);

router.get('/blogs',
    // tokenParser,
    controller.getBlogs);

router.get('/pages',
    // tokenParser,
    controller.getPages);




module.exports = router;
