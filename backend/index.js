"use strict";

const bodyparser = require("body-parser");
const express = require("express");
var app = express();
app.use(bodyparser.json());

var categorii2014 = require("../data/categorii2014");
var total = {};
for(var i in categorii2014) {
	for(var j in categorii2014[i]) {
		if(!total[j]) total[j] = 0;
		total[j] += categorii2014[i][j];
	}
}
categorii2014["Total"] = total;

app.get("/:judet", (req, res) => {
  console.log(req.params.judet + " - avem? " + !!categorii2014[req.params.judet]);
  res.set('Access-Control-Allow-Origin', 'http://localhost:6900');
  res.json(categorii2014[req.params.judet]);
});

app.listen(8080, () => {
  console.log("Express server up @ localhost:8080");
});
