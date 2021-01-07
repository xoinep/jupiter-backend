const mongoose = require("mongoose");

var poolSchema = new mongoose.Schema({
  name: String,
  ownerId: mongoose.SchemaTypes.ObjectId,
  areaId: mongoose.SchemaTypes.ObjectId,
  target: String,
});

module.exports = mongoose.model("Pool", poolSchema);
