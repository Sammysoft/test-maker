const express = require('express');
const router = express.Router();
const addStaff = require('../api/staff')

router.route('/addStaff').post(addStaff._addStaff);

module.exports = router;