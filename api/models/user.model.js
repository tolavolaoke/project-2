var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  firebaseUserId: {
    type: String
  },
  relatives: []
});
module.exports = mongoose.model('User', UserSchema);
