var express = require("express");

var router = express.Router();

module.exports = {
  home: function(req, res) {
    res.render('index');
  },
  about: function(req, res) {
    res.render('about');
  },
  contact: function(req, res) {
    res.render('contact');
  },
  corForm: function(req, res) {
    res.render('corForm');
  },
  cusForm: function(req, res) {
    res.render('cusForm');
  },
  renderCorRes: function(req, res) {
    res.render('corRes');
  },
  renderCusRes: function(req, res) {
    res.render('cusRes');
  }
};
