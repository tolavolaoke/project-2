var express = require('express');
var router = express.Router();
var relativeController = require('../controllers/relative.controller');

router.get('/api/relatives', relativeController.getAll);

module.exports = router;
