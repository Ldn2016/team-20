var http = require('http');
var url = require('url');
var fs = require('fs');
var nodeFinder = require('./lib/nodeFinder.js');

this.server = http.createServer(function(req, res) {
  if (req.url === '/') {
    fs.readFile('./views/index.html', {encoding: 'utf8'}, function(err, page){
      res.writeHead(200);
      res.end(page);
    })
  } else if (req.url === '/nodes/new') {
    var whole = "";
    res.on("data", (chunk) => {whole += chunk.toString()});
    res.on("end", () => {
      var updatedHistory = nodeFinder.updateWithNextNode(whole);
      req.writeHead(200);
      req.end(updatedHistory)
    })
  } else if  (req.url === '/public/index.js') {
    fs.readFile('./public/index.js', {encoding: 'utf8'}, function(err, page){
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.end(page);
    });
  } else if  (req.url === '/public/styles.css') {
    fs.readFile('./public/styles.css', {encoding: 'utf8'}, function(err, page){
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(page);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
})

exports.listen = function(){
  this.server.listen.apply(this.server, arguments);
}

exports.close = function(callback) {
  this.server.close(callback);
}
