var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// connect data base and check the connection
var db = mongoose.connection;
db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});

var nanySchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  place: { type: String, required: true },
  kidsNum: { type: Number, required: true },
  cost: { type: String, required: true },
  educationLevel: { type: String, required: true },
  experianceLevel: { type: String, required: true },
  age: { type: Number, required: true },
  workingHour: { type: Number, required: true },
  image: { type: String, required: false },
});

const adminSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const Admin = mongoose.model("Admin", adminSchema);
const Nany = mongoose.model("Nany", nanySchema);
module.exports.Admin = Admin;
module.exports.Nany = Nany;
