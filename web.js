var express = require('express');  //import the express library
var app = express(); //create the application
app.use(express.logger());  // add some logging

// define a function to respond to the requests made to the site as an example
app.get('/',function(request,response){
    response.send('Hello World');
});

// start lisening on port 5000 and fire up the server
var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Listening on " + port);
});
  