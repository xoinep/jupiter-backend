const mongoose = require("mongoose");

var areaSchema = new mongoose.Schema({
  name: String,
  ownerId: Number,
});

module.exports = mongoose.model("Area", areaSchema);
