//require router file
var router = require("./router.js");

//create web server 
var http = require('http');
http.createServer(function(request, response){
  router.home(request, response);
  router.user(request, response);
  
}).listen(3000);
console.log('Server running at http://127.0.0.1:1337/');
