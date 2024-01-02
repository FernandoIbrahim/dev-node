const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));  


app.use('/name', (req, res, next) => {  
    console.log(req.body.title)
    name  =  req.body.title;
    res.send(`<h1>Hello, ${name}</h1>`)
});

app.use('/', (req, res, next) => {  
    res.send('<form action = "/name" method = "POST"><input type = "text" name = "title"><button type = "submit">send</button></form>');
    next();
});


app.listen(3000);