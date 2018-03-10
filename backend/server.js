"use strict"

var fs = require( 'fs' );
var express = require( 'express' );
var bp = require( 'body-parser' );
var app = express();

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(8080, ip);

module.exports = app;

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

var authenticateUser = function(username, password, callback) {
	getData( 'userAuthentication', function( allUsers ) {
	  for (let id in allUsers) {
		console.log(id);
		console.log(allUsers[id]);
		let userData = allUsers[id];
		if (username == userData['username']) {
	      if (password == userData['password']) {
			return callback(true, id);
		  } else {
			return callback(false, id);
		  }
		}
	  }
	  // if user was not found also return false
	  return callback(false, null);
    });
}

app.get( '/api/authenticate/:username/:password', function( request, response ) {
    var username = request.params.username;
	var password = request.params.password;
    console.log( 'GET user authentication', username  );
	authenticateUser(username, password, function(isAuthenticated, userID) {
	  console.log(isAuthenticated);
	  if(isAuthenticated) {
		response.send( {authenticated: isAuthenticated, userID: userID } );
	  } else {
		response.send( {authenticated: isAuthenticated, userID: userID } );
	  }
	});
});