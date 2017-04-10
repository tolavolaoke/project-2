var User = require('../models/user.model');
// var Relative = require('../models/relative.model');

function createUser(req, res) {
  var user = new User();
  console.log('Created user with a firebase id');
  user.firebaseUserId = req.headers.firebaseuserid;
  user.save(function(error) {
    if (error) return res.json(error);
    res.json({user: user});
  });
}
function getUser(req, res) {
  var firebaseUserId = req.params.firebaseUserId;

  User.findOne({ firebaseUserId: firebaseUserId }, function (error, user) {
    if(error) return res.json(error);
    res.json({user: user});
  });
}

function getRelatives(req, res) {
  var userId = req.params.userId;
  User.findOne({ firebaseUserId: userId }, function(error, user) {
    if(error) return res.json(error);
    res.json({ relatives: user.relatives });
  });
}

function updateRelatives(req, res) {
  var firebaseUserId = req.params.firebaseUserId;
  var updatedRelatives = req.body;
  User.findOne({ firebaseUserId: firebaseUserId }, function(error, user) {
    if(error) return res.json(error);
    user.relatives = updatedRelatives;
    user.save(function(error) {
      if (error) return res.json(error);
      res.json({ message: 'successfully updated relatives' });
    });
  });
}

module. exports = {
  createUser: createUser,
  updateRelatives: updateRelatives,
  getUser: getUser,
  getRelatives: getRelatives
};
