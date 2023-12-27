const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;

    if(url == '/' && method == 'GET'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header>Hello, World!</header>');
        res.write('<form action = "/message" method = "POST"><input type = "text" name = "message"><button type = "submit">send</button></form>')
        res.write('</html>');
        res.end();
    }

    if(url == '/message' && method ==  'POST'){
        
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('Writed')
        res.write('</html>');
        fs.writeFileSync('text.txt', "Hello, World!");
        res.end();
    }

});

server .listen(3000);
