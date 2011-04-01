/*
* This is a modified example of the helloworld script
* The goal here was to show in memory data structures and variables.
* Also, show basic event handlers in a manor similar to browser and
* jQuery events. The counter only increases on 'connection' events
* which for the demo I had to open a new browser or new private
* browsing tab to get a new TCP connection.
*/

var http = require('http');

// This is the basic in memory variable that will be maintained
// accross requests.
var counter = 0;
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n' + counter + ' visitors');
})
server.listen(8124, "127.0.0.1");
// This is the event handler. It showing how part of the event loop
// is working and how a basic annonymous funciton callback can be
// used.
server.on('connection', function() {
  counter++;
});
console.log('Server running at http://127.0.0.1:8124/');

