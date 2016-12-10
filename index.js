var http = require('http');
var url = require('url');
var fs = require('fs');
var nodeCreator = require('./lib/nodeCreator.js');

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
      // nodeCreator.getNextNode(data, function(err, res) {
      //   if (err) {
      //     req.writeHead(400);
      //     req.end(err)
      //   }
      //   else {
          req.writeHead(200);
          req.end(whole)
        // }
      // })
    });
  } else if  (req.url === '/public/application.js') {
    fs.readFile('./public/application.js', {encoding: 'utf8'}, function(err, page){
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.end(page);
    });
  } else if  (req.url === '/public/styles.css') {
    fs.readFile('./public/styles.css', {encoding: 'utf8'}, function(err, page){
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(page);
    });
  } else if  (req.url === '/public/cytoscape.min.js') {
    fs.readFile('./public/cytoscape.min.js', {encoding: 'utf8'}, function(err, page){
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.end(page);
    });
  } else if (req.url === '/initial') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ nodes: [
          { data: { id: '0' , link: "http://demo.learningequality.org/learn/khan/math/early-math/cc-early-math-counting-topic/cc-early-math-counting/counting-with-small-numbers/" } },
          { data: { id: '1' , link: "http://www.google.com", completed: false } },
          { data: { id: '2' , link: "https://github.com", completed: false } },
          { data: { id: '3' , link: "string0", completed: false } },
          { data: { id: '4' , link: "string0", completed: false } },
          { data: { id: '5' , link: "string0", completed: false } },
          { data: { id: '6' , link: "string0", completed: false } },
          { data: { id: '7' , link: "string0", completed: false } }
        ],
        edges: [
          { data: { source: '0', target: '1' } },
          { data: { source: '1', target: '2' } },
          { data: { source: '2', target: '3' } },
          { data: { source: '3', target: '4' } },
          { data: { source: '4', target: '5' } },
          { data: { source: '5', target: '6' } },
          { data: { source: '6', target: '7' } }
        ]
      }));
      res.end();
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
