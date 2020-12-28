const mongoose = require("mongoose");

var poolSchema = new mongoose.Schema({
  name: String,
  ownerId: Number,
  areaId: Number,
});

module.exports = mongoose.model("Pool", poolSchema);
