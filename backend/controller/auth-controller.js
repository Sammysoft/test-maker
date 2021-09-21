const express = require('express');
const router = express.Router();
const loginUser= require('../api/auth');

router.post('/auth/login', loginUser._loginUser);

module.exports = router;