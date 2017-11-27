// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var passport = require('passport');
var session = require('express-session');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'monsieur miyagi'}));
 
app.use(passport.initialize());
 
app.use(passport.session());

// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
require("./routes/auth-routes.js")(app);
require("./routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
});