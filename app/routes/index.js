'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router.get('/', controller.index);
router.post('/', controller.save);
router.put('/', controller.update);

module.exports = router;
