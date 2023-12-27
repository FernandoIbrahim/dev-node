const http = require('http'); //requiring the http module

server = http.createServer((req, res) => {     // creating a server with the http.createServer()
    if(req.url == '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<form action = "/message" type = "POST"><input type = "text" name = "message"><button type = "submit">send</button></form>');
        res.write('</html>')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<h1>Hello, World!</h1>');
    res.write('</html>')
    res.end();
        
});

server.listen(3000);