const express = require('express')
const router = express.Router();
const postUser = require('../api/user');
const getUser = require('../api/user')

router.post('/postUser', postUser.postUser);
router.get('/getUser', getUser.getUser);

module.exports = router;