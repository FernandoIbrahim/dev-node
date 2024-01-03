const express = require('express');

const route = express.Router();

route.get('/', (req, res ,next) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>Hello, World form Express!</h1>');
    res.write('<form action = "/welcome" method = "POST"><input type = "text" name = "nick"><button type = "submit">send</button></form>')
    res.write('</html>');
    res.end();
});


route.post('/welcome' , (req, res, next) => {
    console.log(req.body);
    const name = req.body.nick;
    res.send(`<h1>Nice to meet you ${name}</h1`);
});

module.exports = route;