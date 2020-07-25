var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

const cors = require("cors");
const nodemailer = require("nodemailer");

var bcrypt = require("bcrypt");
var items = require("../models/user");

var app = express();

app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var saltRounds = 10;
var Nany = items.Nany;
var User = items.User;
var port = process.env.PORT || 5000;

require("dotenv").config(); // to read .env file
module.exports = {
  insert: function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var email = req.body.email;
    var phoneNumber = req.body.phoneNumber;
    var kidsNum = req.body.kidsNum;
    var place = req.body.place;
    var educationLevel = req.body.educationLevel;
    var age = req.body.age;
    var workingHour = req.body.workingHour;
    var cost = req.body.cost;
    var experianceLevel = req.body.experianceLevel;
    const newNany = new Nany({
      name,
      image,
      email,
      phoneNumber,
      kidsNum,
      place,
      educationLevel,
      age,
      workingHour,
      cost,
      experianceLevel,
    });

    newNany
      .save()
      .then(() => res.json("Nanny Added"))
      .catch((err) => res.status(400).json("Error:" + err));
  },

  adminSignUp: function (req, res) {
    var newAdmin = new Admin({
      userName: req.body.userName,
      password: req.body.password,
    });
    Admin.findOne({ userName: newAdmin.userName })
      .then((profile) => {
        if (!profile) {
          bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
            if (err) {
              console.log("Error is", err.message);
            } else {
              newUser.password = hash;
              newUser
                .save()
                .then(() => {
                  res.send("Admin authenticated");
                })
                .catch((err) => {
                  console.log("Error is ", err.message);
                });
            }
          });
        } else {
          res.send("Admin already exists...");
        }
      })
      .catch((err) => {
        console.log("Error is", err.message);
      });
  },
  adminLogIn: function (req, res) {
    var newAdmin = new Admin({
      userName: req.body.userName,
      password: req.body.password,
    });

    Admin.findOne({ userName: newUser.userName })
      .then((profile) => {
        if (!profile) {
          res.send("Admin not exist");
        } else {
          bcrypt.compare(newAdmin.password, profile.password, function (
            err,
            result
          ) {
            if (err) {
              console.log("Error is", err.message);
            } else if (result == true) {
              req.session.user = profile;

              res.cookie("user", "user", {
                signed: true,
                maxAge: 1000 * 60 * 60,
              });
              var userInfo = {
                user: profile,
                result: result,
              };
              res.status(200).send("Admin log in");
            } else {
              res.send("User Unauthorized Access");
            }
          });
        }
      })
      .catch((err) => {
        console.log("Error is ", err.message);
      });
  },

  adminLogout: function (req, res) {
    req.session.destroy();
    return res.status(200).send("logout");
  },
};
