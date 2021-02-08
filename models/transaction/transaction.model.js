const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  walletId: mongoose.SchemaTypes.ObjectId,
  creatorId: mongoose.SchemaTypes.ObjectId,
  quantity: Number,
  unit: String,
  costPerUnit: Number,
  customData: mongoose.SchemaTypes.Mixed,
  name: String,
  createdAt: { type: Date, default: Date.now }
},{ timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
