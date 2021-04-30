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
		request
			.query(chats)
			.then((recordset) => {
				recordset.recordset.forEach((chat) => {
					let otherPersonId =
						userId.toString() == chat.user1.toString()
							? chat.user2
							: chat.user1;
					let otherPerson =
						"SELECT * FROM messages WHERE chatID = '" +
						chat.uuid +
						"' ORDER BY time DESC";

					request.query(otherPerson).then((response) => {
						if (err) console.err(err);

						let lastMessage = response.recordset[0];
						chat.lastMessage = lastMessage;
						console.log('doSomethinf!');
					});
				});
				Promise.all(recordset.recordset).then(() => {
					console.log('inner');
					console.log(recordset);
				});
			})
			.then((recordset) => {
				console.log(recordset);
				// send records as a response
				res.send(recordset);
			})
			.catch((err) => {
				console.err(err);
			});
	});
});

module.exports = router;
