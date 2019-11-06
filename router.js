"use strict";

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render("projects", {css: "projects.css"});
});

router.get('/profile', function(req, res){
  res.render("profile", {css: "profile.css"});
});

module.exports = router;
