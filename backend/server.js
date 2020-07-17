var express = require("express");
var mongoose = require("mongoose");

var app = express();
var port = process.env.PORT || 5000;
var items = require("./models/user");
var User = items.User;
require("dotenv").config(); // to read .env file

// test get req
app.get("/", function (req, res) {
  console.log("test");
  res.send("server is a go!");
});

app.get("userProf", function (req, res) {
  User.find({}, function (err, user) {
    if (err) {
      res.json(err);
    } else {
      console.log(user);
      res.json(user);
    }
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
