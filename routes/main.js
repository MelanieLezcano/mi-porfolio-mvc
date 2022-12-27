let {main} = require('../controllers/mainController');
const express = require('express');
const router = express.Router();

router.get('/', main);

module.exports = router;