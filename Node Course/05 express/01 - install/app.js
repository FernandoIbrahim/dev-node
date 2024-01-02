const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {   //isso é um middleware
    console.log('in the first middleware');
    next(); //permite a requisição a continuar ao proximo middleware
});

app.use((req, res, next) => {   // isso é um middleware
    console.log('In the second middleware');
    res.send('<h1>Hello, from Express!</h1>')
})


const server =  http.createServer(app);

server.listen(3000);