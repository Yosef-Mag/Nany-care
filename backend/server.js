var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 5000


require('dotenv').config(); // to read .env file

// test get req
app.get('/', function (req, res) {
    console.log('test')
    res.send('server is a go!')
});

const mongoURI = process.env.ATLAS_URI;

mongoose
    .connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log('DataBase connected to the server'))
    .catch(err => console.log(err))



    //get data from database.
    const list = require('./models/user');
    app.get("http://localhost:5000/nany", function(req, res)  {
        list.find(function(err,n)  {
            
            if(err){
                throw err;
            }

            console.log(res.data)
            res.json(res.data);
        });
        })



app.listen(port, () => {
    console.log(`Server is running on ${port} Visit https://localhost:${port}`)
})