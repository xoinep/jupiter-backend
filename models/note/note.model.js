const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  noteType: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  areaId: mongoose.SchemaTypes.ObjectId,
  poolId: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model('Note', noteSchema);
