const fs = require('fs');

function requestHandler(req, res){
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
        const body = [];
        req.on( 'data', chunk => {
            body.push(chunk);
        })
        req.on( 'end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(message);
            fs.writeFileSync('text.txt', message);
            res.statusCode = 302;
        });
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('Writed')
        res.write('</html>');
        res.end();
    }
}

module.exports = requestHandler;
