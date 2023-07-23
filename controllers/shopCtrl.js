const Product = require('../models/products'); 



exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'cart'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
}

exports.getProducts = (req, res , next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            pageTitle: 'Product List',
            prods: products, 
            path: '/product'
        });
    });
}

exports.getProductsDetailsByID = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    Product.findByID(prodId, (product) => {
        res.render('shop/product-detail', {product: product, pageTitle: 'Product Details', path:'/product-details'});
    });
};


exports.getIndex = (req, res, next) => {
    Product.fetchAll((produtos) => {
        res.render('shop/index', {
            prods: produtos,
            pageTitle: 'Shop',
            path:'/'
        })
    })
};

exports.getOrder = (req, res, next) => {
    res.render('shop/order',{
        path: '/order',
        pageTitle: 'Order'
    });
};