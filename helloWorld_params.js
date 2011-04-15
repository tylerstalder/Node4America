/*
* This is the standard hello world from nodejs.org
*/
var http = require('http'),
url = require('url'),
qs = require('querystring');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var testQuery = url.parse(req.url, true);
  console.log(testQuery.query);
  res.end(JSON.stringify(testQuery.query));
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');

