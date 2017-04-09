var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');
var relativeController = require('../controllers/relative.controller');


router.get('/api/relatives', relativeController.getAll);
router.post('/api/relatives', relativeController.createRelative);
router.patch('/api/relatives/:id', relativeController.updateRelative);
router.get('/api/relatives/:id', relativeController.getRelative);
// add delete router
router.post('/users', userController.createUser);


module.exports = router;
