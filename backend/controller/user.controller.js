const express = require('express')
const router = express.Router();
const postUser = require('../api/user');
const getUser = require('../api/user');


router.post('/postUser', postUser._postUser);
router.get('/getUser', getUser._getUser);


module.exports = router;