const http = require('http'); //requiring the http module

server = http.createServer((req, res) => {     // creating a server with the http.createServer()
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<h1>Hello, World!</h1>');
    res.write('</html>')
    res.end();
});

server.listen(3000);