var express = require("express");

var router = express.Router();

module.exports = {
  renderHome: function(req, res) {
    res.render('index');
  },
  renderCorForm: function(req, res) {
    res.render('corForm');
  },
  renderCusForm: function(req, res) {
    res.render('cusForm');
  },
  renderCorRes: function(req, res) {
    res.render('corRes');
  },
  renderCusRes: function(req, res) {
    res.render('cusRes');
  }
};
