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

module. exports = {
  createUser: createUser
};
