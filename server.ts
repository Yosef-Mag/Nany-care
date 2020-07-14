var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 5000

require('dotenv').config(); // to read .env file

const mongoURI = process.env.ATLAS_URI;


// test get req
app.get('/', function (req:any, res:any) {
    res.send('Hello World')
});

// creat a connction to database on atlas
mongoose
    .connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log('DataBase connected to the server'))
    .catch((err:any) => console.log(err))


// starting the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
