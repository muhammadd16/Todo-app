const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validation = require('./validation');
const formDataParser = require('../../middlewares/form-data-parser');
const tokenParser = require('../../middlewares/token-parser');
const { roles, canAccess } = require('../../middlewares/permission');


router.post(
    '/',
    tokenParser,
    canAccess([roles.carAdmin, roles.manager]),
    formDataParser('public/images'),
    validation.createCar,
    controller.createCar,
);

router.post(
    '/category',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    formDataParser('public/images'),
    validation.createCarCategory,
    controller.createCarCategory,
);

router.post(
    '/brand',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    formDataParser('public/images'),
    controller.createCarBrand,
);
router.post(
    '/category',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    formDataParser('public/images'),
    controller.createCarCategory,
);
router.post(
    '/images',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    formDataParser('public/images'),
    controller.createCarImages,
);

router.post(
    '/specifications',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.createCarSpecifications,
);
router.post(
    '/gear-box',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.createCarGearBox,
);
router.post(
    '/features',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.createCarFeature,
);

router.delete('/:id',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.deleteCar);

router.delete('/category/:id',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.deleteCarCategory);

router.delete('/brand/:id', tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.deleteCarBrand);

router.delete('/feature/:id', tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.deleteCarFeature);

router.delete('/specifications/:id', tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.deleteCarSpecification);

router.get('/all', controller.getAllInfo);

router.put(
    '/', tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    formDataParser('public/images'),
    controller.updateCar,
);

router.put('/gear-box/:id',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.updateGearBox);

router.put('/features/:id',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.updateCarFeature);

router.put('/brand/:id',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.updateCarBrand);

router.put('/category/:id',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.updateCarCategory);

router.put('/car-image/:id', tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.updateCarImages);

router.put('/specification/:id',
    tokenParser,
    canAccess([roles.manager, roles.carAdmin]),
    controller.updateCarSpecification);

router.get('/',
    // tokenParser,
    controller.getCar);

router.get('/gear-boxes',
    // tokenParser,
    controller.getGearBoxes);

router.get('/brands',
    // tokenParser,
    controller.getCarBrands);

router.get('/categories',
    // tokenParser,
    controller.getCarCategories);

router.get('/features',
    // tokenParser,
    controller.getCarFeatures);

router.get('/specifications',
    // tokenParser,
    controller.getSpecification);




module.exports = router;

