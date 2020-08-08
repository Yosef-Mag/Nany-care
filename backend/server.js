var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var items = require("./models/user");
var Nany = items.Nany;
var User = items.User;
var User = items.User;

const cors = require("cors");
// const router = express.Router();
var Nannyhandlers = require("./handlers/Nannyhandlers");
var Adminhandlers = require("./handlers/Adminhandlers");
var userhandlers = require("./handlers/userhandlers");

var app = express();
// app.use(cors({ origin: true, credentials: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var session = require("express-session");
var cookieParser = require("cookie-parser");

app.use(cookieParser("NannyApp"));

app.use(
  session({
    name: "session-id",
    secret: "SuraSession",
  })
);
var port = process.env.PORT || 5000;

require("dotenv").config(); // to read .env file

app.post("/HiringForm", Nannyhandlers.HiringForm);
app.post("/signup", userhandlers.userSignUp);
app.get("/logout", userhandlers.userLogOut);
app.post("/login", userhandlers.userLogIn);
app.get("/ret", Nannyhandlers.retrieve);
app.get("/profile", userhandlers.retriveUserByToken);

app.post("/AddAdmin", Adminhandlers.adminSignUp);
app.post("/adminLogin", Adminhandlers.adminLogIn);
app.post("/AddNanny", Adminhandlers.addNewNanny);
app.post("/reserve", Nannyhandlers.reserve);
app.get("/Admin", Adminhandlers.retriveAllNanies);
app.delete("/delete/:id", Adminhandlers.deleteSpecificNany);
app.patch("/updateNanyInformation", Adminhandlers.updateNanyInformation);
app.post("/send", function (req, res) {
  console.log(req.body);
});
app.post("/sendFeedBack", userhandlers.sendFeedBack);

const mongoURI = process.env.ATLAS_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("DataBase connected to the server"))
  .catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`Server is running on ${port} Visit https://localhost:${port}`);
});

module.exports = app; // for testing
