var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var memoriesSchema = new Schema({
  description: String
});

var Memory = mongoose.model('Memory', memoriesSchema);

module.exports = Memory;
