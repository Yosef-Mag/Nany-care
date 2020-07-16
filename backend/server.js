var express = require('express');
var mongoose = require('mongoose');
var models = require('./models/user');

var app = express();
var port = process.env.PORT || 8000


require('dotenv').config(); // to read .env file

// test get req
app.get('/', function (req, res) {
    console.log('test')
    res.send('server is a go!')
});
console.log(Nany)
console.log(User)
    
app.getAlldatafromNanySchema ('/ret',function(req,res){
      models.find({}, function(err, user){
         //console.log('user')  
         if(err){
           res.json(err);
         } else {
           res.json(user);
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