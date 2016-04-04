var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var memoriesSchema = new Schema({
  _id: Number,
  name: String,
  funniest_memory: String,
});

var Memory = mongoose.model('Memory', memoriesSchema);

module.exports = Memory;
