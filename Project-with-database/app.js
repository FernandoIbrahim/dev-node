const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize   = require('./util/database');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop')

const Product = require('./models/products');
const User = require('./models/user')

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
User.hasMany(Product);

const app = express();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');


sequelize.sync()   //realiza a conexao com o banco de dados ao iniciar a aplicação
    .then(result => {           
        return User.findByPk(1);    
    })
    .then( user => {
        if(!user){
            return  User.create({name: 'James', email: 'james@gmail.com'});
        }
            return user;
    })
    .then(user => {
        console.log(user)
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err)
})

app.use(shopRoute)
app.use(adminRoute);

