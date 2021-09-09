const express = require('express')
const router = express.Router();
const postUser = require('../api/postUser');

router.route('/postUser', postUser.postUser);

module.exports = router;