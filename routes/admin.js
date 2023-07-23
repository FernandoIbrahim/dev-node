const express = require('express');

const product = require('../controllers/adminCtrl')
const route = express.Router();

route.get('/admin/add-product', product.getAdminAddProduct);
route.post('/admin/add-product', product.postAdminAddProduct);
route.get('/admin/edit-product', product.getAdminEditProduct);
route.get('/admin/products', product.getAdminProducts);
module.exports = route;