var Profile = require("./profile.js");
var render = require('./render.js');
//create general header
var commonHeaders = {'Content-Type': 'text/html'};

//routes

function home(request, response){
  
  if(request.url === "/"){
    response.writeHead(200, commonHeaders);
    render.view("Header", {}, response);
    render.view("Search", {}, response);
    render.view("Footer", {}, response);
    response.end();
    }
}

function user(request, response){
  var username = request.url.replace("/", "");
  if(username.length > 0){
    response.writeHead(200, commonHeaders);
    render.view("header", {}, response);
    
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
      render.view("profile", values, response);
      render.view('Footer', {}, response);
      response.end();
    });
    
    //on error
    studentProfile.on("error", function(error){
      //show error
      render.view("error", {errorMessage: error.message}, response);
      render.view("Search", {}, response);
      render.view("Footer", {}, response);
      response.end();
    });
  }
}

//export the routes
module.exports.home = home;
module.exports.user = user;