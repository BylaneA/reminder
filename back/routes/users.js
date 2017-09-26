const express = require('express');
const router = require('express-promise-router')();

const UsersController = require('../controllers/users');


router.route('/user/add')
	.post(UsersController.addUser);

router.route('/login')
	.post(UsersController.login);

router.route('secret')
	.get(UsersController.secret);

module.exports = router;