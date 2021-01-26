const mongoose = require("mongoose");

const poolSchema = new mongoose.Schema({
  name: String,
  areaId: mongoose.SchemaTypes.ObjectId,
  target: String,
  unit: String,
});

module.exports = mongoose.model("Pool", poolSchema);
