var http = require('http');

var server = http.createServer(function (req, res) {
  var options = {
    host: 'www.google.com',
    port: 80,
    path: '/index.html'
  };

  var externalRequest = http.get(options, function(response) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    response.on('data', function(data) {
      res.write(data);
    });
    response.on('end', function() {
      res.end();
    });
  });
});

server.listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');

