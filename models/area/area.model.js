const mongoose = require("mongoose");

var areaSchema = new mongoose.Schema({
  name: String,
  ownerId: mongoose.SchemaTypes.ObjectId,
  location: String,
});

module.exports = mongoose.model("Area", areaSchema);
