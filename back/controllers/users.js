const user = require('../schemas/user')

module.exports = {
	signup: (req, res, next) => {
		console.log('signup is ok');

		const {login, email, password} = req.value.body;
		const newUser = new user({login, email, password})
		newUser.save();
	},

	login: (req, res, next) => {
		console.log('login is ok');
	},

	secret: (req, res, next) => {
		console.log('secret is ok');
	}

}