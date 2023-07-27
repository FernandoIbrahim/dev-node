
const { error } = require('console');
const fs = require('fs');
const path = require('path');
const modelCart = require('./cart');

const p = path.join(path.dirname(process.mainModule.filename),'data', 'products.json');

const getProductsFromFile  = (cb) =>{

    fs.readFile(p, (err, fileContent) => { 
    if(err){
     return  cb([]);
    }
     cb(JSON.parse(fileContent));
    });
}


module.exports = class Product{
    constructor(id, t , imageUrl, description, price){
        this.id = id;
        this.title = t;
        this.image = imageUrl;
        this.desc = description;
        this.price = price;
    }
    
    save(){
        if(this.id){
            getProductsFromFile((products) => {
                const existingProductIndex = products.findIndex(p => p.id === this.id);
                const updateProduct = [...products];
                updateProduct[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updateProduct), (err => { 
                    console.log(err);
                }))
            });
        }else{
            this.id = Math.random().toString();
            getProductsFromFile( (products) => {
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                }); //escreve no arquivo os dados em JSON do vertor products já convertidos
            });
        }
    }

    delete(){
        getProductsFromFile((products) => {
            const existingProductIndex = products.findIndex( p => p.id === this.id);
            let updateProducts = [...products];
            const productID = updateProducts[existingProductIndex].id;
            const productValue = updateProducts[existingProductIndex].price;
            updateProducts = updateProducts.filter(p => p.id !==  this.id );
            fs.writeFile(p, JSON.stringify(updateProducts), (err) => {
                if(!err){
                    modelCart.deleteProduct(productID,productValue)
                }
            });
        });
    }

    static fetchAll(cb){
    getProductsFromFile(cb);
    }

    static findByID(id, cb){
        getProductsFromFile( (products) => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
}