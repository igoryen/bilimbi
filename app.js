var express = require('express');
var app = express();
var path = require('path');
var routes  = require( "./routes" );
var nunjucks = require( 'nunjucks' );

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use(express.static('public'));

// routes

app.get("/", routes.pages("index"));

app.listen(1976);
console.log('Listening on port 1976');