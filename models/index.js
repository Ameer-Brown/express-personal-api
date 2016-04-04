var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

module.exports.Profile = require("./memories.js");
module.exports.Memory = require("./memories.js.");
