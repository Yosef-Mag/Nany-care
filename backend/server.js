var express = require('express');
var mongoose = require('mongoose');
var items = require('./models/user');
var Nany = items.Nany;
var User = items.User;


var app = express();
var port = process.env.PORT || 5000
console.log(Nany)


require('dotenv').config(); // to read .env file

// test get req
app.get('/', function (req, res) {
    console.log('test')
    res.send('server is a go!')
});

   app.get ('/ret',function getAlldatafromNanySchema(req,res){
      Nany.findOne({}, function(err, nany){
         if(err){
           res.json(err);
         } else {
            console.log(nany)  
             res.send(nany);
         }
       });
     });

const mongoURI = process.env.ATLAS_URI;

mongoose
    .connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log('DataBase connected to the server'))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Server is running on ${port} Visit https://localhost:${port}`)
})