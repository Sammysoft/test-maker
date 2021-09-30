const express = require('express');
const router = express.Router();
const  addSubject = require('../api/subject');
const  getSubject = require('../api/subject');
const  addStdSub = require('../api/subject');
const  addStdScore = require('../api/subject');
const getASubject = require('../api/subject');
const { verifyTokenAndAdmin, verifyTokenAndAuth } = require('../middleware/verifyToken')

router.post('/addSubject', addSubject._addSubject);
router.get('/getSubject', getSubject._getSubject);
router.post('/addstdsub/:id', addStdSub._addStdSub);
router.post('/addStdScore/:id', addStdScore._addStdScore);
router.post('/getASubject', verifyTokenAndAuth, getASubject._getASubject)

module.exports = router;
