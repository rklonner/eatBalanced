"use strict"

var fs = require( 'fs' );
var express = require( 'express' );
var bp = require( 'body-parser' );
var app = express();


var server = app.listen(8000, function() {
  console.log( 'Server gestartet. Port 8000' );
});

// CORS Header
app.use( function( request, response, next ) {
  response.setHeader( 'Access-Control-Allow-Origin', '*' );
  response.setHeader( 'Access-Control-Allow-Methods', 'GET' );
  next();
});
app.use( express.static( 'static' ) );
app.use( bp.urlencoded({ extended:true })); // POST Daten parsen

// RESTFUL
var getData = function( dataname, callback ) {
  var dataObj;
  fs.readFile( dataname+'.json', function(err,data) {
    try {
      dataObj = JSON.parse( data );
      callback( dataObj[ dataname ] );
    } catch(e) {
      callback( [] );
    }
  });
} // getData

app.get( '/api/recipes', function( request, response ) {
  console.log( 'GET all recipes' );
    getData( 'recipes', function( allRecipes ) {
      response.send( allRecipes );
    });
});

app.get( '/api/recipes/:id', function( request, response ) {
    var id = request.params.id;
    console.log( 'GET recipe id', id  );
	// todo, use id as key in recipe.json, not array-index
	id = id - 1;
    getData( 'recipes', function( allRecipes ) {
      response.send( allRecipes[id] );
    });
});

app.get( '/api/users', function( request, response ) {
  console.log( 'GET all users' );
    getData( 'users', function( allUsers ) {
      response.send( {users: allUsers } );
    });
});

app.get( '/api/users/:id', function( request, response ) {
    var id = request.params.id;
    console.log( 'GET users id', id  );
    getData( 'users', function( allUsers ) {
      response.send( {users:[ allUsers[id] ] } );
    });
});