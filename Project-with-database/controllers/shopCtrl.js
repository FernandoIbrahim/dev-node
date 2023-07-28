const Product = require('../models/products'); 
const Cart = require('../models/cart');


exports.getIndex = (req, res, next) => {
    Product.fetchAll()
    .then(([rows, fieldData]) => {
        res.render('shop/index', {
            prods: rows,
            pageTitle: 'Shop',
            path:'/'
        });
    })
    .catch((err) => console.log(err));
};


exports.getCart = (req, res, next) => {


    Cart.fetchAll((cart) => {
        Product.fetchAll((products) => {
            const cardProducts = [];
            for(prod of products){
                if(cart.products){
                    const cardProductData =  cart.products.find((p) => p.id === prod.id);
                    if(cardProductData){
                        cardProducts.push({productDetails: prod, qty: cardProductData.qty});
                    }
                }
            }
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'cart',
                cart: cardProducts
            });
        })
    });
};


exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findByID(prodId, (product) => {
        Cart.addProduct(product.id, product.price);
    });
    res.redirect('/cart');
};


exports.deleteItemCart = (req, res, next) => {
    const productId = req.body.id;
    const productPrice = req.body.productPrice;
    Cart.deleteItem(productId, productPrice);
    res.redirect('/cart');
};


exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
}

exports.getProducts = (req, res , next) => {
    Product.fetchAll()
    .then(([rows, fieldData]) => {
        res.render('shop/product-list', {
            pageTitle: 'Product List',
            prods: rows, 
            path: '/product'
        })
    })
    .catch(err => console.log(err))
}

exports.getProductsDetailsByID = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findByID(prodId)
    .then(([product]) => {
        console.log(product[0])
        res.render('shop/product-detail',{
            pageTitle: 'Product Details',
            product: product[0],
            path: ''
        });
    })
};




exports.getOrder = (req, res, next) => {
    res.render('shop/order',{
        path: '/order',
        pageTitle: 'Order'
    });
};
