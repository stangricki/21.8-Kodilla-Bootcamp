const express = require('express');

const getInventors = (req, res) => {
	req.db.getInventors
		.find()
		.toArray((err, result) => res.render('views/index', {result}));
}

module.exports = express
	.Router()
	.get('/', getInventors)