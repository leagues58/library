var express = require('express');

var app = express();

app.get('/', function(req, res){
    console.log('get request');
    res.send('the library says hi');
});


app.listen(3000, function(){
    console.log('listening on port 3000');
});