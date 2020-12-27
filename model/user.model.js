const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,
  pageId: mongoose.Schema.Types.Mixed,
  instagramFollowers: [String]
});

module.exports = mongoose.model("User", userSchema);
