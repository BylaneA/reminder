const express = require('express');
const router = require('express-promise-router')();

const {validateBody, schemas} = require('../schemas/users')
const UsersController = require('../controllers/users');


router.route('/signup')
	.post(validateBody(schemas. authschema), UsersController.signup);

router.route('/login')
	.post(UsersController.login);

router.route('secret')
	.get(UsersController.secret);

module.exports = router;