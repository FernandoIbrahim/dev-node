const Product = require('../models/products');


exports.getAdminAddProduct = (req, res, next) => {
    const editMode = req.query.edit;
    res.render('admin/edit-product', {
        path: '/admin/add-product',
        pageTitle: 'Adding Product',
        edit: editMode
    });
};



exports.postAdminAddProduct = (req, res , next) => {
    let title = req.body.title;
    let image = req.body.image;
    let description = req.body.description;
    let value = req.body.value;
    const product = new Product(null ,title, image, description, value);
    product.save();
    res.redirect('/product');
}

exports.getAdminEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if(!editMode){
        res.redirect('/');
    }else{
        const prodId = req.params.productId;
        Product.findByID(prodId, (product) => {
            if(!product){
                res.redirect('/');
            }else{
                res.render('admin/edit-product', {
                    path: '/admin/add-product',
                    pageTitle: 'Adding Product',
                    edit: editMode,
                    product: product
                });
            }
        })
    }
};

exports.postAdminEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const prodTitle = req.body.title;
    const prodDesc = req.body.description;
    const prodImage = req.body.image;
    const prodValue = req.body.value;
    const product = new Product(prodId, prodTitle ,prodImage , prodDesc, prodValue)
    product.save();
    res.redirect('/admin/products');
};

exports.postAdminDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const product = new Product(prodId, null, null ,null ,null);
    product.delete();
    
    res.redirect('/');
}

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