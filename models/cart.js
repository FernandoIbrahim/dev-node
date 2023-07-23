const fs = require('fs');
const path = require('path');

const f = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart{
    static addProduct(id, productPrice){
        fs.readFile(f, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0}
            if(!err){
                cart = JSON.parse(fileContent);     //faz a leitura dos dados já previamente escritos no arquivo
            }

            const existingProductIndex = cart.products.findIndex (prod => prod.id === id); //faz a verificação da exístencia de um dos produtos  dentro do aquivo carrinho.json e pega seu index
            const existingProduct = cart.products[existingProductIndex];    //percorre o carrinho e caso exista o index informado pega os valores do item

            let updatedProduct;  //pega todas os valores informados em exiting products e adicioa a nova variavel

            if(existingProduct){
                updatedProduct = {...existingProduct}
                updatedProduct.qty = updatedProduct.qty + 1;  //caso realmente exista o produto realiza as reguinte os peraçoes com ele, 
                cart.products[existingProductIndex] = updatedProduct; //atualiza os dados do produto já exitente no item adequado do vetor informado
            }else{
                updatedProduct = {id: id, qty: 1}  //caso o item não exitsa cria o item com o valor informado
                cart.products = [...cart.products, updatedProduct]//adiciona ele dentro de card.products
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(f, JSON.stringify(cart), (err) => {
                console.log(err); 
            });
        })

    }
}