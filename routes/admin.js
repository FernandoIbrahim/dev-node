const express = require('express');

const adminCtrl = require('../controllers/adminCtrl')
const route = express.Router();

route.get('/admin/add-product', adminCtrl.getAdminAddProduct);
route.post('/admin/add-product', adminCtrl.postAdminAddProduct);
route.get('/admin/edit-product/:productId', adminCtrl.getAdminEditProduct);
route.post('/admin/edit-product', adminCtrl.postAdminEditProduct);
route.get('/admin/products', adminCtrl.getAdminProducts);
route.post('/admin/delete-product', adminCtrl.postAdminDeleProduct);
module.exports = route;