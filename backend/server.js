var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var items = require("./models/user");
var jwt = require("jsonwebtoken");
const cors = require('cors')
const sendEmail = require('./sendform')


var bcrypt = require("bcrypt");
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var saltRounds = 10;
var Nany = items.Nany;
var User = items.User;
var port = process.env.PORT || 5000;


// this route is protected with token
// app.use("/api/dashboard", verifyToken, dashboardRoutes);
// console.log(items);
var items = require("./models/user");
require("dotenv").config(); // to read .env file
// test get req
app.get("/", function (req, res) {
  console.log("test");
  res.send("server is a go!");
});

app.post('/HiringForm', (req, res) => {
  console.log(req.body)
  const sendEmail = ( req, res) => {
    let transporter = nodemailer.createTransport({
      service : 'gmail',
      auth : {
        user : 'nannyHirring@gmail.com',
        pass : 'nannyHirring12345'
      }
    });
  
    let mailOptions = {
      from: 'nannyHirring@gmail.com' ,
      to: 'nannycarecom@gmail.com',
      subject: 'Hiring form',
      text: 'Name : ' + req.body.Name + '\n Age : ' + req.body.Age +  /* '\n Email : ' + req.body.Email + */
            '\n Phone number  : ' + req.body.PhoneNumber + '\n Number of kids i canHandel : ' + req.body.NumberOfKidsYouCanHandel +
            '\n Place : ' + req.body.Place + '\n EducationLevel : ' + req.body.EducationLevel + 
            '\n How manny hours i can work a day : ' + req.body.HowMannyHoursYouCanWorkADay + 
            '\n Experens level : ' + req.body.ExperensLevel
    };
  
    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
          res.status(400).json('Error:'+err)
      }
      res.json("Email send");
    });
  }
})

app.post("/signup", function (req, res) {
  console.log(req);
  var newUser = new User({
    email: req.body.Email,
    password: req.body.password,
    name: req.body.Name,
    phoneNumber: req.body.PhoneNumber,
  });

  User.findOne({ email: newUser.email })
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
                res.send("User authenticated");
              })
              .catch((err) => {
                console.log("Error is ", err.message);
              });
          }
        });
      } else {
        res.send("User already exists...");
      }
    })
    .catch((err) => {
      console.log("Error is", err.message);
    });
});
app.get("/logout", function (req, res) {
  res.status(200).send({ auth: false, token: null });
});
app.post("/login", function (req, res) {
  console.log(req);
  var newUser = {};
  newUser.email = req.body.Email;
  newUser.password = req.body.password;
  User.findOne({ email: newUser.email })
    .then((profile) => {
      if (!profile) {
        console.log("NOT");
        res.send("User not exist");
      } else {
        bcrypt.compare(newUser.password, profile.password, function (
          err,
          result
        ) {
          if (err) {
            return res.status(401).json({
              message: "Auth failed",
              token: token,
            });
            console.log("Error is", err.message);
          } else if (result == true) {
            // create token
            const token = jwt.sign(
              {
                email: profile.email,
                password: profile.id,
              },
              process.env.JWT_KEY,
              {
                expiresIn: "1h",
              }
            );
            res.status(200).json({
              message: "Auth granted, welcome!",
              token: token,
            });
            console.log(token);
          } else {
            res.send("User Unauthorized Access");
          }
        });
      }
    })
    .catch((err) => {
      console.log("Error is ", err.message);
    });
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
  console.log(req.header);
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
app.get("/profilee", (req, res) => {
  User.find({ email: "a@a.a" }, function (err, user) {
    if (err) {
      res.json(err);
    } else {
      console.log(user[0]);
      res.json(user[0]);
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
// middleware to validate token
const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next(); // to continue the flow
  } catch (err) {
    res.status(400).json({ error: "Token is not valid" });
  }
};
module.exports = verifyToken;
