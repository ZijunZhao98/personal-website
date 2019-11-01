"use strict";

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render("home");
});

router.get('/resume', function(req, res){
  res.render("resume");
})

router.get('/projects', function(req, res){
  res.render("projects");
});

module.exports = router;
