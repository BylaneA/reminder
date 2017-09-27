const JWT = require('jsonwebtoken')
const user = require('../schemas/user')
const { JWT_SECRET } = require('../configuration')

signToken = user =>{
	return JWT.sign({
		iss : 'reminder',
		sub : user.id,
		iat : new Date().getTime(),
		exp : new Date().setTime(new Date().getTime() + 1)
	}, JWT_SECRET);
}

module.exports = {
	signup: async (req, res, next) => {
		const {login, email, password} = req.value.body;
		const userCheckLogin = await user.findOne({ login });
		const userCheckMail = await user.findOne({ email });

		if(userCheckMail){
			return res.status(403).json({ error : 'email déjà utilisé' });
		}

		if(userCheckLogin){
			return res.status(403).json({ error : 'nom d\'utilisateur déjà utilisé' });
		}

		const newUser = new user({login, email, password});
		newUser.save();

		const token = signToken(newUser);

		res.status(200).json({ token });
	},

	login: async (req, res, next) => {
		console.log('login is ok');
	},

	secret: async (req, res, next) => {
		console.log('secret is ok');
	}

}