var http = require("http"); // http module
var server = http.createServer(); // server variable
// event listener
server.on("request",
// this function is called every time an http request is received
function (request, response) {
// generating http header
 response.writeHead(500, {'Content-Type': 'text/plain'});
 // generating http body
 response.end('Hello World 2\n');
}
);
//now server is running - listening to requests on port 8081
server.listen(8081);
// just logging
console.log('Server running at http://127.0.0.1:8081/');