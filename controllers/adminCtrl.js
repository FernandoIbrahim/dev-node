const Product = require('../models/products'); 


exports.getAdminAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        path: '/admin/add-product',
        pageTitle: 'Adding Product'
    });
};


exports.postAdminAddProduct = (req, res , next) => {
    console.log(req.body.title);
    let title = req.body.title;
    let image = req.body.image;
    let descprition = req.boy.description;
    let value = req.body.value;
    const product = new Product(title, image, descprition, value);
    product.save();
    res.redirect('/product');
}



exports.getAdminEditProduct =  (req, res, next) => {
    res.render('admin/edit-product', {
        path: '/admin/edit-product',
        pageTitle: 'Edit Product'
    });
};


//getAdmin >> admin/Products

exports.getAdminProducts =  (req, res,  next) => {
    Product.fetchAll((produtos) => {
        res.render('admin/products', {
            path: '/admin/products',
            pageTitle: 'Admin Products',
            prods: produtos
        })
    });
};