const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const localStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('./configuration');
const User = require('./schemas/user');

passport.use(new JwtStrategy({
	jwtFromRequest : ExtractJwt.fromHeader('authorization'),
	secretOrKey : JWT_SECRET
}, async (payload, done) =>{
	try{
		const user = await User.findById(payload.sub);

		if(!user){
			return done(null, false);
		}

		done(null, user);
	}

	catch(error){
		done(error, false);
	}
}));

passport.use(new localStrategy({
	usernameField : 'email'
}, async (email, password, done) =>{
	const user = await User.findOne({$or: [{email}, {email : login}]});

	if(!user){
		return done(null, false);
	}
}))