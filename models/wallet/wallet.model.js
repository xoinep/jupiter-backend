const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  name: String,
  ownerId: mongoose.SchemaTypes.ObjectId,
  unit: String,
  areaId: mongoose.SchemaTypes.ObjectId,
  balance: Number,
  poolId: mongoose.SchemaTypes.ObjectId,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Wallet', walletSchema);
