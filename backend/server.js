var express = require("express");
var mongoose = require("mongoose");
var items = require("./models/user");
var jwt = require("jsonwebtoken");

var Nany = items.Nany;
var User = items.User;

var app = express();
var port = process.env.PORT || 5000;
// console.log(items);

require("dotenv").config(); // to read .env file

// test get req
app.get("/", function (req, res) {
  console.log("test");
  res.send("server is a go!");
});
app.get("/ret", function getAlldatafromNanySchema(req, res) {
  Nany.find({}, function (err, nany) {
    if (err) {
      res.json(err);
    } else {
      console.log(req);
      res.json(nany);
    }
  });
});

app.get("/profile", (req, res) => {
  console.log(req.header, "header");
  console.log(req.body, "body");
  var decoded = jwt.verify(req.headers["authorization"], process.env.JWT_KEY);

  User.findOne({
    _id: decoded._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send("User does not exist");
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

const mongoURI = process.env.ATLAS_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("DataBase connected to the server"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on ${port} Visit https://localhost:${port}`);
});
