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
		multipleStatements: true,
	};

	// connect to your database
	sql.connect(config, function (err) {
		if (err) console.error(err);

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

		let temp = [];

		// query to the database and get the records
		request
			.query(chats)
			.then((recordset) => {
				return recordset;
			})
			.then((recordset) => {
				let usersChats = [];
				return recordset.recordset.forEach((chat) => {
					let otherPersonId =
						userId.toString() == chat.user1.toString()
							? chat.user2
							: chat.user1;
					let otherPersonDetail =
						"SELECT firstName, lastName FROM users WHERE userID = '" +
						otherPersonId +
						"'";
					let chatWithPerson =
						"SELECT * FROM messages WHERE chatID = '" +
						chat.uuid +
						"' ORDER BY time DESC";
					temp.push(
						request
							.query(chatWithPerson + ';' + otherPersonDetail)
							.then((response) => {
								if (err) console.error(err);
								let otherPerson = response.recordsets[1][0];
								let lastMessage = response.recordset[0];
								chat.lastMessage = lastMessage;
								chat.otherPerson = otherPerson;
								usersChats.push(chat);
								return usersChats;
							})
							.then((obj) => {
								return obj;
							})
							.catch((err) => {
								console.error(err);
							})
					);
				});
			})
			.then(() => {
				Promise.all(temp).then((elem) => {
					console.debug('elem', { elem: elem[0] });
					res.send(elem[0]);
				});
			})
			.catch((err) => {
				console.error(err);
			});
	});
});

module.exports = router;
