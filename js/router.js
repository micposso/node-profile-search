//routes

//handle http route get and post
function homeRoute(request, response){
  
  if(request.url === "/"){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
    }
}

//handle the HTTP route GET
function userRoute(request, response){
  var username = request.url.replace("/", "");
  if(username.length > 0){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write(username + "\n");
    response.end("Footer\n");
  }
}