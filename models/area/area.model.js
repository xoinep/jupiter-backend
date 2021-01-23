const mongoose = require("mongoose");

const areaSchema = new mongoose.Schema({
  name: String,
  ownerIds: Array,
  location: String,
  phone: String,
  target: String
});

module.exports = mongoose.model("Area", areaSchema);
