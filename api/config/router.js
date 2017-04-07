var express = require('express');
var router = express.Router();
var relativeController = require('../controllers/relative.controller');
// var countryController = require('../controllers/country.controller')

router.get('/api/relatives', relativeController.getAll);
router.post('/api/relatives', relativeController.createRelative);
// router.get('api/countries'), countryController.getAll);
router.patch('/api/relatives/:id', relativeController.updateRelative);

router.get('/api/relatives/:id', relativeController.getRelative);



module.exports = router;
