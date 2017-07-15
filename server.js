var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./ServerControllers/index');
var port = 3000;
var app = express();

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', index);
app.listen(port, function() {
    console.log('Server started');
})