const express = require('express');

const shop = require('../controllers/shopCtrl');

const route = express.Router();

route.get('/product', shop.getProducts);
route.post('/cart', shop.postCart);
route.get('/cart', shop.getCart);
route.get('/checkout', shop.getCheckout);
route.get('/order', shop.getOrder);
route.get('/', shop.getIndex);
route.get('/products/:productId', shop.getProductsDetailsByID);

module.exports = route;