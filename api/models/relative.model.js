
var mongoose = require('mongoose');

var RelativeSchema = mongoose.Schema({
  firebaseUserId: String,
  firstName: String,
  lastName: String,
  relation: String,
  location: String
});

module.exports = mongoose.model('Relative', RelativeSchema);
