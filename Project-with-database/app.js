const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./util/database');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop')

const app = express();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({extended: false}));

db.execute('SELECT * FROM products')
    .then((result) => {
        console.log(result[0])
    })
    .catch((err) => {
        console.log(err)
    });
    

app.set('view engine', 'ejs');
app.use(adminRoute);
app.use(shopRoute);

app.use('/', (req, res, next) => {
    res.render('404', {path: '', pageTitle: '404'});
});


app.listen(3000);
