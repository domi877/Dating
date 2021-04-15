var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	// res.send('respond with a resource');
	res.json([
		{
			uuid: 1,
			username: 'Dominik',
		},
		{
			uuid: 2,
			username: 'Ahmet',
		},
	]);
});

module.exports = router;
