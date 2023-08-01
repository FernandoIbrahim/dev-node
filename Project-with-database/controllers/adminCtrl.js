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
    let imageUrl = req.body.imageUrl;
    let description = req.body.description;
    let price = req.body.value;

    Product.create({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description
    })
    .then((result) => {
        console.log(result)
    })
    .catch()
}

exports.getAdminEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if(!editMode){
        res.redirect('/');
    }else{
        const prodId = req.params.productId;
        Product.findByPk(prodId)
        .then((product) => {
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
        .catch( (err) => console.log(err));
    }
};

exports.postAdminEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const prodTitle = req.body.title;
    const prodDesc = req.body.description;
    const prodImage = req.body.image;
    const prodValue = req.body.value;
    Product.findByPk(prodId)
    .then( (product) => {
        product.title = prodTitle
        product.description = prodDesc
        product.imageUrl = prodImage;
        product.value = prodValue;
        product.save()
        .then( (a) => {
            res.redirect('/')
        })
        .catch(err => console.log(err));
    })



};

exports.postAdminDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const product = new Product(prodId, null, null ,null ,null);
    product.delete();
    res.redirect('/');
}

//getAdmin >> admin/Products

exports.getAdminProducts =  (req, res,  next) => {
    Product.findAll()
    .then((produtos) => {
        res.render('admin/products', {
            path: '/admin/products',
            pageTitle: 'Admin Products',
            prods: produtos
        })
    })
    .catch((err) => console.log(err));
};