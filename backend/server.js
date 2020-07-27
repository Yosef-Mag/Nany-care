
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var items = require("./models/user");
//var config = require("./config");
var Nany = items.Nany;
var User = items.User;
var User = items.User;
// var accountSid = config.accountSid; // Your Account SID from www.twilio.com/console
// var authToken =  config.authToken;   // Your Auth Token from www.twilio.com/console
// var toNum=config.toNum
// var fromNum=config.fromNum
//var twilio = require('twilio');
//var client = new twilio(accountSid, authToken);

const cors = require("cors");
const router = express.Router();
var Nannyhandlers = require("./handlers/Nannyhandlers");
var Adminhandlers = require("./handlers/Adminhandlers");
var userhandlers = require("./handlers/userhandlers");
var app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 5000;

require("dotenv").config(); // to read .env file

// test get req
app.get("/", function (req, res) {
  console.log(config);
  res.send("server is a go!");
});

app.post("/HiringForm", Nannyhandlers.HiringForm);

app.post("/select", userhandlers.selectLocation);

app.post("/signup", userhandlers.userSignUp);
app.get("/logout", userhandlers.userLogOut);
app.post("/login", userhandlers.userLogIn);
app.get("/ret", Nannyhandlers.retrieve);

app.get("/profile", userhandlers.retriveUserByEmail);

app.get("/profilee", userhandlers.retriveUserByToken);
app.post("/api/doPayment/", userhandlers.payment);

app.post("/insert", Adminhandlers.insert);

app.post("/adminSignUp", Adminhandlers.adminSignUp);
app.post("/reserve", Nannyhandlers.reserve);
app.post("/adminLogIn", Adminhandlers.adminLogIn);
app.post("/sendSMS", function(req, res) {
 
client.messages.create({
  body: 'Hi from sura i send this message using Node js ',
  to: toNum ,  // Text this number
  from: fromNum // From a valid Twilio number
})
.then((message) => console.log(message))
.catch((err)=>console.log(err));

 
});

app.post("/select" , function(req, res) { 
  client.messages.create({
    body: 'Hi from sura i send this message using Node js ',
    to: toNum ,  // Text this number
    from: fromNum // From a valid Twilio number
  })
  .then((message) => console.log(message))
  .catch((err)=>console.log(err)); 
  });


app.get("/retrieveAllNanies", Adminhandlers.retriveAllNanies);
app.delete("/deleteSpecificNany", Adminhandlers.deleteSpecificNany);
app.patch("/updateNanyInformation", Adminhandlers.updateNanyInformation);
const mongoURI = process.env.ATLAS_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("DataBase connected to the server"))
  .catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`Server is running on ${port} Visit https://localhost:${port}`);
});