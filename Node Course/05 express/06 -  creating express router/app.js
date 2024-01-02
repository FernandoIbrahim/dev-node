const express = require('express');
const bodyParser = require('body-parser');


const route = require('./routes/admin');

const app = express();


app.use(bodyParser({extended:false}));

app.use(route);

app.listen(3000);

