const express = require('express');
const router = express.Router();
const  addSubject = require('../api/subject');
const  getSubject = require('../api/subject');
const  addStdSub = require('../api/subject');
const  addStdScore = require('../api/subject');

router.post('/addSubject', addSubject._addSubject);
router.get('/getSubject', getSubject._getSubject);
router.post('/addstdsub/:id', addStdSub._addStdSub);
router.post('/addStdScore/:id', addStdScore._addStdScore);

module.exports = router;
