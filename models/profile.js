var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var profileSchema = new Schema({
  description: String
});

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
