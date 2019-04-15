const { Router } = require('express');

exports.routes = (router) => {
	router = Router();

	// @route	GET /
	// @desc	Loads form
	router.get('/', async (req, res) => {
		res.render('index');
	});

	// @route	POST /upload
	// @desc	Uploads file to DB
	router.post('/upload', async (req, res) => {
		console.log('uploads');
	});

	return router;
};
