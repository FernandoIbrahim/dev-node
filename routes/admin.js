const express = require('express');

const adminCtrl = require('../controllers/adminCtrl')
const route = express.Router();

route.get('/admin/add-product', adminCtrl.getAdminAddProduct);
route.post('/admin/add-product', adminCtrl.postAdminAddProduct);
route.get('/admin/edit-product/:id', adminCtrl.getAdminEditProduct);
route.get('/admin/products', adminCtrl.getAdminProducts);
module.exports = route;