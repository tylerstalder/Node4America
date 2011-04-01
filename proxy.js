/* 
* This is a modified example of the helloworld script
* Idea was to show the http functionality and expand on the
* event handling code. It is also an introduction to pulling
* in remote data via http, and handling external and 
* internal requests to build a simple text proxy.
*/
var http = require('http');

var server = http.createServer(function (req, res) {
  // this hash stores the url, the path can contain parameters
  var options = {
    host: 'www.google.com',
    port: 80,
    path: '/index.html'
  };

  var externalRequest = http.get(options, function(response) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    response.on('data', function(data) {
      // this is where the proxying takes place
      // the results of the get request are written into the node
      // server response
      res.write(data);
    });
    response.on('end', function() {
      res.end();
    });
  });
});

server.listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');

