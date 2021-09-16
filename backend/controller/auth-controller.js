const router = require('express').Router();
const loginUser= require('../api/auth');

router.route('/auth/login').post(loginUser._loginUser);

module.exports = router;