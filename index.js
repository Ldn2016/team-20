var http = require('http');
var url = require('url');
var fs = require('fs');
var nodeFinder = require('./lib/nodeFinder.js');
var intial = require('./data/initial.js');

this.server = http.createServer(function(req, res) {
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./views/index.html', {encoding: 'utf8'}, function(err, page){
      res.writeHead(200);
      res.end(page);
    })
  } else if (req.url === '/help' && req.method === 'GET') {
      fs.readFile('./views/help.html', {encoding: 'utf8'}, function(err, page){
        res.writeHead(200);
        res.end(page);
      })
  } else if (req.url === '/nodes/new'&& req.method === 'POST') {
    var whole = "";
    req.on("data", (chunk) => {whole += chunk.toString()});
    req.on("end", () => {
      var updatedHistory = nodeFinder.updateWithNextNode(whole);
      res.writeHead(200);
      res.end(JSON.stringify(updatedHistory));
    })
  } else if  (req.url === '/public/application.js' && req.method === 'GET') {
    fs.readFile('./public/application.js', {encoding: 'utf8'}, function(err, page){
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.end(page);
    });
  } else if  (req.url === '/public/styles.css'&& req.method === 'GET') {
    fs.readFile('./public/styles.css', {encoding: 'utf8'}, function(err, page){
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(page);
    });
  } else if  (req.url === '/public/cytoscape.min.js'&& req.method === 'GET') {
    fs.readFile('./public/cytoscape.min.js', {encoding: 'utf8'}, function(err, page){
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.end(page);
    });
  } else if (req.url === '/initial'&& req.method === 'GET') {
    res.setHeader('Content-Type', 'application/jsonp');
    res.write(JSON.stringify(intial));
      res.end();
  } else if (req.url === '/img/completed' && req.method === 'GET') {
    fs.readFile('./img/completed.png', function(err, img){
      res.writeHead(200);
      res.end(img);
    })
  } else if (req.url === '/img/giphy' && req.method === 'GET') {
    fs.readFile('./img/giphy.gif', function(err, img){
      res.writeHead(200);
      res.end(img);
    })
  } else if (req.url === '/img/locked'&& req.method === 'GET') {
    fs.readFile('./img/locked.png', function(err, img){
      res.writeHead(200);
      res.end(img);
    })
  } else if (req.url === '/img/inprogress'&& req.method === 'GET') {
    fs.readFile('./img/inProgress.png', function(err, img){
      res.writeHead(200);
      res.end(img);
    })
  } else if (req.url === '/img/backgroundImage') {
    fs.readFile('./img/backgroundImage.png', function(err, img){
      res.writeHead(200);
      res.end(img);
    })
  } else if (req.url === '/signin') {
    fs.readFile('./views/signin.html', {encoding: 'utf8'}, function(err, page){
    res.writeHead(200);
    res.end(page);
  });
} else if (req.url === '/options') {
    fs.readFile('./views/categories.html', {encoding: 'utf8'}, function(err, page){
    res.writeHead(200);
    res.end(page);
  });
} else if (req.url === '/img/bookicon') {
    fs.readFile('./img/bookicon.png', function(err, img){
    res.writeHead(200);
    res.end(img);
  });
} else if (req.url === '/img/calculator') {
    fs.readFile('./img/calculator.png', function(err, img){
    res.writeHead(200);
    res.end(img);
  });
} else if (req.url === '/img/medkit') {
    fs.readFile('./img/medkit.png', function(err, img){
    res.writeHead(200);
    res.end(img);
  });
} else {
    res.writeHead(404);
    res.end();
  }
});

exports.listen = function(){
  this.server.listen.apply(this.server, arguments);
};

exports.close = function(callback) {
  this.server.close(callback);
};
