var path = require("path");

module.exports = {
  home: function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  },
  about: function(req, res) {
    res.sendFile(path.join(__dirname, '../public/about.html'));
  },
  contact: function(req, res) {
    res.sendFile(path.join(__dirname, '../public/contact.html'));
  },
  usignup: function(req,res) {
      res.sendFile(path.join(__dirname, '../public/signupUser.html'));
  },
  csignup: function(req,res) {
      res.sendFile(path.join(__dirname, '../public/signupCorp.html'));
  }
  // ,
  // corForm: function(req, res) {
  //   res.render('corForm');
  // },
  // cusForm: function(req, res) {
  //   res.render('cusForm');
  // },
  // renderCorRes: function(req, res) {
  //   res.render('corRes');
  // },
  // renderCusRes: function(req, res) {
  //   res.render('cusRes');
  // }
};
