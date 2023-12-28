const http = require('http'); //requires the module http

function listener (req, res){ //creates a function listener that will be executed in looping, inside the server
    console.log(req);
}
const server = http.createServer(listener); //creates the server

server.listen(3000); //the server listen to the 3000 port