var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Node.js</h1>\n');
}).listen(8081);

console.log('Server running at  port 8081 ');