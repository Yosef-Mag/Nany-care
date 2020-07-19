var express = require('express');
var mongoose = require('mongoose');
var items = require('./models/user');

var Nany = items.Nany;
const cors = require('cors')
var User = items.User;


var app = express();
var port = process.env.PORT || 5000

app.use(cors())

require('dotenv').config(); // to read .env file

// test get req
app.get("/", function (req, res) {
  console.log("test");
  res.send("server is a go!");
});

// get data from database    
app.get ('/ret',function getAlldatafromNanySchema(req,res){
      Nany.find({}, function(err, nany){
         if(err){
           res.json(err);
         } else {  
             res.json(nany);
         }
       });
     });

     app.post ('/signup',function (req,res){
      const userData = {
        name : req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNumer: req.body.phoneNumer

    }
        User.findOne({
            email: req.body.email
        })
        .then(user => {
            if(!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash;
                    User.create(userData)
                    .then(user => {
                        res.json({status: user.email + 'added'})
                    })
                    .catch(err=> {
                        res.send('error: ' + err)
                    })
                })
            } else {
                        res.json({error: 'email already exist'})
            }
        })
        .catch(res => {
            res.send('error: ' + err)
        })
     });




app.post('/Home', )


const mongoURI = process.env.ATLAS_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("DataBase connected to the server"))
  .catch((err) => console.log(err));




app.listen(port, () => {
  console.log(`Server is running on ${port} Visit https://localhost:${port}`);
});
