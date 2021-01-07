const mongoose = require("mongoose");

var transactionSchema = new mongoose.Schema({
  walletId: mongoose.SchemaTypes.ObjectId,
  creatorId: mongoose.SchemaTypes.ObjectId,
  createdDate: Date,
  quantity: Number,
  title: String,
  customData: mongoose.SchemaTypes.Mixed,
});

module.exports = mongoose.model("Transaction", transactionSchema);
