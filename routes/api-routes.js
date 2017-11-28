// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// var personalityResults = require("../personalityInsights.js");
var db = require("../models");
var apiCont = require('../controllers/apicont');
module.exports = function(app) {
  app.get('/test', apiCont.index);

  // POST route for saving a new post


  app.post("/contact", function(req, res) {
  	var email = req.body.email;
  	console.log(email),
  	console.log(req.body);
    // db.Post.create(req.body).then(function(dbPost) {
    //   res.json(dbPost);
    // });

  // app.post("/api/corps", function(req, res) {

  //   console.log("Corp Data:");
  //   console.log(req.body);
  //   console.log("------------------");
  //   console.log("Personality Data");
  //   console.log(personalityResults);

  //   // db.Corp.create({
  //   //   corp_name: req.body.corp_name,
  //   //   email: req.body.email,
  //   //   password: req.body.password,
  //   //   results: personalityResults,
  //   //   last_logon: req.body.last_logon
  //   // }).then(function(dbPost) {
  //   //   res.json(dbPost);
  //   // });

  // });
});
};
