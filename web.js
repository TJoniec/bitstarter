var express = require('express');

var app = express.createServer(express.logger());

var infile = fs.readfile('//index.html',,);

app.get('/', function(request, response) {
    response.send(infile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
