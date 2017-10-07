const db = require("../server/model");

module.exports = {
	create: function(req, res) {
		db.User
		  .create(req.body.username)
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	}
};