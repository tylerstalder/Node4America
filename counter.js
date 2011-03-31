var http = require('http');

var counter = 0;
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n' + counter + ' visitors');
})
server.listen(8124, "127.0.0.1");
server.on('connection', function() {
  counter++;
});
console.log('Server running at http://127.0.0.1:8124/');

