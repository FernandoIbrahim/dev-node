const express = require('express');

const app =  express();


app.use( '/' ,(req, res, next) => { 
    console.log("this will be always executed")
    next();
});

app.use('/message',(req, res, next) => { //this will be executed only in the correct routes that starts with /message
    res.send('<h1>Hello, World!</h1>')
});

app.listen(3000);