var express = require("express");

var router = express.Router();

module.exports = {
  renderHome: function(req, res) {
    res.render('index');
  }
};
