const fs = require('fs');

function route(req, res){
    const method = req.method;
    const url  = req.url;

        if(url == '/'){
        res.setHeader('Contenty-Type', 'text/html');
        res.write('<html>');
        res.write('<h1>Hello, Wolrd!</h1>');
        res.write('<form action = "/message" method= "POST"><input type = "text" name  = "message"><button type = "submit">send</button></form>')
        res.write('</html>');
        res.end();
        }
        if(method == 'POST' && url == '/message'){
            let body = [];
            req.on('data', chunk => {
                body.push(chunk);
            });
            req.on('end', () => {
                res.setHeader('Contenty-Type', 'text/html');
                res.write('<html>');
                res.write('<h1>Writed</h1>');
                res.write('</html>');
                res.end();
                const message = Buffer.concat(body).toString();
                const name  = message.split('=')[1];
                fs.writeFileSync("name.txt", name);
            })
        }

}   

module.exports = route;