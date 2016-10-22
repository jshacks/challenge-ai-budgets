"use strict";

const bodyparser = require("body-parser");
const express = require("express");
var app = express();
app.use(bodyparser.json());

// FIXME: `categorii` e doar pentru generarea de date random
const categorii = [
  "invatamant", "transporturi", "asigurari", "servicii", "dezvoltare publica",
  "cultura", "eco", "sanatate", "energie", "aparare", "altele"
];

app.get("/:judet", (req, res) => {
  var bogus = {};
  for(var i=2007; i<=2020; i++) {
    bogus[i] = {
      buget: {total:0},
      populatie: Math.floor(Math.random() * 20000 + 50000) // random in range 50000 - 70000
    }
    for(var cat of categorii) {
      bogus[i].buget[cat] = Math.floor(Math.random() * 600000000 + 400000000);
      bogus[i].buget.total += bogus[i].buget[cat];
    }
  }
  res.json(bogus);
});

app.listen(8080, () => {
  console.log("Express server up @ localhost:8080");
});
