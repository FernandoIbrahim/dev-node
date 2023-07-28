
const db = require('../util/database'); 

module.exports = class Product{
    constructor(id, title , imageUrl, description, price){
        this.id = id;
        this.title = title;
        this.imageURL = imageUrl;
        this.description = description;
        this.price = price;
    }
    
    save(){
         return db.execute('INSERT INTO products (title, price, imageURL, description) VALUES(?, ?, ?, ?)',[this.title, this.price, this.imageURL, this.description]);
    }

    delete(id){
    
    }

    static fetchAll(){
        return db.execute('SELECT * FROM products');
    }

    static findByID(id){
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
    }
}