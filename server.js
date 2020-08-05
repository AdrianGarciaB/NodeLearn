var http = require('http');
const url = require('url');
var mysql = require('mysql');
fs = require('fs')

var con = mysql.createConnection({
  host: "",
  user: "",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


http.createServer(function (req, res) {
  var requested = url.parse(req.url,true);
  if (requested.pathname == "/test"){
    res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    fs.readFile('form.html', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      res.end(data);
    });
  
  }
  else {
    var requested = url.parse(req.url,true);

    res.writeHead(200, {"Content-Type": "application/json"});
    var obj = {
        id:1, 
        username:"AdrianGarciaB", 
        date: Date(), 
        requested: requested,
        reqmethod: req.method,
        random: (Math.random()*5+1)
      };
      res.end(JSON.stringify(obj));
  }
}).listen(8000);
