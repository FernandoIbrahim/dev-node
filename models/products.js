
const { error } = require('console');
const fs = require('fs');
const path = require('path');


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
    constructor(t, imageUrl, description, price){
        this.title = t;
        this.image = imageUrl;
        this.desc = description;
        this.price = price;
    }
    
    save(){
        getProductsFromFile( (products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                   console.log(err);
            }); //escreve no arquivo os dados em JSON do vertor products já convertidos
        });
    }   

    static fetchAll(cb){
    getProductsFromFile(cb);
    }

} 