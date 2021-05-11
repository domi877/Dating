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
		if (err) console.error(err);

		// create Request object
		var request = new sql.Request();

		let chatId = req.query.chatId;
		let messages =
			"SELECT * FROM messages WHERE chatID ='" +
			chatId +
			"' ORDER BY time ASC";

		// query to the database and get the records
		request.query(messages, function (err, recordset) {
			if (err) console.error(err);

			// send records as a response
			res.send(recordset);
		});
	});
});

router.post('/send', function (req, res) {
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
		if (err) console.error(err);

		// create Request object
		var request = new sql.Request();

		let chatID = req.query.chatID;
		let sender = req.query.sender;
		let receiver = req.query.receiver;
		let value = req.query.value;
		let time = new Date().toISOString();

		let messages =
			"INSERT INTO messages (chatID, sender, receiver, value, time) VALUES (convert(uniqueidentifier, '" +
			chatID +
			"'), convert(uniqueidentifier, '" +
			sender +
			"'), convert(uniqueidentifier, '" +
			receiver +
			"'), '" +
			value +
			"', convert(datetime, '" +
			time +
			"'))";

		// query to the database and get the records
		request.query(messages, function (err, recordset) {
			if (err) {
				console.error(err);
				res.sendStatus(500);
			}
			// send records as a response
			res.sendStatus(200);
		});
	});
});

module.exports = router;
