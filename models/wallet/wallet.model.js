const mongoose = require("mongoose");

var walletSchema = new mongoose.Schema({
  name: String,
  ownerId: Number,
  unit: String,
  poolId: Number,
});

module.exports = mongoose.model("Wallet", walletSchema);
