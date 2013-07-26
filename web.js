var express = require('express');  //import the express library
var fs = require('fs'); //import the filesyatem library


var app = express.createServer(); //create the application
app.use(express.logger());  // add some logging



// create a buffer to in order to hold the contents of the file to be read
// and read it in at the same time.
// Basic minimal form of the function call that could be made better by the using more options
 
var file_buffer = fs.readFileSync('index.html');



// define a function to respond to the requests made to the site as an example
// buffer converts to a UTF string.

app.get('/',function(request, response){
    response.send(file_buffer.toString("utf-8"));
});

// start lisening on port 5000 and fire up the server
var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Listening on " + port);
});
  