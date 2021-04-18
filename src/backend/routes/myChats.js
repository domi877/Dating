var express = require('express');
const {
	username,
	password,
	serverName,
	databaseName,
} = require('../../frontend/misc/db');
var router = express.Router();

router.get('/', function (req, res) {
	var sql = require('mssql');

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
		let chats =
			"SELECT * FROM chats WHERE user1 = '" +
			userId +
			"'" +
			"OR user2 = '" +
			userId +
			"'";

		// query to the database and get the records
		request.query(chats, function (err, recordset) {
			if (err) console.log(err);

			// send records as a response
			res.send(recordset);
		});
	});
});

module.exports = router;
