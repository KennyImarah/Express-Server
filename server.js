//jshint esversion: 6
const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello world</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: kenny.imarah@willmoon.tech");
});

app.get("/shop", function(req, res){
  res.send("Shop at: willmoon.tech");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
