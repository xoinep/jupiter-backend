const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  walletId: mongoose.SchemaTypes.ObjectId,
  creatorId: mongoose.SchemaTypes.ObjectId,
  quantity: Number,
  title: String,
  customData: mongoose.SchemaTypes.Mixed,
},{ timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
