/*
* This is a modified example of the helloworld script
* The goal of this example is to show how 3rd party libraries
* are used in nodejs and provide a test for the installation and
* setup of npm. JSDOM is used to parse the resulting html and
* be able to use the DOM API to select a subset of the page before
* returning it to the original requester.
*/
var http = require('http');
// this is where jsdom is loaded and requires the library to
// be installed and accessible in the node path
var jsdom = require('jsdom');

var server = http.createServer(function (req, res) {
  var options = {
    host: 'sfpl.org',
    port: 80,
    path: '/index.php?pg=2000185701'
  };
  // An empty string is assigned to allow the html variable to 
  // be accessed from the response data event and the response 
  // end event.
  var html = "";
  var externalRequest = http.get(options, function(response) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // as the page is retrieved from http it is streamed back to node
    // which requires it to be appended to the html string
    response.on('data', function(data) {
      html = html + data;
    });
    response.on('end', function() {
      // jsdom creates a dom environment that provides a DOM API similar
      // to the browsers, jQuery or other libraries could be loaded at this
      // point, following the examples on the jsdom github page.
      jsdom.env(html,
                function(errors, window) {
                  // this is where the DOM has been created and can be interacted
                  // with standard DOM API methods like getElementById
                  res.write(window.document.getElementById('copy').innerHTML);
                  res.end();
                });
    });
  });
});
server.listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');

