const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validation = require('./validation');
const tokenParser = require('../../middlewares/token-parser');
const { roles, canAccess } = require('../../middlewares/permission');
router.post(
    '/',
    tokenParser,
    canAccess([roles.Admin]),
    validation.createToDo,
    controller.createTodo,
);
router.put(
    '/:id', tokenParser,
    canAccess([roles.Admin]),
    controller.updateToDo,
);
router.delete('/:id',
    tokenParser,
    canAccess([roles.Admin]),
    controller.deleteToDo);

router.get('/:id',
    controller.getToDo
);

router.get('/',
    controller.getAllToDo
);

module.exports = router;
