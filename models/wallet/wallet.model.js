const mongoose = require("mongoose");

var walletSchema = new mongoose.Schema({
  name: String,
  ownerId: mongoose.SchemaTypes.ObjectId,
  unit: String,
  poolId: mongoose.SchemaTypes.ObjectId,
  areaId: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("Wallet", walletSchema);
