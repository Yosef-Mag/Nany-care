const mailer = require('nodemailer');
var bodyParser = require('body-parser');
var express = require("express");
var app = express();
app.use(bodyParser.json());

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

  module.exports = {sendEmail}