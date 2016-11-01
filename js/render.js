//function that handdles the reading of the files and merge in one
var fs = require('fs');

function mergeValues(values, content){
  //cycle over the keys
  for(var key in values){
    content = content.replace("{{+ key +}}", values[key])
  }
  //return merge content
  return content;
}

function view(templateName, values, response ){
  //read from template
  fs.readFile('./views/header' + templateName + '.html',{encoding: "utf8"} function(error, fileContents){
    if(error) throw error;
    
    //insert values into the content
  
    //write out the response
    response.write(fileContents);
  });

  
}

module.exports.view = view;