

var host = process.env.HOST;
var port = process.env.PORT;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(port, host, ()=>{
    console.log('server running on port %s at %s', port, host);
});

