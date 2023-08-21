const express = require('express');
const productsController = require('../controllers/products');
const contactusController = require('../controllers/constactus');
const sucessController = require('../controllers/constactus');


const router = express.Router();
const path = require('path');

//imorting from controller
router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);
router.get('/contactus',contactusController.contactus);
router.post('/success',sucessController.success);

module.exports = router;
