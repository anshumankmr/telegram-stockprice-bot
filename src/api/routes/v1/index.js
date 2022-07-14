'use strict';

const express = require('express');
const { wbhkController } = require('../../controllers/webhook.controller');
const router = express.Router();
router.route('/fulfillment',express.json).post(wbhkController);
router.route('/serverHealth').get( (req, res) => res.send('OK'));

module.exports  = router;