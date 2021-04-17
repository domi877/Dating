var express = require('express');
const {
	username,
	password,
	serverName,
	databaseName,
} = require('../../frontend/misc/db');
var router = express.Router();

router.get('/myChats', function (req, res) {
	var sql = require('mssql');

	console.log(username, password, serverName, databaseName);
	// config for your database
	var config = {
		user: username,
		password: password,
		server: serverName,
		database: databaseName,
	};

	// connect to your database
	sql.connect(config, function (err) {
		if (err) console.log(err);

		// create Request object
		var request = new sql.Request();

		let userId = req.query.userId;
		let sender =
			"select * from messages where sender = '" +
			userId +
			"'" +
			"OR receiver = '" +
			userId +
			"'";

		// query to the database and get the records
		request.query(sender, function (err, recordset) {
			if (err) console.log(err);

			// send records as a response
			res.send(recordset);
		});
	});
});

module.exports = router;
