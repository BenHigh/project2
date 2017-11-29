// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

var flash = require('connect-flash');
var passport = require('passport');//,
// 	twtStrat = require('passport-twitter').Strategy,
// 	fbStrat = require('passport-facebook').Strategy,
// 	liStrat = require('passport-linkedin').Strategy,
// 	LocalStrat = require('passport-local').Strategy;
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var session = require('express-session');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(morgan('dev'));
app.use(cookieParser());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: 'monsieur miyagi'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

require('./config/passport/passport.js')(passport, db.User);

require("./routes/html-routes.js")(app);
require("./routes/auth-routes.js")(app, passport);
//require("./routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
});
