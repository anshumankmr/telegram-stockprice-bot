'use strict';

const express = require('express');
const { intentHandler } = require('./intent-handler');
const router = express.Router();
router.route('/fulfillment',express.json).post(intentHandler);
router.route('/serverHealth').get( (req, res) => res.send('OK'));

module.exports  = router;