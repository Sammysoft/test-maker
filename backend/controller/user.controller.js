const express = require('express')
const router = express.Router();
const postUser = require('../api/user');
const getUser = require('../api/user');
const updateUser = require('../api/user');

const { verifyTokenAndAuth } = require('../middleware/verifyToken')


router.post('/postUser', postUser._postUser);
router.get('/getUser', getUser._getUser);
router.post('/updateUser/:id', verifyTokenAndAuth, updateUser._updateUser);


module.exports = router;