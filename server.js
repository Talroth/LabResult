var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

 var index = require('./ClientControllers/index');
 var customerFile = require('./ClientControllers/customerFile');
var port = 3000;
var app = express();

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, './Client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/', customerFile);
app.listen(port, function() {
    console.log('Server started');
})