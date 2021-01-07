const mongoose = require("mongoose");

var areaSchema = new mongoose.Schema({
  name: String,
  ownerId: Array,
  location: String,
});

module.exports = mongoose.model("Area", areaSchema);
