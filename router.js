"use strict";

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render("projects");
});

router.get('/resume', function(req, res){
  res.render("resume");
})

router.get('/profile', function(req, res){
  res.render("profile");
});

module.exports = router;
