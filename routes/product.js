const express = require('express');
const { getProducts, getSingleProduct } = require('../controllers/productController');
const router = express.Router();

// IMPORTANT: No extra /api/v1 here
router.get('/products', getProducts);
router.get('/product/:id', getSingleProduct);

module.exports = router;
