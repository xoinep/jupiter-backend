const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
  name: String,
  ownerIds: Array,
  location: String,
  phone: String,
  target: String,
  disable: { type: Boolean, default: false },
});

module.exports = mongoose.model('Area', areaSchema);
