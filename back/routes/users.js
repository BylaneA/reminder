const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {validateBody, schemas} = require('../controll/users')
const UsersController = require('../controllers/users');


router.route('/signup')
	.post(validateBody(schemas. authschema), UsersController.signup);

router.route('/login')
	.post(UsersController.login);

router.route('/secret')
	.get(passport.authenticate('jwt', { session : false }), UsersController.secret);

module.exports = router;