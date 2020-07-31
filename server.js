var http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "application/json"});
  var obj = {
            id:1, 
            username:"AdrianGarciaB", 
            date: Date(), 
            requested: url.parse(req.url,true), 
            random: (Math.random()*5+1)
            
  };
  res.end(JSON.stringify(obj));
}).listen(8000);
