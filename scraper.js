var http = require('http');
var jsdom = require('jsdom');

var server = http.createServer(function (req, res) {
  var options = {
    host: 'sfpl.org',
    port: 80,
    path: '/index.php?pg=2000185701'
  };
  var html = "";
  var externalRequest = http.get(options, function(response) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    response.on('data', function(data) {
      html = html + data;
    });
    response.on('end', function() {
      jsdom.env(html,
                function(errors, window) {
                  res.write(window.document.getElementById('copy').innerHTML);
                  res.end();
                });
    });
  });
});
server.listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');

