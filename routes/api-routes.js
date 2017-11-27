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

  app.post("/api/corps", function(req, res) {

    console.log("Corp Data:");
    console.log(req.body);
    console.log("------------------");
    console.log("Personality Data");
    console.log(personalityResults);

    db.Corp.create({
      corp_name: req.body.corp_name,
      email: req.body.email,
      password: req.body.password,
      results: personalityResults,
      last_logon: req.body.last_logon
    }).then(function(dbPost) {
      res.json(dbPost);
    });

  });

//   app.post("/api/posts", function(req, res) {
//     db.Post.create(req.body).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });


};


// // Dependencies
// // =============================================================

// // Requiring our models
// var db = require("../models");

// // Routes
// // =============================================================
// module.exports = function(app) {

//   // GET route for getting all of the posts
//   app.get("/api/posts", function(req, res) {
//     var query = {};
//     if (req.query.author_id) {
//       query.AuthorId = req.query.author_id;
//     }
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Post.findAll({
//       where: query,
//       include: [db.Author]
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

//   // Get rotue for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Author]
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });


  // // POST route for saving a new post
  // app.post("/contact", function(req, res) {
  // 	var email = req.body.email;
  // 	console.log(email);
  //   // db.Post.create(req.body).then(function(dbPost) {
  //   //   res.json(dbPost);
  //   // });
  // });


  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

//   // PUT route for updating posts
//   app.put("/api/posts", function(req, res) {
//     db.Post.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });
// };
