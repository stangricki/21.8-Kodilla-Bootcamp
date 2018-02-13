const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://stangricki:password-1@ds229388.mlab.com:29388/database-1', {
    useMongoClient: true
});

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.get('/',(req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('Our app is running on http://localhost:' + port);
});