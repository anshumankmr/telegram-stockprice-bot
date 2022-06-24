'use strict';

const express = require('express');
const { intentMapper } = require('./intent-handler');
const router = express.Router();
router.route('/',express.json).post(intentMapper);
router.route('/serverHealth').get( (req, res) => res.send('OK'));

module.exports  = router;