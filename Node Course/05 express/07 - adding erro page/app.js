const express  = require('express');
const bodyParser = require('body-parser');


const routes = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(routes);

app.use((req, res, next) => {
    res.status(404).send('<h1>ERRO, Page not found</h1>');
});

app.listen(3000);