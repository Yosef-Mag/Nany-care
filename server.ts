var express = require('express');
var app = express();
var port = 5000


app.get('/', function (req:any, res:any) {
    res.send('Hello World')
  })


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});