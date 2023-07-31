const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize   = require('./util/database');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop')

const app = express();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');


sequelize.sync().then(result => {
    console.log(result)
    app.listen(3000);
}).catch((err) => {
    console.log(err)
})

app.use(shopRoute)
app.use(adminRoute);

