const mongoose = require("mongoose");

var transactionSchema = new mongoose.Schema({
  walletId: String,
  creatorId: Number,
  createdDate: Date,
  quantity: Number,
  title: String,
  customData: mongoose.SchemaTypes.Mixed,
});

module.exports = mongoose.model("Transaction", transactionSchema);
