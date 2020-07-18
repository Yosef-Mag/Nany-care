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
app.get('/', function (req, res) {
    console.log('test')
    res.send('server is a go!')
});


//    app.get ('/ret',function getAlldatafromNanySchema(req,res){
//       Nany.findOne({}, function(err, nany){
//          if(err){
//            res.json(err);
//          } else {
//             console.log(nany)  
//              res.send(nany);
//          }
//        });
//      });

// get the selection based on place category  from database    
app.get ('/ret',function getAlldatafromNanySchema(req,res){
      Nany.find({"place": "amman"}, function(err, nany){
         if(err){
           res.json(err);
         } else {
            console.log(req)  
             res.json(nany);
         }
       });
     });
app.post('/Home', )


const mongoURI = process.env.ATLAS_URI;

mongoose
    .connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log('DataBase connected to the server'))
    .catch(err => console.log(err))



    //get data from database.
    const list = require('./models/user');
    app.get('/ret', function(req, res)  {
        list.find(function(err,n)  {
            
            if(err){
                throw err;
            }

            console.log(n)
            res.json(n);
        });
        })



app.listen(port, () => {
    console.log(`Server is running on ${port} Visit https://localhost:${port}`)
})