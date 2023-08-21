const express = require('express');
const productController = require('../controllers/products');


const router = express.Router();
const path = require('path');



router.get('/', productController.getProducts);
module.exports = router;
