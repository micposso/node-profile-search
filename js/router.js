var Profile = require("./profile.js");
var render = require('./render.js');


//routes

function home(request, response){
  
  if(request.url === "/"){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
    }
}

function user(request, response){
  var username = request.url.replace("/", "");
  if(username.length > 0){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.view("header, {}, response");
    
    //get json from site
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON){
      //show profile
      
      //store the values we need from the returned json object
      var values = {
        avatarURL: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      //simple response
      response.write(values.username + " has" + values.badges + " badges\n");
      response.end('Footer\n');
    });
    
    //on error
    studentProfile.on("error", function(error){
      //show error
      response.write(error.message + "\n");
      response.end("Footer\n")
    });
  }
}

//export the routes
module.exports.home = home;
module.exports.user = user;