// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

var htmlCont = require('../controllers/html');
module.exports = function(app) {
  app.get('/', htmlCont.renderHome);
};

// // Dependencies
// // =============================================================
// var path = require("path");

// // Routes
// // =============================================================
// module.exports = function(app) {

//   // Each of the below routes just handles the HTML page that the user gets sent to.

//   // index route loads view.html
//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });

//   // cms route loads cms.html
//   app.get("/corport", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/.html"));
//   });

//   // blog route loads blog.html
//   app.get("/cusport", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/blog.html"));
//   });

//   // authors route loads author-manager.html
//   app.get("/authors", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
//   });

// };
