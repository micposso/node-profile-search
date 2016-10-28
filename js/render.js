//function that handdles the reading of the files and merge in one

var fs = require('fs');

function view(templateName, values, response ){
  //read from template
  fs.readFile('./views/header' + templateName + '.html', function(error, fileContents){
    if(error) throw error;
    
    //insert values into the content
  
    //write out the response
    response.write(fileContents);
  });

  
}

module.exports.view = view;