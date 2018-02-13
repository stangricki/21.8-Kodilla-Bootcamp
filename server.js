var express = require('express');
var app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://stangricki:password-1@ds229388.mlab.com:29388/database-1', {
    useMongoClient: true
});

var port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});