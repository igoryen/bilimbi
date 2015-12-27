var express = require('express');
var app = express();
var path = require('path');
var routes  = require( "./routes" );

app.use(express.static(path.join(__dirname + "/public")));

// routes
app.get("/", routes.pages("index"));

app.listen(1976);
console.log('Listening on port 1976');